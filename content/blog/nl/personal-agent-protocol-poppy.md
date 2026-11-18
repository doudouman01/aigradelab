---
title: "Personal Agent Protocol (Poppy): de nieuwe standaard waarmee AI-agents namens jou kunnen handelen"
description: "Sierra bracht op 13 november 2026 Poppy 1.0 uit, een open protocol dat bepaalt hoe persoonlijke AI-agents verbinding maken met bedrijven, gebruikers authenticeren en taken afronden. Shopify en Meta doen al mee."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-19"
readTime: "8 min leestijd"
---

<h2>AI-agents hebben zojuist een voordeur naar elk bedrijf gekregen</h2>

<p>Op 13 november 2026 bracht Sierra Personal Agent Protocol 1.0 uit, een open standaard die het <strong>Poppy</strong> noemt en die bepaalt hoe de AI-agent van een persoon via de website, API's of de zakelijke agent van een bedrijf verbinding maakt met dat bedrijf. Het protocol is al live: Shopify heeft het automatisch ingeschakeld voor zijn hele merchantplatform en de Muse-agent van Meta zoekt nu naar Poppy bij elke website die hij bezoekt.</p>

<p>Dit is geen theoretische specificatie. Het is werkende infrastructuur die nu al verandert hoe AI-agents met het commerciële internet omgaan.</p>

<h2>Waarom Poppy bestaat</h2>

<p>De aanleiding was een echt conflict. In september 2026 blokkeerde Amazon de Muse-agent van Meta in zijn winkel, met verwijzing naar zorgen over scraping. Dat gebeurde slechts 12 dagen nadat Muse was gelanceerd. Het incident legde een fundamenteel probleem bloot: er was geen standaardmanier voor AI-agents om zich te identificeren, gebruikers te authenticeren en met bedrijven te communiceren.</p>

<p>Zonder protocol was elke interactie tussen agent en bedrijf in feite webscraping, een juridische en technische grijze zone die bedrijven als Amazon niet wilden tolereren.</p>

<p>Sierra (mede-opgericht door Bret Taylor, voormalig CEO van Salesforce) en Meta ontwikkelden Poppy om dit op te lossen. Het protocol geeft bedrijven een manier om te herkennen dat ze met een AI-agent te maken hebben, te verifiëren wie die vertegenwoordigt en te bepalen wat die mag doen.</p>

<h2>Hoe Poppy werkt: vijf bouwstenen</h2>

<p>Poppy is opgebouwd uit vijf kerncomponenten die samenwerken:</p>

<h3>1. Discovery</h3>

<p>Bedrijven publiceren een bestand <code>/.well-known/poppy.json</code> op hun website, vergelijkbaar met hoe <code>robots.txt</code> zoekcrawlers vertelt wat ze moeten indexeren. Dit bestand geeft aan hoe agents verbinding kunnen maken, welke inlogmethoden beschikbaar zijn en welke mogelijkheden worden aangeboden. Elke AI-agent kan dit bestand lezen om te begrijpen hoe hij met het bedrijf kan communiceren.</p>

<h3>2. Identiteit</h3>

<p>Wanneer een AI-agent arriveert, kan het bedrijf duidelijk zien dat het te maken heeft met "de AI-agent van gebruiker X" in plaats van met een anonieme bot. De agent toont cryptografische inloggegevens (client_id, publieke sleutel, callback-adres) waarmee hij zijn identiteit vaststelt. Dit is cruciaal: bedrijven moeten weten dat ze een legitieme agent bedienen, en geen scraper of aanvaller.</p>

<h3>3. Authenticatie (op basis van OAuth)</h3>

<p>Poppy gebruikt OAuth, dezelfde standaard als achter "Inloggen met Google" en vergelijkbare flows. De gebruiker logt in op de eigen pagina van het bedrijf; de AI-agent ziet het wachtwoord nooit. Na authenticatie ontvangt de agent een sessietoken met beperkte reikwijdte en minimale rechten. Je agent kan dus je Amazon-account bekijken, maar alleen met de rechten die jij uitdrukkelijk verleent.</p>

<h3>4. Gelaagde rechten</h3>

