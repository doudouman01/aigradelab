---
title: "GLM-5.4 im Test: Z.ais Loop Transformer erfindet neu, wie KI-Modelle denken"
description: "Z.ais GLM-5.4 führt den Loop Transformer ein — eine Architektur, die 28 Schichten zweimal durchläuft, um mit dreimal größeren Modellen mitzuhalten. Wir analysieren, was das bedeutet, wie es abschneidet und ob sich der Einsatz lohnt."
category: "Graded Reviews"
categorySlug: "graded-reviews"
date: "2026-11-23"
lastTested: "2026-11-23"
readTime: "11 Min. Lesezeit"
grade: "B+"
scores_ux: 7
scores_quality: 8
scores_value: 7
scores_integration: 6
scores_support: 6
toolName: "GLM-5.4"
---

<h2>GLM-5.4 auf einen Blick</h2>

<div style="margin: 1.5rem 0; padding: 1.5rem; border-left: 4px solid #2563eb;">
  <strong>Note AIGradeLab: B+</strong><br>
  UX: 7/10 | Qualität: 8/10 | Preis-Leistung: 7/10 | Integration: 6/10 | Support: 6/10<br><br>
  <strong>Kurzfassung:</strong> GLM-5.4 ist architektonisch das interessanteste Modell-Release im November 2026. Der Loop Transformer ist eine echte Innovation: Schichten wiederzuverwenden statt weitere aufzutürmen ist ein eleganter Ansatz, um Modelle intelligenter zu machen, ohne die Rechenkosten zu verdreifachen. Allerdings leidet das Modell unter eingeschränkter Verfügbarkeit, fehlendem API-Zugang und ausbleibenden offiziellen Benchmarks. Vorerst ist es ein faszinierender Ausblick auf die Zukunft der KI-Architektur, aber noch kein täglicher Ersatz für Claude Fable 5.2 oder GPT-6.2 Astra.
</div>

<h2>Was ist der Loop Transformer?</h2>

<p>Alle großen KI-Modelle des Jahres 2026 folgten derselben Formel: mehr Schichten stapeln, mehr Parameter hinzufügen, mit mehr Daten trainieren. GLM-5.4 bricht mit diesem Muster. Statt Schichten hinzuzufügen, lässt Z.ai die vorhandenen Schichten härter arbeiten.</p>

<p>So funktioniert es: GLM-5.4 hat ungefähr 750 Milliarden Parameter, verteilt auf 78 gespeicherte Schichten. Aber 28 dieser Schichten — der „Loop Block" in der Mitte des Netzwerks — werden pro Vorwärtsdurchlauf zweimal mit geteilten Gewichten ausgeführt. Das Ergebnis: 106 effektive Schichtdurchläufe pro Token, bei dem Parameterspeicher eines 78-Schichten-Modells.</p>

<p>Z.ai behauptet, dass GLM-5.4 damit die Intelligenz von Modellen mit 2 bis 3 Billionen Parametern erreichen kann. Falls das auch nur teilweise stimmt, ist es ein bedeutender Architektur-Durchbruch: Man kann intelligentere Modelle bauen, ohne die Rechenkosten proportional zu steigern.</p>

<h3>Wie die Schleife in der Praxis funktioniert</h3>

<p>Die Architektur besteht aus drei Abschnitten:</p>

<ul>
  <li><strong>Präludium-Schichten (1–26):</strong> Werden einmal pro Token durchlaufen. Sie erstellen die anfänglichen Repräsentationen der Eingabe.</li>
  <li><strong>Loop-Schichten (27–54):</strong> Diese 28 Schichten werden zweimal mit geteilten Gewichten durchlaufen. Token-spezifische Gates steuern, wie viel Ausgabe jeder Iteration in den Residualstrom geschrieben wird. In Durchlauf 1 bleiben die Gates klein — das Modell baut globalen Kontext auf. In Durchlauf 2 öffnen sich die Gates stärker und verfeinern die Repräsentation mit dem Kontext aus Durchlauf 1.</li>
  <li><strong>Coda-Schichten (55–78):</strong> Werden einmal durchlaufen. Sie erzeugen die finale Ausgabe.</li>
</ul>

<p>Ein cleverer Trick: Beim zweiten Durchlauf durch den Loop Block nutzt das Modell den spärlichen KV-Cache und die Aufmerksamkeitsindizes aus Durchlauf 1 wieder. Es pflegt nur einen eigenen lokalen Sliding-Window-Cache (offenbar 128 Token). Die zweite Schleifen-Iteration verursacht dadurch relativ wenig zusätzlichen Speicherbedarf.</p>

<h2>Was wir über die Leistung wissen</h2>

