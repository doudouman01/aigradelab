---
title: "Bland AI Tofu-1 review: full-duplex spraak-AI die ddwars door het lawaai heen hoort"
description: "Bland's Tofu-1 is een speech-to-speech-model dat tijdens telefoongesprekken luistert, redeneert en in audio antwoordt. We onderzoeken de claims, beperkingen en het potentieel voor bedrijven."
category: "Graded Reviews"
categorySlug: "graded-reviews"
date: "2026-11-21"
lastTested: "2026-11-18"
readTime: "9 min leestijd"
grade: "B"
scores_ux: 7
scores_quality: 8
scores_value: 5
scores_integration: 6
scores_support: 6
toolName: "Bland AI Tofu-1"
---

<h2>Wat is Tofu-1?</h2>

<p>Tofu-1 is het eerste speech-to-speech-model van Bland, aangekondigd op 13 november 2026 als researchpreview. In tegenstelling tot de meeste spraak-AI-agents, die als cascade werken (spraak omzetten naar tekst, verwerken met een taalmodel en weer terugzetten naar spraak), verwerkt Tofu-1 audio rechtstreeks. Het hoort, redeneert en antwoordt zonder ooit het audiodomein te verlaten.</p>

<p>De in San Francisco gevestigde spraak-AI-startup bouwde Tofu-1 speciaal voor telefoongesprekken met veel op het spel die onder verre van ideale omstandigheden plaatsvinden: rijdende auto's, ziekenhuiskamers, zwak mobiel bereik en omgevingen waar meerdere mensen tegelijk praten.</p>

<h2>Het probleem dat Tofu-1 oplost</h2>

<p>Dit is het scenario waarmee Bland de uitdaging illustreert: op de achtergrond staat een televisie aan. De beller zegt "nee". De televisie zegt "ja". Welk antwoord legt de AI vast?</p>

<p>Traditionele cascade-spraakagents hebben hier moeite mee omdat ze audiocontext verliezen tijdens de omzetting van spraak naar tekst. Achtergrondgeluid, stemtoon, aarzelingspatronen en identificatie van de spreker worden allemaal plat geslagen tot een tekstuele transcriptie voordat de AI ze ooit verwerkt.</p>

<p>Tofu-1 claimt dit op te lossen door alles in het audiodomein te houden. Het model bepaalt bij welke spreker elke zin hoort en filtert daarop, en scheidt de stem van de beller van televisies, huilende kinderen, verkeerslawaai, omroepen in ziekenhuizen en andere omgevingsgeluiden.</p>

<h2>De belangrijkste claims</h2>

<h3>Full-duplex communicatie</h3>

<p>Tofu-1 kan tegelijk luisteren en spreken: echte full-duplex werking. Dat betekent dat het natuurlijke gesprekspatronen aankan, zoals onderbrekingen, door elkaar pratende sprekers en correcties midden in een zin, zonder de ongemakkelijke stiltes waar de meeste spraak-AI-systemen last van hebben.</p>

<h3>Scheiding van sprekers</h3>

<p>Het model claimt onderscheid te maken tussen de hoofdbeller en achtergrondstemmen, zelfs als die tegelijk spreken. In Bland's "TV Test"-demonstratie (die het bedrijf zelf bestempelt als illustratief, niet als opgenomen modeloutput) wijst de agent tegenstrijdige antwoorden correct toe aan de juiste bron.</p>

<h3>Omgaan met omgevingsgeluid</h3>

<p>Naast stemscheiding is Tofu-1 ontworpen om de gesprekskwaliteit te behouden in lawaaiige omgevingen: rijden over de snelweg, drukke ziekenhuisafdelingen, volle openbare ruimtes. Het model blijft begrijpen en antwoorden, ook als de signaalkwaliteit achteruitgaat.</p>

<h3>Menselijke prestaties</h3>

<p>Bland's eigen meetwaarde: meer dan 92% van de deelnemers aan screenings kon Tofu-1 niet als AI herkennen. Dat is een gewaagde bewering, al met de kanttekening dat het geheel zelf gerapporteerd is, zonder gepubliceerde methodologie of verificatie door derden.</p>

<h2>Wat we nog niet weten</h2>

<p>Hier wordt de review ingewikkeld. Tofu-1 is een researchpreview en Bland heeft meerdere cruciale gegevens achtergehouden:</p>

<ul>
<li><strong>Geen gepubliceerde benchmarks</strong> — Geen gestandaardiseerde testresultaten tegen gangbare spraak-AI-benchmarks</li>
<li><strong>Geen modelgrootte bekendgemaakt</strong> — We kunnen de infrastructuurvereisten niet beoordelen</li>
<li><strong>Geen prijzen aangekondigd</strong> — Het is onmogelijk om kosten per gesprek te berekenen of met concurrenten te vergelijken</li>
<li><strong>Geen latentiecijfers</strong> — Reactietijd is cruciaal in telefoongesprekken, en er zijn geen cijfers gedeeld</li>
<li><strong>Geen test door derden</strong> — De claim dat 92% het niet van een mens kan onderscheiden is niet onafhankelijk geverifieerd</li>
</ul>

