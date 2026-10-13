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

- `gutter-sketch.html` — the entire app, one file (HTML/CSS/JS, no build step, no backend)
- `README.md` — this file

Keep it that way. No customer data, exports, credentials or other files belong in this repo — it is public.

## Version history

- **v2.3** (2026-10-13) — Multi panel gets **Select all** / **All runs**; pool icon 3×; run labels no longer say "+cover" (the dashed line carries it); callout presets are Tie-in / Tear out / Reuse existing DS; Septic/Well hazard removed; **drip edge extension is now a per-run Yes/No** (thin solid line on the house side of the run, "Drip edge extension: Yes/No" on the material list) instead of a placed icon.

- **v2.2** (2026-10-13) — no marks at miters (corners speak for themselves; BAY chip only); drop outlet accessory (circle) counted as an outlet; multi-select can set gutter covers on/off; existing runs take covers + an option group (length still optional, soft warning on export if covered with no length); splash guard adds 2.5' coil to the main profile; material list: Jobber color dropdowns for gutter/downspout, Wedges (none/regular/steep/T), hangers auto (new LF ÷ 2), spray paint auto (1 can of gutter color when color isn't white/brown and wedges are used), zip screws removed; profile and downspout-size names now match the Jobber custom fields.

- **v2.1** (2026-10-13) — "Lower roof" moved from termination to the story list (label `LR`, 2 pipe bands); **Multi** button next to Select for multi-select (group reassignment, group move, delete all); splash guard drawn as a star; story labels (1–3 st) in the palette to drop on sections of the house; downspouts can be marked **REUSE EXISTING** (hollow slashed square, not counted).

- **v2** (2026-10-13) — auto-miters at corners (tap a corner to flip inside/outside/bay), length-only run labels, existing-gutter dashed runs, downspout stories 1–3 in half steps, elbow row with 2"/4"/6" offsets counted in the material list, pipe bands 2/3/3/4/4 by story, callout presets (Tie-in).
- **v1** (2026-10-12) — first build: Field Mode / Full Mode, options 1–5, material list, PDF/PNG export, job list, photos with pins, imported backgrounds.
