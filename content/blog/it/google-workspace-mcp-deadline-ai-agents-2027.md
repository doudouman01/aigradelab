---
title: "Google fissa la scadenza MCP per febbraio 2027: tutti gli agenti IA dovranno usare i nuovi protocolli Workspace"
description: "Google richiede che tutti gli agenti IA utilizzino i suoi server MCP Workspace invece delle API REST entro il 1° febbraio 2027. Ecco cosa cambia per sviluppatori, aziende e l'ecosistema degli agenti IA — più i nuovi livelli di utilizzo e controlli amministratore."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-28"
readTime: "9 min di lettura"
---

<h2>Google riscrive le regole per gli agenti IA</h2>
<p>Google ha annunciato che tutti gli <strong>agenti IA e strumenti di accesso simili</strong> dovranno utilizzare i suoi <strong>server MCP (Model Context Protocol) Workspace</strong> o la <strong>CLI Workspace</strong> per accedere ai dati Workspace — non le tradizionali API REST. L'applicazione tecnica inizia il <strong>1° febbraio 2027</strong>, dando agli sviluppatori circa due mesi per migrare.</p>
<p>Entrambi gli strumenti sono ora <strong>generalmente disponibili</strong>, coprendo <strong>Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat e Tasks</strong>, con <strong>Keep in arrivo</strong>. Il cambiamento arriva con un nuovo Addendum Workspace AI Tools, prezzi a due livelli e controlli amministratore potenziati — rappresentando il cambiamento più significativo nell'interazione degli strumenti di terze parti con Google Workspace dal lancio della piattaforma.</p>

<h2>Cosa cambia il 1° febbraio 2027</h2>
<table>
  <thead>
    <tr><th>Prima del 1° feb 2027</th><th>Dopo il 1° feb 2027</th></tr>
  </thead>
  <tbody>
    <tr><td>Gli agenti IA chiamano direttamente le API REST Workspace</td><td>Devono usare i server MCP Workspace o la CLI</td></tr>
    <tr><td>Gli agenti definiscono i propri pattern di accesso ai dati</td><td>Accesso standardizzato tramite protocolli controllati da Google</td></tr>
    <tr><td>Visibilità limitata sul comportamento degli agenti</td><td>Conferme utente e logging di audit integrati</td></tr>
    <tr><td>Nessun tracciamento di utilizzo standardizzato</td><td>Sistema a due livelli partendo da Gmail, Drive, Calendar</td></tr>
  </tbody>
</table>

<h2>Cos'è MCP e perché è importante?</h2>
<p><strong>MCP (Model Context Protocol)</strong> sta diventando il protocollo standard per l'interazione degli agenti IA con strumenti e fonti dati esterne. Sviluppato originariamente da Anthropic e rapidamente adottato dal settore, MCP fornisce un modo strutturato per gli agenti IA di:</p>
<ul>
  <li><strong>Scoprire</strong> quali azioni sono disponibili (leggere email, creare documenti, ecc.)</li>
  <li><strong>Richiedere permessi</strong> tramite conferme utente standardizzate</li>
  <li><strong>Eseguire azioni</strong> con audit trail integrati</li>
  <li><strong>Rispettare i limiti</strong> impostati dagli amministratori</li>
</ul>
<p>L'adozione di MCP da parte di Google per Workspace è significativa perché valida MCP come standard emergente — quando la più grande suite di produttività al mondo lo richiede, l'intero ecosistema degli agenti IA deve seguire.</p>

<h2>I due livelli di utilizzo</h2>
<p>Google sta introducendo un <strong>sistema di utilizzo a due livelli</strong> per l'accesso API e MCP Workspace, partendo da Gmail, Drive e Calendar:</p>
<ul>
  <li><strong>Livello standard:</strong> incluso con i piani Workspace esistenti, copre i pattern di utilizzo tipici per la maggior parte delle organizzazioni</li>
  <li><strong>Livello premium:</strong> per casi d'uso ad alto volume o agenti avanzati che superano i limiti standard</li>
</ul>

