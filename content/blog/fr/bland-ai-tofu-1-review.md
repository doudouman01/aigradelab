---
title: "Test Bland AI Tofu-1 : une IA vocale full-duplex qui entend malgré le bruit"
description: "Tofu-1 de Bland est un modèle speech-to-speech qui écoute, raisonne et répond en audio pendant les appels téléphoniques. Nous examinons ses promesses, ses limites et son potentiel en entreprise."
category: "Tests notés"
categorySlug: "graded-reviews"
date: "2026-11-21"
lastTested: "2026-11-18"
readTime: "9 min de lecture"
grade: "B"
scores_ux: 7
scores_quality: 8
scores_value: 5
scores_integration: 6
scores_support: 6
toolName: "Bland AI Tofu-1"
---

<h2>Qu'est-ce que Tofu-1 ?</h2>
<p>Tofu-1 est le premier modèle speech-to-speech de Bland, annoncé le 13 novembre 2026 en préversion de recherche. Contrairement à la plupart des agents d'IA vocale qui fonctionnent en cascade (conversion de la parole en texte, traitement par un modèle de langage, puis reconversion en parole), Tofu-1 traite directement l'audio. Il entend, raisonne et répond sans jamais quitter le domaine audio.</p>
<p>La startup d'IA vocale basée à San Francisco a conçu Tofu-1 spécifiquement pour les appels téléphoniques à enjeux qui se déroulent dans des conditions loin d'être idéales : voitures en mouvement, chambres d'hôpital, signal mobile faible et environnements où plusieurs personnes parlent en même temps.</p>
<h2>Le problème que résout Tofu-1</h2>
<p>Voici le scénario que Bland utilise pour illustrer le défi : une télévision tourne en arrière-plan. L'appelant dit « non ». La télévision dit « oui ». Quelle réponse l'IA enregistre-t-elle ?</p>
<p>Les agents vocaux en cascade peinent sur ce point, car ils perdent le contexte audio lors de la conversion parole-texte. Le bruit de fond, le ton de la voix, les hésitations et l'identification du locuteur sont tous aplatis dans une transcription avant même que l'IA ne les traite.</p>
<p>Tofu-1 affirme résoudre ce problème en gardant tout dans le domaine audio. Le modèle identifie à quel locuteur appartient chaque phrase et filtre en conséquence, en séparant la voix de l'appelant des télévisions, des enfants qui pleurent, du bruit de la route, des interphones d'hôpital et d'autres sons ambiants.</p>
<h2>Les principales promesses</h2>
<h3>Communication full-duplex</h3>
<p>Tofu-1 peut écouter et parler simultanément : un vrai fonctionnement full-duplex. Il peut donc gérer les schémas naturels de la conversation (interruptions, paroles qui se chevauchent, corrections en cours de phrase) sans les pauses gênantes qui handicapent la plupart des systèmes d'IA vocale.</p>
<h3>Séparation des locuteurs</h3>
<p>Le modèle prétend distinguer l'appelant principal des voix en arrière-plan, même quand elles parlent en même temps. Dans la démonstration « TV Test » de Bland (que l'entreprise présente comme illustrative, et non comme une sortie réelle du modèle), l'agent attribue correctement des réponses contradictoires à la bonne source.</p>
<h3>Gestion du bruit environnemental</h3>
<p>Au-delà de la séparation des voix, Tofu-1 est conçu pour préserver la qualité de la conversation dans des environnements bruyants : conduite sur autoroute, services hospitaliers animés, lieux publics bondés. Le modèle conserve sa capacité à comprendre et à répondre même quand la qualité du signal se dégrade.</p>
<h3>Performance proche de l'humain</h3>
<p>Selon une mesure fournie par Bland elle-même, plus de 92 % des participants à des tests n'ont pas identifié Tofu-1 comme une IA. L'affirmation est audacieuse, mais avec la réserve qu'elle est entièrement auto-déclarée, sans méthodologie publiée ni vérification par un tiers.</p>
<h2>Ce que nous ne savons pas encore</h2>
<p>C'est ici que le test se complique. Tofu-1 est en préversion de recherche et Bland a gardé sous silence plusieurs éléments essentiels :</p>
<ul>
<li><strong>Aucun benchmark publié</strong> : pas de résultats standardisés face aux benchmarks établis de l'IA vocale</li>
<li><strong>Taille du modèle non communiquée</strong> : impossible d'évaluer les besoins en infrastructure</li>
<li><strong>Aucun tarif annoncé</strong> : impossible de calculer le coût par appel ou de comparer avec la concurrence</li>
<li><strong>Aucune mesure de latence</strong> : le temps de réponse est crucial dans une conversation téléphonique et aucun chiffre n'a été partagé</li>
<li><strong>Aucun test indépendant</strong> : l'affirmation des 92 % d'indistinguabilité n'a pas été vérifiée par un tiers</li>
</ul>
<p>Ce manque d'informations est la raison principale de notre note. Le concept technologique est séduisant, mais nous ne pouvons pas vérifier les affirmations.</p>
<h2>Le paysage concurrentiel</h2>
<p>Tofu-1 arrive sur un marché de l'IA vocale en pleine croissance. Voici comment il se compare aux alternatives connues :</p>
<table>
<thead>
<tr><th>Fonctionnalité</th><th>Bland Tofu-1</th><th>OpenAI GPT-Live</th><th>Nvidia VoiceChat</th></tr>
</thead>
<tbody>
<tr><td>Architecture</td><td>Speech-to-speech</td><td>Multimodal</td><td>Speech-to-speech</td></tr>
<tr><td>Full duplex</td><td>Oui</td><td>Oui</td><td>Oui</td></tr>
<tr><td>Cas d'usage ciblé</td><td>Appels en entreprise</td><td>Assistant généraliste</td><td>Open source</td></tr>
<tr><td>Disponibilité</td><td>Préversion de recherche</td><td>Disponibilité générale (Pro)</td><td>Poids ouverts</td></tr>
<tr><td>Tarifs</td><td>Non annoncés</td><td>Inclus dans l'offre</td><td>Gratuit (auto-hébergé)</td></tr>
</tbody>
</table>
<p>Ce qui différencie Bland, c'est son ciblage ultra-précis sur les appels téléphoniques d'entreprise dans des environnements audio difficiles. Là où GPT-Live et ses concurrents visent l'IA conversationnelle généraliste, Tofu-1 est conçu pour les problèmes spécifiques de la téléphonie professionnelle.</p>
<h2>Qui doit s'y intéresser</h2>
<p><strong>Oui, à suivre de près :</strong></p>
<ul>
<li>Les centres de contact qui gèrent de gros volumes d'appels entrants</li>
<li>Les organisations de santé dont les échanges avec les patients passent par le téléphone</li>
<li>Les compagnies d'assurance qui traitent les sinistres par téléphone</li>
<li>Les sociétés de services financiers dont les opérations téléphoniques sont soumises à la conformité</li>
</ul>
<p><strong>Pas encore exploitable pour :</strong></p>
<ul>
<li>Les petites entreprises qui cherchent un bot téléphonique dès aujourd'hui (préversion de recherche uniquement)</li>
<li>Les développeurs qui veulent construire dessus (pas encore d'API publique)</li>
<li>Toute personne qui a besoin de tarifs transparents pour établir un budget</li>
</ul>
<h2>Bland AI : le contexte de l'entreprise</h2>
<p>Fondée en 2023 par Isaiah Granet et Sobhan Nejad, Bland a levé plus de 100 millions de dollars à la mi-2026, dont un tour de 50 millions en juin 2026. L'entreprise traite plus de 3,5 millions d'appels par semaine pour des clients entreprises comme Samsara et Kin Insurance. Les tarifs standard de Bland démarrent à 0,14 $/minute dans l'offre en libre-service.</p>
<p>Tofu-1 est le premier modèle de ce que Bland décrit comme une famille planifiée de modèles speech-to-speech, ce qui laisse penser que des variantes plus spécialisées pourraient suivre.</p>
<h2>Verdict AIGradeLab : B</h2>
<p>Tofu-1 de Bland AI obtient un <strong>B</strong>, une note qui reflète une vraie ambition technique freinée par l'absence de preuves vérifiables. Le concept d'un modèle speech-to-speech full-duplex optimisé pour les appels d'entreprise bruyants est exactement ce dont le marché a besoin. Si les affirmations résistent à des tests indépendants, ce pourrait être un produit de niveau A.</p>
<p>Mais une « préversion de recherche » sans benchmarks, sans tarifs et sans validation par un tiers signifie que nous notons une promesse, pas un produit. Nous y reviendrons lorsque Tofu-1 passera en disponibilité générale avec des données de performance publiées.</p>
<table>
<thead>
<tr><th>Catégorie</th><th>Note</th><th>Remarques</th></tr>
</thead>
<tbody>
<tr><td>UX / Expérience développeur</td><td>7/10</td><td>La plateforme de Bland est soignée, intégration de Tofu-1 à confirmer</td></tr>
<tr><td>Qualité / Fiabilité</td><td>8/10</td><td>Promesses fortes, non vérifiées de façon indépendante</td></tr>
<tr><td>Rapport qualité-prix</td><td>5/10</td><td>Impossible à évaluer : aucun tarif disponible</td></tr>
<tr><td>Intégration</td><td>6/10</td><td>Préversion de recherche, accès limité</td></tr>
<tr><td>Support / Communauté</td><td>6/10</td><td>Orienté entreprise, pas encore de communauté publique</td></tr>
</tbody>
</table>