<p>Dit gebrek aan informatie is de belangrijkste reden voor ons cijfer. Het technologische concept is overtuigend, maar we kunnen de claims niet verifiëren.</p>

<h2>Concurrentielandschap</h2>

<p>Tofu-1 betreedt een snel groeiende markt voor spraak-AI. Zo verhoudt het zich tot bekende alternatieven:</p>

<table>
<thead>
<tr><th>Functie</th><th>Bland Tofu-1</th><th>OpenAI GPT-Live</th><th>Nvidia VoiceChat</th></tr>
</thead>
<tbody>
<tr><td>Architectuur</td><td>Speech-to-speech</td><td>Multimodaal</td><td>Speech-to-speech</td></tr>
<tr><td>Full duplex</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
<tr><td>Beoogde toepassing</td><td>Zakelijke gesprekken</td><td>Algemene assistent</td><td>Open source</td></tr>
<tr><td>Beschikbaarheid</td><td>Researchpreview</td><td>GA (Pro)</td><td>Open weights</td></tr>
<tr><td>Prijzen</td><td>Niet aangekondigd</td><td>Inbegrepen in abonnement</td><td>Gratis (zelf hosten)</td></tr>
</tbody>
</table>

<p>Bland onderscheidt zich door zijn scherpe focus op zakelijke telefoongesprekken in uitdagende audio-omgevingen. Waar GPT-Live en andere concurrenten mikken op algemene conversationele AI, is Tofu-1 speciaal gebouwd voor de specifieke problemen van zakelijke telefonie.</p>

<h2>Wie moet er aandacht aan besteden</h2>

<p><strong>Ja, volg dit nauwlettend:</strong></p>
<ul>
<li>Contactcenters met grote volumes inkomende gesprekken</li>
<li>Zorginstellingen met telefonische contacten met patiënten</li>
<li>Verzekeraars die claims telefonisch afhandelen</li>
<li>Financiële dienstverleners met telefonische processen die gevoelig zijn voor compliance</li>
</ul>

<p><strong>Nog niet bruikbaar voor:</strong></p>
<ul>
<li>Kleine bedrijven die nu een telefoonbot zoeken (alleen researchpreview)</li>
<li>Ontwikkelaars die erop willen voortbouwen (nog geen openbare API)</li>
<li>Iedereen die transparante prijzen nodig heeft voor budgetplanning</li>
</ul>

<h2>Bland AI: bedrijfscontext</h2>

<p>Bland werd in 2023 opgericht door Isaiah Granet en Sobhan Nejad en haalde medio 2026 meer dan $100 miljoen op, waaronder een ronde van $50 miljoen in juni 2026. Het bedrijf verwerkt meer dan 3,5 miljoen gesprekken per week voor zakelijke klanten zoals Samsara en Kin Insurance. De standaardprijzen van Bland beginnen bij $0,14 per minuut in het self-service-abonnement.</p>

<p>Tofu-1 is het eerste model uit wat Bland beschrijft als een geplande familie van speech-to-speech-modellen, wat suggereert dat er meer gespecialiseerde varianten kunnen volgen.</p>

<h2>Het oordeel van AIGradeLab: B</h2>

<p>Tofu-1 van Bland krijgt een <strong>B</strong>, een cijfer dat oprechte technische ambitie weergeeft die wordt afgeremd door een gebrek aan verifieerbaar bewijs. Het concept van een full-duplex speech-to-speech-model dat is geoptimaliseerd voor rumoerige zakelijke gesprekken is precies wat de markt nodig heeft. Als de claims standhouden bij onafhankelijke tests, kan dit een A-product worden.</p>

<p>Maar een "researchpreview" zonder benchmarks, zonder prijzen en zonder validatie door derden betekent dat we een belofte beoordelen, geen product. We komen erop terug als Tofu-1 algemeen beschikbaar wordt met gepubliceerde prestatiegegevens.</p>

<table>
<thead>
<tr><th>Categorie</th><th>Score</th><th>Opmerkingen</th></tr>
</thead>
<tbody>
<tr><td>UX / ontwikkelaarservaring</td><td>7/10</td><td>Bland's platform is verzorgd, integratie van Tofu-1 nog onbekend</td></tr>
<tr><td>Kwaliteit / betrouwbaarheid</td><td>8/10</td><td>Sterke claims, niet onafhankelijk geverifieerd</td></tr>
<tr><td>Prijs-kwaliteit</td><td>5/10</td><td>Niet te beoordelen: geen prijzen beschikbaar</td></tr>
<tr><td>Integratie</td><td>6/10</td><td>Researchpreview, beperkte toegang</td></tr>
<tr><td>Ondersteuning / community</td><td>6/10</td><td>Gericht op bedrijven, nog geen openbare community</td></tr>
</tbody>
</table>
