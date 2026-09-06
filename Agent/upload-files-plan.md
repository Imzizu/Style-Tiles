# Style Tiles — Upload Your Own Design Files

## Product Requirements Document (PRD)

**Status:** Planning only. This document describes what to build and in what order. It does not change the live site.

**Audience:** Anyone who needs to understand the feature without reading code — product, design, and the person who will later implement it.

**Related Vercel pieces this plan covers, in order:**

1. The **“Upload your own design files”** entry on the site
2. The **Client Upload Form** (where a visitor picks and sends an HTML file)
3. The **cloud filing cabinet** (Vercel Blob storage)
4. The **Token Route Handler** (the permission desk that allows a safe upload)
5. What happens after a file arrives, and how you receive it

---

## 1. Why this exists

Style Tiles is a curated catalog of standalone HTML design pages. Today, the only way a new design gets onto the site is if you (or an agent following `agent.md`) add it by hand.

You want a second path: **visitors can send you their own HTML design files**, and those files land in **Vercel Blob** — a private cloud cabinet attached to this project — so you can review them on your own time.

This is an **intake mailbox**, not an automatic publishing pipeline. A submitted file does not appear in the catalog until you choose to turn it into a real Style Tile.

---

## 2. What we are building (one sentence)

A public “Upload your own design files” path on Style Tiles where a visitor can send an HTML design file straight into your Vercel Blob cabinet, after a short permission check, and then see a clear “we got it” confirmation.

---

## 3. Who it is for

| Person | What they need |
|---|---|
| **Visitor / designer** | A simple, trustworthy way to send an HTML design without emailing you or opening a GitHub pull request. |
| **You (site owner)** | A reliable inbox of submitted HTML files, stored off the website itself, that you can open, download, and decide whether to curate. |
| **The catalog audience** | No change. The public grid stays curated. Uploaded files are not mixed into Browse until you publish them. |

There are no visitor accounts on Style Tiles today. Version 1 should work **without creating logins**.

---

## 4. What this is not (version 1)

- Not a public “community catalog” of unreviewed work.
- Not a replacement for the existing `Designs/` pages or `catalog-data.js` publishing flow.
- Not a place to upload images, videos, zip archives, or markdown-only files (HTML design pages only).
- Not an editor. Visitors send a finished file; they do not build a tile on the site.
- Not live preview of the uploaded page inside the catalog iframe.
- Not automatic conversion of a submission into a numbered `TILE-NNN` card.

If a later version should auto-publish, live-preview, or accept extra assets, that is a separate product decision.

---

## 5. How it should feel

The rest of Style Tiles feels like an archival registry: deliberate, tactile, museum-label language, not a generic SaaS dashboard.

The upload path should match that tone:

- Label it **“Upload your own design files”**, not “Submit a ticket” or “Dropzone.”
- It should feel like handing a printed spec over a drafting-room counter.
- Short copy. One job. No account wall.
- Success should feel like a stamped receipt: we received the file, here is what we will do next.
- Failure should be specific and human (“That file is too large” / “Please send an `.html` file”), never a blank error.

On a phone, the form must still be usable: large tap targets, no sideways scroll, a file picker that works on iOS and Android.

---

## 6. The visitor journey

This is the path a real person should be able to complete without help.

1. They land on the Style Tiles home page.
2. In the hero, in the same row as **Browse Style Tiles** and **Search**, they notice **Upload your own design files** sitting immediately after Search.
3. They open the upload page (or a panel/modal that contains the same form).
4. They read a short explanation: send a standalone HTML design page; it will be reviewed; it will not go live automatically.
5. They optionally fill in a name and a short note (design name, vibe, how to credit them).
6. They choose one `.html` file from their computer.
7. They press **Send design**.
8. They wait, with a visible “Sending…” state. They can see that something is happening.
9. They see a success receipt: file name, a confirmation that it reached you, and a reminder that review is manual.
10. If something is wrong (wrong file type, too big, network issue, permission denied), they see why and can try again without losing the rest of the form.

They never need to know that Vercel Blob, tokens, or route handlers exist.

---

## 7. How you receive the files

After a successful send, the HTML file lives in **Vercel Blob**, not in the `Designs/` folder of the website.

Version 1 receiving workflow:

