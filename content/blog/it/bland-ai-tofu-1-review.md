---
title: "Recensione Bland AI Tofu-1: l'AI vocale full-duplex che ti sente anche tra i rumori"
description: "Tofu-1 di Bland è un modello speech-to-speech che ascolta, ragiona e risponde in audio durante le telefonate. Analizziamo le sue promesse, i limiti e il potenziale per le aziende."
category: "Graded Reviews"
categorySlug: "graded-reviews"
date: "2026-11-21"
lastTested: "2026-11-18"
readTime: "9 min di lettura"
grade: "B"
scores_ux: 7
scores_quality: 8
scores_value: 5
scores_integration: 6
scores_support: 6
toolName: "Bland AI Tofu-1"
---

<h2>Che cos'è Tofu-1?</h2>

<p>Tofu-1 è il primo modello speech-to-speech di Bland, annunciato il 13 novembre 2026 come anteprima di ricerca. A differenza della maggior parte degli agenti vocali AI, che funzionano a cascata — convertendo il parlato in testo, elaborandolo con un modello linguistico e poi riconvertendolo in voce — Tofu-1 elabora direttamente l'audio. Ascolta, ragiona e risponde senza mai uscire dal dominio audio.</p>

<p>La startup di voice AI con sede a San Francisco ha costruito Tofu-1 appositamente per le telefonate ad alto rischio che avvengono in condizioni tutt'altro che ideali: auto in movimento, stanze d'ospedale, segnale cellulare debole e ambienti in cui parlano più persone contemporaneamente.</p>

<h2>Il problema che Tofu-1 risolve</h2>

<p>Ecco lo scenario che Bland usa per illustrare la sfida: in sottofondo c'è un televisore acceso. Chi chiama dice "no". Il televisore dice "sì". Quale risposta registra l'AI?</p>

<p>Gli agenti vocali a cascata tradizionali fanno fatica perché perdono il contesto audio durante la conversione da voce a testo. Rumore di fondo, tono di voce, schemi di esitazione e identificazione del parlante vengono tutti appiattiti in una trascrizione testuale prima ancora che l'AI li elabori.</p>

<p>Tofu-1 dichiara di risolvere il problema mantenendo tutto nel dominio audio. Il modello identifica a quale parlante appartiene ogni frase e filtra di conseguenza, separando la voce di chi chiama da televisori, bambini che piangono, rumore stradale, interfoni ospedalieri e altri suoni ambientali.</p>

<h2>Le dichiarazioni principali</h2>

<h3>Comunicazione full-duplex</h3>

<p>Tofu-1 può ascoltare e parlare contemporaneamente — un vero funzionamento full-duplex. Questo significa che può gestire schemi conversazionali naturali come interruzioni, sovrapposizioni di voci e correzioni a metà frase, senza le pause imbarazzanti che affliggono la maggior parte dei sistemi vocali AI.</p>

<h3>Separazione dei parlanti</h3>

