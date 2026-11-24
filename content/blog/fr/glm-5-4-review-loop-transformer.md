---
title: "Test GLM-5.4 : le Loop Transformer de Z.ai réinvente la façon dont les modèles IA raisonnent"
description: "Le GLM-5.4 de Z.ai introduit le Loop Transformer, une architecture qui exécute 28 couches deux fois pour rivaliser avec des modèles 3 fois plus gros. Nous décryptons ce que cela signifie, les performances obtenues, et si cela vaut le coup."
category: "Tests notés"
categorySlug: "graded-reviews"
date: "2026-11-23"
lastTested: "2026-11-23"
readTime: "11 min de lecture"
grade: "B+"
scores_ux: 7
scores_quality: 8
scores_value: 7
scores_integration: 6
scores_support: 6
toolName: "GLM-5.4"
---

<h2>GLM-5.4 en un coup d'œil</h2>

<div style="margin: 1.5rem 0; padding: 1.5rem; border-left: 4px solid #2563eb;">
  <strong>Note AIGradeLab : B+</strong><br>
  UX : 7/10 | Qualité : 8/10 | Rapport qualité-prix : 7/10 | Intégration : 6/10 | Support : 6/10<br><br>
  <strong>En résumé :</strong> GLM-5.4 est la sortie de modèle la plus intéressante architecturalement de novembre 2026. Le Loop Transformer est une véritable innovation : réutiliser les couches au lieu d'en empiler davantage est une approche élégante pour rendre les modèles plus intelligents sans tripler les coûts de calcul. Mais le modèle souffre d'une disponibilité limitée, d'un accès API inexistant et de benchmarks officiels manquants. Pour l'instant, c'est un aperçu fascinant de l'avenir de l'architecture IA, pas encore un remplaçant quotidien de Claude Fable 5.2 ou GPT-6.2 Astra.
</div>

<h2>Qu'est-ce que le Loop Transformer ?</h2>

<p>Tous les grands modèles IA sortis en 2026 ont suivi la même recette : empiler plus de couches, ajouter plus de paramètres, s'entraîner sur plus de données. GLM-5.4 casse le schéma. Au lieu d'ajouter des couches, Z.ai fait travailler les couches existantes plus intensément.</p>

<p>Voici comment ça marche : GLM-5.4 compte environ 750 milliards de paramètres répartis en 78 couches stockées. Mais 28 de ces couches — le « loop block » au milieu du réseau — s'exécutent deux fois par passe avant avec des poids partagés. Le résultat : 106 passes de couches effectives par token, avec le stockage de paramètres d'un modèle à 78 couches.</p>

<p>Z.ai affirme que cette approche permet à GLM-5.4 d'égaler l'intelligence de modèles de 2 à 3 trillions de paramètres. Si c'est ne serait-ce que partiellement vrai, c'est une percée architecturale majeure : on peut construire des modèles plus intelligents sans augmenter proportionnellement les coûts de calcul.</p>

<h3>Comment la boucle fonctionne concrètement</h3>

<p>L'architecture se divise en trois sections :</p>

<ul>
  <li><strong>Couches prélude (1–26) :</strong> Exécutées une fois par token. Elles construisent les représentations initiales de l'entrée.</li>
  <li><strong>Couches de boucle (27–54) :</strong> Ces 28 couches s'exécutent deux fois avec des poids partagés. Des portes par token contrôlent la quantité de sortie de chaque itération qui est écrite dans le flux résiduel. À la passe 1, les portes restent petites — le modèle construit le contexte global. À la passe 2, les portes s'ouvrent davantage, affinant la représentation avec le contexte de la passe 1.</li>
  <li><strong>Couches coda (55–78) :</strong> Exécutées une fois. Elles produisent la sortie finale.</li>
</ul>

<p>Une astuce ingénieuse : lors de la seconde passe à travers le loop block, le modèle réutilise le KV cache sparse et les indices d'attention sélectionnés lors de la passe 1. Il ne maintient que son propre cache local à fenêtre glissante (apparemment 128 tokens). La seconde itération de boucle ajoute donc relativement peu de surcharge mémoire.</p>

<h2>Ce que l'on sait des performances</h2>

<p>C'est là que les choses se compliquent. Z.ai n'a publié ni benchmarks officiels ni model card. Un membre de l'équipe a indiqué que les scores arriveraient plus tard. Ce dont nous disposons : des tests tiers et les études d'ablation internes de Z.ai.</p>

