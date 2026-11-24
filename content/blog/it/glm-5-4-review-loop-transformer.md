---
title: "Recensione GLM-5.4: il Loop Transformer di Z.ai riscrive il modo in cui i modelli IA ragionano"
description: "Il GLM-5.4 di Z.ai introduce il Loop Transformer — un'architettura che esegue 28 layer due volte per eguagliare modelli 3 volte più grandi. Analizziamo cosa significa, come si comporta e se vale la pena usarlo."
category: "Recensioni con voto"
categorySlug: "graded-reviews"
date: "2026-11-23"
lastTested: "2026-11-23"
readTime: "11 min di lettura"
grade: "B+"
scores_ux: 7
scores_quality: 8
scores_value: 7
scores_integration: 6
scores_support: 6
toolName: "GLM-5.4"
---

<h2>GLM-5.4 in sintesi</h2>

<div style="margin: 1.5rem 0; padding: 1.5rem; border-left: 4px solid #2563eb;">
  <strong>Voto AIGradeLab: B+</strong><br>
  UX: 7/10 | Qualità: 8/10 | Rapporto qualità-prezzo: 7/10 | Integrazione: 6/10 | Supporto: 6/10<br><br>
  <strong>In breve:</strong> GLM-5.4 è il modello architetturalmente più interessante di novembre 2026. Il Loop Transformer è un'innovazione autentica — riutilizzare i layer invece di accumularne altri è un approccio elegante per rendere i modelli più intelligenti senza triplicare i costi di calcolo. Tuttavia il modello è frenato da una disponibilità limitata, nessun accesso API e l'assenza di benchmark ufficiali. Per ora è un'anteprima affascinante della direzione che prenderà l'architettura IA, non ancora un sostituto quotidiano di Claude Fable 5.2 o GPT-6.2 Astra.
</div>

<h2>Cos'è il Loop Transformer?</h2>

<p>Tutti i principali modelli IA rilasciati nel 2026 hanno seguito lo stesso schema: aggiungere layer, aggiungere parametri, addestrare su più dati. GLM-5.4 rompe lo schema. Invece di aggiungere layer, Z.ai fa lavorare di più quelli esistenti.</p>

<p>Ecco come funziona: GLM-5.4 ha circa 750 miliardi di parametri distribuiti su 78 layer memorizzati. Ma 28 di questi layer — il "loop block" al centro della rete — vengono eseguiti due volte per ogni forward pass con pesi condivisi. Il risultato sono 106 passaggi effettivi per token, usando lo spazio di memorizzazione di un modello a 78 layer.</p>

<p>Z.ai afferma che questo approccio permette a GLM-5.4 di eguagliare l'intelligenza di modelli con 2-3 trilioni di parametri. Se anche solo parzialmente vero, è una svolta architettonica significativa — significa poter costruire modelli più intelligenti senza scalare proporzionalmente i costi di calcolo.</p>

<h3>Come funziona effettivamente il Loop</h3>

<p>L'architettura è divisa in tre sezioni:</p>

<ul>
  <li><strong>Layer prelude (1–26):</strong> Eseguiti una volta per token. Costruiscono le rappresentazioni iniziali dell'input.</li>
  <li><strong>Layer loop (27–54):</strong> Questi 28 layer vengono eseguiti due volte con pesi condivisi. Gate per-token controllano quanta parte dell'output di ogni iterazione viene scritta nel residual stream. Nel passaggio 1, i gate tendono a restare piccoli — il modello sta costruendo un contesto globale. Nel passaggio 2, i gate si aprono di più, raffinando la rappresentazione con il contesto del passaggio 1.</li>
  <li><strong>Layer coda (55–78):</strong> Eseguiti una volta. Producono l'output finale.</li>
</ul>

<p>Un trucco intelligente: nel secondo passaggio attraverso il loop block, il modello riutilizza la KV cache sparsa e gli indici di attenzione selezionati durante il passaggio 1. Mantiene solo la propria cache locale a finestra scorrevole (secondo le informazioni, 128 token). Questo significa che la seconda iterazione del loop aggiunge relativamente poco overhead di memoria.</p>

<h2>Cosa sappiamo sulle prestazioni</h2>

<p>Qui le cose si complicano. Z.ai non ha pubblicato benchmark ufficiali né una model card. Un membro del team ha dichiarato che i punteggi arriveranno in seguito. Ciò che abbiamo sono test di terze parti e gli studi di ablazione interni di Z.ai.</p>

