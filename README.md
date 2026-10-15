# Gutter Sketch

Internal field tool for Sergeant Seamless Gutter Services. Not customer-facing.

An iPad + Apple Pencil app for drawing a gutter job on site: runs, downspouts, accessories, hazards, photos. It auto-counts the material list and exports a PDF (drawing + materials + photos) that gets attached to the Jobber quote. Jobber owns pricing, scope text and the signature — this app holds none of that.

## Where it runs

Live address (open in Safari on the iPad, then Share → Add to Home Screen):

https://sergeantseamless.github.io/gutter-sketch/gutter-sketch.html

All job data stays on the iPad (browser storage). Nothing is sent to a server. The hosted file is just the app itself.

## Updating the app

1. Repo page → **Add file → Upload files**
2. Drop the new `gutter-sketch.html` (same filename — the home-screen icon depends on it)
3. Type a one-line commit message saying what changed (e.g. `v3 — bay miter fix`)
4. **Commit changes**. The site updates within a minute. On the iPad, force-quit the app and reopen.

To roll back: repo page → **commits** → pick the older version → view the file → download it → upload it again.

## Files

- `gutter-sketch.html` — the entire app, one file (HTML/CSS/JS, no build step, no backend); the brand badge and mascot are embedded inside it
- `icon-180.png` — the home-screen icon (badge on cream)
- `README.md` — this file

Keep it that way. No customer data, exports, credentials or other files belong in this repo — it is public.

## Version history

- **v3.5** (2026-10-15) — **Termination starts blank** (no more default splash block); it is optional, tap the chosen button again to clear it, and whatever you pick prints on the downspout label (e.g. "AB · DRAIN"); a splash block is only counted when picked. **One callout, many pointers**: select a note, drag from the gold **+** on its box to each spot (double-tap a pointer end to remove it); all pointers print on the exports. **STANDING AT: Front / Right / Back / Left** button (Field Mode top bar and Full Mode toolbar) turns only the drawing on screen so you can keep the iPad upright — buttons never flip, text stays readable, a STREET arrow shows which way the front is, and exports always print street-side down. **Wedges check**: wedges now start at "— select —" and export warns "Wedges not selected" (Go back / Export anyway) like the color check; jobs already saved with None are unchanged. **Option 1 labels readable**: yellow-group text now prints navy on a gold label instead of yellow on white. **Continue-from-last-run bar** moved up so the Material List bar no longer covers it. Also: in Field Mode, drawing a run with a Pencil drag no longer opens the number pad either (matches tap-to-draw from v3.4).

- **v3.4** (2026-10-14) — **Draw first, measure later**: in Field Mode a run no longer opens the number pad; draw the whole layout, then tap **LENGTHS** and tap each run to enter its footage (runs without a length stay red; Finish in Truck reminds you how many are left; export still requires every new run to have a length). In Full Mode the pad gets a **MEASURE LATER** button. **Every material-list count can be typed over** (gutter and cover footage, end caps left/right, miters, downspout pieces, elbows, offsets, round elbows/offsets, drop outlets, outlets, splash guards, splash blocks, rain chains — on top of the existing pipe band / hanger / Geocel / rain-chain-kit boxes); the grey number is the auto count, a typed number replaces it per tab, clearing the box goes back to auto, and edited lines print "(edited; auto N)" on the materials PDF. **Chimney** marker added to Hazards / Attention.

- **v3.3.1** (2026-10-14) — **Repair-only jobs export**: removed the "No new gutter runs on the drawing" block, so a job with only existing gutter, downspouts, accessories or callouts can export; an empty drawing is still blocked.

- **v3.3** (2026-10-14) — **Text callouts**: new "To lower roof" preset (alongside Tie-in / Tear out / Reuse existing DS); the note box is now 4 rows tall for typing or writing with the Pencil (up to 200 characters, line breaks kept and stacked on the drawing). Smooth square offsets confirmed not counted (custom-cut, same as v3.2).

