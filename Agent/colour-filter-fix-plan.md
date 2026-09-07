# Colour Filter Fix — Product Requirements Document

**Audience:** an AI agent that will implement this change.  
**Operator instruction:** follow this document in order. Do not explore the rest of the site “to see how colour works today.” The current system is described below. Do not invent extra colours, extra UI, or extra fields.

**This document is the spec.** Implement it. Do not rewrite the product rules while coding.

### Progress — mark `[x]` in this file when the step is done

- [x] Step 1 — Write the colour rules into `agent.md`
- [x] Step 2 — Add the Cream White dot
- [ ] Step 3 — Remove the old automatic filter
- [ ] Step 4 — Tag every existing design
- [ ] Step 5 — Verify like a visitor

---

## 1. Problem

The catalog has a row of colour dots next to search. Clicking a colour is supposed to show designs that *are that colour*.

Today the site does not use human colour tags. It looks at every swatch in a design’s palette and guesses families automatically. That guess is too greedy.

**What goes wrong:**

- A visitor clicks **Pink**. Designs appear that only have a dusty salmon ribbon, a blush overlay, or one mixed pastel.
- A design with eight mixed swatches matches four or five colour dots at once.
- Paper, cream, ivory, and warm white are almost invisible to the filter. There is no Cream White dot, and pale canvases are skipped by the old guesser.
- Tiny status colours (a red “error” token, a green “success” token) can pull a whole design into Red or Green.

The visitor wants: *“show me pink designs.”* They get: *“show me anything that once mentioned a pinkish hex.”*

---

## 2. Goal

Replace automatic colour guessing with **hand-assigned colour tags**.

When a visitor clicks Pink, every result should look pink at a glance. Mixed or barely-tinted designs stay out.

**Success looks like:**

- Nine official colour dots, including a new **Cream White**.
- Every design in the catalog has **1 to 3** colour tags. Usually **one or two**. Three only when the design is obviously multi-colour.
- Clicking a dot shows only designs tagged with that exact colour.
- Clicking the active dot again still clears the filter. Reset and I’m Feeling Lucky still clear it.
- New designs get colour tags as part of the normal publish ritual. The creating agent does not have to reverse-engineer this feature.

---

## 3. What this is not

Do not:

- Add more than these nine colours.
- Put colour tags on the design page itself (header, markdown spec, or showcase copy). Tags live on the catalog card data only.
- Change vibe filters, Dark/Light filters, search text, or I’m Feeling Lucky.
- Keep the old automatic guesser running “as a backup.”
- Tag a colour because it appears once in a palette list.
- Use British **Grey**. The official name stays **Gray**, matching the current dot.

---

## 4. The nine official colours

Use these names **exactly**. Same spelling, same capital letters. They are both the dot labels and the tags stored on each design.

| # | Official name | What it means on this site |
|---|---|---|
| 1 | Red | Crimson, vermilion, true red, brick — when it is a starring colour. |
| 2 | Orange | Terracotta, rust, amber, tangerine, clay — when it is a starring colour. |
| 3 | Yellow | Gold, mustard, lemon, canary, acid chartreuse that reads yellow. |
| 4 | Green | Sage, mint, emerald, olive, pine, lime that reads green. |
| 5 | Blue | Sky, cobalt, navy, teal, cyan, aquatic blue. |
| 6 | Purple | Violet, lilac, lavender, plum, indigo, periwinkle. |
| 7 | Pink | Bubblegum, magenta, rose, hot pink, blush that is clearly pink. |
| 8 | Gray | Charcoal, slate, silver, concrete, stone, greyscale, black void, carbon. |
| 9 | Cream White | **New.** Warm paper, ivory, alabaster, bone, oat, linen, parchment, and true white *when that is the page’s material.* |

Dot order in the search bar stays the current rainbow, then Gray, then the new Cream White at the end:

**Red → Orange → Yellow → Green → Blue → Purple → Pink → Gray → Cream White**

Cream White’s dot should look like warm off-white paper (not stark fluorescent white). It must still be visible on both the light and dark catalog chrome — a faint inner edge is fine, matching how the other dots already sit in the bar.

---

## 5. How to choose tags (the product rules)

Colour tags are a **curated first impression**, the same idea as the existing vibe badge: judge the visual system, not the marketing copy, and not every token in the palette.

### Hard rules

