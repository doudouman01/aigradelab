---
title: "Personal Agent Protocol (Poppy): Der neue Standard, mit dem KI-Agenten in Ihrem Namen handeln"
description: "Sierra hat am 13. November 2026 Poppy 1.0 veröffentlicht – ein offenes Protokoll, das festlegt, wie persönliche KI-Agenten sich mit Unternehmen verbinden, Nutzer authentifizieren und Aufgaben erledigen. Shopify und Meta sind bereits dabei."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-19"
readTime: "8 Min. Lesezeit"
---

<h2>KI-Agenten haben jetzt eine Eingangstür zu jedem Unternehmen</h2>

<p>Am 13. November 2026 hat Sierra das Personal Agent Protocol 1.0 veröffentlicht – einen offenen Standard namens <strong>Poppy</strong>, der festlegt, wie sich der KI-Agent einer Person über Website, APIs oder den Business-Agenten mit einem Unternehmen verbindet. Das Protokoll ist bereits live: Shopify hat es automatisch für die gesamte Händlerplattform aktiviert, und Metas Muse-Agent sucht bei jeder besuchten Website nach Poppy.</p>

<p>Das ist keine theoretische Spezifikation. Es ist bereits eingesetzte Infrastruktur, die schon jetzt verändert, wie KI-Agenten mit dem kommerziellen Internet interagieren.</p>

<h2>Warum es Poppy gibt</h2>

<p>Auslöser war ein realer Konflikt. Im September 2026 sperrte Amazon Metas Muse-Agenten aus seinem Shop und verwies auf Scraping-Bedenken. Das geschah nur 12 Tage nach dem Start von Muse. Der Vorfall legte ein grundlegendes Problem offen: Es gab keinen Standard, mit dem sich KI-Agenten identifizieren, Nutzer authentifizieren und mit Unternehmen interagieren konnten.</p>

<p>Ohne Protokoll war jede Interaktion zwischen Agent und Unternehmen im Grunde Web Scraping – eine rechtliche und technische Grauzone, die Unternehmen wie Amazon nicht dulden wollten.</p>

<p>Sierra (mitgegründet vom ehemaligen Salesforce-CEO Bret Taylor) und Meta entwickelten Poppy, um das zu lösen. Das Protokoll gibt Unternehmen die Möglichkeit zu erkennen, dass sie es mit einem KI-Agenten zu tun haben, zu prüfen, wen er vertritt, und zu steuern, was er tun darf.</p>

<h2>So funktioniert Poppy: Fünf Bausteine</h2>

<p>Poppy besteht aus fünf Kernkomponenten, die zusammenarbeiten:</p>

<h3>1. Discovery</h3>

<p>Unternehmen veröffentlichen auf ihrer Website eine Datei <code>/.well-known/poppy.json</code> – ähnlich wie <code>robots.txt</code> Suchmaschinen-Crawlern sagt, was sie indexieren dürfen. Diese Datei legt fest, wie sich Agenten verbinden können, welche Anmeldemethoden verfügbar sind und welche Fähigkeiten angeboten werden. Jeder KI-Agent kann diese Datei lesen, um zu verstehen, wie er mit dem Unternehmen interagieren kann.</p>

<h3>2. Identität</h3>

<p>Wenn ein KI-Agent eintrifft, kann das Unternehmen eindeutig erkennen, dass es mit dem „KI-Agenten von Nutzer X" zu tun hat und nicht mit einem anonymen Bot. Der Agent legt kryptografische Zugangsdaten vor (client_id, öffentlicher Schlüssel, Callback-Adresse), die seine Identität belegen. Das ist entscheidend – Unternehmen müssen wissen, dass sie einen legitimen Agenten bedienen und keinen Scraper oder Angreifer.</p>

<h3>3. Authentifizierung (OAuth-basiert)</h3>

<p>Poppy nutzt OAuth, denselben Standard, der „Mit Google anmelden" und ähnliche Abläufe antreibt. Der Nutzer meldet sich auf der Seite des Unternehmens selbst an – der KI-Agent sieht das Passwort nie. Nach der Authentifizierung erhält der Agent ein begrenztes Sitzungstoken mit minimalen Berechtigungen. Ihr Agent kann also Ihr Amazon-Konto einsehen, aber nur mit den Berechtigungen, die Sie ausdrücklich erteilen.</p>

<h3>4. Gestufte Berechtigungen</h3>

