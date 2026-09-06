# Style Tiles — Upload feature

## Agent implementation plan

**Audience:** an AI coding agent with the same capabilities as this repo’s usual agent: read/edit/create files, run CLI commands, search the tree. Not a human dashboard tutorial.

**How to run this document:** execute the next incomplete step, then stop for review if blocked by a missing secret. Do not recreate the Blob store. Do not ask the operator to click around in the Vercel UI. Do not publish submissions into `Designs/` or `catalog-data.js`.

**Operator status:** Steps 1 and 2 are already implemented in the repo. Blob storage is already created. Store id and webhook public key already live in `env/env.local`. There is **nothing else** the operator must do in the Vercel dashboard before you start Step 3.

---

## Repo facts (read these; do not rediscover by wandering)

| Fact | Value |
|---|---|
| Site type | Vanilla HTML/CSS/JS catalog. No Next.js, no existing `package.json`. |
| Home | `index.html` + `app.js` + `styles.css` |
| Upload entry | Hero CTA **after Search**, both desktop `.hero-cta-row` and mobile `.hero-mobile`. Links to `upload.html`. |
| Client form | `upload.html` + `upload.js` |
| Form submit today | `executeUploadSubmission()` in `upload.js` is a **fake progress timer**. Replace it in Step 5. It does not talk to Blob yet. |
| Blob env file | `env/env.local` already contains `BLOB_STORE_ID` and `BLOB_WEBHOOK_PUBLIC_KEY`. |
| Catalog publish ritual | Unrelated. `Agent/agent.md` is for curating a tile after a human says yes. |

**Product rules that stay true while you code:**

- Intake mailbox only. Files go to Vercel Blob under `submissions/`. They do not become catalog tiles.
- One `.html` / `.htm` file, max 5 MB.
- No accounts. Optional curator passphrase if `UPLOAD_PASSPHRASE` is set in env.
- Do not iframe or execute submitted HTML on the public site.
- Keep Style Tiles chrome and copy already on `upload.html`.

---

## Already done (do not redo)

### Step 1 — Hero entry — DONE

- Desktop: `index.html` `.hero-cta-row` — Browse → Search → Upload.
- Mobile: `index.html` `.hero-mobile` also has the Upload control.
- Target: `upload.html`.

### Step 2 — Client Upload Form — DONE (UI only)

- Page: `upload.html`
- Logic: `upload.js`
- Fields: file (required), name, design name, note, passphrase.
- States: rest, file chosen, sending, received, problem.
- Client-side type/size checks already exist (`MAX_UPLOAD_FILE_SIZE`, html-only).
- **Not done:** real upload. `executeUploadSubmission()` still simulates success.

### Blob store — DONE (operator, outside the agent)

- Store exists and is connected to this project.
- `env/env.local` has `BLOB_STORE_ID` and `BLOB_WEBHOOK_PUBLIC_KEY`.
- You do **not** create a store, open Storage in the dashboard, or run `vercel env pull` as a blocking step.

---

## Credential rules

Read `env/env.local`. Never print secret values into chat, commits, or this plan.

| Variable | Already present? | Who uses it |
|---|---|---|
| `BLOB_STORE_ID` | Yes | Server Blob SDK (OIDC / store identity) |
| `BLOB_WEBHOOK_PUBLIC_KEY` | Yes | Verifying Blob’s “upload finished” callback |
| `BLOB_READ_WRITE_TOKEN` | **No** | Only needed for classic `handleUpload`. **Do not require the operator to add it.** Use `handleUploadPresigned` + `uploadPresigned` instead (OIDC + store id). |
| `VERCEL_OIDC_TOKEN` | Injected by Vercel at runtime / `vercel dev` | Server. Do not invent one. |
| `UPLOAD_PASSPHRASE` | **No** | You may add this key to `env/env.local` (and `.env.local`) if missing. If unset, skip passphrase checks; if set, require a match. |

If a command fails because the local machine is not logged into Vercel, run `vercel login` / `vercel link` via CLI. That is still agent-doable. Do not fall back to “go confirm the store in the dashboard.”

---

## Architecture you will implement

Static site + one Vercel Function. Browser talks to the function only for a short-lived upload grant; the HTML file goes **browser → Blob**, not through the function body.

```
upload.js  --POST /api/upload-->  api/upload.js (Token Route Handler)
           <-- grant (presigned) --
upload.js  --PUT file---------->  Vercel Blob  pathname submissions/…
Blob       --callback---------->  api/upload.js  (onUploadCompleted; works on Preview/Production, not raw localhost)
```

Pathname pattern (handler decides this, never the browser):

```
submissions/YYYY-MM-DD/<sanitized-original-name>
```

Always `addRandomSuffix: true`. Access: `private`.

---

## Step 3 — Wire Blob into the repo (agent-executable)

This step **replaces** the old dashboard “confirm the cabinet” step. The store already exists. You only add the project files the rest of the feature needs.

**Do:**

