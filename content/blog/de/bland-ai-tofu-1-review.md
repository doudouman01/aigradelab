---
title: "Bland AI Tofu-1 im Test: Vollduplex-Sprach-KI, die auch durch den Lärm hindurchhört"
description: "Blands Tofu-1 ist ein Speech-to-Speech-Modell, das bei Telefonaten zuhört, überlegt und per Audio antwortet. Wir prüfen Versprechen, Grenzen und Enterprise-Potenzial."
category: "Graded Reviews"
categorySlug: "graded-reviews"
date: "2026-11-21"
lastTested: "2026-11-18"
readTime: "9 Min. Lesezeit"
grade: "B"
scores_ux: 7
scores_quality: 8
scores_value: 5
scores_integration: 6
scores_support: 6
toolName: "Bland AI Tofu-1"
---

<h2>Was ist Tofu-1?</h2>

<p>Tofu-1 ist Blands erstes Speech-to-Speech-Modell, angekündigt am 13. November 2026 als Research Preview. Anders als die meisten Sprach-KI-Agenten, die als Kaskade arbeiten – Sprache in Text umwandeln, mit einem Sprachmodell verarbeiten und wieder in Sprache zurückverwandeln –, verarbeitet Tofu-1 Audio direkt. Es hört, überlegt und antwortet, ohne die Audio-Ebene je zu verlassen.</p>

<p>Das in San Francisco ansässige Sprach-KI-Startup hat Tofu-1 speziell für heikle Telefonate unter ungünstigen Bedingungen entwickelt: fahrende Autos, Krankenhauszimmer, schwacher Mobilfunkempfang und Umgebungen, in denen mehrere Personen gleichzeitig sprechen.</p>

<h2>Das Problem, das Tofu-1 löst</h2>

<p>Mit diesem Szenario veranschaulicht Bland die Herausforderung: Im Hintergrund läuft ein Fernseher. Der Anrufer sagt „Nein". Der Fernseher sagt „Ja". Welche Antwort speichert die KI?</p>

<p>Klassische Kaskaden-Sprachagenten tun sich damit schwer, weil bei der Umwandlung von Sprache in Text der Audiokontext verloren geht. Hintergrundgeräusche, Tonfall, Zögern und die Zuordnung der Sprecher werden zu einem Text-Transkript eingeebnet, bevor die KI sie überhaupt verarbeitet.</p>

<p>Tofu-1 will das lösen, indem alles in der Audio-Domäne bleibt. Das Modell erkennt, zu welchem Sprecher jede Äußerung gehört, und filtert entsprechend – es trennt die Stimme des Anrufers von Fernsehern, weinenden Kindern, Straßenlärm, Krankenhaus-Durchsagen und anderen Umgebungsgeräuschen.</p>

<h2>Die wichtigsten Versprechen</h2>

<h3>Vollduplex-Kommunikation</h3>

<p>Tofu-1 kann gleichzeitig zuhören und sprechen – echter Vollduplex-Betrieb. Damit kommt es mit natürlichen Gesprächsmustern wie Unterbrechungen, überlappender Sprache und Korrekturen mitten im Satz zurecht, ohne die unangenehmen Pausen, unter denen die meisten Sprach-KI-Systeme leiden.</p>

<h3>Sprechertrennung</h3>

<p>Das Modell soll zwischen dem Hauptanrufer und Hintergrundstimmen unterscheiden können, selbst wenn diese gleichzeitig sprechen. In Blands „TV-Test"-Demonstration (die das Unternehmen als Veranschaulichung und nicht als aufgezeichnete Modellausgabe kennzeichnet) ordnet der Agent widersprüchliche Antworten korrekt der richtigen Quelle zu.</p>

<h3>Umgang mit Umgebungslärm</h3>

<p>Über die Stimmtrennung hinaus soll Tofu-1 die Gesprächsqualität in lauten Umgebungen halten – auf der Autobahn, auf belebten Krankenhausstationen, an überfüllten öffentlichen Orten. Das Modell soll auch bei schlechter Signalqualität verstehen und antworten können.</p>

<h3>Menschenähnliche Leistung</h3>

<p>Blands selbst berichtete Kennzahl: Über 92 % der Teilnehmer in Tests konnten Tofu-1 nicht als KI erkennen. Das ist eine kühne Behauptung, allerdings mit dem Vorbehalt, dass sie vollständig selbst berichtet ist – ohne veröffentlichte Methodik oder Überprüfung durch Dritte.</p>

<h2>Was wir noch nicht wissen</h2>

<p>Hier wird der Test kompliziert. Tofu-1 befindet sich in der Research Preview, und Bland hält mehrere entscheidende Informationen zurück:</p>

<ul>
<li><strong>Keine veröffentlichten Benchmarks</strong> – Keine standardisierten Testergebnisse gegen etablierte Sprach-KI-Benchmarks</li>
<li><strong>Keine Angabe zur Modellgröße</strong> – Wir können den Infrastrukturbedarf nicht einschätzen</li>
<li><strong>Keine Preise angekündigt</strong> – Kosten pro Anruf lassen sich weder berechnen noch mit Wettbewerbern vergleichen</li>
<li><strong>Keine Latenzwerte</strong> – Die Antwortzeit ist bei Telefongesprächen entscheidend, doch es wurden keine Zahlen genannt</li>
<li><strong>Keine Tests durch Dritte</strong> – Die Behauptung, zu 92 % nicht von Menschen unterscheidbar zu sein, wurde nicht unabhängig überprüft</li>
</ul>