<h3>Résultats tiers : KingBench 4</h3>

<p>Le framework KingBench 4 d'AICodeKing a testé GLM-5.4 sur six projets de code. Les résultats :</p>

<ul>
  <li><strong>7e au classement général</strong> sur 18 modèles testés</li>
  <li><strong>1er parmi les modèles open-weight</strong></li>
  <li><strong>Durée d'exécution : 431 minutes</strong> — nettement plus lent que Gemini 4 Neon (109 minutes)</li>
  <li><strong>Étapes de raisonnement : 1 128</strong> contre 244 pour Gemini 4 Neon — le modèle réfléchit en profondeur, parfois trop</li>
  <li><strong>Taux d'échec des appels d'outils : 1,56 %</strong>, mais 66 % des appels échoués ont été récupérés au deuxième essai — un taux de récupération plus élevé que tout modèle Claude ou Codex du test</li>
</ul>

<p>Pour contexte, <a href="/fr/blog/claude-fable-5-2-review">Claude Fable 5.2</a> s'est classé 1er au classement général de KingBench 4 avec 42/60 points. Gemini 4 Neon était 2e avec 37,9/60. GLM-5.4 se situe à peu près là où l'on attendrait un modèle open-weight solide.</p>

<h3>Validation interne de Z.ai</h3>

<p>Z.ai a mené une expérience contrôlée à l'échelle de 30B paramètres — même architecture, avec et sans boucle — en utilisant environ 10 % de calcul d'entraînement supplémentaire pour la version avec boucle. Résultats : la longueur de sortie a diminué de 10 à 14 % sur l'ensemble des benchmarks (jusqu'à 14,9 % sur MMLU-Pro), et les gains les plus importants ont été observés en maths, raisonnement scientifique et tâches à contexte long.</p>

<p>Le design a été validé à quatre échelles : 1B, 4B, 30B et 750B paramètres.</p>

<h3>Une observation qualitative intéressante</h3>

<p>Au moins un testeur indépendant a rapporté que GLM-5.4 détectait des bugs applicatifs et des vulnérabilités de sécurité que Claude Fable 5.2 et d'autres modèles testés avaient manqués. Cela concorde avec la conception de l'architecture : la double passe à travers les couches de boucle donne au modèle plus de temps pour « remarquer » des problèmes subtils. L'évaluation de DataCamp est que GLM-5.4 est mieux utilisé comme second relecteur que comme agent de code principal.</p>

<h2>Note UX : 7/10</h2>

<p>GLM-5.4 est accessible via l'abonnement GLM Coding Plan de Z.ai, ZCode (zcode.z.ai) et Z.ai Chat (chat.z.ai). Les interfaces sont fonctionnelles mais pas au niveau des expériences soignées de ChatGPT ou Claude. Le modèle prend en charge des fenêtres de contexte de 1M tokens — Z.ai recommande de configurer le client à 512 000 tokens pour de meilleurs résultats en code. Le modèle prend aussi en charge l'entrée visuelle pour les tâches de code visuel.</p>

<p>Un problème connu que Z.ai reconnaît : le modèle peut se bloquer dans de longues boucles de « réflexion marathon ». C'est le compromis du Loop Transformer — le même mécanisme qui permet un raisonnement plus profond peut parfois mener à une délibération excessive.</p>

<p>La vitesse est acceptable : Z.ai annonce jusqu'à 200 tokens/s en heures creuses et 70–80 tokens/s en charge.</p>

<h2>Note qualité : 8/10</h2>

<p>D'après les tests tiers disponibles et les premiers retours utilisateurs, la qualité de raisonnement de GLM-5.4 est véritablement solide, surtout en revue de code et analyse de sécurité. L'architecture Loop Transformer semble donner au modèle un avantage qualitatif pour les tâches d'analyse approfondie. Nous lui attribuons un 8 sur la base des résultats KingBench et de l'innovation architecturale manifeste, mais cette note pourra évoluer une fois que Z.ai aura publié ses benchmarks officiels.</p>

<h2>Note rapport qualité-prix : 7/10</h2>

