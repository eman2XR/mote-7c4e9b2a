# Mote Lab — agent handoff

Read RESEARCH_DIRECTION.md and AGENTS.md. This project is independent of The Council / Intuition Lab; do not modify that repository.

## Location / hosting

- Checkout: `/Users/emanuelapple/Desktop/Mote Lab`
- Repo: https://github.com/eman2XR/mote-7c4e9b2a
- Site: https://eman2xr.github.io/mote-7c4e9b2a/
- Branch main; `.github/workflows/pages.yml` deploys only site/.
- Public repo/site. Keep README minimal and GitHub About fields blank.

## Latest request / 2026-11-01

Focus website on **Everyday memory**, **Learning to learn**, and **Input** (alternatives to voice); remove other research areas. User explicitly chose the latter name. Hidden-rule worlds are the first study within the broader learning program. This supersedes earlier rejection of a different learning-agent sketch.

## Routes

- `/`: three research areas and shared research/data/model approach.
- `/research/`: memory, naturalistic footage/gaze, delayed questions, pilot, fine-tuning comparisons.
- `/learning/`: learning to learn, floating-object world, example revision trace, dataset design, held-out mechanisms and baselines.
- `/input/`: touch, gestures, pointing/confirmation; command-vs-ordinary-movement dataset and evaluation.
- `/memory/`: preserved scripted demo using generated kitchen photo.
- `/data/`: preserved example memory record, simulated gaze, local export; links to learning research.

## Implementation / limits

Dependency-free HTML/CSS/JS. `site.css` shared styles; `memory.css` diagram/editorial layout; `site.js` memory/data interactions. Original static SVGs illustrate proposals, not simulation output. New SVGs: learning-world, learning-revision, learning-transfer, memory-attention, input-intent, input-point. No new animation, live model, study, collection, or training implemented. Old non-selected illustrations removed from deployment; historical pages outside site/ remain archived.

## Checks and publication

Run `python3 scripts/check_site.py`, `node --check site/assets/site.js`, and SVG XML parsing. At most a brief desktop visual inspection; user prioritizes brainstorming over mobile polish. All six pages passed link/asset checks; JavaScript syntax and all SVG XML checks passed. A desktop Safari preview verified the homepage layout and rendered learning-world diagram. Publication is through the next main-branch push; check its Pages workflow for deployment status.

Local repository Git settings override inherited work signing/hooks only for this checkout. Do not alter global work settings. Use existing GitHub Pages workflow. No preview server is required to remain running after completion.

## Minimal redesign / 2026-11-08

The owner selected a minimal research-studio visual direction. `studio.css` defines the new white/black sans-serif system with blue Memory, orange Learning, and purple Input accents. Homepage is a three-column visual research index. Program pages use a visual explanation, three questions, study design, and expandable protocol detail. Memory/data demo DOM and JS are preserved, with studio styling over existing CSS. Three original SVGs (`studio-memory`, `studio-learning`, `studio-input`) form the new visual identity. No new animation or data collection.

The user requested daily researched, visualized ideas with references, then explicitly paused the goal and asked for redesign first. **Daily research automation remains paused and is not configured.** Do not resume it based on this redesign request.

Six-page link/asset checks, JavaScript syntax, SVG parsing, and whitespace checks passed. Desktop Safari previews verified the homepage, learning page, and memory sample (keys query still loads the scripted evidence answer). Publishing uses the next main-branch push; verify the matching Pages run. Preserve minimal README and blank repository About metadata.