<p>Rechten zijn verdeeld in vijf niveaus, van volledig verboden tot volledige toegang. Bedrijven bepalen welk niveau ze aanbieden en gebruikers bepalen hoeveel ze verlenen. Op het basisniveau (<code>poppy:read</code>) kan een agent saldo's controleren en bestellingen bekijken. Schrijfhandelingen zoals aankopen vereisen aparte <code>poppy:write</code>-autorisatie.</p>

<h3>5. Sessies over kanalen heen</h3>

<p>Eén authenticatietoken werkt op de website, de API en zelfs de eigen AI-agent van het bedrijf. Authenticeer je via Poppy bij een winkel, dan kan je agent naadloos wisselen tussen producten bekijken op de website, de voorraad controleren via de API en retouren regelen met de AI-klantenservice-agent van de winkel, allemaal in één sessie.</p>

<h2>Wie gebruikt Poppy al?</h2>

<p>De lanceringspartners vormen een serieuze dwarsdoorsnede van de handel:</p>

<table>
  <thead>
    <tr>
      <th>Bedrijf</th>
      <th>Rol</th>
      <th>Wat ze doen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Shopify</strong></td>
      <td>Platformpartner</td>
      <td>Poppy automatisch ingeschakeld voor alle merchants: miljoenen winkels zijn nu toegankelijk voor agents</td>
    </tr>
    <tr>
      <td><strong>Meta (Muse)</strong></td>
      <td>Agentpartner</td>
      <td>Muse controleert nu op Poppy bij elke website die hij bezoekt en gebruikt het om te authenticeren en transacties uit te voeren</td>
    </tr>
    <tr>
      <td><strong>Walmart</strong></td>
      <td>Oprichtende partner</td>
      <td>Toegang voor retailagents voor winkelen en orderbeheer</td>
    </tr>
    <tr>
      <td><strong>Stripe</strong></td>
      <td>Betalingspartner</td>
      <td>Levert betaalmogelijkheden zodat agents aankopen kunnen afronden</td>
    </tr>
    <tr>
      <td><strong>Rocket</strong></td>
      <td>Financiële partner</td>
      <td>Liet tijdens de Sierra Summit zien hoe Muse via Poppy een hypotheek vooraf goedgekeurd kreeg</td>
    </tr>
  </tbody>
</table>

<p>De volledige lijst van designpartners omvat 35+ bedrijven: Adyen, Bank of America, BBVA, Chime, Cigna, Cloudflare, Comcast, DIRECTV, ElevenLabs, FOX, Gap Inc., GEICO, Hertz en nog veel meer. Dit is geen startup-experiment, het is enterprise-infrastructuur.</p>

<h2>Poppy + ChatGPT Wallet: de commercestack krijgt vorm</h2>

<p>De release van Poppy valt in dezelfde week als de lancering van ChatGPT Wallet van OpenAI (13 november). Samen laten ze de opkomende architectuur van AI-gestuurde handel zien:</p>

<ul>
  <li><strong>Poppy</strong> regelt identiteit en autorisatie: hoe een agent bewijst wie hij vertegenwoordigt en wat hij mag doen</li>
  <li><strong>ChatGPT Wallet</strong> regelt betaling: hoe een agent ergens voor betaalt zonder kaartnummers bloot te geven</li>
  <li><strong>Zakelijke agents (Sierra, Genesys, enz.)</strong> regelen de afhandeling: de AI aan de kant van het bedrijf die bestellingen verwerkt en klantenservice levert</li>
</ul>

<p>Zet je ze samen, dan krijg je een wereld waarin je AI-agent Shopify-winkels kan doorbladeren, zich kan authenticeren met jouw account, producten kan selecteren, met jouw wallet kan betalen en retouren kan afhandelen, allemaal zonder dat jij een browser opent.</p>

<h2>Wat dit betekent voor bedrijven</h2>

<p>Als je een webwinkel runt, moet Poppy meteen op je radar staan. Dit is waarom:</p>

<h3>De verschuiving in distributie</h3>

<p>Toen Shopify Poppy automatisch inschakelde voor zijn hele platform, werden miljoenen winkels in één klap toegankelijk voor AI-agents. Staat je winkel op Shopify, dan zit je al in het protocol: agents kunnen je al ontdekken en met je communiceren. Zit je niet op Shopify, dan ben je onzichtbaar voor elke agent die Poppy gebruikt om te ontdekken.</p>

