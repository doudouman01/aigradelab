---
title: "Anthropic's Claude-tekstwatermerk: Waarom gebruikers opzeggen en wat het betekent voor AI"
description: "Anthropic heeft onzichtbare tekstwatermerken geïmplementeerd in alle Claude-output met SynthID-Text-technologie. Sommige gebruikers zeggen hun abonnement op vanwege zorgen over code-eigendom en privacy. Hier is de volledige uitleg over hoe het werkt en waarom het ertoe doet."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-28"
readTime: "9 min leestijd"
---

<h2>Claude voorziet nu alles wat het schrijft van een watermerk</h2>
<p>Anthropic heeft een gedetailleerde uitleg gepubliceerd over zijn nieuw <strong>tekstwatermerksysteem</strong> voor Claude — een onzichtbaar statistisch patroon dat in alle Claude-output wordt ingebed en waarmee AI-gegenereerde tekst kan worden gedetecteerd. De technologie is gebaseerd op <strong>SynthID-Text</strong>, oorspronkelijk gepubliceerd door Google DeepMind in een Nature-paper uit 2024, en wordt wereldwijd uitgerold als onderdeel van Anthropic's naleving van de <strong>transparantievereisten van de EU AI Act</strong>.</p>
<p>De stap heeft een zichtbare tegenreactie uitgelokt. Business Insider interviewde gebruikers die hun <strong>abonnement hebben opgezegd</strong>, met zorgen over code-eigendom, klantcontracten en professionele reputatie. De controverse benadrukt een groeiende spanning tussen AI-transparantieregelgeving en praktische gebruikersbehoeften.</p>

<h2>Hoe het watermerk werkt</h2>
<p>De technische aanpak is elegant maar onzichtbaar voor menselijke lezers:</p>
<ul>
  <li>Wanneer Claude tekst genereert, kiest het regelmatig tussen <strong>kandidaat-woorden die ongeveer even goed</strong> in de context passen</li>
  <li>Een <strong>watermerksleutel</strong> stuurt deze onbelangrijke woordkeuzes naar een statistisch patroon dat onzichtbaar is voor lezers maar detecteerbaar voor iedereen met de sleutel</li>
  <li><strong>Er worden geen verborgen tekens of extra tokens</strong> toegevoegd — het watermerk bestaat puur in de statistische verdeling van woordkeuzes</li>
  <li>Anthropic zegt dat interne tests <strong>geen effect op kwaliteit of leesbaarheid</strong> aantonen</li>
</ul>