- **v3.2** (2026-10-14) — **Geocel counted automatically**: 1 tube per 3 miters (inside, outside, bay; rounded up); a job with no miters gets 1 tube per 20 end caps (minimum 1). Shown with its math next to hangers, and can be typed over. **Round downspouts**: A/B elbows on a 4" Round downspout count on their own "Round elbows (4\")" line (one part; A/B only tells the crew placement), and their offsets get "Round offsets" lines by size. **Smooth square**: elbows and offsets are custom-cut from downspout stock, so they are not counted. Drawing labels unchanged.

- **v3.1.1** (2026-10-14) — **Downspout pieces fix**: the material list now counts downspout pieces by story, not just drops — one piece per story, half stories round up (1 st = 1, 1.5 / 2 st = 2, 2.5 / 3 st = 3, lower roof = 1). Shown as "Downspouts (new) — pieces" with pieces by size, then drops and drops by story underneath. Outlets and pipe bands still count per drop.

- **v3.1** (2026-10-14) — **Legend fills itself**: the drawing legend now shows only the symbols actually on that drawing (gutter, existing gutter, gutter cover, downspout, reuse existing downspout, splash guard, splash block, drop outlet, rain chain), drawn as the real symbols on one line (wraps to a second if needed); the miter / end cap / bay / drip edge sentences are gone. **Accessory icons lose their text tags** (SG, SB, DO, RC, etc.; option badge stays). **Splash guard star** is gold with a navy outline on every option color. **Field Mode downspout sheet** now asks for termination (Splash block / Drain / Driveway / Rain chain / Other). **Splash blocks count both ways**: each new downspout ending in a splash block adds one, plus any splash-block icons placed. **PO delivery** removed from the manual fields and materials PDF. **Downspout labels** drop the story on 1-story (`AAB`), keep it from 1.5 up (`AB 2st`, `LR`).

- **v3.0** (2026-10-13) — **Box select**: in Multi mode, drag the Pencil across empty canvas to draw a box; runs fully inside it and any downspout / accessory / label inside it join the selection (finger drag still pans; tap still toggles single items). **Material list matched to the 2025 Material List sheet**: end caps split **left / right** (left = on your left standing in the street facing the gutter); bay miters split **outside / inside** and now detected automatically from the corner angle (≈45° turn = bay, 90° = strip; double-tap a corner cycles auto → flipped → bay → bay flipped); **gutter cover type** dropdown (ProGuard / Expanded Metal Mesh / Leaf Blaster Pro) shown on the covers line; **rain chain install kits** auto (1 per chain, overridable); new manual fields Geocel (tubes), Screws, PO delivery, and a **Special order** block for Fascia, Soffit, J channel, Collector box, Misc (free text: size / color / amount); "Spray paint" renamed "Touch-up spray paint". All of it prints on the materials PDF. Saved jobs upgrade automatically (old "bay" corners become bay-outside).

- **v2.9.1** (2026-10-13) — the grey "existing" word is gone from dashed runs; they show only a length if one was entered.

- **v2.9** (2026-10-13) — any run can be switched between **NEW gutter** and **EXISTING (dashed)** after the fact, in the run panel or via Multi for a batch; length, covers, group and drip-edge settings carry over, and the gutter LF / end caps / hangers update accordingly (covers on an existing run still count).

- **v2.8** (2026-10-13) — tie-in corners: a new run that meets an **existing** (dashed) run at a corner now counts as a miter (inside/outside by turn direction, "incl. tie-in to existing gutter (strip miter)" sub-line) instead of an end cap; highlight tags read "OUT · TIE".

- **v2.7** (2026-10-13) — inside/outside miter detection rewritten: each connected chain of runs is walked and the house side is taken from the chain's own shape (L, U and long-wing houses now classify correctly; previously judged against the drawing's center and mis-called far-wing corners). Tap a Miters row in the material list to light up those corners on the drawing with IN / OUT / BAY tags. Changing a corner now takes a **double-tap** (single tap just reports what it is).

- **v2.6** (2026-10-13) — exports split and restyled in the print-friendly "A-Light" brand frame (full logo, faint sunburst, navy/gold rules, cream info strip, "Call 904-384-3423 · SergeantSeamless.com" footer). One **Export** button offers: **Drawing — PNG** (attach to the Jobber quote), **Drawing — PDF** (crew print), **Materials + photos — PDF** (internal note, not for the customer). Files are named `Last_Number_Date_drawing.png / _drawing.pdf / _materials.pdf`.

- **v2.5** (2026-10-13) — downspout labels avoid collisions: each label tries eight positions around its square and takes the one clearest of gutter lines and other labels (thin dashed leader when it has to sit farther away); in Select mode a selected downspout shows a gold dot on its label — drag it to place the label by hand ("Auto-place label" in the panel undoes that).

- **v2.4** (2026-10-13) — branded exports per the KickCharge brand guide: navy header band with gold/orange rule, Sergeant Seamless badge top-left, cream customer strip, mascot beside the legend, navy footer with address / email / phone / web on every page, section bars in navy + gold; PNG export carries the badge; home-screen icon is now the badge (`icon-180.png`).

- **v2.3** (2026-10-13) — Multi panel gets **Select all** / **All runs**; pool icon 3×; run labels no longer say "+cover" (the dashed line carries it); callout presets are Tie-in / Tear out / Reuse existing DS; Septic/Well hazard removed; **drip edge extension is now a per-run Yes/No** (thin solid line on the house side of the run, "Drip edge extension: Yes/No" on the material list) instead of a placed icon.

- **v2.2** (2026-10-13) — no marks at miters (corners speak for themselves; BAY chip only); drop outlet accessory (circle) counted as an outlet; multi-select can set gutter covers on/off; existing runs take covers + an option group (length still optional, soft warning on export if covered with no length); splash guard adds 2.5' coil to the main profile; material list: Jobber color dropdowns for gutter/downspout, Wedges (none/regular/steep/T), hangers auto (new LF ÷ 2), spray paint auto (1 can of gutter color when color isn't white/brown and wedges are used), zip screws removed; profile and downspout-size names now match the Jobber custom fields.

- **v2.1** (2026-10-13) — "Lower roof" moved from termination to the story list (label `LR`, 2 pipe bands); **Multi** button next to Select for multi-select (group reassignment, group move, delete all); splash guard drawn as a star; story labels (1–3 st) in the palette to drop on sections of the house; downspouts can be marked **REUSE EXISTING** (hollow slashed square, not counted).

- **v2** (2026-10-13) — auto-miters at corners (tap a corner to flip inside/outside/bay), length-only run labels, existing-gutter dashed runs, downspout stories 1–3 in half steps, elbow row with 2"/4"/6" offsets counted in the material list, pipe bands 2/3/3/4/4 by story, callout presets (Tie-in).
- **v1** (2026-10-12) — first build: Field Mode / Full Mode, options 1–5, material list, PDF/PNG export, job list, photos with pins, imported backgrounds.