1. Open the Vercel project → **Storage** → the Blob store.
2. Find the new file under a dedicated folder such as `submissions/`.
3. Download it, open it locally, and decide:
   - **Keep / curate** → later, follow `agent.md` (or adapt the file) and publish it as a real Style Tile.
   - **Decline** → leave it, or delete it from the cabinet.
4. Optionally, if the visitor left a name/note, that metadata is stored alongside the file so you know who sent it.

You do **not** need a private admin dashboard in version 1. The Vercel Blob browser is the inbox. A later version can add an on-site review queue.

**Important constraint:** the “upload finished” ping from Vercel Blob does not reach your laptop when you test on `localhost`. Production and preview deployments do receive it. Local testing still uploads the file; you just confirm arrival in the Blob dashboard instead of waiting for a callback.

---

## 8. How the pieces fit (plain language)

Think of three desks, not three frameworks.

```
Visitor                 Style Tiles site              Cloud cabinet
───────                 ────────────────              ─────────────
Picks an HTML file  →   Client Upload Form
                        asks the Token Route Handler
                        for a short-lived permission slip
                                              →       Vercel Blob
Visitor's browser sends the file *directly* to the cabinet
(the file does not pass through your website first)

When the cabinet has the file, it taps the Token Route Handler
on the shoulder: “this upload finished.”
```

Why this shape:

- HTML design pages can be larger than a tiny web request. Sending the file **straight to the cabinet** avoids a size ceiling on the website itself.
- The **Token Route Handler** is the lock on the door. Without it, anyone could dump anything into your storage.
- The **Client Upload Form** is the only thing the visitor sees.

---

## 9. Step-by-step plan

Build in this order. Each step should be finishable and checkable before the next one starts. Do not skip to the form until the cabinet and the permission desk exist.

---

### Step 1 — Place “Upload your own design files” on the site

**Goal:** A visitor can find the feature in under five seconds, in the same cluster as Browse and Search.

**Where it should appear (version 1) — this is the only required entry:**

The **hero section** on the catalog home page, **immediately next to the Search button**.

Today the desktop hero actions are:

1. **Browse Style Tiles** (primary)
2. **Search** (mustard)

Add a third control in that same row, after Search:

3. **Upload your own design files**

It should look and behave like the other hero buttons (same height, same row, wraps cleanly on small widths). It is a button/link that opens the upload screen — it does not upload from the hero itself.

**Mobile hero:** the simplified mobile hero currently only shows **Browse Style Tiles**. Version 1 must still expose Upload there: put **Upload your own design files** in that mobile hero action cluster as well (next to Browse, and next to Search if Search is shown on mobile). Do not hide Upload behind the header on phones.

**Where it should not be required in version 1:**

- Not a header nav link
- Not a footer Explore link
- Not a catalog-filter callout

Those can be added later if the hero button is not enough. Do not scatter extra Upload links in v1.

**Where it should go when clicked:**

A dedicated page is clearer than a tiny modal. Suggested address: an `/upload` page (or `upload.html` if the site stays as simple static pages plus one small server helper).

**Copy for the entry point:**

- Button label: `Upload your own design files`
- Keep the label readable on the mustard/secondary-style button. If the full phrase is too long on a phone, use `Upload files` on small screens and keep the full phrase on desktop — but prefer the full phrase if it fits.

**Done when:** On desktop, the upload button sits in the hero CTA row immediately after Search. On a phone, the same action is visible in the hero without opening a menu. Both open the upload screen.

---

### Step 2 — Design the Client Upload Form

**Goal:** One calm form that collects a file and just enough context for you to review it.

This is the **Client Upload Form**: the visitor-facing desk. It is not the storage, and it is not the permission desk.

**Fields (version 1):**

| Field | Required? | Why |
|---|---|---|
| HTML design file | Yes | The actual submission. Accept `.html` only. One file per send. |
| Your name / handle | No | So you can credit them if you publish. |
| Design name | No | Helps you file it. Example: “Mineral Celadon”. |
| Note to curator | No | One short box for vibe, intent, or contact. |

Do not ask for GitHub, licenses, or a full brief in version 1.

**On-screen states the form must have:**

1. **Rest** — empty, ready
2. **File chosen** — show the file name and approximate size
3. **Sending** — disable the button, show progress if possible
4. **Received** — receipt, not another empty form
5. **Problem** — what went wrong, how to fix it

