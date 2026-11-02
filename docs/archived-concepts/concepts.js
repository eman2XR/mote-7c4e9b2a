'use strict';
(() => {
  const page = document.body.dataset.page;
  if (page === 'learning') {
    const states = [
      {title:'A world with unfamiliar rules.',description:'The probe can move and observe. What would it try first?',position:'112 286',path:'M112 286 Q200 300 280 273'},
      {title:'An observation: the probe moves away.',description:'In this imagined trial, the probe is pushed away from the blue region. One observation is a clue, not a complete rule.',position:'300 120',path:'M242 144 Q270 126 300 120'},
      {title:'A prediction for a new position.',description:'Hypothesis: the blue region repels. From a position below it, the probe should move downward. The dashed line is the prediction.',position:'200 215',path:'M200 215 L200 301'},
      {title:'Compare the prediction with an outcome.',description:'This scripted example matches the prediction. A real agent would need more trials, changed layouts, and cases that could disprove its rule.',position:'200 301',path:'M200 215 L200 301'}
    ];
    document.querySelectorAll('[data-world-step]').forEach(button => button.addEventListener('click', () => {
      const state = states[Number(button.dataset.worldStep)];
      document.querySelectorAll('[data-world-step]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.getElementById('world-title').textContent = state.title;
      document.getElementById('world-description').textContent = state.description;
      document.getElementById('world-agent').setAttribute('transform', `translate(${state.position})`);
      document.getElementById('probe-path').setAttribute('d',state.path);
    }));
  }
  if (page === 'science') {
    const range = document.getElementById('illustrated-mass');
    const updateDiagram = () => {
      const value = Number(range.value);
      document.getElementById('mass-label').textContent = value < 34 ? 'Low' : value > 66 ? 'High' : 'Medium';
      document.getElementById('diagram-star').setAttribute('r',String(25 + value * .22));
      document.querySelectorAll('.light-ray').forEach(path => {
        const y = Number(path.dataset.height);
        const bend = (y < 195 ? 1 : -1) * value * .48;
        path.setAttribute('d',`M0 ${y} C210 ${y} 290 ${y} 370 ${y+bend} S530 ${y+bend*1.6} 600 ${y+bend*1.85}`);
      });
    };
    range.addEventListener('input',updateDiagram);
    updateDiagram();
    const steps = {
      question:['Start with something specific.','For example: why does light change direction near a star? Separate an established explanation from any proposed new hypothesis.'],
      research:['Gather evidence and name the assumptions.','Find reliable sources, identify which physical model applies, and record the limits of that model. A useful explanation needs more than a plausible story.'],
      challenge:['Make room for the strongest objection.','Check predictions, limiting cases, and conflicting evidence. An independent reviewer should be able to reject the explanation. Stop at the revision or cost limit.'],
      explain:['Make the idea visible, then inspect it.','Create the visual guide, review the actual rendered output, and revise unclear or misleading scenes. Publish only after the defined checks pass; otherwise retain a draft.']
    };
    document.querySelectorAll('[data-science-step]').forEach(button => button.addEventListener('click', () => {
      const step = steps[button.dataset.scienceStep];
      document.querySelectorAll('[data-science-step]').forEach(item => item.setAttribute('aria-pressed',String(item === button)));
      document.getElementById('loop-title').textContent = step[0];
      document.getElementById('loop-description').textContent = step[1];
    }));
  }
  if (page === 'attention') {
    let target = 'keys';
    const points = {keys:{x:59,y:63,label:'The keys are a candidate.'},coffee:{x:36.5,y:40,label:'The mug is a candidate.'},charger:{x:84,y:54,label:'The charger is a candidate.'}};
    const toggle = document.getElementById('attention-gaze');
    const point = document.getElementById('gaze-point');
    const update = () => {
      const selected = points[target];
      point.hidden = !toggle.checked;
      point.style.left = selected.x + '%';
      point.style.top = selected.y + '%';
      document.getElementById('attention-title').textContent = toggle.checked ? selected.label : 'Several objects could be “that.”';
      document.getElementById('attention-description').textContent = toggle.checked ? 'The simulated gaze supplies a possible reference. The assistant should confirm: “Do you mean this object?” Looking at it alone doesn’t establish intent.' : 'The camera shows the scene, but this example has no clue about which object the person means.';
    };
    document.querySelectorAll('[data-gaze-target]').forEach(button => button.addEventListener('click', () => {
      target = button.dataset.gazeTarget;
      document.querySelectorAll('[data-gaze-target]').forEach(item => item.setAttribute('aria-pressed',String(item === button)));
      update();
    }));
    toggle.addEventListener('change',update);
    update();
  }
})();
