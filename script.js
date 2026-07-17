// Educational Knowledge Routing Matrix
const sdgFacts = [
  "Target 4.1: Ensure that all girls and boys complete free, equitable, and quality primary and secondary education.",
  "Target 4.4: Substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills.",
  "Target 4.6: Ensure that all youth and a substantial proportion of adults achieve literacy and numeracy.",
  "Target 4.a: Build and upgrade education facilities that are child, disability, and gender sensitive."
];

// App State Core Variables
let chatHistory = [];
let currentFactIndex = 0;

// DOM Selectors
const sdgFactEl = document.getElementById('sdg-fact');
const nextFactBtn = document.getElementById('next-fact-btn');
const exportBtn = document.getElementById('export-btn');
const importFileInput = document.getElementById('import-file');

// AI Assistant UI DOM Selectors
const aiQueryForm = document.getElementById('ai-query-form');
const aiInput = document.getElementById('ai-input');
const aiResponseLog = document.getElementById('ai-response-log');

document.addEventListener('DOMContentLoaded', () => {
  loadHistory();
  showFact(0);

  nextFactBtn.addEventListener('click', cycleFact);
  exportBtn.addEventListener('click', exportHistoryToJSON);
  importFileInput.addEventListener('change', importHistoryFromJSON);

  // Bind AI Engine Submission Form
  aiQueryForm.addEventListener('submit', handleAiQuery);
});

/* Session Persistence Routines */
function loadHistory() {
  const savedLogs = localStorage.getItem('eduquest_chat_history');
  if (savedLogs) {
    try {
      chatHistory = JSON.parse(savedLogs);
      // Re-populate the panel with saved blocks
      chatHistory.forEach(msg => {
        appendChatBubble(msg.text, msg.type, false);
      });
    } catch (e) {
      chatHistory = [];
    }
  }
}

function saveHistory() {
  localStorage.setItem('eduquest_chat_history', JSON.stringify(chatHistory));
}

function showFact(index) { sdgFactEl.textContent = sdgFacts[index]; }
function cycleFact() { currentFactIndex = (currentFactIndex + 1) % sdgFacts.length; showFact(currentFactIndex); }

/* 
  ======================================================
  EDUQUEST AI ASSISTANT & HEURISTIC KNOWLEDGE LOADER ENGINE 
  ======================================================
*/
function handleAiQuery(e) {
  e.preventDefault();
  const queryText = aiInput.value.trim();
  if (!queryText) return;

  // Append user bubble message instance
  appendChatBubble(queryText, 'user', true);
  aiInput.value = '';

  // Process Heuristic Academic Inference Routing
  setTimeout(() => {
    const responseText = processAcademicInference(queryText);
    appendChatBubble(responseText, 'ai-reply', true);
    executeVoiceAutomationIfSelected(responseText);
  }, 400);
}

function appendChatBubble(text, className, shouldSave = true) {
  const bubble = document.createElement('div');
  bubble.className = `ai-bubble ${className}`;
  bubble.innerHTML = text;

  aiResponseLog.appendChild(bubble);
  aiResponseLog.scrollTop = aiResponseLog.scrollHeight;

  if (shouldSave) {
    chatHistory.push({ text: text, type: className });
    saveHistory();
  }
}