**Helper text on the form (keep it short):**

- Send a **standalone HTML page** (the same kind of file that lives in `Designs/`).
- Images should already be inlined or linked in that file. Do not attach a separate image folder in version 1.
- Maximum size: **5 MB** unless you later raise it. That is plenty for a self-contained design page.
- You will review it. It will not appear in the catalog by itself.

**Done when:** A person can complete the form on a phone and a laptop using fake/local behavior (even before it talks to storage). The states above all exist.

---

### Step 3 — Confirm the cloud filing cabinet (Vercel Blob)

**Goal:** There is a Blob store connected to this Vercel project, and you know where submissions will sit.

This project already has Blob connection values in `env/env.local` (`BLOB_STORE_ID` and a webhook public key). Treat Step 3 as **confirm and name**, not “invent storage from scratch.”

**Checklist:**

1. In the Vercel dashboard, open the project → **Storage**.
2. Confirm a Blob store exists and is connected to this project for Production, Preview, and Development (Development is required if you want to test from your own machine).
3. Decide access: **Private** is the right default. Submitted designs are unpublished work; they should not be guessable public URLs.
4. Agree a folder convention so the cabinet does not become a junk drawer. Recommended:

   `submissions/YYYY-MM-DD/<original-filename>`

   A unique suffix should be added automatically so two people sending `index.html` do not overwrite each other.

5. Pull environment values onto your machine the way Vercel recommends (`vercel env pull`), so local tests use the real cabinet.

**Done when:** You can open the Blob store in the dashboard, you know it is private, and you have a named folder plan for incoming files.

---

### Step 4 — Set up the Token Route Handler

**Goal:** A small server door that issues a short-lived permission slip, and later hears “the upload finished.”

This is the **Token Route Handler**. Visitors never see it. The Client Upload Form talks to it behind the scenes.

**What it is for, in one paragraph:**

When someone presses Send, the browser does not dump the file onto the website. It first asks this handler: “May I put a file named X into the cabinet?” The handler checks the rules, and if they pass, it hands back a **short-lived token** (a permission slip). The browser then uses that slip to place the file **directly** in Vercel Blob. When Blob has the file, it calls this same handler again to say the job is done.

**Rules the handler must enforce (version 1):**

- Only HTML files (`text/html`, `.html`).
- One file, under the size cap (5 MB unless you change it).
- Store it under `submissions/…`, never next to live catalog pages.
- Always add a random suffix so names cannot collide or overwrite.
- Do not trust the visitor to pick the folder. The handler chooses the path.
- If the request looks wrong, refuse. No token, no upload.

**The open-door problem:**

There are no user accounts. If this handler gives a token to anyone who asks, the cabinet is a public drop box for the whole internet.

Version 1 still should not require full logins, but it **must** have a light gate. Pick one of these before building:

| Option | How it feels | Recommendation |
|---|---|---|
| **A. Shared curator passphrase** | A single extra field on the form, or a hidden query you share with people you invite. | Best for a quiet first launch. |
| **B. Open submissions + abuse limits** | Anyone can send; you rely on file-type/size rules and later add rate limits / bot protection. | Only if you want public intake on day one. |
| **C. Invite-only link** | The upload page works only with a secret address you hand out. | Fine as a temporary preview. |

**Recommended for version 1: Option A** (a simple passphrase you can share). You can remove it later if you add bot protection and are ready for a public mailbox.

**When an upload finishes, the handler should:**

- Record the Blob URL, original file name, optional name/note, and time.
- Version 1 can log this and leave the file in the cabinet. A later version can write a row to a database or email you.

**Local-development caveat (non-technical):** the “upload finished” tap from Vercel cannot reach an app running only on your computer. Test the permission slip and the file landing in the dashboard locally; test the finished-upload ping on a Preview deployment.

**Done when:** The handler exists, refuses bad files, issues a slip for good ones, and is not an unlocked public hose.

---

### Step 5 — Connect the Client Upload Form to the Token Route Handler

**Goal:** Pressing Send on the real form performs the permission-slip dance, then puts the file in the cabinet.

**The sequence the visitor should experience:**

1. They press **Send design**.
2. The form asks the Token Route Handler for permission (this is quick).
3. If permission is denied, they see why (wrong type, too big, bad passphrase, etc.).
4. If permission is granted, the file goes from their browser to Vercel Blob. A progress bar is worth adding if sends can take more than a second.
5. On success, the form shows the receipt. Do not dump them back to an empty form.

