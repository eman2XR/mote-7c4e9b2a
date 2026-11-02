# Mote Lab — research sketchbook

A temporary name for an independent research lab exploring AI, everyday experience, and specialized data. This site is for comparing ideas, not presenting finished products or completed research.

Website: https://eman2xr.github.io/mote-7c4e9b2a/

## Current ideas

- **Everyday memory** — the direction the owner likes. Track observed events, changes, and gaps; answer with evidence.
- **Everyday causes** — a new sketch about diagnosing failures through controlled tests and verified outcomes.
- **A material world** — a new sketch about learning physical material behavior from video and measurements.
- **Recovery in daily life** — a new sketch about studying everyday function over time, requiring a clinical research partner.

The last three are proposals to react to, not accepted programs. Useful research is the priority. Data licensing is a possible business model.

## Pages

- `/`: visual idea sketchbook, with original SVG explanations.
- `/research/`: deeper visual explanation of everyday memory.
- `/memory/`: scripted question-and-evidence prototype using a generated image.
- `/data/`: illustrated sample record; local confirmation/correction and JSON export.

No real data collection, live models, participant study, or research result is implemented.

## Continue the work

Read [AGENTS.md](AGENTS.md), [docs/HANDOFF.md](docs/HANDOFF.md), and [docs/RESEARCH_DIRECTION.md](docs/RESEARCH_DIRECTION.md). This project is separate from The Council / Intuition Lab.

```sh
python3 -m http.server 8841 --bind 127.0.0.1 --directory site
python3 scripts/check_site.py
node --check site/assets/site.js
```

Open `http://127.0.0.1:8841/`. Push to `main` to publish through GitHub Actions. Only `site/` is deployed. The repository and site are public.

See [docs/ASSETS.md](docs/ASSETS.md) for asset provenance. Earlier rejected sketches are archived under `docs/archived-concepts/`, outside the deployed site.
