# Mote Lab — agent entry point

Read `docs/HANDOFF.md` before continuing. This project is independent of The Council / Intuition Lab. Do not modify or deploy that other repository while working here.

## User intent

The owner is exploring a research-lab business using their AI, AR, and VR background. They want simple visual concept pages to judge which ideas are worth pursuing. Mote Lab is a temporary name. The owner selected three research areas: everyday memory, learning to learn, and input (alternatives to voice for AI interaction). The unfamiliar-world laboratory is the first proposed study within learning to learn, not the name of the whole program. Remove other research areas from the published site.

The owner clarified that paying customers are not the current priority. They want useful research that addresses real problems. Data licensing is a possible business model. Do not turn this into a collection of consumer startup pitches or insist on a subscription product. Read `docs/RESEARCH_DIRECTION.md` for the current thesis.

## Visual direction

Minimal research studio: white backgrounds, bold sans-serif typography, thin dividers, generous spacing. Memory uses blue, Learning to learn orange, Input purple. `studio.css` owns the visual system. Prefer simple original SVG explanations and concise content with expandable study details. Daily research automation is paused at the user’s request; redesign is separately authorized.

## Latest scope

This is idea brainstorming. Prioritize original SVG explanations and useful research questions; do not spend time making every interaction work perfectly. Rejected ideas are listed in `docs/RESEARCH_DIRECTION.md`.

## Working constraints

- Keep README minimal, with no project description or website link. Keep repository About description and homepage blank. The owner wants low discoverability; do not restore promotional metadata.

- Keep concept pages clear, visual, and modest in scope. Avoid overbuilding applications or adding infrastructure before a direction is chosen.
- Use the existing free GitHub Pages setup. Do not add paid hosting, API usage, or services without a new user request.
- Distinguish concept sketches, scripted prototypes, proposed studies, and measured results. No real dataset or learning agent exists in this repo yet.
- Do not collect camera, microphone, eye tracking, personal data, or telemetry as part of these static demos.
- Preserve the static, dependency-free HTML/CSS/JS approach unless requirements justify a change.
- All asset and navigation URLs must work under the project path `/mote-7c4e9b2a/`; avoid root-absolute paths.
- Preserve accessibility: keyboard controls, visible focus, image descriptions, input labels, and reduced-motion support.
- Ship only the `site/` directory. Keep raw participant recordings, keys, local logs, and private material out of this public repo.

## Validation

Run `python3 scripts/check_site.py` and `node --check site/assets/site.js`. The owner explicitly asked to stop mobile testing and functional polish. Use at most a brief desktop look when it helps evaluate the visual idea. Do not add tests that merely repeat the implementation.

## Handoff

Update `docs/HANDOFF.md` after changing direction, behavior, deployment status, or known limitations. Keep live routes accurate; preserve the deliberately minimal README.