<h3>Wat overleeft en wat niet</h3>
<p>Anthropic is transparant geweest over de beperkingen van het watermerk:</p>
<table>
  <thead>
    <tr><th>Scenario</th><th>Watermerkstatus</th></tr>
  </thead>
  <tbody>
    <tr><td>Kopiëren en plakken van Claude-output</td><td>Overleeft</td></tr>
    <tr><td>Lichte bewerking (typo's corrigeren, kleine wijzigingen)</td><td>Overleeft</td></tr>
    <tr><td>Volledige herschrijving van de tekst</td><td>Verwijderd</td></tr>
    <tr><td>Tekst die Claude alleen heeft nagelezen</td><td>Bijna geen watermerk (meeste woorden kwamen van de mens)</td></tr>
    <tr><td>Gegenereerde code</td><td>Zwakker merk (werkende code heeft minder flexibele woordkeuzes)</td></tr>
    <tr><td>Opmerkingen in code</td><td>Kan het merk dragen</td></tr>
  </tbody>
</table>

<h2>De EU AI Act-connectie</h2>
<p>Het watermerk maakt deel uit van een breder compliancekader dat wordt opgelegd door de transparantiebepalingen van de EU AI Act:</p>
<ul>
  <li><strong>Modellen uitgebracht na 2 augustus 2026</strong> moeten vanaf dag één met markering worden geleverd</li>
  <li><strong>Oudere modellen</strong> worden achteraf voorzien van watermerkmogelijkheden</li>
  <li><strong>Ondertekenaars moeten werkende detectiesystemen</strong> hebben tegen februari 2027</li>
  <li>Anthropic staat niet alleen — <strong>verschillende andere grote AI-ontwikkelaars</strong> ondertekenden dezelfde gedragscode en zullen hun eigen watermerken implementeren</li>
</ul>
<p>Dit betekent dat Claude een vroeg voorbeeld is van wat een industriebreed gebruik zal worden. Binnen enkele maanden zullen de meeste frontier AI-modellen — waaronder die van OpenAI, Google en Meta — waarschijnlijk vergelijkbare watermerken dragen.</p>

<h2>Wie kan het watermerk detecteren?</h2>
<p>Detectie is momenteel in <strong>besloten preview</strong>, beperkt tot:</p>
<ul>
  <li>Toezichthouders en wetshandhavers</li>
  <li>Mediaorganisaties en factcheckers</li>
  <li>Onafhankelijke onderzoekers</li>
  <li>Bedrijven die hun eigen Claude-output verifiëren</li>
</ul>
<p>Het grote publiek kan momenteel geen watermerken in Claude-tekst detecteren. Deze beperkte toegang is opzettelijk — wijdverspreide detectietools zouden kwaadwillenden kunnen helpen tekst te maken die het watermerk ontwijkt.</p>

<h2>Waarom gebruikers opzeggen</h2>
<p>Business Insider interviewde vier gebruikers die hun Claude-abonnement opzegden. Twee belangrijke zorgen kwamen naar voren:</p>

<h3>1. Professionele codezorgen</h3>
<p>Een freelance-ontwikkelaar uitte de vrees dat gemerkte code <strong>vragen bij klanten</strong> zou kunnen oproepen of contractboetes zou kunnen triggeren. Veel freelance- en bureaucontracten bevatten clausules die origineel werk vereisen — gemerkte code zou theoretisch als AI-gegenereerd kunnen worden aangemerkt, zelfs als de ontwikkelaar Claude alleen als assistent gebruikte en het meeste van de code zelf schreef.</p>

<h3>2. Beleid en publieke sector</h3>
<p>Een beleidsmedewerker uitte zorgen over watermerken in documenten die in overheidscontexten worden gebruikt, waar de perceptie van AI-gegenereerde inhoud de geloofwaardigheid zou kunnen ondermijnen of opkomende AI-openbaarmakingsvereisten zou kunnen schenden.</p>

<h3>Anthropic's reactie</h3>
<p>Anthropic vertelde Business Insider dat het <strong>geen merkbare toename in opzeggingen</strong> heeft gezien. Het bedrijf benadrukte dat het watermerk wereldwijd wordt toegepast (niet alleen in de EU) en dat het deel uitmaakt van hun inzet voor verantwoorde AI-inzet. Het watermerk kan niet identificeren <em>wie</em> de tekst heeft gegenereerd — het geeft alleen aan dat Claude het heeft geproduceerd.</p>

<h2>De bredere implicaties</h2>
<p>Claude's watermerk is de voorhoede van een transformatie die zal hervormen hoe alle AI-gegenereerde content wordt behandeld:</p>
<ul>
  <li><strong>Academische integriteit:</strong> Universiteiten zetten al AI-detectoren in — watermerken bieden een betrouwbaarder signaal dan huidige probabilistische detectietools</li>
  <li><strong>Journalistiek:</strong> Mediaorganisaties kunnen verifiëren of content AI-gegenereerd is vóór publicatie</li>
  <li><strong>Juridische procedures:</strong> Rechtbanken kunnen watermerkdetectie uiteindelijk als bewijs van AI-betrokkenheid bij documentvoorbereiding behandelen</li>
  <li><strong>Content-authenticiteit:</strong> Watermerken vullen beeld- en videoprovenancesystemen zoals C2PA aan, waardoor een multimodaal authenticiteitsraamwerk ontstaat</li>
</ul>
<p>Universiteiten zijn al begonnen traditionele AI-detectoren te vervangen door op watermerken gebaseerde systemen, erkennend dat statistische tekstanalyse te veel valspositieven oplevert.</p>

<h2>Wat dit betekent voor AI-gebruikers</h2>
<p>Voor dagelijkse gebruikers hangt de praktische impact af van het gebruiksscenario:</p>
<ul>
  <li><strong>Persoonlijk gebruik:</strong> Minimale impact — het watermerk heeft geen invloed op tekstkwaliteit of functionaliteit</li>
  <li><strong>Professioneel schrijven:</strong> Als je Claude's output aanzienlijk bewerkt, verzwakt het watermerk significant. Als je Claude gebruikt voor brainstormen en de definitieve tekst zelf schrijft, is het watermerk minimaal</li>
  <li><strong>Codegeneratie:</strong> Code is van nature zwak gemerkt, aangezien werkende code weinig willekeurige woordkeuzes heeft. De belangrijkste zorg betreft code-opmerkingen</li>
  <li><strong>Gereguleerde sectoren:</strong> Organisaties in financiën, gezondheidszorg en overheid moeten hun AI-gebruiksbeleid herzien in het licht van watermerkdetecteerbaarheid</li>
</ul>

<h2>Aanbevolen AI-tools</h2>
<p>Voor gebruikers die AI-assistenten evalueren in het licht van watermerkontwikkelingen:</p>
<ul>
  <li><strong>Claude</strong> (Anthropic) bevat nu watermerking — <a href="/nl/blog/chatgpt-vs-claude-2026">bekijk onze Claude vs ChatGPT-vergelijking</a></li>
  <li><strong>ChatGPT</strong> (OpenAI) zal waarschijnlijk vergelijkbare watermerken implementeren onder dezelfde EU AI Act-code — <a href="/nl/blog/chatgpt-review-2026">lees onze review</a></li>
</ul>
<p>Voor ontwikkelaars die zich zorgen maken over codewatermerking biedt <a href="https://toolcraftkit.com">ToolCraftKit</a> 125+ gratis tools die geen gemerkte output genereren, waaronder een <a href="https://toolcraftkit.com/tools/code-formatter">Code Formatter</a>, <a href="https://toolcraftkit.com/tools/git-commit-generator">Git Commit Generator</a> en <a href="https://toolcraftkit.com/tools/jwt-decoder">JWT Decoder</a>. Voor contentmakers die AI-openbaarmakingsvereisten navigeren, helpt de <a href="https://toolcraftkit.com/tools/ai-disclosure-generator">AI Disclosure Generator</a> bij het maken van conforme transparantieverklaringen.</p>

<h2>De conclusie</h2>
<p>Anthropic's Claude-watermerk is geen bug — het is de nieuwe normaal. Binnen enkele maanden zullen vrijwel alle frontier AI-modellen vergelijkbare merken dragen naarmate de transparantievereisten van de EU AI Act in de hele industrie van kracht worden. De echte vraag is niet of AI-output van een watermerk wordt voorzien, maar hoe beroepen, instellingen en rechtssystemen zich aanpassen aan een wereld waarin AI-gegenereerde tekst permanent identificeerbaar is. Voor gebruikers is het praktische advies eenvoudig: als toewijzing ertoe doet, bewerk dan grondig; als transparantie ertoe doet, werkt het watermerk zoals bedoeld.</p>
