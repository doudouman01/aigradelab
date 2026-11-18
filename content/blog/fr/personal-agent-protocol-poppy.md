---
title: "Personal Agent Protocol (Poppy) : le nouveau standard qui permet aux agents d'IA d'agir en votre nom"
description: "Sierra a publié Poppy 1.0 le 13 novembre 2026 : un protocole ouvert qui définit comment les agents d'IA personnels se connectent aux entreprises, authentifient les utilisateurs et accomplissent des tâches. Shopify et Meta ont déjà adopté le standard."
category: "Notes de labo"
categorySlug: "lab-notes"
date: "2026-11-19"
readTime: "8 min de lecture"
---

<h2>Les agents d'IA viennent d'obtenir une porte d'entrée vers toutes les entreprises</h2>
<p>Le 13 novembre 2026, Sierra a publié le Personal Agent Protocol 1.0, un standard ouvert qu'elle nomme <strong>Poppy</strong>, qui définit comment l'agent d'IA d'une personne se connecte à une entreprise via son site web, ses API ou son agent d'entreprise. Le protocole est déjà en service : Shopify l'a activé automatiquement sur l'ensemble de sa plateforme marchande, et l'agent Muse de Meta cherche désormais Poppy lorsqu'il visite n'importe quel site web.</p>
<p>Ce n'est pas une spécification théorique. C'est une infrastructure déployée qui transforme dès maintenant la façon dont les agents d'IA interagissent avec l'internet commercial.</p>
<h2>Pourquoi Poppy existe</h2>
<p>Le déclencheur a été un véritable conflit. En septembre 2026, Amazon a bloqué l'agent Muse de Meta sur sa boutique, invoquant des craintes de scraping. Cela s'est produit seulement 12 jours après le lancement de Muse. L'incident a révélé un problème fondamental : il n'existait aucun moyen standard pour les agents d'IA de s'identifier, d'authentifier les utilisateurs et d'interagir avec les entreprises.</p>
<p>Sans protocole, chaque interaction entre un agent et une entreprise relevait essentiellement du web scraping, une zone grise juridique et technique que des entreprises comme Amazon n'étaient pas prêtes à tolérer.</p>
<p>Sierra (cofondée par l'ancien PDG de Salesforce Bret Taylor) et Meta ont développé Poppy pour résoudre ce problème. Le protocole offre aux entreprises un moyen de reconnaître qu'elles ont affaire à un agent d'IA, de vérifier qui il représente et de contrôler ce qu'il peut faire.</p>
<h2>Comment fonctionne Poppy : cinq briques de base</h2>
<p>Poppy repose sur cinq composants essentiels qui fonctionnent ensemble :</p>
<h3>1. Découverte</h3>
<p>Les entreprises publient un fichier <code>/.well-known/poppy.json</code> sur leur site web, un peu comme <code>robots.txt</code> indique aux robots d'indexation ce qu'ils peuvent indexer. Ce fichier déclare comment les agents peuvent se connecter, quelles méthodes de connexion sont disponibles et quelles capacités sont exposées. Tout agent d'IA peut lire ce fichier pour comprendre comment interagir avec l'entreprise.</p>
<h3>2. Identité</h3>
<p>Lorsqu'un agent d'IA se présente, l'entreprise peut identifier clairement qu'elle a affaire à « l'agent d'IA de l'utilisateur X » plutôt qu'à un bot anonyme. L'agent présente des identifiants cryptographiques (client_id, clé publique, adresse de rappel) qui établissent son identité. C'est essentiel : les entreprises doivent savoir qu'elles servent un agent légitime, pas un scraper ou un attaquant.</p>
<h3>3. Authentification (basée sur OAuth)</h3>
<p>Poppy utilise OAuth, le même standard qui propulse « Se connecter avec Google » et les flux similaires. L'utilisateur se connecte sur la page de l'entreprise elle-même : l'agent d'IA ne voit jamais le mot de passe. Après l'authentification, l'agent reçoit un jeton de session à portée limitée avec des permissions minimales. Votre agent peut ainsi consulter votre compte Amazon, mais uniquement avec les permissions que vous accordez explicitement.</p>
<h3>4. Permissions par niveaux</h3>
<p>Les permissions sont réparties en cinq niveaux, de l'interdiction totale à l'accès complet. Les entreprises décident du niveau qu'elles proposent et les utilisateurs décident de ce qu'ils accordent. Au niveau de base (<code>poppy:read</code>), un agent peut consulter les soldes et voir les commandes. Les opérations d'écriture comme les achats exigent une autorisation <code>poppy:write</code> distincte.</p>
<h3>5. Sessions multicanales</h3>
<p>Un seul jeton d'authentification fonctionne sur le site web de l'entreprise, son API et même son propre agent d'IA. Si vous vous authentifiez auprès d'un détaillant via Poppy, votre agent peut passer sans accroc de la consultation des produits sur le site à la vérification des stocks via l'API, puis à la négociation de retours avec l'agent de service client du détaillant, le tout dans une seule session.</p>
<h2>Qui utilise déjà Poppy ?</h2>
<p>Les partenaires de lancement représentent un échantillon sérieux du commerce :</p>
<table>
<thead>
<tr>
<th>Entreprise</th>
<th>Rôle</th>
<th>Ce qu'elle fait</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Shopify</strong></td>
<td>Partenaire plateforme</td>
<td>A activé Poppy automatiquement chez tous les marchands : des millions de boutiques sont désormais accessibles aux agents</td>
</tr>
<tr>
<td><strong>Meta (Muse)</strong></td>
<td>Partenaire agent</td>
<td>Muse recherche Poppy lorsqu'il visite n'importe quel site web et l'utilise pour s'authentifier et effectuer des transactions</td>
</tr>
<tr>
<td><strong>Walmart</strong></td>
<td>Partenaire fondateur</td>
<td>Accès des agents au commerce de détail pour les achats et la gestion des commandes</td>
</tr>
<tr>
<td><strong>Stripe</strong></td>
<td>Partenaire paiement</td>
<td>Apporte des capacités de paiement pour que les agents puissent finaliser des achats</td>
</tr>
<tr>
<td><strong>Rocket</strong></td>
<td>Partenaire financier</td>
<td>A démontré à Sierra Summit comment Muse obtient un accord de principe pour un prêt immobilier via Poppy</td>
</tr>
</tbody>
</table>
<p>La liste complète des partenaires de conception compte plus de 35 entreprises : Adyen, Bank of America, BBVA, Chime, Cigna, Cloudflare, Comcast, DIRECTV, ElevenLabs, FOX, Gap Inc., GEICO, Hertz et bien d'autres. Ce n'est pas une expérience de startup, c'est une infrastructure d'entreprise.</p>
<h2>Poppy + ChatGPT Wallet : la pile du commerce se dessine</h2>
<p>La sortie de Poppy intervient la même semaine que le lancement de ChatGPT Wallet par OpenAI (13 novembre). Ensemble, ils révèlent l'architecture émergente du commerce propulsé par l'IA :</p>
<ul>
<li><strong>Poppy</strong> gère l'identité et l'autorisation : comment un agent prouve qui il représente et ce qu'il est autorisé à faire</li>
<li><strong>ChatGPT Wallet</strong> gère le paiement : comment un agent paie sans exposer les numéros de carte</li>
<li><strong>Les agents d'entreprise (Sierra, Genesys, etc.)</strong> gèrent l'exécution : l'IA côté entreprise qui traite les commandes et assure le service client</li>
</ul>
<p>Réunissez-les et vous obtenez un monde où votre agent d'IA peut parcourir des boutiques Shopify, s'authentifier avec votre compte, choisir des produits, payer avec votre portefeuille et gérer les retours, sans que vous ayez à ouvrir un navigateur.</p>
<h2>Ce que cela signifie pour les entreprises</h2>
<p>Si vous gérez une boutique en ligne, Poppy doit être immédiatement sur votre radar. Voici pourquoi :</p>
<h3>Le basculement de la distribution</h3>
<p>Quand Shopify a activé Poppy automatiquement sur sa plateforme, il a instantanément rendu des millions de boutiques accessibles aux agents d'IA. Si votre boutique est sur Shopify, vous êtes déjà dans le protocole : les agents peuvent déjà vous découvrir et interagir avec vous. Si vous n'êtes pas sur Shopify, vous êtes invisible pour tous les agents qui utilisent Poppy pour la découverte.</p>
<h3>Mise en œuvre</h3>
<p>Pour les entreprises hors Shopify, la mise en œuvre de Poppy nécessite de :</p>
<ol>
<li>Publier un fichier de découverte <code>/.well-known/poppy.json</code></li>
<li>Configurer des points d'accès OAuth pour l'authentification des agents</li>
<li>Définir les niveaux de permission et les capacités</li>
<li>Tester avec les agents partenaires (Meta Muse est actuellement l'agent de test principal)</li>
</ol>
<p>Poppy repose sur des standards existants (OAuth, JWT, HTTPS, OpenAPI, MCP), si bien que la plupart des entreprises peuvent l'implémenter avec les outils dont elles disposent déjà.</p>
<h2>Ce que cela signifie pour les utilisateurs d'outils d'IA</h2>
<p>Si vous utilisez des agents d'IA (Claude, ChatGPT, Gemini ou Muse de Meta), Poppy compte, car c'est l'infrastructure qui déterminera <strong>ce que votre agent peut réellement faire pour vous</strong>.</p>
<p>Aujourd'hui, la plupart des agents d'IA se limitent à répondre à des questions et à générer du contenu. Poppy ouvre la porte à des agents qui :</p>
<ul>
<li>Font vos achats dans n'importe quelle boutique compatible Poppy</li>
<li>Gèrent vos abonnements et vos comptes</li>
<li>Prennent en charge les échanges de service client</li>
<li>Comparent les prix et trouvent des bonnes affaires chez plusieurs détaillants</li>
<li>Obtiennent un accord de principe pour des produits financiers</li>
</ul>
<p>Le mot clé est « vous ». Poppy est conçu avec le contrôle par l'utilisateur au centre. Vous vous authentifiez, vous accordez les permissions, vous pouvez révoquer l'accès à tout moment. L'agent agit en votre nom, pas de son propre chef.</p>
<h2>Considérations de sécurité</h2>
<p>Le modèle de sécurité de Poppy mérite d'être examiné de près :</p>
<ul>
<li><strong>Les utilisateurs se connectent eux-mêmes :</strong> l'agent ne voit jamais votre mot de passe. L'authentification se fait sur la page de l'entreprise</li>
<li><strong>Permissions minimales :</strong> les agents obtiennent l'accès minimal nécessaire à la tâche. Lire votre historique de commandes ne donne pas le droit de passer commande</li>
<li><strong>Traçabilité complète :</strong> les entreprises peuvent consulter l'historique complet de ce qu'un agent a fait pendant une session</li>
<li><strong>Révocation instantanée :</strong> les utilisateurs peuvent déconnecter n'importe quel agent de n'importe quel compte à tout moment</li>
<li><strong>DPoP (Demonstration of Proof-of-Possession) :</strong> des assertions signées empêchent le vol de jetons : un jeton volé ne peut pas être utilisé par un autre agent</li>
</ul>
<p>Le modèle est solide en théorie. Le vrai test viendra à grande échelle, quand des millions d'agents effectueront simultanément des transactions auprès de milliers d'entreprises.</p>
<h2>En résumé</h2>
<p>Poppy 1.0 fait partie de ces sorties d'infrastructure qui ne font pas la une comme le lancement d'un nouveau modèle, mais qui pourraient finir par compter davantage. C'est la plomberie qui permettra aux agents d'IA de passer de « répondre à des questions » à « faire des choses », et faire des choses suppose d'interagir avec des entreprises en votre nom.</p>
<p>La rapidité d'adoption est ce qui rend Poppy remarquable. Le déploiement sur toute la plateforme Shopify et l'intégration de Muse de Meta signifient que Poppy est déjà en service à très grande échelle. Si d'autres plateformes e-commerce suivent, le protocole pourrait devenir en quelques mois, et non en quelques années, la façon standard dont les agents d'IA interagissent avec l'internet commercial.</p>
<p><em>Vous développez des outils propulsés par l'IA ? Découvrez les utilitaires gratuits de <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> : générateurs de QR codes, créateurs de factures, outils PDF et bien plus.</em></p>