<p>Die Berechtigungen sind in fünf Stufen aufgeteilt, von vollständig untersagt bis voller Zugriff. Unternehmen entscheiden, welche Stufe sie anbieten, und Nutzer, wie viel sie gewähren. Auf der Basisstufe (<code>poppy:read</code>) kann ein Agent Kontostände prüfen und Bestellungen einsehen. Schreibvorgänge wie Käufe erfordern eine separate <code>poppy:write</code>-Autorisierung.</p>

<h3>5. Kanalübergreifende Sitzungen</h3>

<p>Ein einzelnes Authentifizierungstoken funktioniert über Website, API und sogar den KI-Agenten des Unternehmens hinweg. Wenn Sie sich über Poppy bei einem Händler authentifizieren, kann Ihr Agent nahtlos zwischen dem Durchstöbern von Produkten auf der Website, der Bestandsabfrage über die API und dem Aushandeln von Rücksendungen mit dem KI-Kundenservice des Händlers wechseln – alles in einer Sitzung.</p>

<h2>Wer nutzt Poppy bereits?</h2>

<p>Die Launch-Partner bilden einen ernstzunehmenden Querschnitt des Handels:</p>

<table>
  <thead>
    <tr>
      <th>Unternehmen</th>
      <th>Rolle</th>
      <th>Was sie tun</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Shopify</strong></td>
      <td>Plattformpartner</td>
      <td>Hat Poppy automatisch für alle Händler aktiviert – Millionen Shops sind jetzt für Agenten zugänglich</td>
    </tr>
    <tr>
      <td><strong>Meta (Muse)</strong></td>
      <td>Agentenpartner</td>
      <td>Muse prüft bei jeder besuchten Website, ob Poppy vorhanden ist, und nutzt es zur Authentifizierung und für Transaktionen</td>
    </tr>
    <tr>
      <td><strong>Walmart</strong></td>
      <td>Gründungspartner</td>
      <td>Agentenzugang im Einzelhandel für Einkauf und Bestellverwaltung</td>
    </tr>
    <tr>
      <td><strong>Stripe</strong></td>
      <td>Zahlungspartner</td>
      <td>Steuert Zahlungsfunktionen bei, damit Agenten Käufe abschließen können</td>
    </tr>
    <tr>
      <td><strong>Rocket</strong></td>
      <td>Finanzpartner</td>
      <td>Demonstrierte auf dem Sierra Summit, wie Muse über Poppy eine Hypothekenvorabgenehmigung erhält</td>
    </tr>
  </tbody>
</table>

<p>Die vollständige Liste der Design-Partner umfasst über 35 Unternehmen: Adyen, Bank of America, BBVA, Chime, Cigna, Cloudflare, Comcast, DIRECTV, ElevenLabs, FOX, Gap Inc., GEICO, Hertz und viele mehr. Das ist kein Startup-Experiment – es ist Unternehmensinfrastruktur.</p>

<h2>Poppy + ChatGPT Wallet: Der Commerce-Stack nimmt Gestalt an</h2>

<p>Poppys Veröffentlichung fällt in dieselbe Woche wie der Start von OpenAIs ChatGPT Wallet (13. November). Zusammen zeigen sie die entstehende Architektur KI-gestützten Handels:</p>

<ul>
  <li><strong>Poppy</strong> regelt Identität und Autorisierung – wie ein Agent nachweist, wen er vertritt und was er tun darf</li>
  <li><strong>ChatGPT Wallet</strong> regelt die Zahlung – wie ein Agent bezahlt, ohne Kartennummern preiszugeben</li>
  <li><strong>Business-Agenten (Sierra, Genesys usw.)</strong> regeln die Abwicklung – die unternehmensseitige KI, die Bestellungen verarbeitet und den Kundenservice übernimmt</li>
</ul>

<p>Zusammen ergibt sich eine Welt, in der Ihr KI-Agent Shopify-Shops durchstöbern, sich mit Ihrem Konto authentifizieren, Produkte auswählen, mit Ihrem Wallet bezahlen und Rücksendungen abwickeln kann – ohne dass Sie einen Browser öffnen.</p>

<h2>Was das für Unternehmen bedeutet</h2>

<p>Wenn Sie einen Online-Shop betreiben, sollte Poppy sofort auf Ihrem Radar sein. Darum:</p>

<h3>Die Verschiebung der Reichweite</h3>

<p>Als Shopify Poppy automatisch auf seiner Plattform aktivierte, wurden Millionen Shops schlagartig für KI-Agenten zugänglich. Wenn Ihr Shop auf Shopify läuft, sind Sie bereits im Protokoll – Agenten können Sie schon finden und mit Ihnen interagieren. Wenn nicht, sind Sie für jeden Agenten unsichtbar, der Poppy zur Discovery nutzt.</p>

