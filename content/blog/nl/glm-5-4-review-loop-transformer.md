---
title: "GLM-5.4 Review: de Loop Transformer van Z.ai herschrijft hoe AI-modellen denken"
description: "GLM-5.4 van Z.ai introduceert de Loop Transformer — een architectuur die 28 lagen twee keer uitvoert om modellen van 3x de grootte te evenaren. We analyseren wat het betekent, hoe het presteert en of het de moeite waard is."
category: "Beoordeelde reviews"
categorySlug: "graded-reviews"
date: "2026-11-23"
lastTested: "2026-11-23"
readTime: "11 min leestijd"
grade: "B+"
scores_ux: 7
scores_quality: 8
scores_value: 7
scores_integration: 6
scores_support: 6
toolName: "GLM-5.4"
---

<h2>GLM-5.4 in een oogopslag</h2>

<div style="margin: 1.5rem 0; padding: 1.5rem; border-left: 4px solid #2563eb;">
  <strong>AIGradeLab Cijfer: B+</strong><br>
  UX: 7/10 | Kwaliteit: 8/10 | Prijs-kwaliteit: 7/10 | Integratie: 6/10 | Support: 6/10<br><br>
  <strong>Samengevat:</strong> GLM-5.4 is de architecturaal meest interessante modelrelease van november 2026. De Loop Transformer is een echte innovatie — lagen hergebruiken in plaats van er meer op te stapelen is een elegante aanpak om modellen slimmer te maken zonder de rekenkosten te verdrievoudigen. Maar het model wordt beperkt door beperkte beschikbaarheid, geen API-toegang en ontbrekende officiële benchmarks. Op dit moment is het een fascinerende voorproef van waar AI-architectuur naartoe gaat, nog geen dagelijkse vervanger van Claude Fable 5.2 of GPT-6.2 Astra.
</div>

<h2>Wat is de Loop Transformer?</h2>

<p>Elk groot AI-model dat in 2026 is uitgebracht, volgde hetzelfde draaiboek: meer lagen stapelen, meer parameters toevoegen, op meer data trainen. GLM-5.4 doorbreekt het patroon. In plaats van lagen toe te voegen, laat Z.ai bestaande lagen harder werken.</p>

<p>Zo werkt het: GLM-5.4 heeft ruwweg 750 miljard parameters verdeeld over 78 opgeslagen lagen. Maar 28 van die lagen — het "loop block" in het midden van het netwerk — worden twee keer per forward pass uitgevoerd met gedeelde gewichten. Het resultaat is 106 effectieve laagpassages per token, met de parameteropslag van een model met 78 lagen.</p>

<p>Z.ai beweert dat deze aanpak GLM-5.4 de intelligentie laat evenaren van modellen met 2 tot 3 biljoen parameters. Als dat zelfs gedeeltelijk waar is, is het een significante architecturale doorbraak — het betekent dat je slimmere modellen kunt bouwen zonder de rekenkosten evenredig op te schalen.</p>

<h3>Hoe de Loop echt werkt</h3>

<p>De architectuur heeft drie secties:</p>

<ul>
  <li><strong>Prelude-lagen (1–26):</strong> Worden één keer per token uitgevoerd. Bouwen de eerste representaties van de input.</li>
  <li><strong>Loop-lagen (27–54):</strong> Deze 28 lagen worden twee keer uitgevoerd met gedeelde gewichten. Per-token gates bepalen hoeveel van de output van elke loop-iteratie naar de residual stream wordt geschreven. In pas 1 blijven de gates doorgaans klein — het model bouwt globale context op. In pas 2 gaan de gates verder open, waardoor de representatie wordt verfijnd met de context van pas 1.</li>
  <li><strong>Coda-lagen (55–78):</strong> Worden één keer uitgevoerd. Produceren de uiteindelijke output.</li>
</ul>

<p>Een slimme truc: bij de tweede doorgang door het loop block hergebruikt het model de sparse KV cache en aandachtsindices die tijdens pas 1 zijn geselecteerd. Het onderhoudt alleen zijn eigen lokale sliding-window cache (naar verluidt 128 tokens). Dit betekent dat de tweede loop-iteratie relatief weinig geheugenoverhead toevoegt.</p>