<p>Il modello dichiara di distinguere tra chi chiama e le voci di sottofondo, anche quando parlano nello stesso momento. Nella dimostrazione "TV Test" di Bland (che l'azienda indica come illustrativa, non come output registrato del modello), l'agente attribuisce correttamente le risposte contrastanti alla fonte giusta.</p>

<h3>Gestione del rumore ambientale</h3>

<p>Oltre alla separazione delle voci, Tofu-1 è progettato per mantenere la qualità della conversazione in ambienti rumorosi — guida in autostrada, reparti ospedalieri affollati, luoghi pubblici pieni di gente. Il modello conserva la capacità di capire e rispondere anche quando la qualità del segnale peggiora.</p>

<h3>Prestazioni simili a quelle umane</h3>

<p>La metrica dichiarata da Bland: oltre il 92% dei partecipanti alle selezioni non è riuscito a identificare Tofu-1 come un'AI. È un'affermazione audace, ma con la precisazione che è interamente autodichiarata, senza una metodologia pubblicata né verifiche di terze parti.</p>

<h2>Cosa non sappiamo ancora</h2>

<p>Qui la recensione si complica. Tofu-1 è in anteprima di ricerca e Bland ha trattenuto diverse informazioni critiche:</p>

<ul>
<li><strong>Nessun benchmark pubblicato</strong> — nessun risultato standardizzato rispetto ai benchmark consolidati di voice AI</li>
<li><strong>Dimensione del modello non comunicata</strong> — non possiamo valutare i requisiti infrastrutturali</li>
<li><strong>Nessun prezzo annunciato</strong> — impossibile calcolare il costo per chiamata o confrontarlo con i concorrenti</li>
<li><strong>Nessuna metrica di latenza</strong> — il tempo di risposta è cruciale nelle conversazioni telefoniche e non è stato condiviso alcun numero</li>
<li><strong>Nessun test di terze parti</strong> — l'affermazione del 92% di indistinguibilità dall'umano non è stata verificata in modo indipendente</li>
</ul>

<p>Questa lacuna di informazioni è il motivo principale del nostro voto. Il concetto tecnologico è convincente, ma non possiamo verificare le dichiarazioni.</p>

<h2>Il panorama competitivo</h2>

<p>Tofu-1 entra in un mercato della voice AI in rapida crescita. Ecco come si confronta con le alternative note:</p>

<table>
<thead>
<tr><th>Caratteristica</th><th>Bland Tofu-1</th><th>OpenAI GPT-Live</th><th>Nvidia VoiceChat</th></tr>
</thead>
<tbody>
<tr><td>Architettura</td><td>Speech-to-speech</td><td>Multimodale</td><td>Speech-to-speech</td></tr>
<tr><td>Full duplex</td><td>Sì</td><td>Sì</td><td>Sì</td></tr>
<tr><td>Caso d'uso target</td><td>Chiamate aziendali</td><td>Assistente generale</td><td>Open source</td></tr>
<tr><td>Disponibilità</td><td>Anteprima di ricerca</td><td>GA (Pro)</td><td>Pesi aperti</td></tr>
<tr><td>Prezzo</td><td>Non annunciato</td><td>Incluso nel piano</td><td>Gratuito (self-host)</td></tr>
</tbody>
</table>

<p>Il tratto distintivo di Bland è la concentrazione assoluta sulle telefonate aziendali in ambienti audio difficili. Mentre GPT-Live e i concorrenti puntano all'AI conversazionale generica, Tofu-1 è progettato su misura per i problemi specifici della telefonia aziendale.</p>

<h2>Chi dovrebbe prestare attenzione</h2>

<p><strong>Sì, da seguire da vicino:</strong></p>
<ul>
<li>Contact center che gestiscono un alto volume di chiamate in entrata</li>
<li>Organizzazioni sanitarie con interazioni telefoniche con i pazienti</li>
<li>Compagnie assicurative che gestiscono sinistri per telefono</li>
<li>Società di servizi finanziari con operazioni telefoniche sensibili sul piano della conformità</li>
</ul>

<p><strong>Non ancora utilizzabile per:</strong></p>
<ul>
<li>Piccole imprese che cercano un bot telefonico oggi (solo anteprima di ricerca)</li>
<li>Sviluppatori che vogliono costruirci sopra (nessuna API pubblica per ora)</li>
<li>Chiunque abbia bisogno di prezzi trasparenti per pianificare il budget</li>
</ul>

<h2>Bland AI: il contesto aziendale</h2>

<p>Fondata nel 2023 da Isaiah Granet e Sobhan Nejad, Bland ha raccolto oltre 100 milioni di dollari entro metà 2026, compreso un round da 50 milioni a giugno 2026. L'azienda gestisce oltre 3,5 milioni di chiamate a settimana per clienti enterprise tra cui Samsara e Kin Insurance. I prezzi standard di Bland partono da 0,14 $/minuto nel livello self-service.</p>

<p>Tofu-1 è il primo modello di quella che Bland descrive come una famiglia pianificata di modelli speech-to-speech, il che suggerisce che potrebbero seguire altre varianti specializzate.</p>

<h2>Verdetto di AIGradeLab: B</h2>

<p>Tofu-1 di Bland AI ottiene una <strong>B</strong> — un voto che riflette una genuina ambizione tecnica frenata dalla mancanza di prove verificabili. Il concetto di un modello speech-to-speech full-duplex ottimizzato per le chiamate aziendali rumorose è esattamente ciò di cui il mercato ha bisogno. Se le dichiarazioni reggessero a test indipendenti, potrebbe essere un prodotto di livello A.</p>

<p>Ma "anteprima di ricerca" senza benchmark, senza prezzi e senza validazione di terze parti significa che stiamo valutando una promessa, non un prodotto. Torneremo sull'argomento quando Tofu-1 passerà alla disponibilità generale con dati di prestazione pubblicati.</p>

<table>
<thead>
<tr><th>Categoria</th><th>Punteggio</th><th>Note</th></tr>
</thead>
<tbody>
<tr><td>UX / Esperienza per gli sviluppatori</td><td>7/10</td><td>La piattaforma di Bland è curata, integrazione di Tofu-1 da definire</td></tr>
<tr><td>Qualità / Affidabilità</td><td>8/10</td><td>Dichiarazioni forti, non verificate in modo indipendente</td></tr>
<tr><td>Valore</td><td>5/10</td><td>Impossibile da valutare — nessun prezzo disponibile</td></tr>
<tr><td>Integrazione</td><td>6/10</td><td>Anteprima di ricerca, accesso limitato</td></tr>
<tr><td>Supporto / Community</td><td>6/10</td><td>Orientato alle aziende, nessuna community pubblica per ora</td></tr>
</tbody>
</table>