// Math, Logic & General Homework Heuristic Parser Matrix
function processAcademicInference(input) {
  const cleanInput = input.toLowerCase().trim();

  // 1. Core Mathematical Operations Routing (Evaluates basic arithmetic string blocks cleanly)
  if (/^[0-9+\-*/().\s]+$/.test(cleanInput) && /[\+\-\*\/]/.test(cleanInput)) {
    try {
      const result = Function(`"use strict"; return (${cleanInput})`)();
      return `<strong>Mathematical Computation Matrix:</strong><br/>Equation: <code>${input}</code><br/>Analysis Result = <strong>${result}</strong>`;
    } catch (err) {
      return `<strong>Mathematical Processing Error:</strong> Found equation characters but formatting was irregular. Try <code>(45 * 2) + 100</code>.`;
    }
  }

  // 2. Standard Mathematical Keyword Checks
  if (cleanInput.includes("absolute value")) {
    const numbers = input.match(/-?\d+/);
    if (numbers) {
      return `<strong>Math Concept Analysis:</strong> The absolute value of <code>${numbers[0]}</code> is written as $|${numbers[0]}|$, which equals <strong>${Math.abs(Number(numbers[0]))}</strong> (the distance from 0).`;
    }
  }

  if (cleanInput.includes("square root")) {
    const numbers = input.match(/\d+/);
    if (numbers) {
      return `<strong>Math Concept Analysis:</strong> The square root of <code>${numbers[0]}</code> is $\\sqrt{${numbers[0]}} \\approx$ <strong>${Math.sqrt(Number(numbers[0])).toFixed(4)}</strong>.`;
    }
  }

  // 3. Logical Dilemmas and Propositions Processing
  if (cleanInput.includes("if") && (cleanInput.includes("then") || cleanInput.includes("true") || cleanInput.includes("false"))) {
    return `<strong>Logical Proposition Analysis:</strong> This follows a conditional formatting ($P \\rightarrow Q$). To solve this logic homework task, isolate the *antecedent* condition ($P$) from the *consequent* outcome ($Q$). If $P$ is false, the implication statement defaults to true under formal deductive principles.`;
  }

  if (cleanInput.includes("paradox")) {
    return `<strong>Logical Paradox Analysis:</strong> Paradoxes occur when a statement uses self-referential rules to contradict its own premise (e.g., "This statement is false"). Resolving these arguments requires parsing the statement via dynamic metadata layers outside standard true/false constraints.`;
  }

  // 4. Photosynthesis and General Science Homework Queries
  if (cleanInput.includes("photosynthesis")) {
    return `<strong>Science Homework Project Breakdown:</strong><br/>Photosynthesis is the structural metabolic pathway green plants use to transform daylight energy into bio-chemical fuel.<br/>Balanced chemical equation summary:<br/>$$6CO_2 + 6H_2O \\xrightarrow{\\text{Light}} C_6H_{12}O_6 + 6O_2$$`;
  }

  if (cleanInput.includes("gravity") || cleanInput.includes("physics")) {
    return `<strong>Physics Analysis:</strong> Uniform gravitational attraction rate on Earth behaves at acceleration constant $g \\approx 9.8\\text{ m/s}^2$. Free fall calculations balance kinematic formulas cleanly by checking initial velocity arrays.`;
  }

  // 5. SDG 4 & Educational Policy Queries
  if (cleanInput.includes("sdg 4") || cleanInput.includes("education")) {
    return `<strong>SDG 4 Project Framework Context:</strong> United Nations Sustainable Development Goal 4 focuses directly on scaling absolute literacy, creating safe physical study spaces, and providing global open-access micro-learning ecosystems.`;
  }

  // 6. Real-World & Generic Academic Backup Response
  return `<strong>Academic Synthesis Engine Response:</strong><br/>Analysis: I have parsed your educational project question regarding "${input}". To approach this task systematically, organize your fundamental research parameters, document your initial assertions, and utilize this summary section inside your active assignment outline.`;
}

// Speech Synthesis Native Voice Loop
function executeVoiceAutomationIfSelected(textToSpeak) {
  const selectedMode = document.querySelector('input[name="ai-mode"]:checked').value;
  if (selectedMode !== 'voice') return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Halt existing sentences
    const cleanSpeechString = textToSpeak.replace(/<[^>]*>/g, '').replace(/\$/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanSpeechString);
    window.speechSynthesis.speak(utterance);
  }
}

// Data Backups: Export Chat Log History array
function exportHistoryToJSON() {
  if (chatHistory.length === 0) return alert("Your current log is empty.");
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(chatHistory, null, 2));
  const anchor = document.createElement('a');
  anchor.setAttribute("href", dataStr);
  anchor.setAttribute("download", "eduquest_assistant_session.json");
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

// Data Backups: Import Chat Log History array
function importHistoryFromJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const parsed = JSON.parse(event.target.result);
      if (Array.isArray(parsed)) {
        chatHistory = parsed;
        saveHistory();
        
        // Wipe UI log and populate newly loaded history rows
        aiResponseLog.innerHTML = '';
        chatHistory.forEach(msg => appendChatBubble(msg.text, msg.type, false));
        alert("Session log uploaded cleanly!");
      }
    } catch (err) { alert("Invalid session data format."); }
    importFileInput.value = '';
  };
  reader.readAsText(file);
}
