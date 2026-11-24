---
title: "Cisco rilascia Quarry in open source: un motore di sicurezza che sorveglia gli agenti IA"
description: "Cisco ha reso open source Quarry, un motore di rilevamento comportamentale progettato per monitorare gli agenti IA contro attività malevole. Ecco perché la sicurezza degli agenti IA sta diventando fondamentale e come funziona Quarry."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Cisco affronta il problema della sicurezza degli agenti IA</h2>

<p>Man mano che gli agenti IA diventano più autonomi — scrivono codice, navigano sul web, gestiscono file, effettuano chiamate API — la domanda su <strong>chi sorveglia gli agenti</strong> diventa sempre più urgente. La risposta di Cisco è <strong>Quarry</strong>, un motore open source di rilevamento comportamentale progettato per monitorare gli agenti IA in tempo reale e segnalare quando si comportano in modo anomalo.</p>

<p>Lo strumento è stato pubblicato su GitHub e copre un'ampia gamma di scenari: conversazioni LLM a turno singolo e multiplo, utilizzo agentivo di strumenti, interazioni tramite Model Context Protocol (MCP) e input multimodali. Sono già disponibili plugin per <strong>Claude Code</strong>, <strong>Codex</strong> e altri agenti compatibili con MCP.</p>

<h2>Perché la sicurezza degli agenti IA è importante adesso</h2>

<p>La maggior parte degli strumenti di sicurezza IA esistenti si concentra su ciò che accade a livello di modello — prompt injection, jailbreaking, output dannosi. Quarry adotta un approccio diverso: osserva ciò che gli agenti <em>fanno</em>, non solo ciò che dicono.</p>

<p>Questa distinzione è importante perché i moderni agenti IA possono:</p>

<ul>
<li>Eseguire codice su server e macchine locali</li>
<li>Leggere, scrivere e cancellare file</li>
<li>Effettuare chiamate API verso servizi esterni</li>
<li>Navigare sul web e interagire con siti attivi</li>
<li>Concatenare più strumenti in flussi di lavoro complessi</li>
</ul>

<p>Un'iniezione di prompt che spinge un chatbot a dire qualcosa di inappropriato è una cosa. Un'iniezione di prompt che spinge un agente di codifica autonomo a cancellare un database di produzione è tutt'altra cosa. Quarry è pensato per il secondo scenario.</p>

<h2>Come funziona Quarry</h2>

<p>Quarry opera come un livello di rilevamento comportamentale posizionato tra un agente IA e i suoi strumenti. Valuta le azioni dell'agente rispetto a un insieme di regole configurabile, utilizzando la <strong>Cisco AI Security & Safety Taxonomy</strong> come framework di riferimento.</p>

<p>Funzionalità principali:</p>

<ul>
<li><strong>Rilevamento basato su regole:</strong> I team di sicurezza definiscono le regole per i comportamenti sospetti — accesso non autorizzato ai file, chiamate di rete inattese, tentativi di escalation dei privilegi, pattern di esfiltrazione dati.</li>
<li><strong>Consapevolezza multi-turno:</strong> Quarry traccia il comportamento dell'agente attraverso i turni di conversazione, individuando attacchi che si sviluppano gradualmente invece che in un singolo prompt.</li>
<li><strong>Integrazione MCP:</strong> Il supporto nativo del Model Context Protocol permette a Quarry di monitorare gli strumenti specifici a cui un agente ha accesso e segnalare pattern d'uso insoliti.</li>
<li><strong>Architettura modulare:</strong> Cisco fornisce plugin per i framework di agenti più diffusi e incoraggia la community a crearne altri.</li>
</ul>

<p>Il repository GitHub del progetto include istruzioni per l'installazione, versioni Python supportate, esempi di configurazione e guide per la scrittura delle regole.</p>

<h2>Il quadro generale: la sicurezza degli agenti IA è una nuova categoria</h2>

<p>Quarry fa parte di una tendenza più ampia. Man mano che gli agenti IA passano dalle demo alla produzione, un'intera categoria di sicurezza sta emergendo attorno a loro:</p>

<ul>
<li><strong>Cisco AI Defense</strong> — La suite commerciale di sicurezza IA di Cisco, ora sviluppata interamente con Codex di OpenAI, con funzionalità consegnate in settimane anziché in trimestri.</li>
<li><strong>Sistema di approvazione a livelli di Anthropic</strong> — Parte del nuovo pacchetto Claude Ship, dove le modifiche al codice vengono classificate per livello di rischio e richiedono diversi gradi di approvazione umana. <a href="/it/blog/claude-ship-ai-code-automation">Leggi il nostro articolo qui</a>.</li>
<li><strong>Daybreak Defense Network di OpenAI</strong> — Una partnership di cybersicurezza con Cisco che esplora il triage delle minacce potenziato dall'IA.</li>
</ul>

<p>Lo schema è chiaro: le aziende che costruiscono gli agenti più capaci stanno costruendo anche le protezioni. La domanda è se strumenti open source come Quarry riusciranno a tenere il passo con la velocità di sviluppo degli agenti.</p>

<h2>Chi dovrebbe usare Quarry</h2>

<p>Quarry è particolarmente rilevante per:</p>

<ul>
<li><strong>Team di sviluppo</strong> che utilizzano agenti di codifica IA (Claude Code, Codex, Cursor) in ambienti di produzione.</li>
<li><strong>Team di sicurezza</strong> responsabili del monitoraggio dei flussi di lavoro basati su IA nell'organizzazione.</li>
<li><strong>Sviluppatori di piattaforme</strong> che creano prodotti IA agentivi e necessitano di un livello di rilevamento senza doverlo costruire da zero.</li>
</ul>

<p>Se stai valutando strumenti IA per lo sviluppo, consulta le nostre guide <a href="/it/blog/best-ai-coding-tools-2026">Migliori strumenti IA per la programmazione nel 2026</a> e <a href="/it/blog/best-ai-tools-developers-2026">Migliori strumenti IA per sviluppatori</a> per una panoramica completa.</p>

<h2>Conclusione</h2>

<p>Gli agenti IA diventano più potenti ogni mese, e gli strumenti di sicurezza devono stare al passo. La decisione di Cisco di rendere Quarry open source è intelligente — crea una base condivisa per la sicurezza degli agenti invece di lasciare che ogni organizzazione costruisca la propria. Che Quarry diventi lo standard o solo una delle tante opzioni, la categoria è destinata a restare.</p>

<p><em>Lavori con agenti IA? Assicurati di avere il toolkit giusto. Scopri <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> per utility gratuite per sviluppatori — validatori JSON, tester di regex, generatori di hash e altro ancora.</em></p>
