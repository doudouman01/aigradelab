---
title: "ChatGPT retire Advanced Voice : tout savoir sur GPT-Live"
description: "OpenAI met fin à Advanced Voice et Standard Voice le 11 décembre 2026. Voici ce que GPT-Live remplace, ce qui change et comment vous préparer à la transition."
category: "Notes de labo"
categorySlug: "lab-notes"
date: "2026-11-21"
readTime: "7 min de lecture"
---

<h2>La transition vocale approche</h2>
<p>OpenAI a confirmé que ChatGPT retirera Advanced Voice et Standard Voice le 11 décembre 2026. L'entreprise regroupe ses capacités vocales autour de GPT-Live, son modèle vocal plus récent et plus performant. Si vous utilisez régulièrement les fonctions vocales de ChatGPT, voici tout ce qu'il faut savoir sur ce changement.</p>
<h2>Ce qui est retiré</h2>
<h3>Standard Voice</h3>
<p>Standard Voice était le mode d'interaction vocale d'origine de ChatGPT : un système en cascade qui convertissait votre voix en texte, le traitait avec un modèle textuel, puis retransformait la réponse en voix. Cela fonctionnait, mais les échanges paraissaient laborieux. Il y avait des pauses perceptibles entre votre question et la réponse, et le système gérait mal les interruptions.</p>
<h3>Advanced Voice</h3>
<p>Advanced Voice a été lancé fin 2024 comme une amélioration majeure. Il apportait des voix plus naturelles, une meilleure gestion des schémas de conversation et une latence réduite. Mais il restait fondamentalement un système en cascade (la parole passait par le texte avant d'être traitée), ce qui limitait le naturel des échanges avec l'IA.</p>
<h2>Ce qu'apporte GPT-Live</h2>
<p>GPT-Live marque un changement d'architecture fondamental. Au lieu de la cascade parole-texte-parole, GPT-Live traite l'audio de façon native. Il perçoit votre ton, détecte les hésitations, comprend l'emphase et répond d'une manière qui ressemble davantage à une vraie conversation.</p>
<h3>Principales améliorations par rapport à Advanced Voice</h3>
<ul>
<li><strong>Véritable full-duplex</strong> : GPT-Live peut écouter tout en parlant, ce qui permet des interruptions naturelles et des échanges fluides sans pauses gênantes</li>
<li><strong>Sensibilité émotionnelle</strong> : le modèle repère le ton et les indices vocaux et adapte ses réponses en conséquence</li>
<li><strong>Latence réduite</strong> : les réponses semblent presque instantanées, ce qui élimine les temps de « réflexion » qui rendaient les IA vocales robotiques</li>
<li><strong>Voix plus riches</strong> : des voix de sortie plus expressives et plus naturelles</li>
<li><strong>Contexte multi-tours</strong> : meilleur maintien du contexte au fil de longues sessions vocales</li>
</ul>
<h2>Calendrier et disponibilité</h2>
<table>
<thead>
<tr><th>Date</th><th>Événement</th></tr>
</thead>
<tbody>
<tr><td>10 novembre 2026</td><td>OpenAI annonce le retrait d'Advanced Voice et de Standard Voice</td></tr>
<tr><td>Du 10 novembre au 10 décembre</td><td>Période de transition : les trois modes vocaux sont disponibles</td></tr>
<tr><td>11 décembre 2026</td><td>Advanced Voice et Standard Voice sont définitivement désactivés</td></tr>
<tr><td>À partir du 11 décembre</td><td>GPT-Live devient le seul mode d'interaction vocale</td></tr>
</tbody>
</table>
<h2>Qui est concerné ?</h2>
<h3>Abonnés ChatGPT Plus et Pro</h3>
<p>Si vous avez une offre payante, vous avez déjà accès à GPT-Live. La transition devrait être transparente : si vous avez utilisé la voix récemment, vous utilisez probablement déjà GPT-Live, puisqu'OpenAI le met par défaut depuis des mois.</p>
<h3>Utilisateurs de l'offre gratuite</h3>
<p>Les utilisateurs gratuits qui avaient un accès limité à Standard Voice passeront à un accès limité à GPT-Live. Les détails des limites vocales de l'offre gratuite n'ont pas encore été mis à jour pour la période postérieure à décembre.</p>
<h3>Développeurs API</h3>
<p>Les développeurs qui utilisent les points d'accès de l'API Audio doivent vérifier leur intégration. Les anciens points d'accès vocaux seront abandonnés en même temps que les fonctions grand public. L'API GPT-Live d'OpenAI offre des capacités et une tarification différentes de celles des anciennes API vocales.</p>
<h3>Utilisateurs Enterprise et Team</h3>
<p>Les comptes Enterprise avec des configurations vocales personnalisées doivent revoir leurs paramètres avant le 11 décembre. Les workflows construits autour du comportement spécifique d'Advanced Voice pourraient nécessiter des ajustements.</p>
<h2>Que faire dès maintenant</h2>
<h3>1. Testez GPT-Live avant le basculement</h3>
<p>Si vous n'avez pas encore utilisé GPT-Live, commencez maintenant. Ouvrez ChatGPT, appuyez sur l'icône vocale et vérifiez que vous utilisez bien GPT-Live (c'est le mode par défaut). Faites quelques sessions pour vous familiariser avec son style de conversation.</p>
<h3>2. Mettez à jour vos workflows</h3>
<p>Si vous avez bâti des processus autour des fonctions vocales de ChatGPT (briefings quotidiens, séances de brainstorming, prise de notes mains libres), testez-les avec GPT-Live pendant la période de transition pour repérer d'éventuelles différences de comportement.</p>
<h3>3. Vérifiez vos intégrations API</h3>
<p>Les développeurs doivent consulter la documentation de l'API GPT-Live et tester leurs intégrations bien avant l'échéance du 11 décembre. N'attendez pas le dernier jour.</p>
<h3>4. Explorez les alternatives</h3>
<p>GPT-Live n'est pas la seule option en matière d'IA vocale. Si vous comparez les solutions :</p>
<ul>
<li><strong>Google Gemini</strong> : propose l'interaction vocale via l'application Gemini et Google Assistant</li>
<li><strong>Claude</strong> : Anthropic propose un mode vocal compatible CarPlay</li>
<li><strong>ElevenLabs</strong> : pour la génération de voix personnalisées et les applications axées sur la voix</li>
</ul>
<h2>Vue d'ensemble : l'IA vocale se consolide</h2>
<p>La décision d'OpenAI de retirer les anciens modes vocaux reflète une tendance plus large de l'IA : la consolidation autour de modèles multimodaux natifs. Plutôt que de greffer la voix sur des modèles textuels, le secteur construit des modèles qui comprennent nativement l'audio, le texte, les images et la vidéo.</p>
<p>La même tendance s'observe sur l'ensemble du marché :</p>
<ul>
<li>Les modèles Gemini 4 de Google sont nativement multimodaux</li>
<li>Bland AI vient de lancer Tofu-1, un modèle speech-to-speech natif</li>
<li>L'agent Muse de Meta fonctionne à la fois sur le texte et sur la voix</li>
</ul>
<p>L'approche en cascade (parole vers texte vers modèle vers parole) devient une architecture dépassée. Si votre activité repose sur l'IA vocale, miser sur le multimodal natif est le bon pari à long terme.</p>
<h2>En résumé</h2>
<p>Le retrait d'Advanced Voice et de Standard Voice est un nettoyage, pas une régression. GPT-Live est objectivement meilleur sur tous les critères mesurables. Le principal risque concerne les développeurs et les entreprises dont les intégrations sont codées en dur sur les anciens points d'accès de l'API : testez dès maintenant, migrez tôt et tout se passera bien.</p>
<p>Pour la plupart des utilisateurs, vous ne remarquerez rien le 12 décembre. La voix dans ChatGPT fonctionnera simplement, et mieux que jamais.</p>
<p><em>Besoin d'organiser votre workflow d'outils d'IA ? Découvrez le <a href="https://toolcraftkit.com">minuteur Pomodoro</a> gratuit et les outils de productivité de ToolCraftKit pour garder le cap sur vos évaluations d'IA.</em></p>