<h3>Umsetzung</h3>

<p>Für Unternehmen außerhalb von Shopify erfordert die Implementierung von Poppy:</p>

<ol>
  <li>Veröffentlichung einer Discovery-Datei <code>/.well-known/poppy.json</code></li>
  <li>Einrichtung von OAuth-Endpunkten für die Agentenauthentifizierung</li>
  <li>Festlegung von Berechtigungsstufen und Fähigkeiten</li>
  <li>Tests mit Agentenpartnern (Meta Muse ist derzeit der wichtigste Test-Agent)</li>
</ol>

<p>Poppy basiert auf bestehenden Standards (OAuth, JWT, HTTPS, OpenAPI, MCP), sodass die meisten Unternehmen es mit vorhandenen Werkzeugen umsetzen können.</p>

<h2>Was das für Nutzer von KI-Tools bedeutet</h2>

<p>Wenn Sie KI-Agenten nutzen – Claude, ChatGPT, Gemini oder Metas Muse –, ist Poppy wichtig, weil es die Infrastruktur ist, die bestimmt, <strong>was Ihr Agent tatsächlich für Sie tun kann</strong>.</p>

<p>Derzeit beschränken sich die meisten KI-Agenten darauf, Fragen zu beantworten und Inhalte zu erzeugen. Poppy öffnet die Tür für Agenten, die:</p>

<ul>
  <li>In jedem Poppy-fähigen Shop für Sie einkaufen</li>
  <li>Ihre Abonnements und Konten verwalten</li>
  <li>Kundenservice-Kontakte übernehmen</li>
  <li>Preise vergleichen und Angebote bei mehreren Händlern finden</li>
  <li>Vorabgenehmigungen für Finanzprodukte einholen</li>
</ul>

<p>Das Schlüsselwort ist „Sie". Poppy ist auf Nutzerkontrolle ausgelegt. Sie authentifizieren sich, Sie erteilen Berechtigungen, Sie können den Zugriff jederzeit widerrufen. Der Agent handelt in Ihrem Auftrag, nicht auf eigene Faust.</p>

<h2>Sicherheitsaspekte</h2>

<p>Poppys Sicherheitsmodell verdient einen genauen Blick:</p>

<ul>
  <li><strong>Nutzer melden sich selbst an:</strong> Der Agent sieht Ihr Passwort nie. Die Authentifizierung läuft auf der Seite des Unternehmens</li>
  <li><strong>Minimale Berechtigungen:</strong> Agenten erhalten nur den für die Aufgabe nötigen Zugriff. Das Lesen Ihres Bestellverlaufs berechtigt nicht zum Aufgeben von Bestellungen</li>
  <li><strong>Lückenloses Audit-Protokoll:</strong> Unternehmen können den vollständigen Verlauf dessen einsehen, was ein Agent in einer Sitzung getan hat</li>
  <li><strong>Sofortiger Widerruf:</strong> Nutzer können jeden Agenten jederzeit von jedem Konto trennen</li>
  <li><strong>DPoP (Demonstration of Proof-of-Possession):</strong> Signierte Nachweise verhindern Token-Diebstahl – ein gestohlenes Token kann von einem anderen Agenten nicht verwendet werden</li>
</ul>

<p>Das Modell ist in der Theorie stimmig. Der echte Test kommt im großen Maßstab – wenn Millionen Agenten gleichzeitig bei Tausenden Unternehmen Transaktionen abwickeln.</p>

<h2>Fazit</h2>

<p>Poppy 1.0 ist eine jener Infrastruktur-Veröffentlichungen, die nicht die Schlagzeilen eines neuen Modellstarts bekommen, aber am Ende womöglich mehr bewirken. Es ist die Installation, die KI-Agenten vom „Fragen beantworten" zum „Dinge erledigen" bringt – und Dinge erledigen heißt, in Ihrem Namen mit Unternehmen zu interagieren.</p>

<p>Bemerkenswert ist die Geschwindigkeit der Verbreitung. Shopifys plattformweiter Rollout und die Integration von Metas Muse bedeuten, dass Poppy bereits in großem Maßstab live ist. Ziehen andere E-Commerce-Plattformen nach, könnte das Protokoll binnen Monaten, nicht Jahren, zum Standardweg werden, wie KI-Agenten mit dem kommerziellen Internet interagieren.</p>

<p><em>Sie entwickeln KI-gestützte Tools? Entdecken Sie die kostenlosen Hilfsprogramme auf <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> – QR-Generatoren, Rechnungsersteller, PDF-Tools und mehr.</em></p>