<h2>Wat we weten over de prestaties</h2>

<p>Hier wordt het ingewikkeld. Z.ai heeft geen officiële benchmarks en geen model card gepubliceerd. Een teamlid zei dat scores later komen. Wat we hebben zijn tests van derden en de interne ablatiestudies van Z.ai.</p>

<h3>Resultaten van derden: KingBench 4</h3>

<p>AICodeKing's KingBench 4 harness testte GLM-5.4 op zes programmeerprojecten. De resultaten:</p>

<ul>
  <li><strong>7e overall</strong> van 18 geteste modellen</li>
  <li><strong>1e onder open-weight modellen</strong></li>
  <li><strong>Looptijd: 431 minuten</strong> — aanzienlijk trager dan Gemini 4 Neon (109 minuten)</li>
  <li><strong>Redeneerstappen: 1.128</strong> vs. 244 bij Gemini 4 Neon — het model denkt diep na, soms te diep</li>
  <li><strong>Tool-call faalpercentage: 1,56%</strong>, maar 66% van de mislukte calls herstelden bij retry — hoger herstelpercentage dan elk Claude- of Codex-model in de test</li>
</ul>

<p>Ter context: Claude Fable 5.2 scoorde 1e overall op KingBench 4 met 42/60 punten. Gemini 4 Neon was 2e met 37,9/60. GLM-5.4 landde ruwweg waar je een sterk open-weight model zou verwachten.</p>

<h3>Interne validatie van Z.ai</h3>

<p>Z.ai voerde een gecontroleerd experiment uit op de schaal van 30B parameters — dezelfde architectuur, met en zonder loop — met ongeveer 10% meer trainingscompute voor de geloopte versie. Resultaten: de outputlengte daalde 10–14% over de benchmarks (tot 14,9% op MMLU-Pro), en de winst was het grootst bij wiskunde, wetenschappelijk redeneren en taken met lange context.</p>

<p>Het ontwerp werd gevalideerd op vier schalen: 1B, 4B, 30B en 750B parameters.</p>

<h3>Een interessante kwalitatieve bevinding</h3>

<p>Minstens één onafhankelijke reviewer rapporteerde dat GLM-5.4 applicatiebugs en beveiligingskwetsbaarheden aan het licht bracht die Claude Fable 5.2 en andere geteste modellen misten. Dit past bij het ontwerp van de architectuur — de dubbele doorgang door de loop-lagen geeft het model meer tijd om subtiele problemen op te merken. De beoordeling van DataCamp is dat GLM-5.4 beter als tweede reviewer kan worden ingezet dan als primaire codeeragent.</p>

<h2>UX Score: 7/10</h2>

<p>GLM-5.4 is toegankelijk via het GLM Coding Plan-abonnement van Z.ai, ZCode (zcode.z.ai) en Z.ai Chat (chat.z.ai). De interfaces zijn functioneel maar niet op het niveau van de gepolijste ervaringen van ChatGPT of Claude. Het ondersteunt contextvensters van 1M tokens — Z.ai raadt aan om de client op 512.000 tokens in te stellen voor de beste codeerresultaten. Het model ondersteunt ook visuele input voor visuele codeertaken.</p>

<p>Een bekend probleem dat Z.ai zelf erkent: het model kan vastlopen in lange "marathon thinking"-loops. Dit is de afweging van de Loop Transformer — hetzelfde mechanisme dat dieper redeneren mogelijk maakt, kan soms leiden tot overmatige deliberatie.</p>

<p>De snelheid is acceptabel: Z.ai claimt tot 200 tokens/s buiten piekmomenten en 70–80 tokens/s onder belasting.</p>

<h2>Kwaliteitsscore: 8/10</h2>

<p>Op basis van beschikbare tests van derden en vroege gebruikersrapportages is de redeneerkwaliteit van GLM-5.4 oprecht sterk — vooral voor code review en beveiligingsanalyse. De Loop Transformer-architectuur lijkt het model een kwalitatief voordeel te geven bij diepgaande analysetaken. We geven een 8 op basis van KingBench-resultaten en de duidelijke innovatie van de architectuur, maar deze score kan veranderen zodra Z.ai officiële benchmarks publiceert.</p>

