---
title: "Google stelt MCP-deadline in februari 2027: Alle AI-agents moeten nieuwe Workspace-protocollen gebruiken"
description: "Google verplicht alle AI-agents om Workspace MCP-servers te gebruiken in plaats van REST API's vóór 1 februari 2027. Dit verandert er voor ontwikkelaars, bedrijven en het AI-agent-ecosysteem — plus de nieuwe gebruiksniveaus en beheercontroles."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-28"
readTime: "9 min leestijd"
---

<h2>Google herschrijft de regels voor AI-agents</h2>
<p>Google heeft aangekondigd dat alle <strong>AI-agents en vergelijkbare toegangstools</strong> zijn <strong>Workspace MCP (Model Context Protocol)-servers</strong> of de <strong>Workspace CLI</strong> moeten gebruiken om toegang te krijgen tot Workspace-data — niet de traditionele REST API's. Technische handhaving begint op <strong>1 februari 2027</strong>, waardoor ontwikkelaars ongeveer twee maanden hebben om te migreren.</p>
<p>Beide tools zijn nu <strong>algemeen beschikbaar</strong> en dekken <strong>Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat en Tasks</strong>, met <strong>Keep binnenkort</strong>. De wijziging komt met een nieuw Workspace AI Tools Addendum, een tweeledig gebruiksprijsmodel en verbeterde beheerderscontroles — de meest significante verschuiving in hoe tools van derden met Google Workspace communiceren sinds de lancering van het platform.</p>

<h2>Wat verandert er op 1 februari 2027</h2>
<p>De kernwijziging is een protocolmigratie:</p>
<table>
  <thead>
    <tr><th>Vóór 1 feb 2027</th><th>Na 1 feb 2027</th></tr>
  </thead>
  <tbody>
    <tr><td>AI-agents roepen Workspace REST API's direct aan</td><td>Moeten Workspace MCP-servers of Workspace CLI gebruiken</td></tr>
    <tr><td>Agents bepalen hun eigen datatoegangspatronen</td><td>Gestandaardiseerde toegang via door Google beheerde protocollen</td></tr>
    <tr><td>Beperkt zicht op agentgedrag</td><td>Ingebouwde gebruikersbevestigingen en auditlogging</td></tr>
    <tr><td>Geen gestandaardiseerde gebruiksregistratie</td><td>Tweeledig gebruikssysteem startend met Gmail, Drive, Calendar</td></tr>
  </tbody>
</table>

<h2>Wat is MCP en waarom doet het ertoe?</h2>
<p><strong>MCP (Model Context Protocol)</strong> wordt het standaardprotocol voor AI-agents om met externe tools en gegevensbronnen te communiceren. Oorspronkelijk ontwikkeld door Anthropic en snel overgenomen door de hele industrie, biedt MCP een gestructureerde manier voor AI-agents om:</p>
<ul>
  <li><strong>Te ontdekken</strong> welke acties beschikbaar zijn (e-mail lezen, document aanmaken, enz.)</li>
  <li><strong>Toestemming te vragen</strong> via gestandaardiseerde gebruikersbevestigingen</li>
  <li><strong>Acties uit te voeren</strong> met ingebouwde audittrails</li>
  <li><strong>Grenzen te respecteren</strong> die door beheerders zijn ingesteld</li>
</ul>
<p>Google's adoptie van MCP voor Workspace is significant omdat het MCP valideert als de opkomende standaard — wanneer 's werelds grootste productiviteitssuite het vereist, moet het hele AI-agent-ecosysteem volgen.</p>

<h2>De twee gebruiksniveaus</h2>
<p>Google introduceert een <strong>tweeledig gebruikssysteem</strong> voor Workspace API- en MCP-toegang, beginnend met Gmail, Drive en Calendar:</p>
<ul>
  <li><strong>Standaardniveau:</strong> Inbegrepen bij bestaande Workspace-abonnementen, dekking van typische gebruikspatronen voor de meeste organisaties</li>
  <li><strong>Premiumniveau:</strong> Voor grootschalig of geavanceerd agentgebruik dat de standaardlimieten overschrijdt</li>
</ul>
<p>Deze gelaagde aanpak signaleert dat Google verwacht dat AI-agentverkeer uiteindelijk het menselijke API-gebruik ver zal overtreffen — en dit dienovereenkomstig wil monetiseren. Organisaties die tientallen AI-agents draaien die continu inboxen monitoren, documenten verwerken en agenda's beheren, zullen waarschijnlijk snel de premiumdrempels bereiken.</p>

<h2>Veiligheid: De werkelijke drijfveer</h2>
<p>Google's stap draait fundamenteel om <strong>veiligheid en controle</strong>. AI-agents die Workspace-data via ruwe REST API's benaderen creëren diverse risico's:</p>
<ul>
  <li><strong>Data-exfiltratie:</strong> Een agent met API-toegang zou stilletjes gevoelige data naar externe servers kunnen kopiëren</li>
  <li><strong>Ongecontroleerde acties:</strong> Zonder gestandaardiseerde logging kunnen organisaties niet volgen wat agents met hun data hebben gedaan</li>
  <li><strong>Permissieuitbreiding:</strong> Agents vragen vaak bredere machtigingen aan dan nodig, waardoor aanvalsoppervlakken ontstaan</li>
  <li><strong>Schaduw-AI:</strong> Medewerkers koppelen AI-agents aan Workspace zonder IT-goedkeuring, waardoor onbeheerde datastromen ontstaan</li>
