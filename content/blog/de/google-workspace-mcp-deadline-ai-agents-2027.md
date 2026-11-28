---
title: "Google setzt MCP-Frist für Februar 2027: Alle KI-Agenten müssen neue Workspace-Protokolle verwenden"
description: "Google verlangt, dass alle KI-Agenten seine Workspace-MCP-Server statt REST-APIs bis zum 1. Februar 2027 nutzen. Was sich für Entwickler, Unternehmen und das KI-Agenten-Ökosystem ändert — plus neue Nutzungsstufen und Admin-Kontrollen."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-28"
readTime: "9 Min. Lesezeit"
---

<h2>Google schreibt die Regeln für KI-Agenten neu</h2>
<p>Google hat angekündigt, dass alle <strong>KI-Agenten und ähnliche Zugriffstools</strong> seine <strong>Workspace-MCP-Server (Model Context Protocol)</strong> oder die <strong>Workspace-CLI</strong> zum Zugriff auf Workspace-Daten nutzen müssen — nicht die traditionellen REST-APIs. Die technische Durchsetzung beginnt am <strong>1. Februar 2027</strong>, was Entwicklern etwa zwei Monate zur Migration gibt.</p>
<p>Beide Tools sind nun <strong>allgemein verfügbar</strong> und decken <strong>Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat und Tasks</strong> ab, wobei <strong>Keep bald folgt</strong>. Die Änderung kommt mit einem neuen Workspace AI Tools Addendum, einer zweistufigen Nutzungspreisgestaltung und erweiterten Admin-Kontrollen — der bedeutendste Wandel in der Interaktion von Drittanbieter-Tools mit Google Workspace seit dem Launch der Plattform.</p>

<h2>Was sich am 1. Februar 2027 ändert</h2>
<p>Die grundlegende Änderung ist eine Protokollmigration:</p>
<table>
  <thead>
    <tr><th>Vor dem 1. Feb. 2027</th><th>Nach dem 1. Feb. 2027</th></tr>
  </thead>
  <tbody>
    <tr><td>KI-Agenten rufen Workspace-REST-APIs direkt auf</td><td>Müssen Workspace-MCP-Server oder Workspace-CLI verwenden</td></tr>
    <tr><td>Agenten definieren eigene Datenzugriffsmuster</td><td>Standardisierter Zugriff über Google-kontrollierte Protokolle</td></tr>
    <tr><td>Begrenzte Sichtbarkeit des Agentenverhaltens</td><td>Integrierte Benutzerbestätigungen und Audit-Protokollierung</td></tr>
    <tr><td>Kein standardisiertes Nutzungs-Tracking</td><td>Zweistufiges Nutzungssystem ab Gmail, Drive, Calendar</td></tr>
  </tbody>
</table>

<h2>Was ist MCP und warum ist es wichtig?</h2>
<p><strong>MCP (Model Context Protocol)</strong> wird zum Standardprotokoll für die Interaktion von KI-Agenten mit externen Tools und Datenquellen. Ursprünglich von Anthropic entwickelt und schnell von der Branche übernommen, bietet MCP eine strukturierte Methode für KI-Agenten:</p>
<ul>
  <li><strong>Entdecken</strong>, welche Aktionen verfügbar sind (E-Mail lesen, Dokument erstellen usw.)</li>
  <li><strong>Berechtigungen anfordern</strong> über standardisierte Benutzerbestätigungen</li>
  <li><strong>Aktionen ausführen</strong> mit integrierten Audit-Protokollen</li>
  <li><strong>Grenzen einhalten</strong>, die von Administratoren festgelegt wurden</li>
</ul>
<p>Googles Übernahme von MCP für Workspace ist bedeutend, weil es MCP als aufkommenden Standard validiert — wenn die weltweit größte Produktivitätssuite es erfordert, muss das gesamte KI-Agenten-Ökosystem folgen.</p>

<h2>Die zwei Nutzungsstufen</h2>
<p>Google führt ein <strong>zweistufiges Nutzungssystem</strong> für den Workspace-API- und MCP-Zugang ein, beginnend mit Gmail, Drive und Calendar:</p>
<ul>
  <li><strong>Standard-Stufe:</strong> In bestehenden Workspace-Plänen enthalten, deckt typische Nutzungsmuster für die meisten Organisationen ab</li>
  <li><strong>Premium-Stufe:</strong> Für Hochvolumen- oder fortgeschrittene Agenten-Anwendungsfälle, die Standardlimits überschreiten</li>
</ul>
<p>Dieser gestufte Ansatz signalisiert, dass Google erwartet, dass der KI-Agenten-Traffic die menschliche API-Nutzung letztlich bei weitem übersteigen wird — und dies entsprechend monetarisieren möchte.</p>

<h2>Sicherheit: Der eigentliche Treiber</h2>
<p>Googles Vorgehen ist grundsätzlich eine Frage der <strong>Sicherheit und Kontrolle</strong>. KI-Agenten, die über rohe REST-APIs auf Workspace-Daten zugreifen, schaffen mehrere Risiken:</p>
<ul>
  <li><strong>Datenexfiltration:</strong> Ein Agent mit API-Zugang könnte unbemerkt sensible Daten auf externe Server kopieren</li>
  <li><strong>Nicht auditierte Aktionen:</strong> Ohne standardisierte Protokollierung können Organisationen nicht nachverfolgen, was Agenten mit ihren Daten getan haben</li>
  <li><strong>Berechtigungsausweitung:</strong> Agenten fordern oft breitere Berechtigungen an als nötig und schaffen Angriffsflächen</li>
  <li><strong>Schatten-KI:</strong> Mitarbeiter verbinden KI-Agenten mit Workspace ohne IT-Genehmigung und schaffen unkontrollierte Datenflüsse</li>
