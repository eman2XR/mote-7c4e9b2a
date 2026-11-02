# Mote Lab — agent handoff

## Start here

Read `RESEARCH_DIRECTION.md`. The owner wants useful research ideas explained through attractive SVGs. This is brainstorming: prioritize concept clarity over functionality, mobile polish, or infrastructure. Paying customers are not the priority; data licensing is a possible business model.

Memory is the only direction explicitly liked. The homepage now keeps memory and proposes three fresh sketches: everyday causes, material behavior, and recovery in daily life. These new candidates are not yet approved.

Mote Lab is a temporary name. The project is independent of The Council / Intuition Lab. Do not change that other repository.

## Location and hosting

- Persistent checkout: `/Users/emanuelapple/Desktop/Mote Lab`.
- Repo: https://github.com/eman2XR/mote-7c4e9b2a
- Website: https://eman2xr.github.io/mote-7c4e9b2a/
- Branch: `main`; GitHub Pages uses `.github/workflows/pages.yml`.
- Only `site/` deploys. Both repository and site are public.

## Current routes

| Route | Purpose |
| --- | --- |
| `/` | Memory plus three new research sketches, with SVG explanations |
| `/research/` | Memory: follow an object, recognize an event, preserve evidence and uncertainty |
| `/memory/` | Scripted answers about a generated kitchen scene |
| `/data/` | Sample research record, correction, simulated gaze, local JSON export |

Rejected concepts are archived in `docs/archived-concepts/`, not published. The archived HTML has historical relative links and is not maintained as a standalone site.

## Implementation

Buildless HTML/CSS/JS; no packages, API keys, paid services, backend, or collection. `site/assets/site.css` is the original shared styling; `memory.css` adds the visual sketchbook layouts. `site.js` implements only the memory/data demos. SVG assets are original code-authored diagrams; `ASSETS.md` records provenance.

The homepage's illustrative faults, fabric behavior, and hand movements are not experimental results. The photo is generated. All memory answers are scripted. Data notebook feedback stays in page memory; downloads contain only the demo record. Gaze is simulated. No models are trained and no actual research dataset exists.

## Continue

1. Let the owner react to the new ideas before elaborating or implementing studies.
2. Preserve memory as the main direction unless the owner changes it.
3. Use concrete visual examples for replacement ideas. Avoid simply renaming previously rejected areas.
4. Keep research claims proportional to evidence and distinguish proposed work from existing publications.
5. Update this handoff when direction changes. Do not restore the deleted Council experiment.

## Checks

```sh
python3 scripts/check_site.py
node --check site/assets/site.js
```

The owner explicitly asked to stop mobile testing and functional polish. Run basic source checks when editing, and use a brief desktop look only if it helps judge the visual idea. Do not add application features or extensive tests.

## Current completion status

Four-page local source checks pass, JavaScript syntax passes, and SVG files parse. Earlier desktop SVG layouts were inspected. The final three candidate sketches have not received additional browser QA, per the owner's request to focus on ideas. The checkout was moved to the Desktop path above. First publication succeeded in GitHub Actions run 41389761694 at commit 5bc910d. The live site is available at the URL above. The temporary local preview server was stopped; restart it from this checkout when needed.

## Local Git setup

This personal repository uses the eman2XR GitHub noreply identity. Local Git settings override inherited work X.509 signing and hook-path settings; global work settings were not changed.