<p>Hier wird es kompliziert. Z.ai hat weder offizielle Benchmarks noch eine Model Card veröffentlicht. Ein Teammitglied sagte, die Ergebnisse würden später folgen. Was wir haben, sind Tests von Drittanbietern und Z.ais interne Ablationsstudien.</p>

<h3>Drittanbieter-Ergebnisse: KingBench 4</h3>

<p>AICodeKings KingBench-4-Framework testete GLM-5.4 in sechs Code-Projekten. Die Ergebnisse:</p>

<ul>
  <li><strong>Platz 7 in der Gesamtwertung</strong> von 18 getesteten Modellen</li>
  <li><strong>Platz 1 unter den Open-Weight-Modellen</strong></li>
  <li><strong>Ausführungszeit: 431 Minuten</strong> — deutlich langsamer als Gemini 4 Neon (109 Minuten)</li>
  <li><strong>Reasoning-Schritte: 1.128</strong> gegenüber 244 bei Gemini 4 Neon — das Modell denkt gründlich, manchmal zu gründlich</li>
  <li><strong>Fehlerquote bei Tool-Aufrufen: 1,56 %</strong>, aber 66 % der fehlgeschlagenen Aufrufe wurden beim zweiten Versuch erfolgreich wiederhergestellt — eine höhere Wiederherstellungsrate als bei jedem Claude- oder Codex-Modell im Test</li>
</ul>

<p>Zum Vergleich: Claude Fable 5.2 belegte Platz 1 im KingBench 4 mit 42/60 Punkten. Gemini 4 Neon wurde Zweiter mit 37,9/60. GLM-5.4 landete ungefähr dort, wo man ein solides Open-Weight-Modell erwarten würde.</p>

<h3>Interne Validierung von Z.ai</h3>

<p>Z.ai führte ein kontrolliertes Experiment im 30B-Parameter-Maßstab durch — gleiche Architektur, mit und ohne Schleife — mit etwa 10 % mehr Trainingsrechenleistung für die Schleifen-Version. Ergebnisse: Die Ausgabelänge sank um 10–14 % über alle Benchmarks (bis zu 14,9 % bei MMLU-Pro), und die größten Verbesserungen zeigten sich bei Mathematik, naturwissenschaftlichem Reasoning und Aufgaben mit langem Kontext.</p>

<p>Das Design wurde in vier Größenordnungen validiert: 1B, 4B, 30B und 750B Parameter.</p>

<h3>Ein interessantes qualitatives Ergebnis</h3>

<p>Mindestens ein unabhängiger Tester berichtete, dass GLM-5.4 Anwendungsfehler und Sicherheitslücken erkannte, die Claude Fable 5.2 und andere getestete Modelle übersehen hatten. Das passt zum Architekturdesign: Der doppelte Durchlauf durch die Loop-Schichten gibt dem Modell mehr Zeit, subtile Probleme zu „bemerken". DataCamps Einschätzung: GLM-5.4 eignet sich am besten als zweiter Prüfer, nicht als primärer Code-Agent.</p>

<h2>Note UX: 7/10</h2>

<p>GLM-5.4 ist über Z.ais GLM Coding Plan, ZCode (zcode.z.ai) und Z.ai Chat (chat.z.ai) zugänglich. Die Oberflächen sind funktional, erreichen aber nicht das Niveau der ausgefeilten Erfahrungen von ChatGPT oder Claude. Es unterstützt Kontextfenster von 1M Token — Z.ai empfiehlt, den Client auf 512.000 Token einzustellen, um die besten Ergebnisse beim Programmieren zu erzielen. Das Modell unterstützt auch Vision-Input für visuelle Code-Aufgaben.</p>

<p>Ein bekanntes Problem, das Z.ai einräumt: Das Modell kann in langen „Marathon-Denk"-Schleifen stecken bleiben. Das ist die Kehrseite des Loop Transformers: Derselbe Mechanismus, der tieferes Reasoning ermöglicht, kann manchmal zu übermäßigem Grübeln führen.</p>

<p>Die Geschwindigkeit ist akzeptabel: Z.ai gibt bis zu 200 Token/s außerhalb der Stoßzeiten und 70–80 Token/s unter Last an.</p>

<h2>Note Qualität: 8/10</h2>

<p>Basierend auf den verfügbaren Drittanbieter-Tests und ersten Nutzermeldungen ist die Reasoning-Qualität von GLM-5.4 wirklich solide, besonders bei Code-Reviews und Sicherheitsanalysen. Die Loop-Transformer-Architektur scheint dem Modell einen qualitativen Vorteil bei Tiefenanalyse-Aufgaben zu verleihen. Wir vergeben eine 8 auf Basis der KingBench-Ergebnisse und der klaren architektonischen Innovation, aber diese Note könnte sich ändern, wenn Z.ai seine offiziellen Benchmarks veröffentlicht.</p>

