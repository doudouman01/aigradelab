---
title: "Claude Ship: gli agenti IA di Anthropic ora revisionano, correggono e approvano il codice"
description: "Anthropic lancia Claude Ship, un pacchetto che integra Code Review con due nuovi agenti — PR Steward e approvazione automatica — per gestire l'intero workflow post-sviluppo."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Anthropic riunisce i suoi agenti di codice in Claude Ship</h2>

<p>Il 24 novembre 2026, Anthropic ha annunciato <strong>Claude Ship</strong>, un insieme unificato di agenti IA progettato per gestire tutto ciò che accade dopo la scrittura del codice. Il pacchetto riunisce la funzionalità Code Review — già disponibile per tutti — con due nuovi agenti attualmente in beta: <strong>PR Steward</strong> e un sistema di <strong>approvazione automatica basato sul rischio</strong>.</p>

<p>Il lancio riflette un cambiamento nell'evoluzione degli strumenti di sviluppo basati sull'IA. Scrivere codice non è più il collo di bottiglia. Revisionarlo, correggerlo e distribuirlo lo è.</p>

<h2>Cosa include Claude Ship</h2>

<h3>1. Code Review (disponibile per tutti)</h3>

<p>Lanciato a marzo 2026, Code Review dispone un team di agenti IA su ogni pull request. Gli agenti lavorano in parallelo per individuare bug, verificare i risultati per eliminare i falsi positivi e classificare i problemi per gravità. Internamente ad Anthropic, lo strumento ha portato i commenti di revisione sostanziali dal 16% al 54% delle PR, con meno dell'1% di risultati giudicati errati dagli ingegneri.</p>

<p>Le revisioni si adattano alla complessità. Le pull request voluminose o complesse ricevono più agenti e un'analisi più approfondita; le modifiche banali passano attraverso un controllo più leggero. Una revisione richiede in media 20 minuti e costa tra 15 e 25 dollari, fatturati in base al consumo di token.</p>

<h3>2. PR Steward (nuovo — beta)</h3>

<p>PR Steward è il secondo componente del pacchetto Claude Ship e si occupa del lavoro noioso che si accumula dopo una revisione del codice. Quando una PR presenta check CI falliti, conflitti di merge o feedback di revisione irrisolti, PR Steward interviene per correggerli automaticamente.</p>

<p>Dopo ogni push, commenta la PR con un riepilogo delle modifiche apportate e istruzioni per il rollback. L'obiettivo è mantenere lo sviluppatore al comando eliminando il lavoro manuale che spesso blocca le PR in coda.</p>

<h3>3. Approvazione automatica basata sul rischio (nuovo — beta)</h3>

<p>Il terzo componente introduce un sistema di approvazione a livelli. Le modifiche a basso rischio — aggiornamenti della documentazione, funzionalità interne dietro feature flag — possono non richiedere alcuna approvazione umana. Le modifiche a rischio medio richiedono un revisore umano. Le modifiche ad alto rischio ne richiedono due.</p>

<p>L'approvazione di un agente IA non sostituisce mai quella di un essere umano. Il sistema è progettato per accelerare le modifiche sicure senza eliminare il giudizio umano dalle decisioni importanti.</p>

<h2>Perché è importante: il collo di bottiglia della revisione è reale</h2>

<p>I numeri interni di Anthropic parlano chiaro. Il monorepo di Claude Code è passato da circa 2.500 modifiche unite al giorno a maggio a oltre 30.000 a settembre 2026. Claude scrive ormai circa il 90% del codice di Anthropic. Nel frattempo, il tasso di revert è diminuito di oltre il 40%, anche se le pull request unite sono più che raddoppiate.</p>

<p>Il problema non è più la generazione di codice — è tutto ciò che viene dopo. Claude Ship è la risposta di Anthropic al divario crescente tra la velocità con cui l'IA scrive codice e quella con cui gli esseri umani possono revisionarlo.</p>

<h2>Confronto con altri strumenti di codice IA</h2>

<p>Claude Ship occupa una nicchia diversa rispetto a strumenti come <strong>Cursor</strong> o <strong>GitHub Copilot</strong>, che si concentrano sulla scrittura e modifica del codice nell'IDE. Ship punta sul workflow post-sviluppo: revisione, correzioni CI e approvazione del merge.</p>

<p>Detto ciò, compete direttamente con le funzioni di code review di GitHub Copilot e con gli strumenti emergenti di startup che sviluppano agenti di sviluppo autonomi. Il fattore distintivo è la profondità: l'approccio multi-agente di Anthropic è più lento e costoso delle alternative leggere, ma individua problemi che le scansioni superficiali non rilevano.</p>

<p>Per un confronto completo degli assistenti di codice IA, consulta la nostra guida <a href="/it/blog/best-ai-coding-tools-2026">Migliori strumenti di codice IA nel 2026</a>. Abbiamo anche recensioni dettagliate di <a href="/it/blog/cursor-ai-review-2026">Cursor AI</a> e <a href="/it/blog/github-copilot-vs-cursor-2026">GitHub Copilot vs Cursor</a>.</p>

<h2>Prezzi e disponibilità</h2>

<p>Code Review è disponibile per i clienti Claude for Teams e Claude for Enterprise. PR Steward e l'approvazione automatica sono in beta. Code Review è fatturato in base al consumo di token, tipicamente tra 15 e 25 dollari per revisione a seconda della dimensione della PR.</p>

<p>Il fatturato annualizzato di Claude Code ha superato i 2,5 miliardi di dollari dal lancio, segno di una forte adozione aziendale degli strumenti di sviluppo di Anthropic.</p>

<h2>In sintesi</h2>

<p>Claude Ship non è un generatore di codice — è un <em>spedizioniere</em> di codice. Raggruppando revisione, correzione e approvazione in un unico workflow, Anthropic scommette che la prossima ondata di produttività per gli sviluppatori non verrà dallo scrivere più codice, ma dal distribuirlo più velocemente e in modo più sicuro.</p>

<p>Per i team già sommersi dalle pull request, è una proposta convincente.</p>

<p><em>Cerchi utility gratuite per sviluppatori da affiancare al tuo stack di codice IA? Visita <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a>: formattatori JSON, beautifier di codice, tester di regex e oltre 100 strumenti — tutti gratuiti, senza registrazione.</em></p>