<h2>Sicurezza: il vero motore</h2>
<p>La mossa di Google riguarda fondamentalmente <strong>sicurezza e controllo</strong>. Gli agenti IA che accedono ai dati Workspace tramite API REST generano diversi rischi:</p>
<ul>
  <li><strong>Esfiltrazione dati:</strong> un agente con accesso API potrebbe copiare silenziosamente dati sensibili su server esterni</li>
  <li><strong>Azioni non verificate:</strong> senza logging standardizzato, le organizzazioni non possono tracciare cosa hanno fatto gli agenti con i loro dati</li>
  <li><strong>Escalation dei permessi:</strong> gli agenti spesso richiedono permessi più ampi del necessario, creando superfici di attacco</li>
  <li><strong>Shadow AI:</strong> i dipendenti collegano agenti IA a Workspace senza approvazione IT, creando flussi di dati non monitorati</li>
</ul>

<h2>Controlli amministratore</h2>
<ul>
  <li><strong>Whitelist agenti:</strong> gli amministratori possono specificare quali agenti IA possono accedere ai dati Workspace</li>
  <li><strong>Controlli per servizio:</strong> abilitare l'accesso degli agenti a Gmail ma bloccare l'accesso a Drive, ad esempio</li>
  <li><strong>Monitoraggio utilizzo:</strong> dashboard in tempo reale che mostrano l'attività degli agenti nell'organizzazione</li>
  <li><strong>Integrazione compliance:</strong> le azioni degli agenti alimentano i workflow di compliance ed eDiscovery esistenti</li>
</ul>

<h2>Cosa devono fare gli sviluppatori</h2>
<ol>
  <li><strong>Adottare i server MCP Workspace</strong> per la comunicazione agente-Workspace (ora GA)</li>
  <li><strong>O usare la CLI Workspace</strong> come percorso di integrazione alternativo</li>
  <li><strong>Rimuovere le chiamate dirette alle API REST</strong> dal codice degli agenti prima del 1° febbraio 2027</li>
  <li><strong>Implementare i flussi di conferma utente</strong> richiesti dai nuovi protocolli</li>
  <li><strong>Rivedere l'Addendum Workspace AI Tools</strong> per le nuove condizioni di servizio</li>
  <li><strong>Pianificare per l'utilizzo a livelli</strong> e assicurarsi che il modello di pricing consideri i potenziali costi del livello premium</li>
</ol>

<h2>Il quadro generale: MCP diventa lo standard</h2>
<ul>
  <li><strong>Anthropic</strong> ha creato MCP e lo usa estensivamente nell'ecosistema di strumenti di Claude</li>
  <li><strong>OpenAI</strong> e <strong>Cisco</strong> hanno recentemente introdotto framework per agenti IA allineati ai principi MCP</li>
  <li><strong>Microsoft</strong> ha il proprio framework per agenti ma è sempre più interoperabile con MCP</li>
  <li><strong>Adozione enterprise:</strong> le principali piattaforme stanno standardizzando interfacce compatibili MCP per l'accesso degli agenti</li>
</ul>

<h2>Strumenti consigliati per lo sviluppo di agenti IA</h2>
<ul>
  <li>Leggi la nostra copertura di <a href="/it/blog/cognition-swe-2-1-ai-coding-model-benchmarks">SWE-2.1 di Cognition</a> per le ultime novità nello sviluppo assistito da IA</li>
  <li>Esplora la nostra <a href="/it/blog/best-ai-coding-tools-2026">guida ai migliori strumenti di coding IA</a> per ottimizzare il tuo workflow</li>
</ul>
<p>Per gli sviluppatori che costruiscono integrazioni di agenti, <a href="https://toolcraftkit.com">ToolCraftKit</a> fornisce strumenti di sviluppo gratuiti tra cui un <a href="https://toolcraftkit.com/tools/code-formatter">Formattatore di codice</a>, un <a href="https://toolcraftkit.com/tools/jwt-decoder">Decoder JWT</a>, un <a href="https://toolcraftkit.com/tools/cron-expression-generator">Generatore di espressioni Cron</a> e un <a href="https://toolcraftkit.com/tools/robots-txt-generator">Generatore Robots.txt</a>.</p>

<h2>In conclusione</h2>
<p>La scadenza MCP di Google a febbraio 2027 segna la fine dell'accesso non strutturato degli agenti IA ai dati aziendali. Richiedendo che tutti gli agenti utilizzino server MCP o la CLI, Google risolve simultaneamente il problema di sicurezza, il problema di monetizzazione e il problema dell'ecosistema. Per gli sviluppatori, il messaggio è chiaro: migrare ora o perdere l'accesso a Workspace. Per le aziende, il messaggio è ancora più chiaro: gli agenti IA stanno diventando una parte gestita e verificabile dell'infrastruttura IT — non un servizio ombra che i dipendenti collegano autonomamente.</p>
