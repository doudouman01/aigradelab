---
title: "Cisco maakt Quarry open source: een beveiligingsengine die AI-agenten in de gaten houdt"
description: "Cisco heeft Quarry als open source uitgebracht, een gedragsdetectie-engine ontworpen om AI-agenten te monitoren op kwaadaardige activiteiten. Waarom de beveiliging van AI-agenten steeds belangrijker wordt — en hoe Quarry werkt."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Cisco pakt het beveiligingsprobleem van AI-agenten aan</h2>

<p>Naarmate AI-agenten autonomer worden — code schrijven, op het web surfen, bestanden beheren, API-aanroepen doen — wordt de vraag <strong>wie de agenten bewaakt</strong> steeds urgenter. Het antwoord van Cisco is <strong>Quarry</strong>, een open-source gedragsdetectie-engine die AI-agenten in realtime monitort en waarschuwt wanneer ze de fout in gaan.</p>

<p>De tool is uitgebracht op GitHub en bestrijkt een breed scala aan scenario's: enkelvoudige en meervoudige LLM-gesprekken, agentisch gereedschapsgebruik, interacties via het Model Context Protocol (MCP) en multimodale invoer. Er zijn al plugins beschikbaar voor <strong>Claude Code</strong>, <strong>Codex</strong> en andere MCP-compatibele agenten.</p>

<h2>Waarom de beveiliging van AI-agenten nu belangrijk is</h2>

<p>De meeste bestaande AI-beveiligingstools richten zich op wat er op modelniveau gebeurt — prompt-injectie, jailbreaking, schadelijke uitvoer. Quarry kiest een andere aanpak: het observeert wat agenten <em>doen</em>, niet alleen wat ze zeggen.</p>

<p>Dit onderscheid is belangrijk omdat moderne AI-agenten het volgende kunnen:</p>

<ul>
<li>Code uitvoeren op servers en lokale machines</li>
<li>Bestanden lezen, schrijven en verwijderen</li>
<li>API-aanroepen doen naar externe diensten</li>
<li>Op het web surfen en met live websites interageren</li>
<li>Meerdere tools aan elkaar schakelen in complexe workflows</li>
</ul>

<p>Een prompt-injectie die een chatbot iets ongepasts laat zeggen is één ding. Een prompt-injectie die een autonome codeeragent een productiedatabase laat verwijderen is iets heel anders. Quarry is gebouwd voor het tweede scenario.</p>

<h2>Hoe Quarry werkt</h2>

<p>Quarry fungeert als een gedragsdetectielaag tussen een AI-agent en zijn tools. Het evalueert de acties van de agent aan de hand van een configureerbare regelset, op basis van de <strong>Cisco AI Security & Safety Taxonomy</strong>.</p>

<p>Belangrijkste functies:</p>

<ul>
<li><strong>Regelgebaseerde detectie:</strong> Beveiligingsteams definiëren regels voor verdacht gedrag — ongeautoriseerde bestandstoegang, onverwachte netwerkoproepen, pogingen tot privilege-escalatie, patronen van data-exfiltratie.</li>
<li><strong>Multi-turn bewustzijn:</strong> Quarry volgt het gedrag van agenten over gespreksrondes heen en detecteert aanvallen die zich geleidelijk ontvouwen in plaats van in één prompt.</li>
<li><strong>MCP-integratie:</strong> Dankzij native ondersteuning van het Model Context Protocol kan Quarry de specifieke tools monitoren waartoe een agent toegang heeft en ongebruikelijke gebruikspatronen signaleren.</li>
<li><strong>Modulaire architectuur:</strong> Cisco biedt plugins voor populaire agentframeworks en moedigt de community aan om er meer te bouwen.</li>
</ul>

<p>De GitHub-repository van het project bevat installatie-instructies, ondersteunde Python-versies, configuratievoorbeelden en richtlijnen voor het schrijven van regels.</p>

<h2>Het grotere plaatje: beveiliging van AI-agenten als nieuwe categorie</h2>

<p>Quarry maakt deel uit van een bredere trend. Naarmate AI-agenten van demo's naar productie gaan, ontstaat er een geheel nieuwe beveiligingscategorie:</p>

<ul>
<li><strong>Cisco AI Defense</strong> — Cisco's commerciële AI-beveiligingssuite, die nu volledig wordt ontwikkeld met OpenAI's Codex, met functies die in weken worden geleverd in plaats van kwartalen.</li>
<li><strong>Het gelaagde goedkeuringssysteem van Anthropic</strong> — Onderdeel van het nieuwe Claude Ship-pakket, waarbij codewijzigingen op risiconiveau worden geclassificeerd en verschillende niveaus van menselijke goedkeuring vereisen. <a href="/nl/blog/claude-ship-ai-code-automation">Lees ons artikel hier</a>.</li>
<li><strong>OpenAI's Daybreak Defense Network</strong> — Een cybersecurity-partnerschap met Cisco dat AI-aangedreven dreigingstriage verkent.</li>
</ul>

<p>Het patroon is duidelijk: de bedrijven die de meest capabele agenten bouwen, bouwen ook de vangrails. De vraag is of open-source tools zoals Quarry het tempo van de agentontwikkeling kunnen bijhouden.</p>

<h2>Wie Quarry zou moeten gebruiken</h2>

<p>Quarry is voornamelijk relevant voor:</p>

<ul>
<li><strong>Ontwikkelteams</strong> die AI-codeeragenten (Claude Code, Codex, Cursor) inzetten in productieomgevingen.</li>
<li><strong>Beveiligingsteams</strong> die verantwoordelijk zijn voor het monitoren van AI-aangedreven workflows binnen de organisatie.</li>
<li><strong>Platformbouwers</strong> die agentische AI-producten maken en een detectielaag nodig hebben zonder er een vanaf nul te hoeven bouwen.</li>
</ul>

<p>Als u AI-tools voor ontwikkeling evalueert, bekijk dan onze gidsen <a href="/nl/blog/best-ai-coding-tools-2026">Beste AI-codeertools van 2026</a> en <a href="/nl/blog/best-ai-tools-developers-2026">Beste AI-tools voor ontwikkelaars</a> voor het volledige overzicht.</p>

<h2>Conclusie</h2>

<p>AI-agenten worden elke maand krachtiger, en de beveiligingstools moeten bijblijven. Cisco's beslissing om Quarry open source te maken is slim — het creëert een gedeeld fundament voor agentbeveiliging in plaats van elke organisatie zijn eigen oplossing te laten bouwen. Of Quarry de standaard wordt of slechts één van vele opties, de categorie zelf is here to stay.</p>

<p><em>Bouwt u met AI-agenten? Zorg dat uw toolkit compleet is. Bekijk <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> voor gratis ontwikkelaarstools — JSON-validators, regex-testers, hash-generatoren en meer.</em></p>