<p>Sans tarif API publié, noter le rapport qualité-prix est difficile. L'accès nécessite actuellement un abonnement GLM Coding Plan avec des quotas hebdomadaires apparemment 50 % supérieurs à ceux de GLM-5.3. Le modèle n'est pas encore disponible sur OpenRouter, Cursor, GitHub Copilot ou les grandes plateformes cloud (Vertex AI, Azure AI Foundry, AWS Bedrock). Cela limite considérablement sa valeur pratique.</p>

<h2>Note intégration : 6/10</h2>

<p>C'est le point le plus faible de GLM-5.4. Aucun accès API n'est encore disponible — Z.ai indique qu'il sera ouvert après une évaluation de sécurité. Le modèle fonctionne dans Claude Code (provider ID : « zai-coding-plan/glm-5.4 ») et les outils propres à Z.ai, mais il est absent des grandes plateformes IA que la plupart des développeurs utilisent au quotidien. Les poids ouverts sont prévus mais pas publiés — Z.ai mentionne un « renforcement de sécurité » sans date annoncée.</p>

<h2>Note support : 6/10</h2>

<p>Z.ai n'a publié ni model card, ni benchmarks officiels, ni documentation détaillée. Ce manque de transparence est préoccupant pour un modèle aussi ambitieux sur le plan architectural. Le support semble limité à l'écosystème propre de Z.ai.</p>

<h2>Le Loop Transformer : pourquoi c'est important au-delà de GLM-5.4</h2>

<p>Même si GLM-5.4 lui-même n'est pas prêt à remplacer votre modèle de code principal, l'architecture Loop Transformer est significative pour toute l'industrie IA. Voici pourquoi :</p>

<ul>
  <li><strong>Efficacité :</strong> Si l'on peut égaler l'intelligence d'un modèle à 2T paramètres avec 750B paramètres en bouclant les couches, les économies de coûts et d'énergie sont massives.</li>
  <li><strong>Scalabilité :</strong> Z.ai n'est pas seul — Inkling 2 Mini de Thinking Machines (sorti le 20 novembre) utilise une approche similaire avec 26,4B paramètres totaux / 3,4B actifs et des couches intermédiaires exécutées 3 fois par token. Le modèle se répand.</li>
  <li><strong>Impact pratique :</strong> Des modèles effectifs plus petits signifient une inférence moins chère, un déploiement plus rapide, et une IA qui tourne sur du matériel moins puissant.</li>
</ul>

<p>Novembre 2026 restera peut-être dans les mémoires comme le mois où l'industrie a commencé à se demander si « plus gros est toujours mieux ». Les Loop Transformers suggèrent que la réponse est non.</p>

<h2>Qui devrait utiliser GLM-5.4 aujourd'hui ?</h2>

<ul>
  <li><strong>Chercheurs en IA et passionnés d'architecture :</strong> C'est le modèle le plus intéressant à étudier en ce moment.</li>
  <li><strong>Relecteurs de code en quête d'un second avis :</strong> GLM-5.4 détecte des problèmes que d'autres modèles manquent. Utilisez-le comme relecteur, pas comme codeur principal.</li>
  <li><strong>Développeurs attentistes :</strong> Si vous avez besoin d'un modèle de code au quotidien aujourd'hui, Claude Fable 5.2, Gemini 4 Neon ou GPT-6.2 Sol sont des choix plus sûrs. Consultez notre <a href="/fr/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">comparatif Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2</a> pour les détails. Revenez quand Z.ai aura publié ses tarifs API et ses benchmarks. Consultez notre <a href="/fr/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">comparatif Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2</a> pour les détails.</li>
</ul>

<h2>Le verdict</h2>

<p>GLM-5.4 obtient un B+ — non pas pour être le meilleur modèle de code disponible aujourd'hui, mais pour avoir introduit une architecture qui pourrait remodeler la prochaine génération de modèles IA. Le Loop Transformer est réel, il fonctionne, et il inspire déjà d'autres équipes. Z.ai n'a plus qu'à ouvrir les portes plus largement : publier les benchmarks, lancer l'API et libérer les poids. D'ici là, c'est un brillant aperçu de la direction que prend l'IA, accessible à trop peu de personnes pour mériter une note plus élevée.</p>

<h2>À lire aussi</h2>
<ul>
  <li><a href="/fr/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2 : le match de novembre 2026</a></li>
  <li><a href="/fr/blog/claude-fable-5-2-review">Test de Claude Fable 5.2</a></li>
  <li><a href="/fr/blog/best-ai-coding-tools-2026">Meilleurs outils IA pour le code en 2026</a></li>
</ul>