1. **Every design gets at least one tag.** A design with no colour tag cannot be found by colour.
2. **At most three tags.** Never four.
3. **Default to one or two.** Three is allowed only when a visitor would name three colours without being prompted.
4. Use **only** the nine official names above. No “Navy”, “Teal”, “Gold”, “Black”, “White”, “Cream”, “Blush”, or “Chartreuse” as tag values. Map those ideas onto the nine names.
5. Tag what **dominates the page**, not what exists in the swatch list.
6. If you are unsure, **leave it off**. A missed accent is better than a polluted Pink filter.

### The glance test

Open the design (or its catalog preview) and answer:

> “If someone asked what colour this design is, which names would I say in one breath?”

Those names — and only those — are the tags.

### Canvas vs ink vs accent

| Role on the page | Usually tag it? |
|---|---|
| The large background / paper / void the design *is made of* | **Yes**, if it is Cream White or Gray (or a chromatic field such as a navy or sage canvas). |
| Body text colour (black ink on cream, white type on navy) | **No.** Ink is not the colour of the design. |
| A starring accent used in buttons, slabs, ribbons, or big graphic fields | **Yes**, if a visitor would name it. |
| One small tape strip, one hover state, one status token (error red, success green, warning gold) | **No.** |
| A pale tint mixed into a gradient or overlay | **No.** |

### Cream White vs Gray (the two neutrals)

This pair is where the old filter failed most. Be strict.

**Tag Cream White when** the design *is* a light paper, linen, ivory, bone, or white product canvas. Editorial newsprint, ceramic glaze, spa linen, alabaster hospitality, a stark white app shell.

**Do not tag Cream White when:**

- The design is dark and merely uses white type or a white icon.
- A colourful pop design happens to sit on a generic cream card, and the identity is the candy inks — spend the slots on Pink / Green / Purple, not on the leftover paper.
- There is a single bleached swatch in an otherwise charcoal system.

**Tag Gray when** the design *is* charcoal, slate, concrete, silver, stone, greyscale, carbon, onyx, or a black void.

**Do not tag Gray when:**

- The page is cream paper with black ink. That is Cream White, not Gray.
- Navy, forest, or plum voids that are clearly chromatic. Those are Blue, Green, or Purple.

A high-contrast **cream page with a charcoal void as a second equal field** may take both Cream White and Gray. Only do that when both fields are large and structural, not because the type is dark.

### Pink vs Red vs Orange

This is the original complaint. Be harsher than you think.

- **Pink** — bubblegum, magenta, rose, Barbie, hot blush used as a main ink or slab.
- **Red** — crimson, vermilion, true red used as a main ink or slab.
- **Orange** — terracotta, rust, tangerine, clay used as a main ink or slab.
- Dusty salmon tape, peach glow, “warm beige,” or a faded clay overlay on an editorial page is **not Pink**. If the starring warm accent is terracotta, tag **Orange**. If it is only atmosphere, tag nothing chromatic.

### Yellow vs Green, Blue vs Purple

- Acid **chartreuse** that reads as yellow-lime: **Yellow**. Sage, olive, mint, pine: **Green**. If both are starring (a chartreuse slab *and* a forest field), you may use both.
- Teal and cyan: **Blue**. Lilac, lavender, periwinkle, indigo: **Purple**. Do not double-tag a single hue.

### When a third tag is allowed

Use three only if the design is blatantly built from three starring colours — for example a carbon system with both chartreuse actuators *and* vermilion marks, or a pop system of pink + mint + lilac slabs.

If the third colour is “also kind of there,” stop at two.

### Worked examples (calibrate to these)

These are the standard. Match this strictness everywhere else.

| Design | Tags | Why |
|---|---|---|
| Editorial Vintage Chic | Cream White, Orange | Warm alabaster linen is the page. Vivid terracotta is a real accent. Dusty salmon tape is **not** Pink. |
| The Monolith | Gray, Yellow, Red | Carbon void + high-ion chartreuse + venetian vermilion are all starring. Three is justified. |
| CryptoVista | Cream White, Green | White product canvas + neon mint identity. The red “trend negative” token is **not** Red. |
| Bubblegum Pop | Pink, Green, Purple | Candy inks are the point. Do not spend a slot on the cream canvas. |
| Clinical Sage | Cream White, Green | Light clinical paper + sage as the system. |
| A dark HUD with cyan hairlines and white labels | Gray, Blue | White labels are not Cream White. |

---

## 6. Where the work lives

You will touch only what this feature needs.

