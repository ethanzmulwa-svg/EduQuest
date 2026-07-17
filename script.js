/**
 * EduQuest AI Workspace - Advanced Model Simulation Matrix
 * Orchestrates localized pipelines mirroring ChatGPT, Gemini, and Manus operational profiles.
 */

const sdgTargets = [
  "Target 4.1: Free, equitable, and quality primary/secondary education pipelines globally.",
  "Target 4.4: Substantially scale relevant technical, engineering, and vocational competencies.",
  "Target 4.6: Ensure standard baseline youth literacy and universal logical mathematical mastery.",
  "Target 4.a: Upgrade structural learning environments to fulfill safe, non-violent, inclusive spaces."
];

let chatSessionHistory = [];
let targetMatrixIndex = 0;

// Element Selectors
const sdgFactText = document.getElementById('sdg-fact');
const nextFactBtn = document.getElementById('next-fact-btn');
const exportBtn = document.getElementById('export-btn');
const importFileInput = document.getElementById('import-file');
const aiQueryForm = document.getElementById('ai-query-form');
const aiInput = document.getElementById('ai-input');
const aiResponseLog = document.getElementById('ai-response-log');

document.addEventListener('DOMContentLoaded', () => {
  initializeWorkspace();
  
  nextFactBtn.addEventListener('click', () => {
    targetMatrixIndex = (targetMatrixIndex + 1) % sdgTargets.length;
    sdgFactText.textContent = sdgTargets[targetMatrixIndex];
  });

  exportBtn.addEventListener('click', exportSessionData);
  importFileInput.addEventListener('change', importSessionData);
  aiQueryForm.addEventListener('submit', runUniversalAgentPipeline);
});

function initializeWorkspace() {
  sdgFactText.textContent = sdgTargets[0];
  const storedSession = localStorage.getItem('eduquest_omni_session');
  if (storedSession) {
    try {
      chatSessionHistory = JSON.parse(storedSession);
      chatSessionHistory.forEach(bubble => renderBubbleInstance(bubble.markup, bubble.styleClass, false));
    } catch (e) {
      chatSessionHistory = [];
    }
  }
}

/**
 * CORE EXECUTION LOOP: Multi-Model Inference Multiplexer
 * Intercepts inputs and distributes queries to appropriate engine wrappers.
 */
function runUniversalAgentPipeline(event) {
  event.preventDefault();
  const rawQuery = aiInput.value.trim();
  if (!rawQuery) return;

  // Append user message onto display card
  renderBubbleInstance(rawQuery, 'user', true);
  aiInput.value = '';

  // Trigger parallel asynchronous latency lag simulator
  setTimeout(() => {
    const agentOutputMarkup = evaluateOmniModelInference(rawQuery);
    renderBubbleInstance(agentOutputMarkup, 'ai-reply', true);
    triggerVoiceOutputIfConfigured(agentOutputMarkup);
  }, 450);
}

function renderBubbleInstance(innerContent, styleClass, persistState = true) {
  const containerBubble = document.createElement('div');
  containerBubble.className = `ai-bubble ${styleClass}`;
  containerBubble.innerHTML = innerContent;

  aiResponseLog.appendChild(containerBubble);
  aiResponseLog.scrollTop = aiResponseLog.scrollHeight;

  if (persistState) {
    chatSessionHistory.push({ markup: innerContent, styleClass: styleClass });
    localStorage.setItem('eduquest_omni_session', JSON.stringify(chatSessionHistory));
  }
}

/**
 * COMPILER MATRIX: Dual-Engine Intent Detection Architecture
 * Mimics ChatGPT (Creative/Writing), Gemini (STEM/LaTeX), and Manus (Agentic Tool/Math Execution).
 */