**What the form should never do:**

- Send the file to your website as the final destination (that hits a small request-size ceiling and is the wrong pattern).
- Show raw Blob URLs as if they were live catalog links.
- Promise that the design is “published.”

**Done when:** A real `.html` file chosen on the form appears in the Blob store under `submissions/`.

---

### Step 6 — Receipt, errors, and empty states

**Goal:** Every outcome has copy. Nobody is left staring at a spinner.

**Success receipt should include:**

- “Design received.”
- The file name they sent.
- “This does not publish it to the catalog. You’ll hear from the curator if it’s a fit.” (Do not promise a reply time unless you will keep it.)
- A link back to the catalog.

**Error copy (examples):**

- No file: “Choose an `.html` design file first.”
- Wrong type: “Style Tiles only accepts standalone `.html` files in this first version.”
- Too large: “That file is over 5 MB. Please send a self-contained HTML page.”
- Passphrase wrong (if using Option A): “That passphrase doesn’t match. If you were invited to submit, check the note you were sent.”
- Network / unexpected: “The cabinet didn’t accept the file. Wait a moment and try again.”

**Empty state on the upload page:** a one-paragraph explanation of what “your own design files” means (a finished HTML style tile, not a screenshot, not a Figma link).

**Done when:** You can force each failure on purpose and the message matches.

---

### Step 7 — Owner intake after the file lands

**Goal:** You have a boring, reliable way to notice new work.

Version 1 (no extra tools):

1. Check the Blob store’s `submissions/` folder when you are ready to review.
2. Download the HTML, open it in a browser, and judge it as a design page.
3. If it is a fit, **do not** copy it straight onto the live catalog. Run it through the existing publishing ritual in `agent.md` (skeleton, markdown contract, catalog card, mobile pass).
4. If it is not a fit, delete it from Blob or leave it in an `submissions/declined/` folder.

Optional later (not version 1): an email or a private `/inbox` page that lists new submissions.

**Done when:** You have written down — for yourself — where you look, what you do with a yes, and what you do with a no.

---

### Step 8 — Guardrails (safety, size, and taste)

These are product rules, not afterthoughts.

**File rules**

- Accept: `.html` / `text/html` only.
- Reject: `.htm` if you want to be strict; otherwise allow it and treat it as HTML.
- Reject: images, PDFs, zip files, markdown, JavaScript packages.
- Size cap: 5 MB.
- One file per submission.

**Safety rules**

- Treat every upload as **untrusted**. Do not iframe a submitted file on the public catalog.
- Do not execute submitted scripts as part of the site.
- Private Blob store, so random people cannot browse submissions by guessing URLs.
- Random suffixes on every stored name.
- Light gate on the Token Route Handler (passphrase or equivalent). Plan to add bot protection before opening the mailbox to the whole internet.

**Taste / catalog rules**

- Submissions are not Style Tiles until you say they are.
- If you publish one, it must still meet `agent.md` (header chrome, markdown contract, vibe badge, mobile layout). The upload feature does not weaken that bar.

**Done when:** A zip file, a huge file, and a missing passphrase all fail closed.

---

### Step 9 — Look and placement (visual pass)

**Goal:** The new page feels like Style Tiles, including whatever catalog theme is currently on.

- Use the same header, footer, type, and buttons as the rest of the registry.
- Respect light/dark catalog themes. The upload page should not flash a default skin.
- Phone layout: stacked fields, full-width Send button, file name wrapping instead of overflowing.
- Do not add a second visual language “because it’s a form.”

**Done when:** The upload page looks like it belongs on this site at phone and desktop widths, in both light and dark catalog modes.

---

### Step 10 — Prove the full path before calling it done

Walk this as a person, not as a developer.

**Happy path**

1. From the home page, click **Upload your own design files**.
2. Fill the optional name fields, choose a small valid `.html` file, enter the passphrase if required.
3. Send.
4. See the receipt.
5. Open Vercel → Storage → Blob → `submissions/` and confirm the file is there.
6. Download it and open it. It should be the file you sent.

**Failure paths**

- Send with no file.
- Send a `.png`.
- Send an oversized file.
- Wrong passphrase.
- On a phone: pick a file, send, read the receipt.