<h2>Prijs-kwaliteitscore: 7/10</h2>

<p>Zonder gepubliceerde API-prijzen is het moeilijk om de prijs-kwaliteitverhouding te beoordelen. Toegang vereist momenteel een GLM Coding Plan-abonnement met wekelijkse quota's die naar verluidt 50% hoger zijn dan die van GLM-5.3. Het model is nog niet beschikbaar op OpenRouter, Cursor, GitHub Copilot of de grote cloudplatforms (Vertex AI, Azure AI Foundry, AWS Bedrock). Dit beperkt de praktische waarde aanzienlijk.</p>

<h2>Integratiescore: 6/10</h2>

<p>Dit is het zwakste punt van GLM-5.4. Er is nog geen API-toegang — Z.ai zegt dat deze na een veiligheidsbeoordeling geopend wordt. Het model werkt in Claude Code (provider ID: "zai-coding-plan/glm-5.4") en de eigen tools van Z.ai, maar het ontbreekt op de grote AI-platforms die de meeste ontwikkelaars dagelijks gebruiken. Open gewichten zijn gepland maar nog niet vrijgegeven — Z.ai noemt "safety hardening" zonder aangekondigde datum.</p>

<h2>Supportscore: 6/10</h2>

<p>Z.ai heeft geen model card, geen officiële benchmarks en geen gedetailleerde documentatie gepubliceerd. Het gebrek aan transparantie is zorgwekkend voor een model dat architecturaal zo ambitieus is. Support lijkt beperkt tot het ecosysteem van Z.ai.</p>

<h2>De Loop Transformer: waarom het verder reikt dan GLM-5.4</h2>

<p>Zelfs als GLM-5.4 zelf niet klaar is om je primaire codeermodel te vervangen, is de Loop Transformer-architectuur significant voor de gehele AI-industrie. Dit is waarom:</p>

<ul>
  <li><strong>Efficiëntie:</strong> Als je de intelligentie van een 2T-parametermodel kunt evenaren met 750B parameters door lagen te loopen, zijn de kosten- en energiebesparingen enorm.</li>
  <li><strong>Schaalbaarheid:</strong> Z.ai is niet de enige — Thinking Machines' Inkling 2 Mini (uitgebracht op 20 november) gebruikt een vergelijkbare aanpak met 26,4B totale / 3,4B actieve parameters en middelste lagen die 3 keer per token worden uitgevoerd. Het patroon verspreidt zich.</li>
  <li><strong>Praktische impact:</strong> Effectief kleinere modellen betekenen goedkopere inferentie, snellere deployment en AI die op minder krachtige hardware draait.</li>
</ul>

<p>November 2026 wordt misschien herinnerd als de maand waarin de industrie begon te vragen of "groter altijd beter is". Loop Transformers suggereren dat het antwoord nee is.</p>

<h2>Wie zou GLM-5.4 vandaag moeten gebruiken?</h2>

<ul>
  <li><strong>AI-onderzoekers en architectuurliefhebbers:</strong> Dit is op dit moment het meest interessante model om te bestuderen.</li>
  <li><strong>Code reviewers die een tweede mening zoeken:</strong> GLM-5.4 vindt problemen die andere modellen missen. Gebruik het als reviewer, niet als primaire codeur.</li>
  <li><strong>Afwachtende ontwikkelaars:</strong> Als je vandaag een dagelijks codeermodel nodig hebt, zijn Claude Fable 5.2, Gemini 4 Neon of GPT-6.2 Sol veiligere keuzes. Kom terug wanneer Z.ai API-prijzen en benchmarks publiceert.</li>
</ul>

<h2>Het oordeel</h2>

<p>GLM-5.4 verdient een B+ — niet omdat het het beste codeermodel is dat vandaag beschikbaar is, maar omdat het een architectuur introduceert die de volgende generatie AI-modellen kan hervormen. De Loop Transformer is echt, werkt, en inspireert al andere teams. Z.ai hoeft alleen de deuren wijder te openen: benchmarks publiceren, de API lanceren en die gewichten vrijgeven. Tot dan is het een briljante voorproef van waar AI naartoe gaat, beschikbaar voor te weinig mensen om hoger te scoren.</p>
