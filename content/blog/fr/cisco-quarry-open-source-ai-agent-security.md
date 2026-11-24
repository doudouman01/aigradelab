---
title: "Cisco passe Quarry en open source : un moteur de sécurité qui surveille les agents IA"
description: "Cisco a publié Quarry en open source, un moteur de détection comportementale conçu pour surveiller les agents IA contre les activités malveillantes. Voici pourquoi la sécurité des agents IA devient critique — et comment fonctionne Quarry."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Cisco s'attaque au problème de la sécurité des agents IA</h2>

<p>À mesure que les agents IA gagnent en autonomie — écriture de code, navigation web, gestion de fichiers, appels d'API — la question de savoir <strong>qui surveille les agents</strong> devient urgente. La réponse de Cisco : <strong>Quarry</strong>, un moteur open source de détection comportementale conçu pour surveiller les agents IA en temps réel et signaler tout comportement anormal.</p>

<p>L'outil a été publié sur GitHub et couvre un large éventail de scénarios : conversations LLM en un ou plusieurs tours, utilisation d'outils agentiques, interactions via le Model Context Protocol (MCP), et entrées multimodales. Des plugins sont déjà disponibles pour <strong>Claude Code</strong>, <strong>Codex</strong> et d'autres agents compatibles MCP.</p>

<h2>Pourquoi la sécurité des agents IA est cruciale aujourd'hui</h2>

<p>La plupart des outils de sécurité IA existants se concentrent sur ce qui se passe au niveau du modèle — injection de prompt, contournement des garde-fous, sorties nuisibles. Quarry adopte une approche différente : il surveille ce que les agents <em>font</em>, pas seulement ce qu'ils disent.</p>

<p>Cette distinction est importante car les agents IA modernes peuvent :</p>

<ul>
<li>Exécuter du code sur des serveurs et des machines locales</li>
<li>Lire, écrire et supprimer des fichiers</li>
<li>Effectuer des appels API vers des services externes</li>
<li>Naviguer sur le web et interagir avec des sites en temps réel</li>
<li>Enchaîner plusieurs outils dans des flux de travail complexes</li>
</ul>

<p>Une injection de prompt qui pousse un chatbot à dire quelque chose d'inapproprié, c'est une chose. Une injection de prompt qui pousse un agent de codage autonome à supprimer une base de données de production, c'en est une tout autre. Quarry est conçu pour le second scénario.</p>

<h2>Comment fonctionne Quarry</h2>

<p>Quarry opère comme une couche de détection comportementale qui se positionne entre un agent IA et ses outils. Il évalue les actions de l'agent selon un ensemble de règles configurable, en s'appuyant sur la <strong>Cisco AI Security & Safety Taxonomy</strong>.</p>

<p>Fonctionnalités clés :</p>

<ul>
<li><strong>Détection basée sur des règles :</strong> Les équipes de sécurité définissent les comportements suspects — accès non autorisé aux fichiers, appels réseau inattendus, tentatives d'élévation de privilèges, schémas d'exfiltration de données.</li>
<li><strong>Suivi multi-tours :</strong> Quarry suit le comportement de l'agent au fil des échanges, détectant les attaques qui se déploient progressivement plutôt qu'en un seul prompt.</li>
<li><strong>Intégration MCP :</strong> Le support natif du Model Context Protocol permet à Quarry de surveiller les outils auxquels un agent a accès et de signaler les schémas d'utilisation inhabituels.</li>
<li><strong>Architecture modulaire :</strong> Cisco fournit des plugins pour les frameworks d'agents populaires et encourage la communauté à en développer d'autres.</li>
</ul>

<p>Le dépôt GitHub du projet inclut les instructions d'installation, les versions Python supportées, des exemples de configuration et un guide de rédaction de règles.</p>

<h2>Vision d'ensemble : la sécurité des agents IA, une nouvelle catégorie</h2>

<p>Quarry s'inscrit dans une tendance plus large. À mesure que les agents IA passent des démonstrations à la production, toute une catégorie de sécurité émerge autour d'eux :</p>

<ul>
<li><strong>Cisco AI Defense</strong> — La suite commerciale de sécurité IA de Cisco, désormais entièrement développée avec Codex d'OpenAI, avec des fonctionnalités livrées en semaines au lieu de trimestres.</li>
<li><strong>Le système d'approbation par niveaux d'Anthropic</strong> — Intégré au nouveau bundle Claude Ship, où les modifications de code sont classées par niveau de risque et nécessitent différents degrés d'approbation humaine. <a href="/fr/blog/claude-ship-ai-code-automation">Lire notre article ici</a>.</li>
<li><strong>Daybreak Defense Network d'OpenAI</strong> — Un partenariat cybersécurité avec Cisco explorant le tri des menaces par IA.</li>
</ul>

<p>La tendance est claire : les entreprises qui créent les agents les plus puissants construisent aussi les garde-fous. La question est de savoir si des outils open source comme Quarry peuvent suivre le rythme du développement des agents.</p>

<h2>Qui devrait utiliser Quarry</h2>

<p>Quarry est principalement pertinent pour :</p>

<ul>
<li><strong>Les équipes de développement</strong> qui déploient des agents de codage IA (Claude Code, Codex, Cursor) en environnement de production.</li>
<li><strong>Les équipes de sécurité</strong> chargées de surveiller les flux de travail alimentés par l'IA dans l'organisation.</li>
<li><strong>Les créateurs de plateformes</strong> qui développent des produits IA agentiques et ont besoin d'une couche de détection sans tout construire de zéro.</li>
</ul>

<p>Si vous évaluez des outils IA pour le développement, consultez nos guides <a href="/fr/blog/best-ai-coding-tools-2026">Meilleurs outils IA de codage en 2026</a> et <a href="/fr/blog/best-ai-tools-developers-2026">Meilleurs outils IA pour développeurs</a> pour un panorama complet.</p>

<h2>Le verdict</h2>

<p>Les agents IA deviennent plus puissants chaque mois, et les outils de sécurité doivent suivre le rythme. La décision de Cisco de passer Quarry en open source est judicieuse — elle crée un socle commun pour la sécurité des agents au lieu de laisser chaque organisation construire le sien. Que Quarry devienne le standard ou simplement l'une des nombreuses options, la catégorie est là pour rester.</p>

<p><em>Vous développez avec des agents IA ? Assurez-vous d'avoir la bonne boîte à outils. Découvrez <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> pour des utilitaires gratuits — validateurs JSON, testeurs de regex, générateurs de hash, et bien plus.</em></p>