**Theme / chrome paths**

- Hero row is **Browse Style Tiles → Search → Upload your own design files**.
- The upload button still sits next to Search after a theme change and on a phone-width window.
- Catalog theme toggle still works if the upload page shares the site chrome.
- “Catalog” back-navigation from the upload page returns home.

**Done when:** Happy path and failure paths have been walked on a Preview deployment, not only on a local machine.

---

## 10. Suggested on-page copy

Use or adapt. Keep the archival voice.

**Page title:** Upload your own design files

**Lead:**  
Hand us a standalone HTML design page. We review every submission by eye. Nothing is added to the catalog until it is curated.

**File label:** HTML design file  
**File hint:** One `.html` file. Self-contained pages work best.

**Name label:** Your name or handle (optional)  
**Design name label:** Design name (optional)  
**Note label:** Note to the curator (optional)

**Passphrase label (if using Option A):** Submission passphrase

**Primary button:** Send design  
**Sending:** Sending design…  
**Success title:** Design received.  
**Success body:** Your file is in the curator’s cabinet. This is not a live catalog listing. If it becomes a Style Tile, it will be rebuilt to the same standard as the rest of the registry.

**Secondary link:** Back to the catalog

---

## 11. Success looks like

Version 1 is successful when all of the following are true:

- A stranger (or an invited friend) can find **Upload your own design files** in the home-page hero, next to **Search**.
- They can send one HTML file without creating an account.
- The file lands in a **private** Vercel Blob folder named for submissions.
- Bad files are refused with a clear reason.
- The public catalog is unchanged.
- You can download a submission from the Blob dashboard and review it.
- Nothing in this feature bypasses `agent.md` when you later publish.

---

## 12. Out of scope until a later version

- Visitor accounts, OAuth, or “my submissions” history
- Drag-and-drop of a whole folder / zip of HTML + images
- Live 16:9 preview of unreviewed uploads on the catalog grid
- Auto-append to `catalog-data.js`
- Email or Slack “new submission” alerts
- An on-site curator inbox UI
- Editing or replacing a submission after send
- Multi-file uploads
- Public Blob URLs for submissions

---

## 13. Open product questions

Resolve these before implementation, or default as noted.

1. **Who may upload?**  
   Default: invited people with a shared passphrase (Option A).  
   Alternative: anyone on the internet, with bot protection added first.

2. **Do we promise a reply?**  
   Default: no. Receipt copy should not imply a timeline.

3. **Where does the entry live?**  
   Decided: **hero section, immediately next to the Search button.** Not header, footer, or catalog callout in version 1. Shorten the mobile label to `Upload files` only if the full phrase wraps badly.

4. **Is 5 MB the right cap?**  
   Default: yes for HTML-only. Raise it only if you start accepting inlined-image pages that regularly exceed it.

5. **Private or public Blob store?**  
   Default: private. Submissions are unpublished work.

6. **What happens to a “yes”?**  
   Default: you manually rebuild/publish via the existing Style Tiles ritual. The upload is raw material, not a catalog card.

---

## 14. Build order (checklist)

Use this as the implementation sequence later. Nothing below is done yet.

- [x] **1. Entry** — “Upload your own design files” as a hero button immediately next to Search (desktop CTA row and mobile hero cluster)
- [x] **2. Client Upload Form** — fields, states, mobile layout, Style Tiles chrome
- [ ] **3. Blob cabinet** — confirm private store, `submissions/` folder plan, local env values
- [ ] **4. Token Route Handler** — permission slips, HTML-only rules, size cap, passphrase (or chosen gate), finished-upload ping
- [ ] **5. Wire form → handler → Blob** — real send path
- [ ] **6. Receipts and errors** — every outcome has copy
- [ ] **7. Owner intake** — how you find, review, curate, or delete
- [ ] **8. Guardrails** — type, size, privacy, no live preview of untrusted HTML
- [ ] **9. Visual pass** — matches catalog themes on phone and desktop
- [ ] **10. Full-path proof** — walked on a Preview deployment

---

## 15. One-line reminder

**Upload your own design files** is a public counter. The **Client Upload Form** is the counter surface. The **Token Route Handler** is the clerk who checks the package and issues a one-time key. **Vercel Blob** is the locked cabinet where the HTML lands for you to review. The catalog stays curated.