function evaluateOmniModelInference(input) {
  const query = input.toLowerCase().trim();

  // --- ENGINE TYPE A: MANUS DETERMINISTIC REASONING & COMPILING AGENT ---
  // Intent 1: Direct Mathematics String Computation Pipeline Interception
  if (/^[0-9+\-*/().\s]+$/.test(query) && /[\+\-\*\/]/.test(query)) {
    try {
      // Safe sandboxed eval execution mapping
      const computationResult = Function(`"use strict"; return (${query})`)();
      return `
        <span class="agent-header-tag tag-manus">Manus Engine v2.6</span><br/>
        <strong>Agentic Code Sandbox Execution Status: Success (200 OK)</strong><br/>
        <p>Manus intercepted your raw equation, instantiated an internal JavaScript runtime sandbox, compiled the syntax tree, and evaluated the stack values directly:</p>
        <pre>Input String: "${input}"\nTokens Parsed: Arithmetic Expression\nOutput Value: ${computationResult}</pre>
        <p>Final Computed Result = <strong>${computationResult}</strong></p>
      `;
    } catch (err) {
      return `
        <span class="agent-header-tag tag-manus">Manus Engine v2.6</span><br/>
        <strong>Runtime Execution Error:</strong> Compiling failed due to irregular mathematical formatting notation. Verify expression syntax patterns.
      `;
    }
  }

  // Intent 2: Propositional Logic Variables & Structural Truth Values
  if (query.includes("if") && (query.includes("then") || query.includes("true") || query.includes("false"))) {
    return `
      <span class="agent-header-tag tag-manus">Manus Engine v2.6</span><br/>
      <strong>Agent Logic Matrix Routing:</strong><br/>
      <p>Manus has broken down your propositional logic problem into structured truth dependencies:</p>
      <ul class="pipeline-steps">
        <li><strong>Step 1 (Parsing):</strong> Maps statement structures into a formal conditional logic framework ($P \\rightarrow Q$).</li>
        <li><strong>Step 2 (Analysis):</strong> Identifies structural assertions where $P$ acts as the antecedent and $Q$ acts as the subsequent.</li>
        <li><strong>Step 3 (Resolution):</strong> If $P$ evaluates to false, the logical statement becomes vacuously true, regardless of $Q$'s state.</li>
      </ul>
      <p>Current Truth Evaluation Profile: <strong>Validated ($P \\rightarrow Q$)</strong></p>
    `;
  }


  // --- ENGINE TYPE B: GEMINI MULTIMODAL STEM ANALYTICAL MODEL ---
  // Intent 1: Science Projects & Complex Biochemical Formulations
  if (query.includes("photosynthesis") || query.includes("carbon") || query.includes("chemical")) {
    return `
      <span class="agent-header-tag tag-gemini">Gemini Advanced 1.5</span><br/>
      <strong>Analytical STEM Breakdown: Cellular Energy Conversion Pathways</strong><br/>
      <p>Photosynthesis represents a multi-phase biochemical system where autotrophic plant matrices convert electromagnetic spectrum rays into steady chemical bonds ($C_6H_{12}O_6$).</p>
      <p><strong>Balanced Stoichiometric Equation:</strong></p>
      $$6CO_2 + 6H_2O \\xrightarrow{\\text{Photons}} C_6H_{12}O_6 + 6O_2$$
      <p><strong>System Component Arrays:</strong></p>
      <ul class="pipeline-steps">
        <li>Light-Dependent Phase: Occurs within thylakoid membranes, yielding ATP and NADPH.</li>
        <li>Light-Independent Phase (Calvin Cycle): Fixes atmospheric $CO_2$ inside stromal layers.</li>
      </ul>
    `;
  }

  // Intent 2: Advanced Science Concept Values (Absolute Value / Square Roots)
  if (query.includes("absolute value") || query.includes("square root")) {
    const extractedDigits = input.match(/-?\d+/);
    if (extractedDigits) {
      const activeNum = Number(extractedDigits[0]);
      if (query.includes("absolute value")) {
        return `
          <span class="agent-header-tag tag-gemini">Gemini Advanced 1.5</span><br/>
          <strong>Mathematical Core Definition: Absolute Value Matrix</strong><br/>
          <p>The geometric distance constraint of a real scalar value relative to the origin coordinate point ($0$) along a standard 1D number line plane:</p>
          <pre>Notation: |${activeNum}|\nResult: ${Math.abs(activeNum)}</pre>
        `;
      } else {
        if (activeNum < 0) return `<span class="agent-header-tag tag-gemini">Gemini</span> Real-number error: Square roots of negative parameters require imaginary coordinate values ($i$).`;
        return `
          <span class="agent-header-tag tag-gemini">Gemini Advanced 1.5</span><br/>
          <strong>Mathematical Core Definition: Radical Roots Matrix</strong><br/>
          <p>Evaluating primary side value equations where base exponents match:</p>
          $$\\sqrt{${activeNum}} \\approx ${Math.sqrt(activeNum).toFixed(5)}$$
        `;
      }
    }
  }


  // --- ENGINE TYPE C: CHATGPT NATURAL LANGUAGE GENERATION ENGINE ---
  // Intent 1: Creative Production, Essays, Explanations, or Outlines
  if (query.includes("write") || query.includes("essay") || query.includes("explain") || query.includes("summary") || query.includes("paradox")) {
    let summaryTopic = query.includes("paradox") ? "Logical Paradox Resolutions" : "Global Inclusive Education Frameworks";
    return `
      <span class="agent-header-tag tag-chatgpt">ChatGPT-4o Prompt Interface</span><br/>
      <strong>Synthesized Structural Essay Output: ${summaryTopic}</strong><br/>
      <p><em>Introduction:</em> Contextual global environments necessitate highly coherent systematic frameworks. When exploring problems within modern systemic structures, practitioners find that addressing baseline metrics produces a compounding net dividend over generations.</p>
      <p><em>Core Discussion:</em> Analysis shows that separating abstract conceptual boundaries from physical implementation matrices resolves underlying logical bottlenecks. In environments targeting SDG 4 goals, optimizing resource accessibility is a primary catalyst for scaling universal literacy rates.</p>
      <p><em>Conclusion:</em> Moving forward, building scalable, open-source micro-learning portals allows individuals to unlock substantial functional advantages without infrastructure dependencies.</p>
    `;
  }

  // Intent 2: Policy/SDG Global Domain Matrix Queries
  if (query.includes("sdg 4") || query.includes("education") || query.includes("charity")) {
    return `
      <span class="agent-header-tag tag-chatgpt">ChatGPT-4o Prompt Interface</span><br/>
      <strong>Policy Synthesis Report: Sustainable Development Goal 4 (SDG 4)</strong><br/>
      <p>SDG 4 focuses on eliminating persistent structural disparities in educational spaces globally. Key implementation benchmarks emphasize expanding vocational training capabilities, upgrading digital hardware infrastructure, and provisioning global digital learning tools to marginalized demographics.</p>
    `;
  }

  // FALLBACK MATRIX: Integrated Fallback Route (Simulates Hybrid LLM Mode)
  return `
    <span class="agent-header-tag tag-chatgpt">Omni-Agent Hybrid Blend</span><br/>
    <strong>Generalized Synthesis Response Node</strong><br/>
    <p>Your workspace query regarding "${input}" has been processed across the integrated framework matrix:</p>
    <pre>Intent Status: Parsed\nModel Routing: ChatGPT (Context) + Gemini (Inference) + Manus (Validation)</pre>
    <p>To implement this task cleanly, define your core structural parameters, compile your outline metrics, and use this console interface to evaluate secondary calculations.</p>
  `;
}