1. Create root `package.json` if missing. Name it for this site. `"type"` may be `"module"` if you write ESM functions; otherwise use CJS consistently.
2. Install `@vercel/blob` with the package manager available (`npm i @vercel/blob`).
3. Add `.gitignore` entries if missing: `node_modules/`, `.env`, `.env.local`, `.vercel/`. Do **not** gitignore `env/env.local` unless it is already ignored — the operator placed keys there on purpose. Still never echo those values.
4. Create root `.env.local` for `vercel dev` by copying **keys** from `env/env.local` (same `BLOB_STORE_ID`, same `BLOB_WEBHOOK_PUBLIC_KEY`). Vercel Functions read `.env.local` at the project root, not `env/env.local`.
5. Optionally add `UPLOAD_PASSPHRASE` to both env files if you want the existing form field enforced. Generate a random passphrase and store it; do not put it in HTML or `upload.js`.
6. Add `vercel.json` only if needed so `/api/upload` is a Function and static files (`index.html`, `upload.html`, `Designs/`, etc.) still serve as-is. Prefer Vercel’s default: a file at `api/upload.js` becomes `POST /api/upload`.
7. Define shared constants in one server file (or at the top of the handler): max size `5 * 1024 * 1024`, allowed types `text/html`, prefix `submissions/`.

**Do not:**

- Create a new Blob store.
- Call this step done by “looking up the store in the dashboard.”
- Convert the whole catalog to Next.js.
- Commit `node_modules`.

**Done when:**

- `package.json` lists `@vercel/blob`.
- Root `.env.local` exists with the Blob keys (values sourced from `env/env.local`).
- `api/` is ready to receive the handler in Step 4 (empty file allowed only if Step 4 happens in the same session — prefer implementing Step 4 immediately after).

---

## Step 4 — Token Route Handler

**Create** `api/upload.js` (or `api/upload.ts` if you added a TS setup; JS is enough).

Use **`handleUploadPresigned`** from `@vercel/blob/client` — not `handleUpload` — because this project has `BLOB_STORE_ID` + `BLOB_WEBHOOK_PUBLIC_KEY` and **does not** have `BLOB_READ_WRITE_TOKEN`.

The function must:

1. Export a `POST` handler compatible with Vercel Functions (Web `Request`/`Response` is fine).
2. Parse JSON body and pass it to `handleUploadPresigned({ body, request, onBeforeGenerateToken, onUploadCompleted })`.
3. **`onBeforeGenerateToken`:**
   - If `process.env.UPLOAD_PASSPHRASE` is non-empty, require the client payload to include the same passphrase; otherwise throw.
   - Allow only `text/html` (and `application/xhtml+xml` if you want). Reject everything else.
   - `maximumSizeInBytes: 5 * 1024 * 1024`
   - `addRandomSuffix: true`
   - `access: 'private'` (or whatever the current presigned helper expects — match the installed SDK).
   - Force pathname under `submissions/<yyyy-mm-dd>/` plus a sanitized original filename. Ignore any client-supplied folder.
   - Put optional `name`, `designName`, `note` from `clientPayload` into `tokenPayload` (JSON string) for the completion log.
4. **`onUploadCompleted`:**
   - `console.log` pathname, url, size, and tokenPayload fields.
   - Do not write into `catalog-data.js`.
   - Return success so Blob does not retry forever. On error, still return a 400 JSON `{ error: message }` as in Vercel’s examples.
5. Catch errors and return HTTP 400 JSON. Do not leak stack traces or env values.

**Done when:** `api/upload.js` exists, uses `handleUploadPresigned`, enforces HTML + 5 MB + `submissions/` + random suffix, and optionally checks `UPLOAD_PASSPHRASE`.

---

## Step 5 — Wire the existing Client Upload Form to the handler

**Edit** `upload.js` only where submit happens. Keep the existing states, dropzone, alerts, and receipt.

Replace `executeUploadSubmission()` so that it:

1. Builds `clientPayload` as a JSON string: `{ passphrase, name, designName, note }` (whatever the form already collects).
2. Calls **`uploadPresigned`** from `@vercel/blob/client` in the **browser**.
   - This repo has no bundler. Load the client with a dynamic ESM import from a trusted CDN, e.g. `https://esm.sh/@vercel/blob/client`, **or** vendor a small copy if CDN import fails. Do not invent a full Vite/Next app.
   - Arguments: pathname (filename only; server will prefix), the `File`, `{ access: 'private', handleUploadUrl: '/api/upload', clientPayload, onUploadProgress }` matching the installed client API.
3. Drive the existing progress UI from `onUploadProgress` instead of the random `setInterval`.
4. On success: `renderReceipt(...)` as today. Do **not** display the private Blob URL as a public catalog link. Filename on the receipt is enough.
5. On failure: map errors onto the existing problem alert (wrong type, too large, bad passphrase, network). Re-enable the form. Do not pretend success.

Keep client-side checks as a first filter; the handler is the real enforcement.

