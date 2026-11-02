'use strict';

(() => {
  const page = document.body.dataset.page;
  const questions = {
    keys: 'Where did I leave my keys?',
    charger: 'Did I pack my charger?',
    coffee: 'Where did I leave my coffee?',
    headphones: 'Where are my headphones?'
  };
  const memories = {
    keys: {
      status: 'LAST SEEN · 08:42', title: 'On the kitchen table.',
      body: 'Your keys were last seen near the notebook, with the green key fob. That’s where this sample shows them; they could have moved afterward.',
      evidence: 'The keys and green key fob are visible beside the notebook in this sample frame.', target: 'keys'
    },
    charger: {
      status: 'VISIBLE · 08:42', title: 'There’s a charger in the tote.',
      body: 'A white charger and cable are visible at the opening of the bag. This frame can’t confirm whether they stayed there or whether you took the bag with you.',
      evidence: 'A white charger and coiled cable are visible inside the open tote. Later events weren’t recorded.', target: 'charger'
    },
    coffee: {
      status: 'LAST SEEN · 08:42', title: 'A slow morning, on the table.',
      body: 'Your terracotta mug is on the kitchen table, just above the notebook. The picture doesn’t tell us the brand of coffee or whether you finished it.',
      evidence: 'A terracotta mug is visible on the left side of the table. The coffee’s brand and later state aren’t known.', target: 'coffee'
    },
    coffee_detail: {
      status: 'DETAIL NOT OBSERVED', title: 'That detail isn’t in the picture.',
      body: 'The scene shows a mug of coffee, but no label or preparation history. I can’t identify the brand, ingredients, or how it was made from this sample.',
      evidence: 'The mug is visible, but this frame contains no evidence about the coffee’s brand or ingredients.', target: 'coffee'
    },
    headphones: {
      status: 'NOT OBSERVED', title: 'I didn’t see your headphones.',
      body: 'They aren’t visible in this sample. I can’t tell you where they are. A useful assistant should leave that question open instead of inventing a location.', target: null
    },
    unknown: {
      status: 'OUTSIDE THIS SAMPLE', title: 'I don’t have a moment for that.',
      body: 'This is a small scripted demo about keys, a charger, coffee, and missing headphones. Try one of those to explore how an answer connects to evidence.', target: null
    }
  };

  if (page === 'memory') {
    const userQuestion = document.getElementById('user-question');
    const status = document.getElementById('answer-status');
    const title = document.getElementById('answer-title');
    const body = document.getElementById('answer-body');
    const answer = document.querySelector('.assistant-answer');
    const evidenceButton = document.getElementById('show-evidence');
    const caption = document.getElementById('evidence-caption');
    const evidencePanel = document.getElementById('scene-evidence');
    const input = document.getElementById('memory-question');

    function clearMarkers() {
      document.querySelectorAll('[data-object]').forEach(button => button.setAttribute('aria-pressed', 'false'));
      evidencePanel.classList.remove('is-highlighted');
    }
    function ask(key, question) {
      const memory = memories[key] || memories.unknown;
      userQuestion.textContent = question || questions[key] || 'Tell me about this scene.';
      userQuestion.hidden = false;
      status.textContent = memory.status;
      title.textContent = memory.title;
      body.textContent = memory.body;
      answer.dataset.tone = memory.target ? 'known' : 'unknown';
      evidenceButton.hidden = !memory.target;
      clearMarkers();
      caption.textContent = memory.evidence || 'This frame does not provide evidence to answer that question.';
      if (memory.target) {
        document.querySelectorAll(`[data-object="${memory.target}"]`).forEach(button => button.setAttribute('aria-pressed', 'true'));
      }
    }
    function classify(question) {
      if (/\b(key|keys|keyring|keyfob)\b/i.test(question)) return 'keys';
      if (/\b(charger|adapter|adaptor|cable|tote|bag)\b/i.test(question)) return 'charger';
      if (/\b(coffee|mug|cup)\b/i.test(question)) {
        return /\b(which|brand|kind|type|ingredients|milk|sugar|made|inside)\b/i.test(question) ? 'coffee_detail' : 'coffee';
      }
      if (/\b(headphones?|earbuds?|airpods?)\b/i.test(question)) return 'headphones';
      return 'unknown';
    }
    document.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => ask(button.dataset.question)));
    document.querySelectorAll('[data-object]').forEach(button => button.addEventListener('click', () => ask(button.dataset.object)));
    document.getElementById('memory-form').addEventListener('submit', event => {
      event.preventDefault();
      const question = input.value.trim();
      if (!question) { input.focus(); return; }
      ask(classify(question), question);
      input.value = '';
    });
    evidenceButton.addEventListener('click', () => {
      evidencePanel.classList.add('is-highlighted');
      evidencePanel.focus({preventScroll: true});
      evidencePanel.scrollIntoView({block: 'nearest', behavior: 'auto'});
    });
    document.getElementById('reset-memory').addEventListener('click', () => {
      userQuestion.hidden = true;
      userQuestion.textContent = '';
      status.textContent = 'LET’S TRY A MOMENT';
      title.textContent = 'What’s on your mind?';
      body.textContent = 'Ask about something in this scene. I’ll show you what’s visible, and tell you when I don’t have an answer.';
      delete answer.dataset.tone;
      evidenceButton.hidden = true;
      caption.textContent = 'A small moment, with a few things worth remembering.';
      input.value = '';
      clearMarkers();
      const url = new URL(location.href);
      url.searchParams.delete('ask');
      history.replaceState(null, '', url);
    });
    const requested = new URLSearchParams(location.search).get('ask');
    if (Object.hasOwn(questions, requested)) ask(requested);
  }

  if (page === 'data') {
    const originalAnswer = 'Your keys were last seen on the kitchen table, near your notebook.';
    const record = {
      schema_version: '0.1',
      sample_id: 'mote-kitchen-001',
      provenance: {
        scene: 'AI-generated illustration',
        interaction: 'scripted concept demonstration',
        contains_real_personal_data: false,
        training_consent: false
      },
      moment: {
        scene_asset: 'morning-scene.jpg',
        time_label: 'Sample morning, 08:42',
        place: 'Kitchen table',
        object: 'keys with green key fob',
        object_center_normalized: {x: 0.59, y: 0.63},
        temporal_scope: 'Observed in this frame only; current location unknown'
      },
      question: questions.keys,
      proposed_answer: originalAnswer,
      review: {status: 'unreviewed', corrected_answer: null, independently_verified: false},
      gaze: null
    };
    const reviewLabel = document.getElementById('record-review');
    const feedback = document.getElementById('feedback-message');
    const correctionForm = document.getElementById('correction-form');
    const correction = document.getElementById('correction-text');
    const sampleAnswer = document.getElementById('sample-answer');
    const renderRecord = () => { document.getElementById('record-json').textContent = JSON.stringify(record, null, 2); };
    document.getElementById('confirm-sample').addEventListener('click', () => {
      record.review = {status: 'confirmed_in_demo', corrected_answer: null, independently_verified: false};
      sampleAnswer.textContent = originalAnswer;
      reviewLabel.textContent = 'Confirmed in this demo';
      reviewLabel.classList.add('reviewed');
      feedback.textContent = 'Your confirmation is attached to this sample. No data was uploaded.';
      feedback.classList.add('is-reviewed');
      correctionForm.hidden = true;
      renderRecord();
    });
    document.getElementById('correct-sample').addEventListener('click', () => {
      correctionForm.hidden = false;
      correction.value = record.review.corrected_answer || '';
      correction.focus();
    });
    document.getElementById('cancel-correction').addEventListener('click', () => { correctionForm.hidden = true; });
    correctionForm.addEventListener('submit', event => {
      event.preventDefault();
      const text = correction.value.trim();
      if (!text) { correction.focus(); return; }
      record.review = {status: 'correction_added', corrected_answer: text, independently_verified: false};
      sampleAnswer.textContent = text;
      reviewLabel.textContent = 'Correction added';
      reviewLabel.classList.add('reviewed');
      feedback.textContent = 'Your correction is attached to this sample. It has not been independently verified.';
      feedback.classList.add('is-reviewed');
      correctionForm.hidden = true;
      renderRecord();
    });
    document.getElementById('include-gaze').addEventListener('change', event => {
      record.gaze = event.target.checked ? {
        source: 'simulated, not measured',
        normalized_point: {x: 0.59, y: 0.63},
        duration_ms: 430,
        intent_inferred: false
      } : null;
      document.getElementById('record-gaze').textContent = event.target.checked ? 'Simulated fixation on keys' : 'Not included';
      document.getElementById('gaze-explanation').hidden = !event.target.checked;
      renderRecord();
    });
    document.getElementById('export-record').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(record, null, 2) + '\n'], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      const download = document.createElement('a');
      download.href = url;
      download.download = 'mote-sample-record.json';
      document.body.appendChild(download);
      download.click();
      download.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      document.getElementById('export-status').textContent = 'The sample JSON download has started.';
    });
    renderRecord();
  }
})();