</ul>
<p>MCP-Server und die CLI begegnen diesen Risiken, indem sie alle Agenteninteraktionen durch Google-kontrollierte Kontrollpunkte mit integrierter Audit-Protokollierung, Benutzerbestätigungen und Admin-Richtlinien leiten. Beide Tools enthalten Benutzerbestätigungen und Audit-Protokollierung <strong>standardmäßig</strong>.</p>

<h2>Admin-Kontrollen</h2>
<p>Google rollt gleichzeitig erweiterte Administrationsfähigkeiten aus:</p>
<ul>
  <li><strong>Agenten-Whitelist:</strong> Administratoren können festlegen, welche KI-Agenten auf Workspace-Daten zugreifen dürfen</li>
  <li><strong>Dienstspezifische Kontrollen:</strong> Agentenzugriff auf Gmail aktivieren, aber Zugriff auf Drive blockieren, zum Beispiel</li>
  <li><strong>Nutzungsüberwachung:</strong> Echtzeit-Dashboards, die die Agentenaktivität in der gesamten Organisation anzeigen</li>
  <li><strong>Compliance-Integration:</strong> Agentenaktionen fließen in bestehende Compliance- und eDiscovery-Workflows ein</li>
</ul>

<h2>Was Entwickler tun müssen</h2>
<p>Für Entwickler, die KI-Agenten mit Google Workspace erstellen, ist die Migrationscheckliste klar:</p>
<ol>
  <li><strong>Workspace-MCP-Server einsetzen</strong> für die Agent-Workspace-Kommunikation (jetzt GA)</li>
  <li><strong>Oder die Workspace-CLI nutzen</strong> als alternativen Integrationspfad</li>
  <li><strong>Direkte REST-API-Aufrufe entfernen</strong> aus dem Agenten-Code vor dem 1. Februar 2027</li>
  <li><strong>Benutzerbestätigungsflows implementieren</strong> wie von den neuen Protokollen gefordert</li>
  <li><strong>Das Workspace AI Tools Addendum prüfen</strong> für neue Nutzungsbedingungen</li>
  <li><strong>Für gestufte Nutzung planen</strong> und sicherstellen, dass Ihr Preismodell potenzielle Premium-Stufen-Kosten berücksichtigt</li>
</ol>

<h2>Das Gesamtbild: MCP wird zum Standard</h2>
<p>Googles MCP-Mandat ist Teil einer breiteren Branchenkonvergenz:</p>
<ul>
  <li><strong>Anthropic</strong> hat MCP geschaffen und nutzt es extensiv in Claudes Tool-Ökosystem</li>
  <li><strong>OpenAI</strong> und <strong>Cisco</strong> haben kürzlich KI-Agenten-Tool-Frameworks eingeführt, die sich an MCP-Prinzipien orientieren</li>
  <li><strong>Microsoft</strong> hat ein eigenes Agenten-Framework, ist aber zunehmend mit MCP interoperabel</li>
  <li><strong>Enterprise-Adoption:</strong> Große Plattformen standardisieren MCP-kompatible Schnittstellen für den Agentenzugriff</li>
</ul>
<p>Für das KI-Agenten-Ökosystem ist dies ein Reifungsmoment. Der Wilde Westen der Agenten, die beliebige APIs mit minimaler Aufsicht aufrufen, geht zu Ende, ersetzt durch strukturierte Protokolle, die Fähigkeit und Sicherheit ausbalancieren.</p>

<h2>Empfohlene Tools für die KI-Agenten-Entwicklung</h2>
<p>Für Entwickler, die KI-Agenten mit Workspace-Integration erstellen:</p>
<ul>
  <li>Lesen Sie unseren Bericht über <a href="/de/blog/cognition-swe-2-1-ai-coding-model-benchmarks">Cognitions SWE-2.1</a> für die neuesten Entwicklungen in der KI-gestützten Softwareentwicklung</li>
  <li>Erkunden Sie unseren <a href="/de/blog/best-ai-coding-tools-2026">Leitfaden der besten KI-Coding-Tools</a> zur Optimierung Ihres Entwicklungsworkflows</li>
</ul>
<p>Für Entwickler, die Agenten-Integrationen erstellen, bietet <a href="https://toolcraftkit.com">ToolCraftKit</a> kostenlose Entwicklertools einschließlich eines <a href="https://toolcraftkit.com/tools/code-formatter">Code-Formatierers</a>, eines <a href="https://toolcraftkit.com/tools/jwt-decoder">JWT-Decoders</a> für API-Authentifizierungs-Debugging, eines <a href="https://toolcraftkit.com/tools/cron-expression-generator">Cron-Ausdrucks-Generators</a> für die Agentenplanung und eines <a href="https://toolcraftkit.com/tools/robots-txt-generator">Robots.txt-Generators</a>.</p>

<h2>Das Fazit</h2>
<p>Googles MCP-Frist im Februar 2027 markiert das Ende des unstrukturierten KI-Agenten-Zugriffs auf Unternehmensdaten. Indem Google von allen Agenten die Nutzung von MCP-Servern oder der CLI verlangt, löst es gleichzeitig das Sicherheitsproblem (nicht auditierter Datenzugriff), das Monetarisierungsproblem (gestufte Nutzung) und das Ökosystem-Problem (standardisierte Protokolle). Für Entwickler ist die Botschaft klar: Jetzt migrieren oder den Workspace-Zugang verlieren. Für Unternehmen ist die Botschaft noch klarer: KI-Agenten werden zu einem verwalteten, auditierbaren Teil der IT-Infrastruktur — kein Schattendienst, den Mitarbeiter eigenständig verbinden.</p>