/**
 * MULTIMODAL AUTOMATION: Native Text-To-Speech Synthesis Loop
 */
function triggerVoiceOutputIfConfigured(htmlContent) {
  const activeVoiceMode = document.querySelector('input[name="ai-mode"]:checked').value;
  if (activeVoiceMode !== 'voice') return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Terminate existing speaker threads
    
    // Sanitize markup nodes and dollar signs before invoking audio hardware
    const plainTextSpeech = htmlContent
      .replace(/<[^>]*>/g, '')
      .replace(/\$/g, '')
      .replace(/&times;/g, 'times')
      .replace(/&alpha;/g, 'alpha');
      
    const executionUtterance = new SpeechSynthesisUtterance(plainTextSpeech);
    window.speechSynthesis.speak(executionUtterance);
  }
}

/**
 * DATA BACKUPS: Local JSON Session File Persistence Operations
 */
function exportSessionData() {
  if (chatSessionHistory.length === 0) {
    alert("The current workspace interaction history log is empty.");
    return;
  }
  const serializedData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(chatSessionHistory, null, 2));
  const functionalAnchor = document.createElement('a');
  functionalAnchor.setAttribute("href", serializedData);
  functionalAnchor.setAttribute("download", "eduquest_omni_agent_session.json");
  document.body.appendChild(functionalAnchor);
  functionalAnchor.click();
  functionalAnchor.remove();
}

function importSessionData(event) {
  const uploadedFile = event.target.files[0];
  if (!uploadedFile) return;

  const dataReader = new FileReader();
  dataReader.onload = function(e) {
    try {
      const parsedArray = JSON.parse(e.target.result);
      if (Array.isArray(parsedArray)) {
        chatSessionHistory = parsedArray;
        localStorage.setItem('eduquest_omni_session', JSON.stringify(chatSessionHistory));
        
        // Clear screen and redraw array nodes
        aiResponseLog.innerHTML = '';
        chatSessionHistory.forEach(bubble => renderBubbleInstance(bubble.markup, bubble.styleClass, false));
        alert("Omni-Agent workspace session uploaded and rendered successfully!");
      } else {
        alert("Uploaded structure does not conform to array session schemas.");
      }
    } catch (err) {
      alert("Error parsing backup JSON matrix structure.");
    }
    importFileInput.value = '';
  };
  dataReader.readAsText(uploadedFile);
}
