---
title: "Cisco veröffentlicht Quarry als Open Source: Eine Sicherheits-Engine, die KI-Agenten überwacht"
description: "Cisco hat Quarry als Open Source veröffentlicht – eine Verhaltenserkennungs-Engine zur Überwachung von KI-Agenten auf bösartige Aktivitäten. Warum die Sicherheit von KI-Agenten jetzt kritisch wird und wie Quarry funktioniert."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Cisco nimmt sich des Sicherheitsproblems von KI-Agenten an</h2>

<p>Je autonomer KI-Agenten werden — Code schreiben, im Web browsen, Dateien verwalten, APIs aufrufen — desto dringender wird die Frage: <strong>Wer überwacht die Agenten?</strong> Ciscos Antwort ist <strong>Quarry</strong>, eine Open-Source-Engine zur Verhaltenserkennung, die KI-Agenten in Echtzeit überwacht und Alarm schlägt, wenn sie aus dem Ruder laufen.</p>

<p>Das Tool wurde auf GitHub veröffentlicht und deckt ein breites Spektrum von Szenarien ab: Ein- und Mehrrunden-LLM-Gespräche, agentische Werkzeugnutzung, Interaktionen über das Model Context Protocol (MCP) und multimodale Eingaben. Plugins für <strong>Claude Code</strong>, <strong>Codex</strong> und andere MCP-kompatible Agenten sind bereits verfügbar.</p>

<h2>Warum die Sicherheit von KI-Agenten jetzt wichtig ist</h2>

<p>Die meisten bestehenden KI-Sicherheitstools konzentrieren sich auf das, was auf Modellebene passiert — Prompt-Injection, Jailbreaking, schädliche Ausgaben. Quarry verfolgt einen anderen Ansatz: Es beobachtet, was Agenten <em>tun</em>, nicht nur, was sie sagen.</p>

<p>Dieser Unterschied ist entscheidend, denn moderne KI-Agenten können:</p>

<ul>
<li>Code auf Servern und lokalen Rechnern ausführen</li>
<li>Dateien lesen, schreiben und löschen</li>
<li>API-Aufrufe an externe Dienste senden</li>
<li>Im Web surfen und mit Live-Websites interagieren</li>
<li>Mehrere Tools in komplexen Workflows verketten</li>
</ul>

<p>Eine Prompt-Injection, die einen Chatbot dazu bringt, etwas Unangemessenes zu sagen, ist eine Sache. Eine Prompt-Injection, die einen autonomen Coding-Agenten dazu bringt, eine Produktionsdatenbank zu löschen, ist etwas völlig anderes. Quarry ist für das zweite Szenario konzipiert.</p>

<h2>Wie Quarry funktioniert</h2>

<p>Quarry fungiert als Verhaltenserkennungsschicht zwischen einem KI-Agenten und seinen Tools. Es bewertet die Aktionen des Agenten anhand eines konfigurierbaren Regelwerks, basierend auf der <strong>Cisco AI Security & Safety Taxonomy</strong>.</p>

<p>Wichtige Funktionen:</p>

<ul>
<li><strong>Regelbasierte Erkennung:</strong> Sicherheitsteams definieren Regeln für verdächtiges Verhalten — unbefugter Dateizugriff, unerwartete Netzwerkaufrufe, Versuche zur Rechteausweitung, Muster der Datenexfiltration.</li>
<li><strong>Mehrrunden-Bewusstsein:</strong> Quarry verfolgt das Agentenverhalten über Gesprächsrunden hinweg und erkennt Angriffe, die sich schrittweise entfalten, statt in einem einzelnen Prompt.</li>
<li><strong>MCP-Integration:</strong> Durch native Unterstützung des Model Context Protocol kann Quarry die spezifischen Tools überwachen, auf die ein Agent Zugriff hat, und ungewöhnliche Nutzungsmuster erkennen.</li>
<li><strong>Modulare Architektur:</strong> Cisco stellt Plugins für populäre Agenten-Frameworks bereit und ermutigt die Community, weitere zu entwickeln.</li>
</ul>

<p>Das GitHub-Repository des Projekts enthält Installationsanleitungen, unterstützte Python-Versionen, Konfigurationsbeispiele und Anleitungen zum Erstellen von Regeln.</p>

<h2>Das große Bild: KI-Agenten-Sicherheit als neue Kategorie</h2>

<p>Quarry ist Teil eines breiteren Trends. Während KI-Agenten von Demos in den Produktiveinsatz wechseln, entsteht eine ganz neue Sicherheitskategorie:</p>

<ul>
<li><strong>Cisco AI Defense</strong> — Ciscos kommerzielle KI-Sicherheitssuite, die jetzt vollständig mit OpenAIs Codex entwickelt wird, mit Features, die in Wochen statt Quartalen geliefert werden.</li>
<li><strong>Anthropics gestuftes Genehmigungssystem</strong> — Teil des neuen Claude Ship-Pakets, bei dem Codeänderungen nach Risikostufe klassifiziert werden und unterschiedliche Grade menschlicher Genehmigung erfordern. <a href="/de/blog/claude-ship-ai-code-automation">Lesen Sie unseren Bericht hier</a>.</li>
<li><strong>OpenAIs Daybreak Defense Network</strong> — Eine Cybersicherheitspartnerschaft mit Cisco zur Erforschung von KI-gestützter Bedrohungstriage.</li>
</ul>

<p>Das Muster ist klar: Die Unternehmen, die die leistungsfähigsten Agenten bauen, entwickeln auch die Leitplanken. Die Frage ist, ob Open-Source-Tools wie Quarry mit der Geschwindigkeit der Agentenentwicklung Schritt halten können.</p>

<h2>Wer Quarry nutzen sollte</h2>

<p>Quarry ist vor allem relevant für:</p>

<ul>
<li><strong>Entwicklungsteams</strong>, die KI-Coding-Agenten (Claude Code, Codex, Cursor) in Produktionsumgebungen einsetzen.</li>
<li><strong>Sicherheitsteams</strong>, die für die Überwachung KI-gestützter Workflows in der Organisation verantwortlich sind.</li>
<li><strong>Plattformentwickler</strong>, die agentische KI-Produkte erstellen und eine Erkennungsschicht benötigen, ohne sie von Grund auf zu bauen.</li>
</ul>

<p>Wenn Sie KI-Tools für die Entwicklung evaluieren, finden Sie in unseren Leitfäden <a href="/de/blog/best-ai-coding-tools-2026">Beste KI-Coding-Tools 2026</a> und <a href="/de/blog/best-ai-tools-developers-2026">Beste KI-Tools für Entwickler</a> einen vollständigen Überblick.</p>

<h2>Fazit</h2>

<p>KI-Agenten werden jeden Monat leistungsfähiger, und die Sicherheitstools müssen mithalten. Ciscos Entscheidung, Quarry als Open Source zu veröffentlichen, ist klug — sie schafft ein gemeinsames Fundament für Agentensicherheit, statt jede Organisation ihre eigene Lösung bauen zu lassen. Ob Quarry zum Standard wird oder nur eine von vielen Optionen bleibt — die Kategorie selbst ist gekommen, um zu bleiben.</p>

<p><em>Sie entwickeln mit KI-Agenten? Stellen Sie sicher, dass Ihr Entwickler-Toolkit komplett ist. Besuchen Sie <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> für kostenlose Entwickler-Utilities — JSON-Validatoren, Regex-Tester, Hash-Generatoren und mehr.</em></p>