<p>Diese Informationslücke ist der Hauptgrund für unsere Note. Das technologische Konzept überzeugt, aber wir können die Behauptungen nicht überprüfen.</p>

<h2>Wettbewerbsumfeld</h2>

<p>Tofu-1 betritt einen schnell wachsenden Markt für Sprach-KI. So schneidet es im Vergleich zu bekannten Alternativen ab:</p>

<table>
<thead>
<tr><th>Merkmal</th><th>Bland Tofu-1</th><th>OpenAI GPT-Live</th><th>Nvidia VoiceChat</th></tr>
</thead>
<tbody>
<tr><td>Architektur</td><td>Speech-to-Speech</td><td>Multimodal</td><td>Speech-to-Speech</td></tr>
<tr><td>Vollduplex</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
<tr><td>Zielanwendung</td><td>Enterprise-Anrufe</td><td>Allgemeiner Assistent</td><td>Open Source</td></tr>
<tr><td>Verfügbarkeit</td><td>Research Preview</td><td>GA (Pro)</td><td>Offene Gewichte</td></tr>
<tr><td>Preise</td><td>Nicht angekündigt</td><td>Im Tarif enthalten</td><td>Kostenlos (Self-Hosting)</td></tr>
</tbody>
</table>

<p>Blands Alleinstellungsmerkmal ist der konsequente Fokus auf Unternehmens-Telefonate in schwierigen Audio-Umgebungen. Während GPT-Live und Konkurrenten allgemeine Konversations-KI anstreben, ist Tofu-1 gezielt für die besonderen Probleme der Geschäftstelefonie gebaut.</p>

<h2>Für wen es interessant ist</h2>

<p><strong>Ja, genau beobachten:</strong></p>
<ul>
<li>Contact Center mit hohem Aufkommen eingehender Anrufe</li>
<li>Gesundheitsorganisationen mit telefonischer Patientenkommunikation</li>
<li>Versicherungen, die Schadensmeldungen telefonisch bearbeiten</li>
<li>Finanzdienstleister mit Compliance-sensiblen Telefonprozessen</li>
</ul>

<p><strong>Noch nicht umsetzbar für:</strong></p>
<ul>
<li>Kleine Unternehmen, die heute einen Telefonbot suchen (nur Research Preview)</li>
<li>Entwickler, die darauf aufbauen wollen (noch keine öffentliche API)</li>
<li>Alle, die für die Budgetplanung transparente Preise brauchen</li>
</ul>

<h2>Bland AI: Unternehmenskontext</h2>

<p>Bland wurde 2023 von Isaiah Granet und Sobhan Nejad gegründet und hat bis Mitte 2026 über 100 Millionen Dollar eingesammelt, darunter eine Runde über 50 Millionen Dollar im Juni 2026. Das Unternehmen wickelt über 3,5 Millionen Anrufe pro Woche für Enterprise-Kunden wie Samsara und Kin Insurance ab. Blands Standardpreise beginnen bei 0,14 $/Minute im Self-Service-Tarif.</p>

<p>Tofu-1 ist das erste Modell einer von Bland geplanten Familie von Speech-to-Speech-Modellen – weitere spezialisierte Varianten dürften folgen.</p>

<h2>AIGradeLab-Urteil: B</h2>

<p>Bland AIs Tofu-1 erhält ein <strong>B</strong> – eine Note, die echten technischen Ehrgeiz widerspiegelt, der durch fehlende überprüfbare Belege ausgebremst wird. Das Konzept eines Vollduplex-Speech-to-Speech-Modells, optimiert für laute Unternehmensanrufe, ist genau das, was der Markt braucht. Halten die Behauptungen unabhängigen Tests stand, könnte dies ein Produkt der A-Klasse werden.</p>

<p>Aber „Research Preview" ohne Benchmarks, ohne Preise und ohne Validierung durch Dritte heißt: Wir bewerten ein Versprechen, kein Produkt. Wir kommen darauf zurück, sobald Tofu-1 mit veröffentlichten Leistungsdaten allgemein verfügbar ist.</p>

<table>
<thead>
<tr><th>Kategorie</th><th>Wert</th><th>Anmerkungen</th></tr>
</thead>
<tbody>
<tr><td>UX / Entwicklererfahrung</td><td>7/10</td><td>Blands Plattform ist ausgereift, die Tofu-1-Integration steht noch aus</td></tr>
<tr><td>Qualität / Zuverlässigkeit</td><td>8/10</td><td>Starke Behauptungen, unabhängig nicht überprüft</td></tr>
<tr><td>Preis-Leistung</td><td>5/10</td><td>Nicht bewertbar – keine Preise verfügbar</td></tr>
<tr><td>Integration</td><td>6/10</td><td>Research Preview, eingeschränkter Zugang</td></tr>
<tr><td>Support / Community</td><td>6/10</td><td>Auf Unternehmen ausgerichtet, noch keine öffentliche Community</td></tr>
</tbody>
</table>
