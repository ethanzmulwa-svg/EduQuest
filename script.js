/* Modern Functional Cool Grey and SDG 4 Premium System Variables */
:root {
  --sdg-red: #C5192D;
  --sdg-red-hover: #a31221;
  --bg-main: #f8fafc;       /* Clean cool slate-tinted grey background */
  --bg-cards: #ffffff;      /* Pure crystalline white structural cards */
  --bg-dark: #1e293b;       /* Charcoal slate accents for console text */
  --border-color: #cbd5e1;  /* Balanced silver slate grid framing */
  --text-dark: #0f172a;     /* Deep readable neutral text layer */
  --text-muted: #64748b;    /* Subdued operational descriptions */
  --card-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.04), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
  --transition-speed: 0.2s;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--bg-main);
  color: var(--text-dark);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Application Header Structure */
.app-header {
  background-color: var(--sdg-red);
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(197, 25, 45, 0.15);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 0.35rem;
}

.sdg-badge {
  background-color: white;
  color: var(--sdg-red);
  font-weight: 800;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tagline {
  font-size: 1.05rem;
  opacity: 0.9;
  font-weight: 400;
}

/* Master Layout Framework Container */
.app-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

/* SDG Fact Banner Notification Space */
.sdg-info-card {
  background: var(--bg-cards);
  border-left: 6px solid var(--sdg-red);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sdg-info-card h2 {
  font-size: 1.25rem;
  color: var(--sdg-red);
  letter-spacing: -0.02em;
}

#sdg-fact {
  font-size: 1.05rem;
  color: var(--text-dark);
  font-weight: 500;
}

/* Two-Column Asymmetric Asynchronous Workspace Grid */
.workspace {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.sidebar-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 992px) {
  .workspace {
    grid-template-columns: 350px 1fr; /* Optimized dashboard ratio proportions */
  }
}

/* Content Panel Framework Cards */
.backup-panel, .info-shortcuts-panel, .ai-assistant-panel {
  background: var(--bg-cards);
  padding: 1.75rem;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  border: 1px solid #e2e8f0;
}

.backup-panel h2, .info-shortcuts-panel h2, .ai-header h2 {
  font-size: 1.3rem;
  color: var(--bg-dark);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.panel-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-top: 0.35rem;
}

/* Guide list styles for quick copy prompts */
.prompt-list {
  list-style-type: none;
  margin-top: 1rem;
}

.prompt-list li {
  font-size: 0.9rem;
  padding: 10px 0;
  border-bottom: 1px dashed var(--border-color);
  color: var(--text-dark);
}

.prompt-list li:last-child {
  border-bottom: none;
}

.prompt-list code {
  background: #f1f5f9;
  padding: 3px 6px;
  border-radius: 4px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.82rem;
  display: inline-block;
  margin-top: 4px;
  color: #0369a1;
  border: 1px solid #e2e8f0;
}

/* Modular Button Classes Matrix */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all var(--transition-speed) ease;
  text-align: center;
}

.btn:active {
  transform: scale(0.97);
}

.btn-secondary {
  background-color: var(--bg-dark);
  color: white;
  align-self: flex-start;
}

.btn-secondary:hover {
  background-color: #334155;
}

/* Core Local JSON File Backup Toggles */
.backup-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1.25rem;
}

.btn-backup-export {
  background-color: #2563eb;
  color: white;
  width: 100%;
}

.btn-backup-export:hover {
  background-color: #1d4ed8;
}

.btn-backup-import {
  background-color: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
  width: 100%;
}

.btn-backup-import:hover {
  background-color: #eff6ff;
}

/* Accessibility Focus Ring Outlines */
.btn:focus-visible, input:focus-visible {
  outline: 3px solid var(--text-dark);
  outline-offset: 3px;
}

/* Universal Interface Agent Header Element */
.ai-header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
}

@media (min-width: 768px) {
  .ai-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

/* Custom Multimodal Toggle Layout Matrix */
.voice-controls {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f1f5f9;
  padding: 8px 16px;
  border-radius: 30px;
  border: 1px solid #e2e8f0;
}

.mode-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--text-muted);
}

.radio-label input[type="radio"]:checked + .custom-radio {
  color: var(--sdg-red);
}

/* Agent Interactive Screen Display Area */
.ai-chat-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.ai-response-log {
  background: #f1f5f9;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 1.5rem;
  height: 480px; /* Fully expanded functional terminal frame */
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Multi-Model Differentiated Response Bubbles */
.ai-bubble {
  padding: 1rem 1.25rem;
  border-radius: 12px;
  max-width: 90%;
  font-size: 0.98rem;
  line-height: 1.6;
}

.ai-bubble.system {
  background: #e2e8f0;
  color: var(--text-dark);
  align-self: flex-start;
  border-left: 5px solid #475569;
}

.ai-bubble.user {
  background: var(--sdg-red);
  color: white;
  align-self: flex-end;
  border-bottom-right-radius: 2px;
  box-shadow: 0 4px 10px rgba(197, 25, 45, 0.1);
}

.ai-bubble.ai-reply {
  background: white;
  color: var(--text-dark);
  align-self: flex-start;
  border: 1px solid #e2e8f0;
  border-bottom-left-radius: 2px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

/* Agentic Internal Layout Tags */
.agent-header-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.tag-chatgpt { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
.tag-gemini { background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; }
.tag-manus { background: #faf5ff; color: #6b21a8; border: 1px solid #f3e8ff; }

/* Code and Steps Pipeline Formatting Layout */
.pipeline-steps {
  margin: 0.75rem 0;
  padding-left: 1.25rem;
}

.pipeline-steps li {
  margin-bottom: 4px;
}

pre {
  background: #0f172a;
  color: #f8fafc;
  padding: 0.75rem;
  border-radius: 6px;
  overflow-x: auto;
  font-family: monospace;
  font-size: 0.85rem;
  margin: 0.5rem 0;
}

/* User Form Submission Element Row */
.ai-query-form {
  display: flex;
  gap: 12px;
}

#ai-input {
  flex: 1;
  padding: 0.85rem 1.25rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  transition: all var(--transition-speed);
  background-color: var(--bg-cards);
}

#ai-input:focus {
  outline: none;
  border-color: var(--sdg-red);
  box-shadow: 0 0 0 3px rgba(197, 25, 45, 0.15);
}

.btn-ai-submit {
  background: var(--bg-dark);
  color: white;
  padding: 0 1.75rem;
}

.btn-ai-submit:hover {
  background: #0f172a;
}

/* Standard Base Footer Layout */
.app-footer {
  text-align: center;
  padding: 2rem 1rem;
  color: var(--text-muted);
  font-size: 0.88rem;
  margin-top: 3rem;
  border-top: 1px solid #e2e8f0;
}