<h3>Implementatie</h3>

<p>Voor bedrijven die niet op Shopify zitten vereist het implementeren van Poppy het volgende:</p>

<ol>
  <li>Een discoverybestand <code>/.well-known/poppy.json</code> publiceren</li>
  <li>OAuth-endpoints instellen voor de authenticatie van agents</li>
  <li>Rechtenniveaus en mogelijkheden definiëren</li>
  <li>Testen met agentpartners (Meta Muse is momenteel de belangrijkste testagent)</li>
</ol>

<p>Poppy is gebouwd op bestaande standaarden (OAuth, JWT, HTTPS, OpenAPI, MCP), dus de meeste bedrijven kunnen het implementeren met tools die ze al hebben.</p>

<h2>Wat dit betekent voor gebruikers van AI-tools</h2>

<p>Gebruik je AI-agents (Claude, ChatGPT, Gemini of Muse van Meta), dan doet Poppy ertoe omdat het de infrastructuur is die bepaalt <strong>wat je agent daadwerkelijk voor je kan doen</strong>.</p>

<p>Op dit moment beperken de meeste AI-agents zich tot vragen beantwoorden en content genereren. Poppy opent de deur naar agents die:</p>

<ul>
  <li>voor je winkelen in elke winkel die Poppy ondersteunt</li>
  <li>je abonnementen en accounts beheren</li>
  <li>klantenservicegesprekken afhandelen</li>
  <li>prijzen vergelijken en deals vinden bij meerdere retailers</li>
  <li>vooraf goedkeuring krijgen voor financiële producten</li>
</ul>

<p>Het sleutelwoord is "jij". Poppy is ontworpen met gebruikerscontrole als middelpunt. Jij authenticeert, jij verleent rechten, jij kunt de toegang op elk moment intrekken. De agent handelt namens jou, niet op eigen houtje.</p>

<h2>Beveiligingsoverwegingen</h2>

<p>Het beveiligingsmodel van Poppy verdient een nadere blik:</p>

<ul>
  <li><strong>Gebruikers loggen zelf in:</strong> De agent ziet je wachtwoord nooit. Authenticatie vindt plaats op de eigen pagina van het bedrijf</li>
  <li><strong>Minimale rechten:</strong> Agents krijgen de minste toegang die voor de taak nodig is. Je bestelgeschiedenis lezen geeft geen toestemming om bestellingen te plaatsen</li>
  <li><strong>Volledig auditspoor:</strong> Bedrijven kunnen de volledige geschiedenis zien van wat een agent in een sessie deed</li>
  <li><strong>Directe intrekking:</strong> Gebruikers kunnen elke agent op elk moment van elk account loskoppelen</li>
  <li><strong>DPoP (Demonstration of Proof-of-Possession):</strong> Ondertekende bevestigingen voorkomen tokendiefstal: een gestolen token kan niet door een andere agent worden gebruikt</li>
</ul>

<p>Het model klopt in theorie. De echte test komt op schaal, wanneer miljoenen agents tegelijk transacties uitvoeren bij duizenden bedrijven.</p>

<h2>De kern</h2>

<p>Poppy 1.0 is een van die infrastructuurreleases die niet de krantenkoppen haalt van de lancering van een nieuw model, maar uiteindelijk misschien belangrijker blijkt. Het is de leidingen die AI-agents in staat stellen te veranderen van "vragen beantwoorden" naar "dingen doen", en dingen doen betekent namens jou met bedrijven communiceren.</p>

<p>De snelheid van adoptie maakt Poppy opmerkelijk. Door de uitrol van Shopify over het hele platform en de integratie met Muse van Meta is Poppy al op grote schaal live. Als andere e-commerceplatforms volgen, kan het protocol binnen maanden, niet jaren, de standaardmanier worden waarop AI-agents met het commerciële internet omgaan.</p>

<p><em>Bouw je AI-gestuurde tools? Ontdek de gratis hulpmiddelen op <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a>: QR-generators, factuurbouwers, pdf-tools en meer.</em></p>