<h2>Note Preis-Leistung: 7/10</h2>

<p>Ohne veröffentlichte API-Preise ist eine Bewertung der Preis-Leistung schwierig. Der Zugang erfordert derzeit ein GLM-Coding-Plan-Abonnement mit wöchentlichen Kontingenten, die offenbar 50 % höher liegen als bei GLM-5.3. Das Modell ist noch nicht auf OpenRouter, Cursor, GitHub Copilot oder den großen Cloud-Plattformen (Vertex AI, Azure AI Foundry, AWS Bedrock) verfügbar. Das schränkt den praktischen Nutzen erheblich ein.</p>

<h2>Note Integration: 6/10</h2>

<p>Das ist der größte Schwachpunkt von GLM-5.4. Es gibt noch keinen API-Zugang — Z.ai sagt, dieser werde nach einer Sicherheitsbewertung geöffnet. Das Modell funktioniert in Claude Code (Provider-ID: „zai-coding-plan/glm-5.4") und Z.ais eigenen Tools, fehlt aber auf den großen KI-Plattformen, die die meisten Entwickler täglich nutzen. Offene Gewichte sind geplant, aber noch nicht veröffentlicht — Z.ai erwähnt eine „Sicherheitsverstärkung" ohne genanntes Datum.</p>

<h2>Note Support: 6/10</h2>

<p>Z.ai hat weder Model Card noch offizielle Benchmarks noch detaillierte Dokumentation veröffentlicht. Der Mangel an Transparenz ist bei einem architektonisch so ambitionierten Modell bedenklich. Der Support scheint auf das Z.ai-eigene Ökosystem beschränkt zu sein.</p>

<h2>Der Loop Transformer: Warum er über GLM-5.4 hinaus wichtig ist</h2>

<p>Auch wenn GLM-5.4 selbst noch nicht bereit ist, Ihr primäres Code-Modell zu ersetzen, ist die Loop-Transformer-Architektur für die gesamte KI-Branche von Bedeutung. Warum:</p>

<ul>
  <li><strong>Effizienz:</strong> Wenn man die Intelligenz eines 2T-Parameter-Modells mit 750B Parametern durch wiederholte Schichten erreichen kann, sind die Einsparungen bei Kosten und Energie massiv.</li>
  <li><strong>Skalierbarkeit:</strong> Z.ai ist nicht allein — Inkling 2 Mini von Thinking Machines (am 20. November veröffentlicht) nutzt einen ähnlichen Ansatz mit 26,4B Gesamtparametern / 3,4B aktiven Parametern und mittleren Schichten, die 3-mal pro Token durchlaufen werden. Das Muster breitet sich aus.</li>
  <li><strong>Praktische Auswirkungen:</strong> Effektiv kleinere Modelle bedeuten günstigere Inferenz, schnellere Bereitstellung und KI, die auf weniger leistungsfähiger Hardware läuft.</li>
</ul>

<p>November 2026 könnte als der Monat in Erinnerung bleiben, in dem die Branche begann zu hinterfragen, ob „größer immer besser" ist. Loop Transformer deuten darauf hin, dass die Antwort nein lautet.</p>

<h2>Wer sollte GLM-5.4 heute nutzen?</h2>

<ul>
  <li><strong>KI-Forscher und Architektur-Enthusiasten:</strong> Es ist derzeit das interessanteste Modell zum Studieren.</li>
  <li><strong>Code-Reviewer auf der Suche nach einer zweiten Meinung:</strong> GLM-5.4 erkennt Probleme, die andere Modelle übersehen. Nutzen Sie es als Reviewer, nicht als primären Coder.</li>
  <li><strong>Abwartende Entwickler:</strong> Wenn Sie heute ein tägliches Code-Modell brauchen, sind Claude Fable 5.2, Gemini 4 Neon oder GPT-6.2 Sol die sichereren Optionen. Kommen Sie zurück, wenn Z.ai API-Preise und Benchmarks veröffentlicht.</li>
</ul>

<h2>Das Fazit</h2>

<p>GLM-5.4 erhält ein B+ — nicht weil es das beste verfügbare Code-Modell ist, sondern weil es eine Architektur einführt, die die nächste Generation von KI-Modellen neu gestalten könnte. Der Loop Transformer ist real, er funktioniert und inspiriert bereits andere Teams. Z.ai muss nur die Türen weiter öffnen: Benchmarks veröffentlichen, die API starten und die Gewichte freigeben. Bis dahin ist es ein brillanter Blick in die Zukunft der KI, der zu wenigen Menschen zugänglich ist, um eine höhere Note zu verdienen.</p>