<h3>Risultati di terze parti: KingBench 4</h3>

<p>L'harness KingBench 4 di AICodeKing ha testato GLM-5.4 su sei progetti di coding. I risultati:</p>

<ul>
  <li><strong>7° nella classifica generale</strong> su 18 modelli testati</li>
  <li><strong>1° tra i modelli open-weight</strong></li>
  <li><strong>Tempo di esecuzione: 431 minuti</strong> — significativamente più lento di Gemini 4 Neon (109 minuti)</li>
  <li><strong>Passi di ragionamento: 1.128</strong> contro i 244 di Gemini 4 Neon — il modello ragiona in profondità, a volte troppo</li>
  <li><strong>Tasso di fallimento delle tool-call: 1,56%</strong>, ma il 66% delle chiamate fallite è stato recuperato al retry — un tasso di recupero superiore a qualsiasi modello Claude o Codex nel test</li>
</ul>

<p>Per contestualizzare, <a href="/it/blog/claude-fable-5-2-review">Claude Fable 5.2</a> si è classificato 1° nella classifica generale di KingBench 4 con 42/60 punti. Gemini 4 Neon è stato 2° con 37,9/60. GLM-5.4 si è posizionato dove ci si aspetterebbe un modello open-weight solido.</p>

<h3>Validazione interna di Z.ai</h3>

<p>Z.ai ha condotto un esperimento controllato alla scala di 30B parametri — stessa architettura, con loop e senza — utilizzando circa il 10% in più di compute per l'addestramento nella versione con loop. Risultati: la lunghezza dell'output è diminuita del 10–14% nei benchmark (fino al 14,9% su MMLU-Pro), e i miglioramenti maggiori sono stati su matematica, ragionamento scientifico e task a contesto lungo.</p>

<p>Il design è stato validato a quattro scale: 1B, 4B, 30B e 750B parametri.</p>

<h3>Un risultato qualitativo interessante</h3>

<p>Almeno un revisore indipendente ha riportato che GLM-5.4 ha individuato bug applicativi e vulnerabilità di sicurezza che Claude Fable 5.2 e altri modelli testati non avevano rilevato. Questo è coerente con il design dell'architettura — il doppio passaggio attraverso i loop layer dà al modello più tempo per "notare" problemi sottili. La valutazione di DataCamp è che GLM-5.4 è meglio utilizzato come secondo revisore piuttosto che come agente di coding primario.</p>

<h2>Punteggio UX: 7/10</h2>

<p>GLM-5.4 è accessibile tramite l'abbonamento GLM Coding Plan di Z.ai, ZCode (zcode.z.ai) e Z.ai Chat (chat.z.ai). Le interfacce sono funzionali ma non al livello delle esperienze curate di ChatGPT o Claude. Supporta finestre di contesto da 1M di token — Z.ai raccomanda di impostare il client a 512.000 token per i migliori risultati di coding. Il modello supporta anche input visivo per task di coding visuale.</p>

<p>Un problema noto che Z.ai stessa riconosce: il modello può restare bloccato in lunghi cicli di "marathon thinking". Questo è il compromesso del Loop Transformer — lo stesso meccanismo che permette un ragionamento più profondo può talvolta portare a una deliberazione eccessiva.</p>

<p>La velocità è accettabile: Z.ai dichiara fino a 200 token/s nei periodi di basso carico e 70–80 token/s sotto carico.</p>

<h2>Punteggio Qualità: 8/10</h2>

<p>Sulla base dei test di terze parti disponibili e dei primi report degli utenti, la qualità di ragionamento di GLM-5.4 è genuinamente solida — soprattutto per la code review e l'analisi di sicurezza. L'architettura Loop Transformer sembra dare al modello un vantaggio qualitativo nei task di analisi approfondita. Assegniamo un 8 basandoci sui risultati di KingBench e sulla chiara innovazione dell'architettura, ma questo punteggio potrebbe cambiare quando Z.ai pubblicherà i benchmark ufficiali.</p>

<h2>Punteggio Rapporto qualità-prezzo: 7/10</h2>