| Place | Role |
|---|---|
| Catalog search bar (`index.html`) | The nine colour dots the visitor clicks. |
| Catalog look (`styles.css`) | Only if Cream White needs a slightly stronger edge so the pale dot does not vanish. Do not restyle the bar. |
| Catalog behaviour (`app.js`) | Stop guessing colours from palettes. Filter by the tags stored on each design. Keep click-to-toggle, counts, toasts, Reset, and I’m Feeling Lucky working. |
| Catalog list (`catalog-data.js`) | Add a colour-tag list to **every** existing design. Update the “paste new design here” note so future entries include tags. |
| Publish guide (`Agent/agent.md`) | Teach the next creating agent to assign 1–3 colour tags. Add the field to both example cards. Add a colour section next to the existing vibe rules. |
| This plan | Do not delete it. You may tick steps as done if you want; do not change the product rules. |

**Do not edit** individual `Designs/*.html` pages, the markdown specs inside them, `Agent/style-tile-skeleton.html`, upload, themes, or vibe chips.

There are **71** published designs in the catalog list. Every one must receive tags. Skipping any design is a failed ship.

---

## 7. Step-by-step implementation

Do the steps in this order. Finish tagging and the new filter in the **same working session** so visitors never see an empty colour filter or a mix of old guessing and new tags.

### Step 1 — Write the colour rules into `agent.md`

`Agent/agent.md` is the only document a creating agent is allowed to follow when publishing a new design. If colour tags are missing from it, the next tile will ship untagged.

**Do:**

1. Add a `colours` list to **both** catalog-card examples (the short one near the top, and the full one in the catalog-card section). Place it next to `vibeBadge` / `theme`. Example shape:

   `colours: ["Cream White", "Orange"]`

2. State that `colours` is **mandatory**, 1–3 official names, same spelling as the table in this PRD.

3. Add a colour section beside the existing vibe-badge rules. Copy the product rules from **§5** of this PRD into `agent.md` in the same plain voice: glance test, canvas vs ink vs accent, Cream White vs Gray, Pink vs Red vs Orange, when a third tag is allowed, and the hard rules.

4. Update the “paste new design here” comment at the bottom of `catalog-data.js` so it mentions colour tags as well as the vibe badge.

**Do not:** tell the creating agent to open `app.js` or to copy tags from neighbouring designs. The rules in `agent.md` must be enough, just as vibe rules already are.

**Done when:** a new agent who only reads `agent.md` would assign `colours` on the catalog object without asking what the field is for.

---

### Step 2 — Add the Cream White dot

In the catalog search bar, keep the existing eight dots and add a ninth: **Cream White**.

**Do:**

- Same kind of control as the others (a round swatch the visitor can click).
- Official name **Cream White** on the control, the label, and the spoken name.
- Sit it **after Gray**.
- Use a warm paper colour for the swatch, not icy blue-white.
- Make sure the pale dot still reads on light catalog chrome and on dark catalog chrome.

**Do not:** add a label word next to every dot, add a “clear colours” extra button, or let people select two colour dots at once. One colour at a time, as today.

**Done when:** the search bar shows nine dots in the order listed in §4, and Cream White is clickable like the others.

---

### Step 3 — Remove the old automatic filter

The current catalogue guesses colour families from every palette hex. That whole guesser must go.

**Do:**

- Delete the automatic classification. The site must not derive colours from swatches at load time.
- Make the colour filter read the hand-assigned `colours` list on each design.
- Matching is exact against the nine official names (case-insensitive is fine; do not match “pinkish” text in the description).
- Hover counts must count designs **tagged** with that colour, not guessed families.
- Empty results should still say the colour name, e.g. that nothing matches colour: Pink.
- Saved catalog state, Reset, and I’m Feeling Lucky must still clear or restore the colour dot correctly, including the new Cream White name.

**Do not:**

- Leave the old guesser in place “just in case.”
- Filter by searching the design name, vibe sentence, or description for the word “pink.”
- Require all three tags to match. One matching tag is enough.

**Done when:** the only way a design appears under Pink is that its `colours` list contains `Pink`. Palette hexes have no effect.

---

### Step 4 — Tag every existing design

Open `catalog-data.js`. For each of the 71 designs, add a `colours` list using §5.

**How to judge each design:**

1. Read its name, palette names, and one-line description in the catalog list.
2. Look at the live catalog preview (or the design page) if the description is mixed or the palette is long.
3. Apply the glance test. Write 1–3 official names.
4. Move to the next design. Do not batch-tag from names alone (“anything with *rose* in the title is Pink”).

**Checklist — every slug must get tags:**