**Done when:** Submit no longer uses a fake timer. It POSTs to `/api/upload` then uploads the File to Blob.

---

## Step 6 — Receipts, errors, env plumbing (agent-executable)

The copy on `upload.html` is already written. This step is **make every real failure hit that UI**.

- Confirm no-file, non-html, oversized, and (if passphrase set) wrong-passphrase all use `showProblemAlert` / existing messages.
- If the CDN import or `/api/upload` is missing, show the generic network message, not an uncaught exception.
- Ensure `upload.html` does not need a build step beyond `vercel dev`.

**Done when:** you can reason through each error path in `upload.js` and they all call the existing alert helper.

---

## Step 7 — Owner intake (do not build a dashboard)

Do **not** implement an on-site inbox.

After a successful upload, the operator finds files in the Blob store under `submissions/`. If you can run the Vercel Blob CLI with existing credentials, you may verify with:

```
npx vercel blob list --prefix submissions/
```

If that CLI is not authenticated, skip it. Logging in `onUploadCompleted` is enough for v1.

Publishing a submission as a Style Tile is **out of this feature**. A later human/agent follows `Agent/agent.md`.

**Done when:** completion handler logs enough to identify the file; no catalog writes.

---

## Step 8 — Guardrails (encode in code, not a memo)

Already required in Steps 4–5. Recheck:

- Handler rejects non-HTML and oversize even if the client is bypassed.
- `addRandomSuffix: true`
- Private access
- No catalog iframe of submissions
- Passphrase only if `UPLOAD_PASSPHRASE` is set

**Done when:** those checks are in `api/upload.js`, not only in `upload.js`.

---

## Step 9 — Visual pass

Steps 1–2 already matched catalog chrome. After wiring:

- Do not restyle `upload.html` into a generic SDK demo.
- Keep hero order: Browse → Search → Upload.
- Phone: form stacked, Send full width, labels wrap.
- Theme bootstrap on `upload.html` must keep working (same `localStorage` theme as `index.html`).

**Done when:** you did not regress `index.html` / `upload.html` chrome while adding the API.

---

## Step 10 — Prove the path with CLI (no dashboard required)

From the project root:

1. `npx vercel dev` (or `vercel dev`) so `/api/upload` and `upload.html` run together.
2. Open the local URL. Click hero **Upload your own design files**.
3. Submit a tiny valid `.html` fixture (you may create `Agent/fixtures/sample-submission.html` as a one-screen file).
4. Confirm the receipt view, not the fake instant success.
5. If Blob CLI works: list `submissions/` and confirm a new object.
6. Negative tests against the running app: `.png`, empty file input, file > 5 MB (or a mocked size check), wrong passphrase if env is set.

`onUploadCompleted` may not fire on localhost without a tunnel. **Do not block on that.** File presence in Blob or a successful `uploadPresigned` return is enough locally.

**Done when:** happy path returns a receipt and is not the old `setInterval` simulation.

---

## File touch list (expected)

| Path | Action |
|---|---|
| `package.json` | Create |
| `package-lock.json` / lockfile | Create via install |
| `.gitignore` | Update |
| `.env.local` | Create from `env/env.local` (root, for Vercel) |
| `env/env.local` | Read; optionally append `UPLOAD_PASSPHRASE` only |
| `api/upload.js` | Create — Token Route Handler |
| `vercel.json` | Create only if defaults are not enough |
| `upload.js` | Edit — replace simulated submit |
| `upload.html` | Edit only if the form must pass `clientPayload` fields already present |
| `index.html` | Do not move the hero button |
| `catalog-data.js` / `Designs/*` | Do not touch |

---

## Out of scope

- New Blob store or dashboard screenshots
- Next.js migration
- Auto-publish to the catalog
- Accounts, email alerts, curator inbox UI
- Requiring `BLOB_READ_WRITE_TOKEN` from the operator

---

## Checklist

- [x] **1.** Hero Upload button next to Search (`index.html`)
- [x] **2.** Client Upload Form UI (`upload.html`, `upload.js`) — still simulated submit
- [x] **3.** Repo wiring: `package.json`, `@vercel/blob`, root `.env.local` from `env/env.local`, gitignore
- [x] **4.** Token Route Handler `api/upload.js` with `handleUploadPresigned`
- [x] **5.** Replace `executeUploadSubmission()` with `uploadPresigned` → `/api/upload`
- [x] **6.** Real errors hit existing alerts
- [ ] **7.** Completion log only; no catalog writes
- [ ] **8.** Server-side HTML / size / prefix / suffix / private
- [ ] **9.** No chrome regressions
- [ ] **10.** `vercel dev` happy path + negative tests

---

## One-line reminder for the next agent

Blob already exists; keys are in `env/env.local`. Copy them to `.env.local`, add `api/upload.js` with **presigned** client uploads, and replace the fake timer in `upload.js`. Do not open the Vercel dashboard. Do not add submissions to the catalog.