<p>Senza prezzi API pubblicati, valutare il rapporto qualità-prezzo è difficile. L'accesso richiede attualmente un abbonamento GLM Coding Plan con quote settimanali che sarebbero del 50% superiori rispetto a quelle di GLM-5.3. Il modello non è ancora disponibile su OpenRouter, Cursor, GitHub Copilot o le principali piattaforme cloud (Vertex AI, Azure AI Foundry, AWS Bedrock). Questo ne limita significativamente il valore pratico.</p>

<h2>Punteggio Integrazione: 6/10</h2>

<p>Questo è il punto più debole di GLM-5.4. Non è ancora disponibile l'accesso API — Z.ai dice che verrà aperto dopo una valutazione di sicurezza. Il modello funziona in Claude Code (provider ID: "zai-coding-plan/glm-5.4") e negli strumenti proprietari di Z.ai, ma è assente dalle principali piattaforme IA che la maggior parte degli sviluppatori usa quotidianamente. I pesi open sono previsti ma non ancora rilasciati — Z.ai menziona un "safety hardening" senza data annunciata.</p>

<h2>Punteggio Supporto: 6/10</h2>

<p>Z.ai non ha pubblicato nessuna model card, nessun benchmark ufficiale e nessuna documentazione dettagliata. La mancanza di trasparenza è preoccupante per un modello così architetturalmente ambizioso. Il supporto sembra limitato all'ecosistema di Z.ai.</p>

<h2>Il Loop Transformer: perché conta oltre GLM-5.4</h2>

<p>Anche se GLM-5.4 stesso non è pronto a sostituire il vostro modello di coding principale, l'architettura Loop Transformer è significativa per l'intera industria IA. Ecco perché:</p>

<ul>
  <li><strong>Efficienza:</strong> Se si può eguagliare l'intelligenza di un modello da 2T parametri con 750B parametri facendo il loop dei layer, il risparmio di costi ed energia è enorme.</li>
  <li><strong>Scalabilità:</strong> Z.ai non è sola — Inkling 2 Mini di Thinking Machines (rilasciato il 20 novembre) usa un approccio simile con 26,4B parametri totali / 3,4B attivi e layer centrali eseguiti 3 volte per token. Lo schema si sta diffondendo.</li>
  <li><strong>Impatto pratico:</strong> Modelli effettivamente più piccoli significano inferenza più economica, deployment più rapido e IA che funziona su hardware meno potente.</li>
</ul>

<p>Novembre 2026 potrebbe essere ricordato come il mese in cui l'industria ha iniziato a chiedersi se "più grande è sempre meglio". I Loop Transformer suggeriscono che la risposta è no.</p>

<h2>Chi dovrebbe usare GLM-5.4 oggi?</h2>

<ul>
  <li><strong>Ricercatori IA e appassionati di architettura:</strong> Questo è il modello più interessante da studiare in questo momento.</li>
  <li><strong>Revisori di codice in cerca di un secondo parere:</strong> GLM-5.4 individua problemi che altri modelli non rilevano. Usatelo come revisore, non come coder primario.</li>
  <li><strong>Sviluppatori in attesa:</strong> Se avete bisogno di un modello di coding per l'uso quotidiano oggi, Claude Fable 5.2, Gemini 4 Neon o GPT-6.2 Sol sono scelte più sicure. Consulta il nostro <a href="/it/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">confronto Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2</a> per i dettagli. Tornate a controllare quando Z.ai pubblicherà i prezzi API e i benchmark. Consulta il nostro <a href="/it/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">confronto Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2</a> per i dettagli.</li>
</ul>

<h2>Il verdetto</h2>

<p>GLM-5.4 merita un B+ — non per essere il miglior modello di coding disponibile oggi, ma per aver introdotto un'architettura che potrebbe ridefinire la prossima generazione di modelli IA. Il Loop Transformer è reale, funziona e sta già ispirando altri team. Z.ai deve solo aprire le porte più ampiamente: pubblicare i benchmark, lanciare l'API e rilasciare quei pesi. Fino ad allora, è un'anteprima brillante di dove sta andando l'IA, disponibile per troppo poche persone per meritare un voto più alto.</p>

<h2>Leggi anche</h2>
<ul>
  <li><a href="/it/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2: lo scontro IA di novembre 2026</a></li>
  <li><a href="/it/blog/claude-fable-5-2-review">Recensione Claude Fable 5.2</a></li>
  <li><a href="/it/blog/best-ai-coding-tools-2026">Migliori strumenti IA per il coding 2026</a></li>
</ul>


