---
title: "Claude Ship: Anthropics AI-agenten reviewen, repareren en keuren nu code goed"
description: "Anthropic lanceert Claude Ship, een bundel van Code Review met twee nieuwe agenten — PR Steward en auto-approval — voor de volledige post-coding workflow. Dit betekent het voor dev-teams."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Anthropic bundelt zijn code-agenten in Claude Ship</h2>

<p>Op 24 november 2026 kondigde Anthropic <strong>Claude Ship</strong> aan, een uniforme set AI-agenten die alles afhandelt wat er na het schrijven van code gebeurt. De bundel combineert de bestaande Code Review-functie — al algemeen beschikbaar — met twee nieuwe agenten momenteel in bèta: <strong>PR Steward</strong> en een risicogebaseerd <strong>auto-approval-systeem</strong>.</p>

<p>De lancering weerspiegelt een verschuiving in hoe AI-codeertools zich ontwikkelen. Code schrijven is niet langer het knelpunt. Het reviewen, repareren en uitleveren ervan wel.</p>

<h2>Wat Claude Ship bevat</h2>

<h3>1. Code Review (algemeen beschikbaar)</h3>

<p>Code Review werd in maart 2026 gelanceerd en zet bij elke pull request een team van AI-agenten in. De agenten werken parallel aan het vinden van bugs, het verifiëren van bevindingen om false positives te filteren en het rangschikken van problemen op ernst. Intern bij Anthropic verhoogde de tool substantiële reviewopmerkingen van 16% naar 54% van de PR's, met minder dan 1% van de bevindingen als onjuist gemarkeerd door engineers.</p>

<p>Reviews schalen met de complexiteit. Grote of complexe pull requests krijgen meer agenten en diepere analyse; triviale wijzigingen krijgen een lichtere controle. Een gemiddelde review duurt ongeveer 20 minuten en kost $15–25, gefactureerd op tokenverbruik.</p>

<h3>2. PR Steward (nieuw — bèta)</h3>

<p>PR Steward is het tweede onderdeel van de Claude Ship-bundel en neemt het vervelende werk over dat zich na een code review opstapelt. Wanneer een PR falende CI-checks, merge-conflicten of onopgeloste reviewfeedback heeft, grijpt PR Steward in om ze automatisch op te lossen.</p>

<p>Na elke push plaatst het een opmerking op de PR met een samenvatting van de wijzigingen en instructies voor een rollback. Het doel is de ontwikkelaar de controle te laten behouden terwijl het handmatige werk verdwijnt dat PR's vaak in de wachtrij blokkeert.</p>

<h3>3. Risicogebaseerde auto-goedkeuring (nieuw — bèta)</h3>

<p>Het derde onderdeel introduceert een gelaagd goedkeuringssysteem. Wijzigingen met laag risico — documentatie-updates, interne features achter feature flags — hoeven mogelijk geen menselijke goedkeuring. Wijzigingen met gemiddeld risico vereisen één menselijke reviewer. Wijzigingen met hoog risico vereisen er twee.</p>

<p>De goedkeuring van een AI-agent telt nooit als die van een mens. Het systeem is ontworpen om veilige wijzigingen te versnellen zonder menselijk oordeel bij belangrijke beslissingen weg te nemen.</p>

<h2>Waarom dit ertoe doet: het review-knelpunt is reëel</h2>

<p>De interne cijfers van Anthropic spreken voor zich. De monorepo van Claude Code ging van ongeveer 2.500 samengevoegde wijzigingen per dag in mei naar meer dan 30.000 in september 2026. Claude schrijft nu zo'n 90% van Anthropics code. Ondertussen daalde het revert-percentage met meer dan 40%, terwijl het aantal samengevoegde pull requests meer dan verdubbelde.</p>

<p>Het probleem is niet langer codegeneratie — het is alles wat daarna komt. Claude Ship is Anthropics antwoord op de groeiende kloof tussen hoe snel AI code schrijft en hoe snel mensen het kunnen reviewen.</p>

<h2>Vergelijking met andere AI-codeertools</h2>

<p>Claude Ship bezet een andere niche dan tools zoals <strong>Cursor</strong> of <strong>GitHub Copilot</strong>, die zich richten op het schrijven en bewerken van code in de IDE. Ship richt zich op de post-coding workflow: review, CI-fixes en merge-goedkeuring.</p>

<p>Dat gezegd hebbende concurreert het rechtstreeks met GitHubs eigen Copilot-reviewfuncties en opkomende tools van startups die autonome ontwikkelagenten bouwen. Het belangrijkste onderscheid is diepgang — Anthropics multi-agent-aanpak is langzamer en duurder dan lichtgewicht alternatieven, maar vangt problemen op die oppervlakkige scans missen.</p>

<p>Voor een volledige vergelijking van AI-codeerassistenten, zie onze gids <a href="/nl/blog/best-ai-coding-tools-2026">Beste AI-codeertools in 2026</a>. We hebben ook uitgebreide reviews van <a href="/nl/blog/cursor-ai-review-2026">Cursor AI</a> en <a href="/nl/blog/github-copilot-vs-cursor-2026">GitHub Copilot vs Cursor</a>.</p>

<h2>Prijzen en beschikbaarheid</h2>

<p>Code Review is beschikbaar voor Claude for Teams- en Claude for Enterprise-klanten. PR Steward en auto-approval zijn in bèta. Code Review wordt gefactureerd op tokenverbruik, doorgaans $15–25 per review afhankelijk van de PR-grootte.</p>

<p>De op jaarbasis berekende omzet van Claude Code heeft sinds de lancering de $2,5 miljard overschreden, wat wijst op sterke bedrijfsadoptie van Anthropics ontwikkelaarstools.</p>

<h2>Conclusie</h2>

<p>Claude Ship is geen codegenerator — het is een code-<em>verzender</em>. Door review, reparatie en goedkeuring in één workflow te bundelen, zet Anthropic erop in dat de volgende golf van ontwikkelaarsproductiviteit niet komt van het schrijven van meer code, maar van het sneller en veiliger uitleveren ervan.</p>

<p>Voor teams die al verdrinken in pull requests is dat een overtuigend verhaal.</p>

<p><em>Gratis ontwikkelaarstools nodig naast je AI-codeerstack? Bezoek <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> voor JSON-formatters, code-beautifiers, regex-testers en 100+ andere tools — allemaal gratis, zonder registratie.</em></p>
