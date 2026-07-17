/* Custom Cool Grey and SDG 4 color palette */
:root {
  --sdg-red: #C5192D;
  --sdg-red-hover: #a31221;
  --bg-main: #f1f5f9;       /* Light cool grey base background */
  --bg-cards: #ffffff;      /* Clean crisp panel surfaces */
  --bg-dark: #334155;       /* Slate/dark slate for text headers */
  --border-color: #cbd5e1;  /* Balanced silver-grey border accents */
  --text-dark: #0f172a;
  --text-muted: #475569;
  --card-shadow: 0 4px 14px rgba(51, 65, 85, 0.06);
  --transition-speed: 0.25s;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--bg-main);
  color: var(--text-dark);
  line-height: 1.6;
}

/* Header styling layout */
.app-header {
  background-color: var(--sdg-red);
  color: white;
  padding: 1.75rem 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.header-container {
  max-width: 1100px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 0.25rem;
}

.sdg-badge {
  background-color: white;
  color: var(--sdg-red);
  font-weight: 800;
  font-size: 1.4rem;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tagline {
  font-size: 1rem;
  opacity: 0.95;
}

/* Container limits */
.app-container {
  max-width: 1100px;
  margin: 1.5rem auto;
  padding: 0 1rem;
}

/* SDG Target banner */
.sdg-info-card {
  background: var(--bg-cards);
  border-left: 6px solid var(--sdg-red);
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sdg-info-card h2 {
  font-size: 1.15rem;
  color: var(--sdg-red);
}

#sdg-fact {
  font-size: 1rem;
  font-style: italic;
  color: var(--text-muted);
}

/* Fluid responsive workspace matrix */
.workspace {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.sidebar-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .workspace {
    grid-template-columns: 1fr 2fr; /* Emphasize assistant space */
  }
}

/* Universal Panel Cards */
.backup-panel, .info-shortcuts-panel, .ai-assistant-panel {
  background: var(--bg-cards);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  border: 1px solid #e2e8f0;
}

.backup-panel h2, .info-shortcuts-panel h2, .ai-header h2 {
  font-size: 1.25rem;
  color: var(--bg-dark);
}

.panel-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* Quick prompts lists styles */
.prompt-list {
  list-style-type: none;
  margin-top: 0.75rem;
}

.prompt-list li {
  font-size: 0.85rem;
  padding: 6px 0;
  border-bottom: 1px dashed var(--border-color);
  color: var(--text-dark);
}

.prompt-list li:last-child {
  border-bottom: none;
}

.prompt-list code {
  background: var(--bg-main);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

/* Master buttons structural parameters */
.btn {
  display: inline-block;
  padding: 0.65rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background-color var(--transition-speed), transform 0.1s;
  text-align: center;
}

.btn:active {
  transform: scale(0.98);
}

.btn-secondary {
  background-color: var(--bg-dark);
  color: white;
  align-self: flex-start;
}

/* Local Data Backup Operations styling */
.backup-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 1rem;
}

.btn-backup-export {
  background-color: #0284c7;
  color: white;
  width: 100%;
}

.btn-backup-export:hover {
  background-color: #0369a1;
}

.btn-backup-import {
  background-color: transparent;
  color: #0284c7;
  border: 2px solid #0284c7;
  width: 100%;
  font-size: 0.95rem;
}

.btn-backup-import:hover {
  background-color: #f0f9ff;
}

/* Focus outlines for web accessibility standard compatibility */
.btn:focus-visible, input:focus-visible {
  outline: 3px solid var(--text-dark);
  outline-offset: 2px;
}

/* AI Assistant Console Container Layout */
.ai-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 2px solid var(--bg-main);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .ai-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

/* Radio Toggles matrix styling setup */
.voice-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-main);
  padding: 6px 12px;
  border-radius: 20px;
}

.mode-label {
  font-size: 0.85rem;
  font-weight: bold;
  color: var(--text-muted);
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

/* Chat display container space configuration */
.ai-chat-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ai-response-log {
  background: var(--bg-main);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  height: 400px; /* Tall expanded view now that study deck is clear */
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.ai-bubble {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  max-width: 85%;
  font-size: 0.95rem;
  line-height: 1.5;
}

.ai-bubble.system {
  background: #e2e8f0;
  color: var(--text-dark);
  align-self: flex-start;
  border-left: 4px solid var(--bg-dark);
}

.ai-bubble.user {
  background: var(--sdg-red);
  color: white;
  align-self: flex-end;
}

.ai-bubble.ai-reply {
  background: white;
  color: var(--text-dark);
  align-self: flex-start;
  border: 1px solid #cbd5e1;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
}

.ai-query-form {
  display: flex;
  gap: 10px;
}

#ai-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.95rem;
}

#ai-input:focus {
  outline: none;
  border-color: var(--sdg-red);
}

.btn-ai-submit {
  background: var(--bg-dark);
  color: white;
}

.btn-ai-submit:hover {
  background: #1e293b;
}

.app-footer {
  text-align: center;
  padding: 1.5rem 1rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-top: 2rem;
  border-top: 1px solid var(--border-color);
}