- editorial-vintage-chic
- the-monolith
- cryptovista
- greenwrap
- healthy-pets
- skybound
- warm-wabisabi
- the-draftsman
- velvet-bento
- pulse-matrix
- raw-foundry
- the-letterpress
- prism-pop
- concrete-gazette
- clinical-sage
- obsidian-vault
- chromatic-gazette
- airmail-modern
- retro-pop-sunset
- ink-and-vellum
- acid-foundry
- fjord-and-flora
- verdant-silk
- crimson-radiance
- ghost-protocol
- the-chronicler
- paper-tiger
- aero-tactical
- nocturne-atelier
- acid-sunset
- abyssal-yacht
- the-broadside
- bubblegum-pop
- dune-outpost
- cyber-kinetic-motorsport
- hearth-and-stone
- solar-terracotta
- luminous-midnight
- chromatic-noir
- the-sartorialist
- editorial-noir
- lavender-minimal
- ethos-void
- earth-bento
- cobalt-concrete
- sandstone-spa
- obsidian-kinetic
- the-folio
- aero-aquatic
- aurora-glass
- chalk-and-tab
- ceramicist-atelier
- industrial-dynamo
- tuscan-nostalgia
- editorial-luxe
- botanical-press
- swiss-vermilion
- kinetic-carbon
- sage-apothecary
- academic-lilac
- curated-field-guide
- aethel-sculptural-noir
- playful-pop-brutalism
- warm-editorial-minimal
- raw-marker-archive
- slate-atmospheric-minimal
- onyx-luminescence
- mineral-celadon-slabs
- chartreuse-pop-slabs
- mineral-teal-press
- electric-midnight-pop

Use the worked examples in §5 for the designs named there. Do not “improve” those examples to be broader.

**Done when:**

- All 71 entries have `colours`.
- No list is empty. No list has more than three names.
- No name appears that is not one of the nine official colours.
- A design that is obviously one colour (a sage apothecary, a vermilion poster) is not carrying two leftover neutrals “for coverage.”

---

### Step 5 — Verify like a visitor

Do not finish from code inspection alone. Use the live catalog.

**Desktop and mobile:**

1. Load the home catalog. Confirm nine dots, Cream White last, pale dot still visible.
2. Click **Pink**. Scroll the results. Every card should look pink. If a cream editorial with a salmon ribbon appears, the tag is wrong — remove Pink from that design and re-check.
3. Click **Cream White**. Results should be paper / ivory / white systems, not dark pages with white type.
4. Click **Gray**. Results should be charcoal / slate / void systems, not cream pages with black ink.
5. Click **Red**, **Orange**, **Yellow**, **Green**, **Blue**, **Purple** in turn. Same glance test.
6. Click the active dot again — filter clears, full catalog returns.
7. Combine a colour with a vibe chip, then with search text, then Reset. Colour should cooperate and then clear.
8. Confirm I’m Feeling Lucky still clears the colour dot.
9. Confirm a colour with no remaining matches (if any) shows the existing empty message, not a blank hole.
10. Repeat the colour-dot clicks on a narrow mobile width. All nine dots must remain usable.

If any colour’s results feel mixed, fix the tags (or the glance-test rules in `agent.md` if you tagged against them incorrectly). Do not widen the filter logic to compensate.

**Done when:** you would be willing to click Pink in front of the site owner and stand behind every card that appears.

---

## 8. Acceptance checklist

Ship only if all of these are true:

- [ ] Nine colour dots: Red, Orange, Yellow, Green, Blue, Purple, Pink, Gray, Cream White.
- [ ] Old palette-guessing colour system is gone.
- [ ] Filter uses each design’s `colours` tags only.
- [ ] All 71 catalog entries have 1–3 valid tags.
- [ ] `agent.md` examples and rules require `colours` on every new design.
- [ ] Design pages, markdown specs, vibe filters, and upload were not edited.
- [ ] Pink no longer returns “barely pink” mixed pages.
- [ ] Cream White returns paper/white systems, not dark-on-white type.
- [ ] Checked on desktop and mobile.

---

## 9. If you get stuck

| Situation | What to do |
|---|---|
| A design feels like four colours | Keep the three a visitor would name first. Drop the quietest. |
| A design is almost only black | Tag **Gray**. Do not also add Cream White for the type. |
| A design is cream paper with a loud terracotta mark | Cream White + Orange. Stop. |
| Teal / cyan | Blue. |
| Chartreuse | Yellow if it reads lemon-lime; Green if it reads grass. Not both unless both fields are starring. |
| You want to keep the old guesser for untagged tiles | No. Tag the tiles. |
| You want to show colour chips on each catalog card | No. Out of scope. Dots in the search bar are the UI. |
| `agent.md` already forbids exploring the repo when creating a tile | Honour that. The colour rules you add there must stand alone. |
