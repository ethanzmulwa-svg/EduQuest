document.addEventListener('DOMContentLoaded', () => {
  // 🔑 OPTIONAL: Paste your free Gemini API key below for live AI answers to ALL subjects & real-world problems!
  // Get one for free at: https://aistudio.google.com/
  const GEMINI_API_KEY = "";

  // --- SDG 4 Target Matrix Data ---
  const sdgTargets = [
    "Target 4.1: Ensure all girls and boys complete free, equitable, and quality primary and secondary education.",
    "Target 4.2: Ensure access to quality early childhood development, care, and pre-primary education.",
    "Target 4.3: Ensure equal access for all women and men to affordable and quality technical, vocational, and tertiary education.",
    "Target 4.4: Substantially increase the number of youth and adults with relevant skills for employment and entrepreneurship.",
    "Target 4.5: Eliminate gender disparities in education and ensure equal access for vulnerable populations.",
    "Target 4.6: Ensure that all youth and a substantial proportion of adults achieve literacy and numeracy.",
    "Target 4.7: Ensure all learners acquire knowledge and skills needed to promote sustainable development."
  ];

  let currentFactIndex = 0;
  const sdgFactElem = document.getElementById('sdg-fact');
  const nextFactBtn = document.getElementById('next-fact-btn');

  function updateSdgFact() {
    if (sdgFactElem) sdgFactElem.textContent = sdgTargets[currentFactIndex];
  }
  updateSdgFact();

  if (nextFactBtn) {
    nextFactBtn.addEventListener('click', () => {
      currentFactIndex = (currentFactIndex + 1) % sdgTargets.length;
      updateSdgFact();
    });
  }

  // --- Voice Synthesis Engine ---
  function speakText(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/<[^>]*>?/gm, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  }

  // --- UI Helpers ---
  const chatLog = document.getElementById('ai-response-log');
  const queryForm = document.getElementById('ai-query-form');
  const queryInput = document.getElementById('ai-input');

  function appendMessage(sender, content, type = 'user') {
    const bubble = document.createElement('div');
    bubble.className = `ai-bubble ${type}`;
    
    if (type === 'user') {
      bubble.innerHTML = `<strong>You:</strong> ${escapeHTML(content)}`;
    } else {
      bubble.innerHTML = `<strong>${sender}:</strong> ${content}`;
    }

    chatLog.appendChild(bubble);
    chatLog.scrollTop = chatLog.scrollHeight;
    return bubble;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag] || tag));
  }

  // --- MAKE PROMPT SHORTCUTS CLICKABLE ---
  const promptList = document.querySelector('.prompt-list');
  if (promptList) {
    promptList.addEventListener('click', (e) => {
      const codeTarget = e.target.closest('code');
      if (codeTarget && queryInput) {
        queryInput.value = codeTarget.textContent.trim();
        queryInput.focus();
      }
    });
  }

  // --- LOCAL STEP-BY-STEP MATH SOLVER (Shows Working) ---
  function solveMathWithSteps(expr) {
    let current = expr.trim();
    let steps = [];
    let maxIterations = 10;
    let iteration = 0;

    while (iteration < maxIterations) {
      iteration++;
      
      // Step 1: Parentheses
      let parenMatch = current.match(/\(([^()]+)\)/);
      if (parenMatch) {
        let innerExpr = parenMatch[1];
        let subVal = evalSimple(innerExpr);
        if (subVal === null) break;
        steps.push(`Evaluate expression inside brackets: <code>(${escapeHTML(innerExpr)})</code> = <code>${subVal}</code>`);
        current = current.replace(parenMatch[0], subVal);
        continue;
      }

      // Step 2: Multiplication and Division
      let mdMatch = current.match(/(-?\d+(?:\.\d+)?)\s*([*\/])\s*(-?\d+(?:\.\d+)?)/);
      if (mdMatch) {
        let [full, n1, op, n2] = mdMatch;
        let res = op === '*' ? parseFloat(n1) * parseFloat(n2) : parseFloat(n1) / parseFloat(n2);
        steps.push(`Perform ${op === '*' ? 'multiplication' : 'division'}: <code>${full}</code> = <code>${res}</code>`);
        current = current.replace(full, res);
        continue;
      }

      // Step 3: Addition and Subtraction
      let asMatch = current.match(/(-?\d+(?:\.\d+)?)\s*([\+-])\s*(-?\d+(?:\.\d+)?)/);
      if (asMatch) {
        let [full, n1, op, n2] = asMatch;
        let res = op === '+' ? parseFloat(n1) + parseFloat(n2) : parseFloat(n1) - parseFloat(n2);
        steps.push(`Perform ${op === '+' ? 'addition' : 'subtraction'}: <code>${full}</code> = <code>${res}</code>`);
        current = current.replace(full, res);
        continue;
      }

      break;
    }

    return { steps, finalResult: current };
  }

  function evalSimple(expr) {
    try {
      return Function(`"use strict"; return (${expr})`)();
    } catch (e) {
      return null;
    }
  }

  // --- MENTAL HEALTH INTENT CHECKER ---
  function checkMentalHealthIntent(input) {
    const text = input.toLowerCase();
    const mentalHealthKeywords = [
      'anxiety', 'depressed', 'depression', 'stressed', 'stress', 'lonely', 
      'overwhelmed', 'burnout', 'mental health', 'sad', 'panic attack', 'grief', 'self-care'
    ];

    return mentalHealthKeywords.some(keyword => text.includes(keyword));
  }

  // --- MAIN MULTI-SUBJECT & REAL-WORLD PIPELINE ---
  async function processQuery(input) {
    const trimmedInput = input.trim();
    const voiceMode = document.querySelector('input[name="ai-mode"]:checked')?.value === 'voice';

    // 1. PURE MATHEMATICAL EXPRESSION (e.g., ((34 + 6) * 5) / 2)
    const isPureMath = /^[\d\s\+\-\*\/\(\)\.\^]+$/.test(trimmedInput);
    if (isPureMath) {
      const { steps, finalResult } = solveMathWithSteps(trimmedInput);

      let stepOutput = `<div class="math-working">`;
      stepOutput += `<p><strong>Step-by-Step Calculation Working:</strong></p><ol>`;
      steps.forEach(step => stepOutput += `<li>${step}</li>`);
      stepOutput += `</ol><p><strong>Final Answer:</strong> <code>${finalResult}</code></p></div>`;

      appendMessage('Manus Exec Core', stepOutput, 'agent-manus');
      if (voiceMode) speakText(`The calculated result is ${finalResult}`);
      return;
    }

    // 2. DETECT MENTAL HEALTH / EMOTIONAL WELLBEING TOPICS
    const isMentalHealth = checkMentalHealthIntent(trimmedInput);

    // 3. ROUTE TO UNIVERSAL AI AGENT (Gemini API or Dynamic Fallback)
    const loadingBubble = appendMessage('EduQuest AI', '<em>Analyzing query and synthesizing context-specific guidance...</em>', 'agent-gemini');

    if (GEMINI_API_KEY) {
      try {
        let systemPrompt = "";
        
        if (isMentalHealth) {
          systemPrompt = `You are EduQuest AI, a compassionate and supportive educational assistant.\n` +
            `User Query: "${trimmedInput}"\n\n` +
            `INSTRUCTIONS:\n` +
            `- Respond with empathy, warmth, and validation.\n` +
            `- Provide tailored, practical coping strategies and specific suggestions addressing the exact concern mentioned.\n` +
            `- Clarify that you are an AI assistant and not a medical professional.\n` +
            `- Format cleanly using standard HTML markup (<h3>, <p>, <ul>, <li>).`;
        } else {
          systemPrompt = `You are EduQuest AI, a universal problem solver and tutor supporting SDG 4 Quality Education.\n` +
            `User Query: "${trimmedInput}"\n\n` +
            `INSTRUCTIONS:\n` +
            `- Provide SPECIFIC, highly relevant answers and suggestions directly answering what was asked (avoid generic fillers).\n` +
            `- For calculations or math word problems: Show explicit step-by-step working before giving the final answer.\n` +
            `- For real-world issues (climate, policy, personal productivity, career, etc.): Break down practical solutions and actionable steps.\n` +
            `- Format cleanly using standard HTML markup (<h3>, <p>, <ul>, <li>, <code>).`;
        }

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt }] }]
          })
        });

        const data = await response.json();
        const aiAnswer = data.candidates?.[0]?.content?.parts?.[0]?.text || "Unable to retrieve response.";
        
        loadingBubble.innerHTML = `<strong>${isMentalHealth ? 'EduQuest Support Agent' : 'EduQuest Universal Agent'}:</strong><br/>${aiAnswer}`;
        if (voiceMode) speakText(aiAnswer);
      } catch (err) {
        loadingBubble.innerHTML = `<strong>System Notice:</strong> Connection error. Unable to reach live AI endpoint.`;
      }
    } else {
      // Offline / Local Dynamic Fallback
      setTimeout(() => {
        let content = "";
        let agentName = "EduQuest Universal Agent";

        if (isMentalHealth) {
          agentName = "EduQuest Wellbeing Assistant";
          content = `<h3>Support & Guidance for "${escapeHTML(trimmedInput)}"</h3>` +
                    `<p>Dealing with stress or mental pressure can feel heavy, but taking it step-by-step makes a big difference.</p>` +
                    `<p><strong>Specific Actionable Suggestions:</strong></p>` +
                    `<ul>` +
                    `<li><strong>Break tasks down:</strong> Divide your current focus into tiny, 5-minute chunks to lower mental load.</li>` +
                    `<li><strong>Grounding practice:</strong> Try the 5-4-3-2-1 technique (notice 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste).</li>` +
                    `<li><strong>Reach out:</strong> Consider speaking with a trusted friend, counselor, or health professional.</li>` +
                    `</ul>` +
                    `<p><small><em>Note: For full real-time conversations, insert a free Gemini API key into script.js.</em></small></p>`;
        } else {
          content = `<h3>Real-World Solution & Analysis</h3>` +
                    `<p>Here is a breakdown for your query regarding <strong>"${escapeHTML(trimmedInput)}"</strong>:</p>` +
                    `<ul>` +
                    `<li><strong>Key Challenge:</strong> Identifying core constraints and objectives.</li>` +
                    `<li><strong>Recommended Solution:</strong> Apply systematic problem-solving steps tailored to this specific scenario.</li>` +
                    `</ul>` +
                    `<p><small><em>Tip: Add a free Gemini API key to <code>script.js</code> for instant live answers to real-world questions!</em></small></p>`;
        }

        loadingBubble.innerHTML = `<strong>${agentName}:</strong><br/>${content}`;
        if (voiceMode) speakText("Response processed.");
      }, 400);
    }
  }

  // --- Form Listener ---
  if (queryForm) {
    queryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userText = queryInput.value.trim();
      if (!userText) return;

      appendMessage('You', userText, 'user');
      queryInput.value = '';

      processQuery(userText);
    });
  }

  // --- Session Export/Import ---
  const exportBtn = document.getElementById('export-btn');
  const importFileInput = document.getElementById('import-file');

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const messages = [];
      chatLog.querySelectorAll('.ai-bubble').forEach(bubble => {
        messages.push({ className: bubble.className, htmlContent: bubble.innerHTML });
      });

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(messages, null, 2));
      const anchor = document.createElement('a');
      anchor.setAttribute("href", dataStr);
      anchor.setAttribute("download", `eduquest_session_${Date.now()}.json`);
      anchor.click();
      anchor.remove();
    });
  }

  if (importFileInput) {
    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported)) {
            chatLog.innerHTML = '';
            imported.forEach(msg => {
              const bubble = document.createElement('div');
              bubble.className = msg.className || 'ai-bubble system';
              bubble.innerHTML = msg.htmlContent || '';
              chatLog.appendChild(bubble);
            });
            chatLog.scrollTop = chatLog.scrollHeight;
          }
        } catch (err) {
          alert('Invalid session JSON file.');
        }
      };
      reader.readAsText(file);
    });
  }
});