</ul>
<p>MCP-servers en de CLI pakken deze risico's aan door alle agentinteracties via door Google beheerde chokepoints te laten lopen met ingebouwde auditlogging, gebruikersbevestigingen en beheerbeleid. Beide tools bevatten standaard gebruikersbevestigingen en auditlogging.</p>

<h2>Beheerderscontroles</h2>
<p>Google rolt tegelijkertijd verbeterde beheermogelijkheden uit:</p>
<ul>
  <li><strong>Agent-whitelist:</strong> Beheerders kunnen specificeren welke AI-agents toegang mogen hebben tot Workspace-data</li>
  <li><strong>Per-service controles:</strong> Agenttoegang tot Gmail inschakelen maar toegang tot Drive blokkeren, bijvoorbeeld</li>
  <li><strong>Gebruiksmonitoring:</strong> Realtime dashboards die agentactiviteit in de hele organisatie tonen</li>
  <li><strong>Compliance-integratie:</strong> Agentacties vloeien in bestaande compliance- en eDiscovery-workflows</li>
</ul>

<h2>Wat ontwikkelaars moeten doen</h2>
<p>Voor ontwikkelaars die AI-agents bouwen die met Google Workspace communiceren, is de migratiechecklist duidelijk:</p>
<ol>
  <li><strong>Adopteer de Workspace MCP-servers</strong> voor agent-naar-Workspace-communicatie (nu GA)</li>
  <li><strong>Of gebruik de Workspace CLI</strong> als alternatief integratiepad</li>
  <li><strong>Verwijder directe REST API-aanroepen</strong> uit agentcode vóór 1 februari 2027</li>
  <li><strong>Implementeer gebruikersbevestigingsstromen</strong> zoals vereist door de nieuwe protocollen</li>
  <li><strong>Bekijk het Workspace AI Tools Addendum</strong> voor nieuwe servicevoorwaarden</li>
  <li><strong>Plan voor geleid gebruik</strong> en zorg dat uw prijsmodel rekening houdt met mogelijke premiumniveaukosten</li>
</ol>

<h2>Het grotere plaatje: MCP wordt de standaard</h2>
<p>Google's MCP-mandaat maakt deel uit van een bredere industrieconvergentie:</p>
<ul>
  <li><strong>Anthropic</strong> creëerde MCP en gebruikt het uitgebreid in Claude's tool-ecosysteem</li>
  <li><strong>OpenAI</strong> en <strong>Cisco</strong> introduceerden onlangs AI-agent tool-frameworks die aansluiten bij MCP-principes</li>
  <li><strong>Microsoft</strong> heeft zijn eigen agentframework maar is steeds meer interoperabel met MCP</li>
  <li><strong>Enterprise-adoptie:</strong> Grote platforms standaardiseren op MCP-compatibele interfaces voor agenttoegang</li>
</ul>
<p>Voor het AI-agent-ecosysteem is dit een volwassenwording. Het wilde westen van agents die willekeurige API's aanroepen met minimaal toezicht eindigt, vervangen door gestructureerde protocollen die capaciteit en veiligheid in balans brengen.</p>

<h2>Aanbevolen AI-agentontwikkelingstools</h2>
<p>Voor ontwikkelaars die AI-agents bouwen die Workspace-integratie nodig hebben:</p>
<ul>
  <li>Lees onze dekking van <a href="/nl/blog/cognition-swe-2-1-ai-coding-model-benchmarks">Cognition's SWE-2.1</a> voor het nieuwste in AI-aangedreven ontwikkeling</li>
  <li>Verken onze <a href="/nl/blog/best-ai-coding-tools-2026">gids voor de beste AI-codeertools</a> voor optimalisatie van de ontwikkelworkflow</li>
</ul>
<p>Voor ontwikkelaars die agentintegraties bouwen, biedt <a href="https://toolcraftkit.com">ToolCraftKit</a> gratis ontwikkelaarstools waaronder een <a href="https://toolcraftkit.com/tools/code-formatter">Code Formatter</a>, <a href="https://toolcraftkit.com/tools/jwt-decoder">JWT Decoder</a> voor API-authenticatie-debugging, <a href="https://toolcraftkit.com/tools/cron-expression-generator">Cron Expression Generator</a> voor het plannen van agents, en <a href="https://toolcraftkit.com/tools/robots-txt-generator">Robots.txt Generator</a>.</p>

<h2>De conclusie</h2>
<p>Google's MCP-deadline van februari 2027 markeert het einde van ongestructureerde AI-agenttoegang tot bedrijfsdata. Door alle agents te verplichten MCP-servers of de CLI te gebruiken, lost Google tegelijkertijd het beveiligingsprobleem (ongecontroleerde datatoegang), het monetisatieprobleem (gelaagd gebruik) en het ecosysteemprobleem (gestandaardiseerde protocollen) op. Voor ontwikkelaars is de boodschap duidelijk: migreer nu of verlies Workspace-toegang. Voor bedrijven is de boodschap nog duidelijker: AI-agents worden een beheerd, controleerbaar onderdeel van de IT-stack — niet een schaduwservice die medewerkers op eigen houtje aansluiten.</p>
