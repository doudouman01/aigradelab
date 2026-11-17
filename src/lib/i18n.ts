export const locales = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'pt', 'nl', 'it', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const rtlLocales: Locale[] = ['ar'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  ja: '日本語',
  ko: '한국어',
  pt: 'Português',
  nl: 'Nederlands',
  it: 'Italiano',
  ar: 'العربية',
};

export type Translations = {
  nav: { reviews: string; methodology: string; about: string };
  hero: { pill: string; title: string; titleHighlight: string; subtitle: string; cta1: string; cta2: string };
  how: { label: string; title: string; steps: { num: string; title: string; desc: string }[] };
  criteria: { label: string; title: string; items: { icon: string; name: string; desc: string }[] };
  grades: { label: string; title: string; sub: string };
  reviews: { label: string; title: string };
  newsletter: { badge: string; title: string; desc: string; cta: string };
  tck: { title: string; desc: string; cta: string };
  blog: { title: string; subtitle: string; empty: string; metaTitle: string; metaDesc: string };
  article: { gradeLabel: string; gradeSub: string; testScores: string; tryCta: string; tested: string; needFree: string; freeDesc: string; freeCta: string };
  scoreLabels: { ux: string; quality: string; value: string; integration: string; support: string };
  methodology: {
    metaTitle: string; metaDesc: string; title: string;
    intro1: string; intro2: string;
    scaleTitle: string; scaleSub: string;
    criteriaTitle: string; criteriaSub: string;
    processTitle: string; process1: string; process2: string; process3: string;
    gradeLabels: { grade: string; label: string; range: string }[];
    criteriaItems: { name: string; desc: string }[];
  };
  about: {
    metaTitle: string; metaDesc: string; title: string;
    intro1: string; intro2: string;
    diffTitle: string; diff1: string; diff2: string;
    moneyTitle: string; moneyDesc: string;
    ecoTitle: string; ecoDesc: string;
    contact: string;
  };
  privacy: {
    metaTitle: string; title: string; updated: string; intro: string;
    sections: { title: string; content: string }[];
  };
  terms: {
    metaTitle: string; title: string; updated: string; intro: string;
    sections: { title: string; content: string }[];
  };
  footer: { copy: string; privacy: string; terms: string; methodology: string };
  notFound: { title: string; desc: string; cta: string };
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: { reviews: 'Reviews', methodology: 'Our Grades', about: 'About' },
    hero: {
      pill: 'Independent AI tool reviews',
      title: 'Every AI Tool,', titleHighlight: 'Tested and Graded',
      subtitle: 'We test AI tools with real accounts, score them across 5 criteria, and give each one a transparent grade from A+ to F.',
      cta1: 'See Our Grading System', cta2: 'Browse Reviews',
    },
    how: {
      label: 'How it works', title: 'Three steps. Zero bias.',
      steps: [
        { num: '01', title: 'We sign up', desc: 'Real account, real money. No press kits or demo modes.' },
        { num: '02', title: 'We test', desc: 'Hands-on testing across 5 criteria with original screenshots.' },
        { num: '03', title: 'We grade', desc: 'Transparent scores from A+ to F. No paid placements.' },
      ],
    },
    criteria: {
      label: 'Our methodology', title: 'Scored on 5 criteria',
      items: [
        { icon: '⚡', name: 'Ease of Use', desc: 'Interface & onboarding' },
        { icon: '✦', name: 'Output Quality', desc: 'Results vs promises' },
        { icon: '💰', name: 'Value for Money', desc: 'Price vs what you get' },
        { icon: '🔗', name: 'Integration', desc: 'API & workflow fit' },
        { icon: '🛟', name: 'Support', desc: 'Docs & responsiveness' },
      ],
    },
    grades: { label: 'The scale', title: 'From A+ to F — no gray areas', sub: 'Every tool earns its grade.' },
    reviews: { label: 'Reviews', title: 'Latest graded reviews' },
    newsletter: { badge: 'Free', title: 'Get graded reviews in your inbox', desc: 'New AI tool grades every week. No spam, no fluff — just honest scores.', cta: 'Subscribe Free' },
    tck: { title: 'Need free tools right now?', desc: 'ToolCraftKit has 49+ free web tools for productivity, text, images, and more.', cta: 'Try Free Tools' },
    blog: { title: 'All Graded Reviews', subtitle: 'Every tool tested, scored, and graded. No sponsored rankings.', empty: 'Reviews are being prepared in the lab.', metaTitle: 'All Graded AI Tool Reviews', metaDesc: 'Browse all AI tool reviews with transparent grades from A+ to F.' },
    article: { gradeLabel: 'Our Grade', gradeSub: 'Based on hands-on testing across 5 criteria', testScores: 'Test Scores', tryCta: 'Try', tested: 'Tested', needFree: 'Need free tools?', freeDesc: 'ToolCraftKit has 49+ free web tools for productivity, text processing, and more.', freeCta: 'Try Free Tools' },
    scoreLabels: { ux: 'Ease of Use', quality: 'Output Quality', value: 'Value for Money', integration: 'Integration', support: 'Support & Updates' },
    methodology: {
      metaTitle: 'Our Grading Methodology', metaDesc: 'How AIGradeLab tests and grades every AI tool.',
      title: 'How We Grade AI Tools',
      intro1: 'Every AI tool reviewed on AIGradeLab goes through the same rigorous testing process. We believe in transparency: you should know exactly how we arrive at every grade, what we test, and what each score means.',
      intro2: 'No tool pays for a higher grade. No sponsored placements affect our scores. Our revenue comes from display ads and affiliate links — but our grades are determined before any monetization is considered.',
      scaleTitle: 'The Grade Scale', scaleSub: 'Each tool receives a final grade from A+ to F based on its average score across our five criteria.',
      criteriaTitle: '5 Testing Criteria', criteriaSub: 'Each criterion is scored from 0 to 10 based on hands-on testing. The final grade is the average of all five.',
      processTitle: 'Our Testing Process',
      process1: 'For every tool we review, we create a real account, go through the onboarding, and use the tool for its intended purpose.',
      process2: 'Reviews include a "Last Tested" date so you know how current our assessment is. We re-test and update grades when tools ship major changes.',
      process3: 'Questions about our methodology? Disagree with a grade? We welcome feedback — reach out at hello@aigradelab.com.',
      gradeLabels: [
        { grade: 'A+', label: 'Exceptional — Best in class', range: '9.0 – 10' },
        { grade: 'A', label: 'Excellent — Highly recommended', range: '8.0 – 8.9' },
        { grade: 'B+', label: 'Very Good — Strong with trade-offs', range: '7.0 – 7.9' },
        { grade: 'B', label: 'Good — Solid for specific uses', range: '6.0 – 6.9' },
        { grade: 'C', label: 'Average — Gets the job done', range: '5.0 – 5.9' },
        { grade: 'D', label: 'Below Average — Significant issues', range: '4.0 – 4.9' },
        { grade: 'F', label: 'Fail — Not recommended', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: 'Ease of Use', desc: 'How intuitive is the interface? How fast can a new user get value? We evaluate onboarding flow, UI clarity, and learning curve.' },
        { name: 'Output Quality', desc: 'Does the tool deliver on its promises? We run real-world tests and compare outputs against competitors and manual alternatives.' },
        { name: 'Value for Money', desc: 'Is the pricing fair for what you get? We assess free tiers, paid plans, and whether cheaper alternatives deliver similar results.' },
        { name: 'Integration & Workflow', desc: 'Does it fit into a real workflow? We check API access, integrations with popular tools, export options, and automation support.' },
        { name: 'Support & Updates', desc: 'Is the team behind the tool responsive? We evaluate documentation quality, update frequency, community, and customer support.' },
      ],
    },
    about: {
      metaTitle: 'About AIGradeLab', metaDesc: 'Independent AI tool reviews with transparent grades.',
      title: 'About AIGradeLab',
      intro1: 'AIGradeLab is an independent review site dedicated to one mission: helping you pick the right AI tools without wasting time or money on the wrong ones.',
      intro2: 'The AI tools market is exploding. Thousands of tools compete for your attention with polished landing pages and bold promises. But which ones actually deliver? That\'s where we come in.',
      diffTitle: 'What Makes Us Different',
      diff1: 'Every tool on AIGradeLab goes through the same hands-on testing process and receives a transparent grade from A+ to F across five clear criteria. No tool pays for a better score.',
      diff2: 'We don\'t publish hundreds of thin articles chasing SEO keywords. We publish fewer, deeper reviews with real tests, original screenshots, and honest opinions.',
      moneyTitle: 'How We Make Money',
      moneyDesc: 'AIGradeLab is supported by display advertising and affiliate links. When you click an affiliate link and sign up, we may earn a commission at no extra cost to you. This never affects our grades.',
      ecoTitle: 'Part of a Bigger Ecosystem',
      ecoDesc: 'AIGradeLab works alongside ToolCraftKit, a collection of 49+ free web tools for productivity, text processing, and more.',
      contact: 'Questions, feedback, or partnership inquiries:',
    },
    privacy: {
      metaTitle: 'Privacy Policy', title: 'Privacy Policy', updated: 'Last updated: September 2026',
      intro: 'AIGradeLab ("we", "us") respects your privacy. This policy explains how we collect, use, and protect your information.',
      sections: [
        { title: 'Information We Collect', content: 'We collect standard analytics data through cookies and third-party services (Google Analytics, Google AdSense) including pages visited, time spent, device type, and approximate location.' },
        { title: 'Advertising', content: 'We use Google AdSense to display ads. Google may use cookies to serve ads based on your browsing history.' },
        { title: 'Affiliate Links', content: 'Some articles contain affiliate links. When you click these links and make a purchase, we may earn a commission at no extra cost to you.' },
        { title: 'Newsletter', content: 'If you subscribe to our newsletter, we collect your email address. You can unsubscribe at any time.' },
        { title: 'Contact', content: 'For privacy questions: hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: 'Terms of Service', title: 'Terms of Service', updated: 'Last updated: September 2026',
      intro: 'By accessing aigradelab.com, you agree to the following terms.',
      sections: [
        { title: 'Content', content: 'All reviews, grades, and opinions represent our independent assessment based on hands-on testing. Grades are subjective and may change over time.' },
        { title: 'Affiliate Disclosure', content: 'AIGradeLab participates in affiliate programs. Some links are affiliate links, meaning we may earn a commission if you make a purchase.' },
        { title: 'Intellectual Property', content: 'All content, grades, methodology, and design are owned by AIGradeLab. You may not reproduce our content without written permission.' },
        { title: 'Limitation of Liability', content: 'AIGradeLab provides information for general guidance. We are not liable for any decisions made based on our reviews.' },
        { title: 'Contact', content: 'Questions about these terms: hello@aigradelab.com' },
      ],
    },
    footer: { copy: 'Every AI tool, tested and graded.', privacy: 'Privacy', terms: 'Terms', methodology: 'Methodology' },
    notFound: { title: '404', desc: 'This page doesn\'t exist.', cta: 'Back to Home' },
  },
  de: {
    nav: { reviews: 'Bewertungen', methodology: 'Unsere Noten', about: 'Über uns' },
    hero: {
      pill: 'Unabhängige KI-Tool-Bewertungen',
      title: 'Jedes KI-Tool,', titleHighlight: 'Getestet und Benotet',
      subtitle: 'Wir testen KI-Tools mit echten Konten, bewerten sie anhand von 5 Kriterien und vergeben transparente Noten von A+ bis F.',
      cta1: 'Unser Bewertungssystem', cta2: 'Bewertungen ansehen',
    },
    how: {
      label: 'So funktioniert es', title: 'Drei Schritte. Null Voreingenommenheit.',
      steps: [
        { num: '01', title: 'Wir melden uns an', desc: 'Echtes Konto, echtes Geld. Keine Pressemappen oder Demo-Modi.' },
        { num: '02', title: 'Wir testen', desc: 'Praxistests anhand von 5 Kriterien mit Original-Screenshots.' },
        { num: '03', title: 'Wir benoten', desc: 'Transparente Noten von A+ bis F. Keine bezahlten Platzierungen.' },
      ],
    },
    criteria: {
      label: 'Unsere Methodik', title: 'Bewertet nach 5 Kriterien',
      items: [
        { icon: '⚡', name: 'Benutzerfreundlichkeit', desc: 'Oberfläche & Einarbeitung' },
        { icon: '✦', name: 'Ergebnisqualität', desc: 'Ergebnisse vs. Versprechen' },
        { icon: '💰', name: 'Preis-Leistung', desc: 'Preis vs. Leistung' },
        { icon: '🔗', name: 'Integration', desc: 'API & Workflow-Einbindung' },
        { icon: '🛟', name: 'Support', desc: 'Dokumentation & Reaktionszeit' },
      ],
    },
    grades: { label: 'Die Skala', title: 'Von A+ bis F — keine Grauzonen', sub: 'Jedes Tool verdient sich seine Note.' },
    reviews: { label: 'Bewertungen', title: 'Neueste Bewertungen' },
    newsletter: { badge: 'Kostenlos', title: 'Bewertungen direkt ins Postfach', desc: 'Jede Woche neue KI-Tool-Noten. Kein Spam — nur ehrliche Bewertungen.', cta: 'Kostenlos abonnieren' },
    tck: { title: 'Kostenlose Tools gesucht?', desc: 'ToolCraftKit bietet über 49 kostenlose Web-Tools für Produktivität, Text, Bilder und mehr.', cta: 'Kostenlose Tools testen' },
    blog: { title: 'Alle Bewertungen', subtitle: 'Jedes Tool getestet, bewertet und benotet. Keine gesponserten Rankings.', empty: 'Bewertungen werden im Labor vorbereitet.', metaTitle: 'Alle KI-Tool-Bewertungen', metaDesc: 'Alle KI-Tool-Bewertungen mit transparenten Noten von A+ bis F.' },
    article: { gradeLabel: 'Unsere Note', gradeSub: 'Basierend auf Praxistests in 5 Kategorien', testScores: 'Testergebnisse', tryCta: 'Testen', tested: 'Getestet', needFree: 'Kostenlose Tools gesucht?', freeDesc: 'ToolCraftKit bietet über 49 kostenlose Web-Tools.', freeCta: 'Kostenlose Tools' },
    scoreLabels: { ux: 'Benutzerfreundlichkeit', quality: 'Ergebnisqualität', value: 'Preis-Leistung', integration: 'Integration', support: 'Support & Updates' },
    methodology: {
      metaTitle: 'Unsere Bewertungsmethodik', metaDesc: 'So testet und benotet AIGradeLab jedes KI-Tool.',
      title: 'So benoten wir KI-Tools',
      intro1: 'Jedes auf AIGradeLab bewertete KI-Tool durchläuft denselben strengen Testprozess. Wir glauben an Transparenz: Sie sollen genau wissen, wie wir zu jeder Note kommen.',
      intro2: 'Kein Tool bezahlt für eine bessere Note. Unsere Einnahmen stammen aus Werbung und Affiliate-Links — aber die Noten stehen fest, bevor die Monetarisierung berücksichtigt wird.',
      scaleTitle: 'Die Notenskala', scaleSub: 'Jedes Tool erhält eine Endnote von A+ bis F basierend auf dem Durchschnitt unserer fünf Kriterien.',
      criteriaTitle: '5 Testkriterien', criteriaSub: 'Jedes Kriterium wird von 0 bis 10 bewertet. Die Endnote ist der Durchschnitt aller fünf.',
      processTitle: 'Unser Testprozess',
      process1: 'Für jedes Tool erstellen wir ein echtes Konto, durchlaufen das Onboarding und nutzen das Tool für seinen vorgesehenen Zweck.',
      process2: 'Bewertungen enthalten ein "Zuletzt getestet"-Datum. Wir testen erneut, wenn Tools wesentliche Änderungen veröffentlichen.',
      process3: 'Fragen zur Methodik? Nicht einverstanden mit einer Note? Feedback willkommen — kontaktieren Sie uns unter hello@aigradelab.com.',
      gradeLabels: [
        { grade: 'A+', label: 'Herausragend — Klassenbester', range: '9.0 – 10' },
        { grade: 'A', label: 'Ausgezeichnet — Sehr empfehlenswert', range: '8.0 – 8.9' },
        { grade: 'B+', label: 'Sehr gut — Stark mit Kompromissen', range: '7.0 – 7.9' },
        { grade: 'B', label: 'Gut — Solide für bestimmte Zwecke', range: '6.0 – 6.9' },
        { grade: 'C', label: 'Durchschnittlich — Erfüllt den Zweck', range: '5.0 – 5.9' },
        { grade: 'D', label: 'Unterdurchschnittlich — Erhebliche Mängel', range: '4.0 – 4.9' },
        { grade: 'F', label: 'Durchgefallen — Nicht empfehlenswert', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: 'Benutzerfreundlichkeit', desc: 'Wie intuitiv ist die Oberfläche? Wie schnell kann ein neuer Nutzer Mehrwert erzielen?' },
        { name: 'Ergebnisqualität', desc: 'Hält das Tool seine Versprechen? Wir führen Praxistests durch und vergleichen mit Alternativen.' },
        { name: 'Preis-Leistung', desc: 'Ist der Preis fair? Wir bewerten kostenlose und kostenpflichtige Pläne.' },
        { name: 'Integration & Workflow', desc: 'Passt es in einen echten Workflow? API-Zugang, Integrationen, Export-Optionen.' },
        { name: 'Support & Updates', desc: 'Reagiert das Team? Dokumentationsqualität, Update-Häufigkeit, Community.' },
      ],
    },
    about: {
      metaTitle: 'Über AIGradeLab', metaDesc: 'Unabhängige KI-Tool-Bewertungen mit transparenten Noten.',
      title: 'Über AIGradeLab',
      intro1: 'AIGradeLab ist eine unabhängige Bewertungsseite mit einer Mission: Ihnen bei der Auswahl der richtigen KI-Tools zu helfen.',
      intro2: 'Der Markt für KI-Tools explodiert. Tausende Tools konkurrieren um Ihre Aufmerksamkeit. Aber welche liefern tatsächlich? Hier kommen wir ins Spiel.',
      diffTitle: 'Was uns unterscheidet', diff1: 'Jedes Tool durchläuft denselben Testprozess und erhält eine transparente Note von A+ bis F.', diff2: 'Wir veröffentlichen weniger, aber tiefgründigere Reviews mit echten Tests und ehrlichen Meinungen.',
      moneyTitle: 'Wie wir Geld verdienen', moneyDesc: 'AIGradeLab wird durch Werbung und Affiliate-Links unterstützt. Dies beeinflusst niemals unsere Noten.',
      ecoTitle: 'Teil eines größeren Ökosystems', ecoDesc: 'AIGradeLab arbeitet zusammen mit ToolCraftKit, einer Sammlung von über 49 kostenlosen Web-Tools.',
      contact: 'Fragen, Feedback oder Partnerschaftsanfragen:',
    },
    privacy: {
      metaTitle: 'Datenschutzerklärung', title: 'Datenschutzerklärung', updated: 'Zuletzt aktualisiert: September 2026',
      intro: 'AIGradeLab respektiert Ihre Privatsphäre. Diese Richtlinie erklärt, wie wir Ihre Daten sammeln und schützen.',
      sections: [
        { title: 'Datenerhebung', content: 'Wir erheben Standard-Analysedaten über Cookies und Drittanbieterdienste (Google Analytics, Google AdSense).' },
        { title: 'Werbung', content: 'Wir verwenden Google AdSense zur Anzeige von Werbung. Google kann Cookies verwenden, um Anzeigen basierend auf Ihrem Browserverlauf zu schalten.' },
        { title: 'Affiliate-Links', content: 'Einige Artikel enthalten Affiliate-Links. Bei einem Kauf über diese Links erhalten wir möglicherweise eine Provision.' },
        { title: 'Newsletter', content: 'Bei Anmeldung zum Newsletter erheben wir Ihre E-Mail-Adresse. Sie können sich jederzeit abmelden.' },
        { title: 'Kontakt', content: 'Datenschutzfragen: hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: 'Nutzungsbedingungen', title: 'Nutzungsbedingungen', updated: 'Zuletzt aktualisiert: September 2026',
      intro: 'Durch den Zugriff auf aigradelab.com stimmen Sie den folgenden Bedingungen zu.',
      sections: [
        { title: 'Inhalte', content: 'Alle Bewertungen und Noten stellen unsere unabhängige Einschätzung dar. Noten können sich im Laufe der Zeit ändern.' },
        { title: 'Affiliate-Offenlegung', content: 'AIGradeLab nimmt an Affiliate-Programmen teil. Einige Links sind Affiliate-Links.' },
        { title: 'Geistiges Eigentum', content: 'Alle Inhalte und das Design sind Eigentum von AIGradeLab. Vervielfältigung ohne schriftliche Genehmigung ist nicht gestattet.' },
        { title: 'Haftungsbeschränkung', content: 'AIGradeLab bietet Informationen zur allgemeinen Orientierung. Wir haften nicht für Entscheidungen auf Basis unserer Bewertungen.' },
        { title: 'Kontakt', content: 'Fragen zu den Nutzungsbedingungen: hello@aigradelab.com' },
      ],
    },
    footer: { copy: 'Jedes KI-Tool, getestet und benotet.', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', methodology: 'Methodik' },
    notFound: { title: '404', desc: 'Diese Seite existiert nicht.', cta: 'Zur Startseite' },
  },
  fr: {
    nav: { reviews: 'Évaluations', methodology: 'Nos Notes', about: 'À propos' },
    hero: {
      pill: 'Évaluations indépendantes d\'outils IA',
      title: 'Chaque Outil IA,', titleHighlight: 'Testé et Noté',
      subtitle: 'Nous testons les outils IA avec de vrais comptes, les évaluons sur 5 critères et attribuons une note transparente de A+ à F.',
      cta1: 'Notre Système de Notation', cta2: 'Voir les Évaluations',
    },
    how: {
      label: 'Comment ça marche', title: 'Trois étapes. Zéro biais.',
      steps: [
        { num: '01', title: 'On s\'inscrit', desc: 'Vrai compte, vrai argent. Pas de dossiers presse ni de modes démo.' },
        { num: '02', title: 'On teste', desc: 'Tests pratiques sur 5 critères avec captures d\'écran originales.' },
        { num: '03', title: 'On note', desc: 'Notes transparentes de A+ à F. Aucun placement payant.' },
      ],
    },
    criteria: {
      label: 'Notre méthodologie', title: 'Évalué sur 5 critères',
      items: [
        { icon: '⚡', name: 'Facilité d\'utilisation', desc: 'Interface & prise en main' },
        { icon: '✦', name: 'Qualité des résultats', desc: 'Résultats vs promesses' },
        { icon: '💰', name: 'Rapport qualité-prix', desc: 'Prix vs prestations' },
        { icon: '🔗', name: 'Intégration', desc: 'API & workflow' },
        { icon: '🛟', name: 'Support', desc: 'Documentation & réactivité' },
      ],
    },
    grades: { label: 'L\'échelle', title: 'De A+ à F — sans zone grise', sub: 'Chaque outil mérite sa note.' },
    reviews: { label: 'Évaluations', title: 'Dernières évaluations' },
    newsletter: { badge: 'Gratuit', title: 'Recevez les notes dans votre boîte mail', desc: 'Nouvelles notes chaque semaine. Pas de spam — juste des scores honnêtes.', cta: 'S\'abonner gratuitement' },
    tck: { title: 'Besoin d\'outils gratuits ?', desc: 'ToolCraftKit propose plus de 49 outils web gratuits pour la productivité, le texte, les images et plus.', cta: 'Essayer les outils gratuits' },
    blog: { title: 'Toutes les Évaluations', subtitle: 'Chaque outil testé, évalué et noté. Aucun classement sponsorisé.', empty: 'Les évaluations sont en préparation au labo.', metaTitle: 'Toutes les Évaluations d\'Outils IA', metaDesc: 'Parcourez toutes les évaluations d\'outils IA avec des notes transparentes.' },
    article: { gradeLabel: 'Notre Note', gradeSub: 'Basée sur des tests pratiques sur 5 critères', testScores: 'Scores des Tests', tryCta: 'Essayer', tested: 'Testé le', needFree: 'Besoin d\'outils gratuits ?', freeDesc: 'ToolCraftKit propose plus de 49 outils web gratuits.', freeCta: 'Outils Gratuits' },
    scoreLabels: { ux: 'Facilité d\'utilisation', quality: 'Qualité des résultats', value: 'Rapport qualité-prix', integration: 'Intégration', support: 'Support & Mises à jour' },
    methodology: {
      metaTitle: 'Notre Méthodologie', metaDesc: 'Comment AIGradeLab teste et note chaque outil IA.',
      title: 'Comment Nous Notons les Outils IA',
      intro1: 'Chaque outil IA évalué sur AIGradeLab passe par le même processus de test rigoureux. Nous croyons en la transparence.',
      intro2: 'Aucun outil ne paie pour une meilleure note. Nos revenus proviennent de la publicité et des liens d\'affiliation — mais les notes sont déterminées avant toute monétisation.',
      scaleTitle: 'L\'Échelle des Notes', scaleSub: 'Chaque outil reçoit une note finale de A+ à F basée sur la moyenne de nos cinq critères.',
      criteriaTitle: '5 Critères de Test', criteriaSub: 'Chaque critère est noté de 0 à 10. La note finale est la moyenne des cinq.',
      processTitle: 'Notre Processus de Test',
      process1: 'Pour chaque outil, nous créons un vrai compte, passons par l\'intégration et utilisons l\'outil pour son usage prévu.',
      process2: 'Les évaluations incluent une date "Dernier test". Nous retestons quand les outils publient des changements majeurs.',
      process3: 'Questions sur notre méthodologie ? Pas d\'accord avec une note ? Contactez-nous à hello@aigradelab.com.',
      gradeLabels: [
        { grade: 'A+', label: 'Exceptionnel — Meilleur de sa catégorie', range: '9.0 – 10' },
        { grade: 'A', label: 'Excellent — Très recommandé', range: '8.0 – 8.9' },
        { grade: 'B+', label: 'Très bien — Solide avec compromis', range: '7.0 – 7.9' },
        { grade: 'B', label: 'Bien — Pour des usages spécifiques', range: '6.0 – 6.9' },
        { grade: 'C', label: 'Moyen — Fait le travail', range: '5.0 – 5.9' },
        { grade: 'D', label: 'Insuffisant — Problèmes significatifs', range: '4.0 – 4.9' },
        { grade: 'F', label: 'Échec — Non recommandé', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: 'Facilité d\'utilisation', desc: 'L\'interface est-elle intuitive ? Combien de temps faut-il pour obtenir de la valeur ?' },
        { name: 'Qualité des résultats', desc: 'L\'outil tient-il ses promesses ? Nous effectuons des tests en conditions réelles.' },
        { name: 'Rapport qualité-prix', desc: 'Le prix est-il juste ? Nous évaluons les plans gratuits et payants.' },
        { name: 'Intégration & Workflow', desc: 'S\'intègre-t-il dans un vrai workflow ? Accès API, intégrations, options d\'export.' },
        { name: 'Support & Mises à jour', desc: 'L\'équipe est-elle réactive ? Qualité de la documentation, fréquence des mises à jour.' },
      ],
    },
    about: {
      metaTitle: 'À propos d\'AIGradeLab', metaDesc: 'Évaluations indépendantes d\'outils IA avec des notes transparentes.',
      title: 'À propos d\'AIGradeLab',
      intro1: 'AIGradeLab est un site d\'évaluation indépendant dédié à une mission : vous aider à choisir les bons outils IA.',
      intro2: 'Le marché des outils IA explose. Des milliers d\'outils rivalisent pour votre attention. Mais lesquels livrent vraiment ? C\'est là que nous intervenons.',
      diffTitle: 'Ce qui nous différencie', diff1: 'Chaque outil passe par le même processus et reçoit une note transparente de A+ à F.', diff2: 'Nous publions moins d\'articles, mais plus approfondis, avec de vrais tests et des avis honnêtes.',
      moneyTitle: 'Comment nous gagnons de l\'argent', moneyDesc: 'AIGradeLab est financé par la publicité et les liens d\'affiliation. Cela n\'affecte jamais nos notes.',
      ecoTitle: 'Partie d\'un écosystème plus large', ecoDesc: 'AIGradeLab travaille aux côtés de ToolCraftKit, une collection de plus de 49 outils web gratuits.',
      contact: 'Questions, commentaires ou demandes de partenariat :',
    },
    privacy: {
      metaTitle: 'Politique de confidentialité', title: 'Politique de Confidentialité', updated: 'Dernière mise à jour : septembre 2026',
      intro: 'AIGradeLab respecte votre vie privée. Cette politique explique comment nous collectons et protégeons vos données.',
      sections: [
        { title: 'Données collectées', content: 'Nous collectons des données analytiques standard via des cookies et des services tiers (Google Analytics, Google AdSense).' },
        { title: 'Publicité', content: 'Nous utilisons Google AdSense pour afficher des publicités. Google peut utiliser des cookies pour diffuser des annonces basées sur votre historique.' },
        { title: 'Liens d\'affiliation', content: 'Certains articles contiennent des liens d\'affiliation. Lors d\'un achat via ces liens, nous recevons une commission sans coût supplémentaire pour vous.' },
        { title: 'Newsletter', content: 'Si vous vous abonnez à notre newsletter, nous collectons votre adresse e-mail. Vous pouvez vous désabonner à tout moment.' },
        { title: 'Contact', content: 'Questions sur la confidentialité : hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: 'Conditions d\'utilisation', title: 'Conditions d\'Utilisation', updated: 'Dernière mise à jour : septembre 2026',
      intro: 'En accédant à aigradelab.com, vous acceptez les conditions suivantes.',
      sections: [
        { title: 'Contenu', content: 'Toutes les évaluations et notes représentent notre avis indépendant basé sur des tests pratiques.' },
        { title: 'Divulgation d\'affiliation', content: 'AIGradeLab participe à des programmes d\'affiliation. Certains liens sont des liens d\'affiliation.' },
        { title: 'Propriété intellectuelle', content: 'Tout le contenu et le design sont la propriété d\'AIGradeLab. La reproduction sans autorisation écrite est interdite.' },
        { title: 'Limitation de responsabilité', content: 'AIGradeLab fournit des informations à titre indicatif. Nous ne sommes pas responsables des décisions basées sur nos évaluations.' },
        { title: 'Contact', content: 'Questions sur les conditions : hello@aigradelab.com' },
      ],
    },
    footer: { copy: 'Chaque outil IA, testé et noté.', privacy: 'Confidentialité', terms: 'Conditions', methodology: 'Méthodologie' },
    notFound: { title: '404', desc: 'Cette page n\'existe pas.', cta: 'Retour à l\'accueil' },
  },
  es: {
    nav: { reviews: 'Reseñas', methodology: 'Nuestras Notas', about: 'Acerca de' },
    hero: {
      pill: 'Reseñas independientes de herramientas IA',
      title: 'Cada Herramienta IA,', titleHighlight: 'Probada y Calificada',
      subtitle: 'Probamos herramientas IA con cuentas reales, las evaluamos en 5 criterios y les damos una calificación transparente de A+ a F.',
      cta1: 'Nuestro Sistema de Calificación', cta2: 'Ver Reseñas',
    },
    how: {
      label: 'Cómo funciona', title: 'Tres pasos. Cero sesgo.',
      steps: [
        { num: '01', title: 'Nos registramos', desc: 'Cuenta real, dinero real. Sin kits de prensa ni modos demo.' },
        { num: '02', title: 'Probamos', desc: 'Pruebas prácticas en 5 criterios con capturas de pantalla originales.' },
        { num: '03', title: 'Calificamos', desc: 'Notas transparentes de A+ a F. Sin ubicaciones pagadas.' },
      ],
    },
    criteria: {
      label: 'Nuestra metodología', title: 'Evaluado en 5 criterios',
      items: [
        { icon: '⚡', name: 'Facilidad de uso', desc: 'Interfaz y aprendizaje' },
        { icon: '✦', name: 'Calidad de resultados', desc: 'Resultados vs promesas' },
        { icon: '💰', name: 'Relación calidad-precio', desc: 'Precio vs lo que obtienes' },
        { icon: '🔗', name: 'Integración', desc: 'API y flujo de trabajo' },
        { icon: '🛟', name: 'Soporte', desc: 'Documentación y respuesta' },
      ],
    },
    grades: { label: 'La escala', title: 'De A+ a F — sin zonas grises', sub: 'Cada herramienta se gana su nota.' },
    reviews: { label: 'Reseñas', title: 'Últimas reseñas calificadas' },
    newsletter: { badge: 'Gratis', title: 'Recibe reseñas calificadas en tu correo', desc: 'Nuevas calificaciones cada semana. Sin spam — solo puntuaciones honestas.', cta: 'Suscribirse gratis' },
    tck: { title: '¿Necesitas herramientas gratuitas?', desc: 'ToolCraftKit tiene más de 49 herramientas web gratuitas para productividad, texto, imágenes y más.', cta: 'Probar herramientas gratuitas' },
    blog: { title: 'Todas las Reseñas', subtitle: 'Cada herramienta probada, evaluada y calificada. Sin rankings patrocinados.', empty: 'Las reseñas se están preparando en el laboratorio.', metaTitle: 'Todas las Reseñas de Herramientas IA', metaDesc: 'Explora todas las reseñas de herramientas IA con notas transparentes.' },
    article: { gradeLabel: 'Nuestra Nota', gradeSub: 'Basada en pruebas prácticas en 5 criterios', testScores: 'Puntuaciones del Test', tryCta: 'Probar', tested: 'Probado', needFree: '¿Necesitas herramientas gratuitas?', freeDesc: 'ToolCraftKit tiene más de 49 herramientas web gratuitas.', freeCta: 'Herramientas Gratuitas' },
    scoreLabels: { ux: 'Facilidad de uso', quality: 'Calidad de resultados', value: 'Relación calidad-precio', integration: 'Integración', support: 'Soporte y Actualizaciones' },
    methodology: {
      metaTitle: 'Nuestra Metodología', metaDesc: 'Cómo AIGradeLab prueba y califica cada herramienta IA.',
      title: 'Cómo Calificamos las Herramientas IA', intro1: 'Cada herramienta IA revisada en AIGradeLab pasa por el mismo proceso riguroso de pruebas.', intro2: 'Ninguna herramienta paga por una mejor nota. Nuestros ingresos provienen de publicidad y enlaces de afiliados.',
      scaleTitle: 'La Escala de Notas', scaleSub: 'Cada herramienta recibe una nota final de A+ a F.',
      criteriaTitle: '5 Criterios de Prueba', criteriaSub: 'Cada criterio se puntúa de 0 a 10. La nota final es el promedio.',
      processTitle: 'Nuestro Proceso de Pruebas', process1: 'Creamos una cuenta real y usamos la herramienta para su propósito previsto.', process2: 'Las reseñas incluyen una fecha de "Última prueba". Volvemos a probar cuando hay cambios importantes.', process3: 'Contacto: hello@aigradelab.com.',
      gradeLabels: [
        { grade: 'A+', label: 'Excepcional — Mejor de su clase', range: '9.0 – 10' },
        { grade: 'A', label: 'Excelente — Muy recomendado', range: '8.0 – 8.9' },
        { grade: 'B+', label: 'Muy bueno — Fuerte con compromisos', range: '7.0 – 7.9' },
        { grade: 'B', label: 'Bueno — Sólido para usos específicos', range: '6.0 – 6.9' },
        { grade: 'C', label: 'Promedio — Cumple su función', range: '5.0 – 5.9' },
        { grade: 'D', label: 'Inferior — Problemas significativos', range: '4.0 – 4.9' },
        { grade: 'F', label: 'Suspenso — No recomendado', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: 'Facilidad de uso', desc: '¿Es intuitiva la interfaz? ¿Qué tan rápido un nuevo usuario obtiene valor?' },
        { name: 'Calidad de resultados', desc: '¿Cumple la herramienta sus promesas? Realizamos pruebas en condiciones reales.' },
        { name: 'Relación calidad-precio', desc: '¿Es justo el precio? Evaluamos planes gratuitos y de pago.' },
        { name: 'Integración y Workflow', desc: '¿Se integra en un flujo de trabajo real? API, integraciones, opciones de exportación.' },
        { name: 'Soporte y Actualizaciones', desc: '¿Responde el equipo? Calidad de documentación, frecuencia de actualizaciones.' },
      ],
    },
    about: {
      metaTitle: 'Acerca de AIGradeLab', metaDesc: 'Reseñas independientes de herramientas IA con notas transparentes.',
      title: 'Acerca de AIGradeLab', intro1: 'AIGradeLab es un sitio de reseñas independiente dedicado a ayudarte a elegir las herramientas IA correctas.', intro2: 'El mercado de herramientas IA está explotando. Pero, ¿cuáles realmente cumplen? Ahí entramos nosotros.',
      diffTitle: 'Qué nos diferencia', diff1: 'Cada herramienta pasa por el mismo proceso y recibe una nota transparente de A+ a F.', diff2: 'Publicamos menos artículos pero más profundos, con pruebas reales y opiniones honestas.',
      moneyTitle: 'Cómo ganamos dinero', moneyDesc: 'AIGradeLab se financia con publicidad y enlaces de afiliados. Esto nunca afecta nuestras notas.',
      ecoTitle: 'Parte de un ecosistema más grande', ecoDesc: 'AIGradeLab trabaja junto a ToolCraftKit, una colección de más de 49 herramientas web gratuitas.',
      contact: 'Preguntas, comentarios o consultas de asociación:',
    },
    privacy: {
      metaTitle: 'Política de Privacidad', title: 'Política de Privacidad', updated: 'Última actualización: septiembre 2026',
      intro: 'AIGradeLab respeta tu privacidad.', sections: [
        { title: 'Datos que recopilamos', content: 'Recopilamos datos analíticos estándar a través de cookies y servicios de terceros.' },
        { title: 'Publicidad', content: 'Usamos Google AdSense para mostrar anuncios.' },
        { title: 'Enlaces de afiliados', content: 'Algunos artículos contienen enlaces de afiliados.' },
        { title: 'Newsletter', content: 'Si te suscribes, recopilamos tu correo electrónico. Puedes darte de baja en cualquier momento.' },
        { title: 'Contacto', content: 'hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: 'Términos de Servicio', title: 'Términos de Servicio', updated: 'Última actualización: septiembre 2026',
      intro: 'Al acceder a aigradelab.com, aceptas estos términos.', sections: [
        { title: 'Contenido', content: 'Todas las reseñas representan nuestra evaluación independiente.' },
        { title: 'Divulgación de afiliados', content: 'Participamos en programas de afiliados.' },
        { title: 'Propiedad intelectual', content: 'Todo el contenido es propiedad de AIGradeLab.' },
        { title: 'Limitación de responsabilidad', content: 'Proporcionamos información orientativa.' },
        { title: 'Contacto', content: 'hello@aigradelab.com' },
      ],
    },
    footer: { copy: 'Cada herramienta IA, probada y calificada.', privacy: 'Privacidad', terms: 'Términos', methodology: 'Metodología' },
    notFound: { title: '404', desc: 'Esta página no existe.', cta: 'Volver al inicio' },
  },
  ja: {
    nav: { reviews: 'レビュー', methodology: '評価基準', about: '概要' },
    hero: {
      pill: '独立したAIツールレビュー',
      title: 'すべてのAIツールを', titleHighlight: 'テストして評価',
      subtitle: '実際のアカウントでAIツールをテストし、5つの基準で評価し、A+からFまでの透明な成績をつけます。',
      cta1: '評価システムを見る', cta2: 'レビューを見る',
    },
    how: {
      label: '仕組み', title: '3つのステップ。偏見ゼロ。',
      steps: [
        { num: '01', title: '登録する', desc: '実際のアカウント、実際のお金。プレスキットやデモモードなし。' },
        { num: '02', title: 'テストする', desc: '5つの基準での実践的テスト。オリジナルスクリーンショット付き。' },
        { num: '03', title: '評価する', desc: 'A+からFまでの透明な評価。有料掲載なし。' },
      ],
    },
    criteria: {
      label: '評価方法', title: '5つの基準で評価',
      items: [
        { icon: '⚡', name: '使いやすさ', desc: 'インターフェースと導入' },
        { icon: '✦', name: '出力品質', desc: '結果と約束の比較' },
        { icon: '💰', name: 'コストパフォーマンス', desc: '価格と価値の比較' },
        { icon: '🔗', name: '連携性', desc: 'APIとワークフロー' },
        { icon: '🛟', name: 'サポート', desc: 'ドキュメントと対応' },
      ],
    },
    grades: { label: '評価スケール', title: 'A+からF — グレーゾーンなし', sub: 'すべてのツールが評価を獲得します。' },
    reviews: { label: 'レビュー', title: '最新のレビュー' },
    newsletter: { badge: '無料', title: '評価レビューをメールで受信', desc: '毎週新しいAIツール評価。スパムなし — 正直なスコアだけ。', cta: '無料で登録' },
    tck: { title: '無料ツールが必要ですか？', desc: 'ToolCraftKitには49以上の無料ウェブツールがあります。', cta: '無料ツールを試す' },
    blog: { title: '全レビュー', subtitle: 'すべてのツールをテスト、評価、採点。スポンサー付きランキングなし。', empty: 'レビューはラボで準備中です。', metaTitle: 'すべてのAIツールレビュー', metaDesc: 'A+からFまでの透明な評価ですべてのAIツールレビューを閲覧。' },
    article: { gradeLabel: '評価', gradeSub: '5つの基準での実践テストに基づく', testScores: 'テストスコア', tryCta: '試す', tested: 'テスト日', needFree: '無料ツールが必要？', freeDesc: 'ToolCraftKitには49以上の無料ウェブツール。', freeCta: '無料ツール' },
    scoreLabels: { ux: '使いやすさ', quality: '出力品質', value: 'コストパフォーマンス', integration: '連携性', support: 'サポート' },
    methodology: {
      metaTitle: '評価方法', metaDesc: 'AIGradeLabがすべてのAIツールをテスト・評価する方法。',
      title: 'AIツールの評価方法', intro1: 'AIGradeLabでレビューされるすべてのAIツールは、同じ厳格なテストプロセスを経ます。', intro2: '有料で高い評価を得るツールはありません。収益は広告とアフィリエイトリンクから得ています。',
      scaleTitle: '評価スケール', scaleSub: '各ツールは5つの基準の平均に基づいてA+からFの最終評価を受けます。',
      criteriaTitle: '5つのテスト基準', criteriaSub: '各基準は0から10で採点。最終評価は5つの平均。',
      processTitle: 'テストプロセス', process1: '各ツールについて実際のアカウントを作成し使用します。', process2: 'レビューには「最終テスト日」が含まれます。', process3: 'お問い合わせ：hello@aigradelab.com',
      gradeLabels: [
        { grade: 'A+', label: '卓越 — クラス最高', range: '9.0 – 10' },
        { grade: 'A', label: '優秀 — 強くお勧め', range: '8.0 – 8.9' },
        { grade: 'B+', label: '非常に良い — トレードオフあり', range: '7.0 – 7.9' },
        { grade: 'B', label: '良好 — 特定の用途に適合', range: '6.0 – 6.9' },
        { grade: 'C', label: '普通 — 仕事はこなす', range: '5.0 – 5.9' },
        { grade: 'D', label: '平均以下 — 重大な問題', range: '4.0 – 4.9' },
        { grade: 'F', label: '不合格 — 非推奨', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: '使いやすさ', desc: 'インターフェースは直感的か？新しいユーザーがどれだけ早く価値を得られるか？' },
        { name: '出力品質', desc: 'ツールは約束を守るか？実際のテストで競合と比較。' },
        { name: 'コストパフォーマンス', desc: '価格は公正か？無料プランと有料プランを評価。' },
        { name: '連携性とワークフロー', desc: '実際のワークフローに適合するか？APIアクセス、連携、エクスポートオプション。' },
        { name: 'サポートと更新', desc: 'チームは対応しているか？ドキュメント品質、更新頻度。' },
      ],
    },
    about: {
      metaTitle: 'AIGradeLabについて', metaDesc: '透明な評価による独立したAIツールレビュー。',
      title: 'AIGradeLabについて', intro1: 'AIGradeLabは正しいAIツール選びを支援する独立レビューサイトです。', intro2: 'AIツール市場は爆発的に成長中。実際に機能するのはどれか？それが私たちの出番です。',
      diffTitle: '私たちの違い', diff1: 'すべてのツールが同じテストプロセスを経てA+からFの透明な評価を受けます。', diff2: 'SEOキーワードを追う薄い記事ではなく、実際のテストと正直な意見で深いレビューを公開。',
      moneyTitle: '収益方法', moneyDesc: 'AIGradeLabは広告とアフィリエイトリンクで運営。評価には影響しません。',
      ecoTitle: 'より大きなエコシステムの一部', ecoDesc: 'AIGradeLabはToolCraftKitと連携しています。49以上の無料ウェブツール。',
      contact: 'お問い合わせ：',
    },
    privacy: {
      metaTitle: 'プライバシーポリシー', title: 'プライバシーポリシー', updated: '最終更新：2026年9月',
      intro: 'AIGradeLabはあなたのプライバシーを尊重します。', sections: [
        { title: '収集する情報', content: 'Google AnalyticsとGoogle AdSenseを通じて標準的な分析データを収集します。' },
        { title: '広告', content: 'Google AdSenseを使用して広告を表示します。' },
        { title: 'アフィリエイトリンク', content: '一部の記事にはアフィリエイトリンクが含まれます。' },
        { title: 'ニュースレター', content: 'ニュースレターに登録すると、メールアドレスを収集します。' },
        { title: 'お問い合わせ', content: 'hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: '利用規約', title: '利用規約', updated: '最終更新：2026年9月',
      intro: 'aigradelab.comにアクセスすることで、以下の規約に同意します。', sections: [
        { title: 'コンテンツ', content: 'すべてのレビューは実践テストに基づく独立した評価です。' },
        { title: 'アフィリエイト開示', content: 'AIGradeLabはアフィリエイトプログラムに参加しています。' },
        { title: '知的財産', content: 'すべてのコンテンツはAIGradeLabの所有です。' },
        { title: '責任制限', content: 'AIGradeLabは一般的なガイダンスとして情報を提供します。' },
        { title: 'お問い合わせ', content: 'hello@aigradelab.com' },
      ],
    },
    footer: { copy: 'すべてのAIツール、テスト済み、評価済み。', privacy: 'プライバシー', terms: '利用規約', methodology: '評価方法' },
    notFound: { title: '404', desc: 'このページは存在しません。', cta: 'ホームに戻る' },
  },
  ko: {
    nav: { reviews: '리뷰', methodology: '평가 기준', about: '소개' },
    hero: {
      pill: '독립적인 AI 도구 리뷰',
      title: '모든 AI 도구를', titleHighlight: '테스트하고 평가합니다',
      subtitle: '실제 계정으로 AI 도구를 테스트하고, 5가지 기준으로 평가하며, A+에서 F까지 투명한 등급을 부여합니다.',
      cta1: '평가 시스템 보기', cta2: '리뷰 보기',
    },
    how: {
      label: '작동 방식', title: '세 단계. 편견 제로.',
      steps: [
        { num: '01', title: '가입합니다', desc: '실제 계정, 실제 비용. 프레스 키트나 데모 모드 없이.' },
        { num: '02', title: '테스트합니다', desc: '5가지 기준에 따른 실습 테스트. 원본 스크린샷 포함.' },
        { num: '03', title: '평가합니다', desc: 'A+에서 F까지 투명한 평가. 유료 배치 없음.' },
      ],
    },
    criteria: {
      label: '평가 방법론', title: '5가지 기준으로 평가',
      items: [
        { icon: '⚡', name: '사용 편의성', desc: '인터페이스 및 온보딩' },
        { icon: '✦', name: '출력 품질', desc: '결과 대 약속' },
        { icon: '💰', name: '가성비', desc: '가격 대 가치' },
        { icon: '🔗', name: '통합', desc: 'API 및 워크플로우' },
        { icon: '🛟', name: '지원', desc: '문서 및 응답성' },
      ],
    },
    grades: { label: '평가 척도', title: 'A+에서 F까지 — 회색 지대 없음', sub: '모든 도구는 평가를 받습니다.' },
    reviews: { label: '리뷰', title: '최신 리뷰' },
    newsletter: { badge: '무료', title: '평가 리뷰를 이메일로 받기', desc: '매주 새로운 AI 도구 평가. 스팸 없이 — 정직한 점수만.', cta: '무료 구독' },
    tck: { title: '무료 도구가 필요하세요?', desc: 'ToolCraftKit에는 49개 이상의 무료 웹 도구가 있습니다.', cta: '무료 도구 사용하기' },
    blog: { title: '전체 리뷰', subtitle: '모든 도구 테스트, 평가, 등급 부여. 스폰서 랭킹 없음.', empty: '리뷰가 연구실에서 준비 중입니다.', metaTitle: '모든 AI 도구 리뷰', metaDesc: 'A+에서 F까지 투명한 등급으로 모든 AI 도구 리뷰를 탐색하세요.' },
    article: { gradeLabel: '평가', gradeSub: '5가지 기준 실습 테스트 기반', testScores: '테스트 점수', tryCta: '사용해보기', tested: '테스트일', needFree: '무료 도구 필요?', freeDesc: 'ToolCraftKit에 49개 이상의 무료 도구.', freeCta: '무료 도구' },
    scoreLabels: { ux: '사용 편의성', quality: '출력 품질', value: '가성비', integration: '통합', support: '지원 및 업데이트' },
    methodology: {
      metaTitle: '평가 방법론', metaDesc: 'AIGradeLab의 AI 도구 테스트 및 평가 방법.',
      title: 'AI 도구 평가 방법', intro1: 'AIGradeLab에서 리뷰하는 모든 AI 도구는 동일한 엄격한 테스트를 거칩니다.', intro2: '도구가 더 높은 등급을 위해 비용을 지불하지 않습니다.',
      scaleTitle: '등급 척도', scaleSub: '각 도구는 5가지 기준의 평균에 따라 최종 등급을 받습니다.',
      criteriaTitle: '5가지 테스트 기준', criteriaSub: '각 기준은 0에서 10까지 점수가 매겨집니다.',
      processTitle: '테스트 프로세스', process1: '실제 계정을 생성하고 도구를 의도된 목적에 사용합니다.', process2: '리뷰에는 "마지막 테스트" 날짜가 포함됩니다.', process3: '문의: hello@aigradelab.com',
      gradeLabels: [
        { grade: 'A+', label: '탁월함 — 최고 수준', range: '9.0 – 10' },
        { grade: 'A', label: '우수함 — 강력 추천', range: '8.0 – 8.9' },
        { grade: 'B+', label: '매우 좋음 — 트레이드오프 있음', range: '7.0 – 7.9' },
        { grade: 'B', label: '좋음 — 특정 용도에 적합', range: '6.0 – 6.9' },
        { grade: 'C', label: '보통 — 기본 기능 수행', range: '5.0 – 5.9' },
        { grade: 'D', label: '미흡 — 심각한 문제', range: '4.0 – 4.9' },
        { grade: 'F', label: '실패 — 비추천', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: '사용 편의성', desc: '인터페이스가 직관적인가? 새 사용자가 얼마나 빨리 가치를 얻는가?' },
        { name: '출력 품질', desc: '도구가 약속을 지키는가? 실제 테스트 수행.' },
        { name: '가성비', desc: '가격이 공정한가? 무료 및 유료 플랜 평가.' },
        { name: '통합 및 워크플로우', desc: '실제 워크플로우에 맞는가? API, 통합, 내보내기 옵션.' },
        { name: '지원 및 업데이트', desc: '팀이 반응하는가? 문서 품질, 업데이트 빈도.' },
      ],
    },
    about: {
      metaTitle: 'AIGradeLab 소개', metaDesc: '투명한 등급의 독립 AI 도구 리뷰.',
      title: 'AIGradeLab 소개', intro1: 'AIGradeLab은 올바른 AI 도구 선택을 돕는 독립 리뷰 사이트입니다.', intro2: 'AI 도구 시장이 폭발적으로 성장 중입니다. 어떤 것이 실제로 작동할까요?',
      diffTitle: '차별점', diff1: '모든 도구가 같은 테스트를 거쳐 A+에서 F까지 등급을 받습니다.', diff2: '실제 테스트와 정직한 의견으로 깊이 있는 리뷰를 발행합니다.',
      moneyTitle: '수익 방법', moneyDesc: '광고와 제휴 링크로 운영됩니다. 등급에 영향을 주지 않습니다.',
      ecoTitle: '더 큰 생태계의 일부', ecoDesc: 'AIGradeLab은 49개 이상의 무료 웹 도구를 제공하는 ToolCraftKit과 함께합니다.',
      contact: '문의:',
    },
    privacy: {
      metaTitle: '개인정보처리방침', title: '개인정보처리방침', updated: '최종 업데이트: 2026년 9월',
      intro: 'AIGradeLab은 개인정보를 존중합니다.', sections: [
        { title: '수집 정보', content: 'Google Analytics와 Google AdSense를 통해 표준 분석 데이터를 수집합니다.' },
        { title: '광고', content: 'Google AdSense를 사용하여 광고를 표시합니다.' },
        { title: '제휴 링크', content: '일부 기사에는 제휴 링크가 포함됩니다.' },
        { title: '뉴스레터', content: '뉴스레터 구독 시 이메일 주소를 수집합니다.' },
        { title: '문의', content: 'hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: '이용약관', title: '이용약관', updated: '최종 업데이트: 2026년 9월',
      intro: 'aigradelab.com에 접속하면 다음 약관에 동의합니다.', sections: [
        { title: '콘텐츠', content: '모든 리뷰는 실습 테스트에 기반한 독립적 평가입니다.' },
        { title: '제휴 공개', content: 'AIGradeLab은 제휴 프로그램에 참여합니다.' },
        { title: '지적 재산', content: '모든 콘텐츠는 AIGradeLab의 소유입니다.' },
        { title: '책임 제한', content: 'AIGradeLab은 일반적인 안내 목적으로 정보를 제공합니다.' },
        { title: '문의', content: 'hello@aigradelab.com' },
      ],
    },
    footer: { copy: '모든 AI 도구, 테스트 및 평가 완료.', privacy: '개인정보', terms: '이용약관', methodology: '방법론' },
    notFound: { title: '404', desc: '이 페이지는 존재하지 않습니다.', cta: '홈으로 돌아가기' },
  },
  pt: {
    nav: { reviews: 'Avaliações', methodology: 'Nossas Notas', about: 'Sobre' },
    hero: {
      pill: 'Avaliações independentes de ferramentas IA',
      title: 'Cada Ferramenta IA,', titleHighlight: 'Testada e Avaliada',
      subtitle: 'Testamos ferramentas IA com contas reais, avaliamos em 5 critérios e damos uma nota transparente de A+ a F.',
      cta1: 'Nosso Sistema de Notas', cta2: 'Ver Avaliações',
    },
    how: {
      label: 'Como funciona', title: 'Três passos. Zero viés.',
      steps: [
        { num: '01', title: 'Nos cadastramos', desc: 'Conta real, dinheiro real. Sem kits de imprensa ou modos demo.' },
        { num: '02', title: 'Testamos', desc: 'Testes práticos em 5 critérios com capturas de tela originais.' },
        { num: '03', title: 'Avaliamos', desc: 'Notas transparentes de A+ a F. Sem posicionamentos pagos.' },
      ],
    },
    criteria: {
      label: 'Nossa metodologia', title: 'Avaliado em 5 critérios',
      items: [
        { icon: '⚡', name: 'Facilidade de uso', desc: 'Interface e integração' },
        { icon: '✦', name: 'Qualidade dos resultados', desc: 'Resultados vs promessas' },
        { icon: '💰', name: 'Custo-benefício', desc: 'Preço vs valor' },
        { icon: '🔗', name: 'Integração', desc: 'API e fluxo de trabalho' },
        { icon: '🛟', name: 'Suporte', desc: 'Documentação e resposta' },
      ],
    },
    grades: { label: 'A escala', title: 'De A+ a F — sem zonas cinzentas', sub: 'Cada ferramenta conquista sua nota.' },
    reviews: { label: 'Avaliações', title: 'Últimas avaliações' },
    newsletter: { badge: 'Grátis', title: 'Receba avaliações no seu e-mail', desc: 'Novas notas toda semana. Sem spam — apenas pontuações honestas.', cta: 'Assinar grátis' },
    tck: { title: 'Precisa de ferramentas gratuitas?', desc: 'ToolCraftKit tem mais de 49 ferramentas web gratuitas.', cta: 'Experimentar ferramentas gratuitas' },
    blog: { title: 'Todas as Avaliações', subtitle: 'Cada ferramenta testada, avaliada e classificada. Sem rankings patrocinados.', empty: 'Avaliações estão sendo preparadas no laboratório.', metaTitle: 'Todas as Avaliações de Ferramentas IA', metaDesc: 'Veja todas as avaliações de ferramentas IA com notas transparentes.' },
    article: { gradeLabel: 'Nossa Nota', gradeSub: 'Baseada em testes práticos em 5 critérios', testScores: 'Pontuações do Teste', tryCta: 'Experimentar', tested: 'Testado em', needFree: 'Precisa de ferramentas gratuitas?', freeDesc: 'ToolCraftKit tem mais de 49 ferramentas web gratuitas.', freeCta: 'Ferramentas Gratuitas' },
    scoreLabels: { ux: 'Facilidade de uso', quality: 'Qualidade', value: 'Custo-benefício', integration: 'Integração', support: 'Suporte' },
    methodology: {
      metaTitle: 'Nossa Metodologia', metaDesc: 'Como o AIGradeLab testa e avalia cada ferramenta IA.',
      title: 'Como Avaliamos Ferramentas IA', intro1: 'Cada ferramenta IA revisada passa pelo mesmo processo rigoroso de testes.', intro2: 'Nenhuma ferramenta paga por uma nota melhor.',
      scaleTitle: 'Escala de Notas', scaleSub: 'Cada ferramenta recebe uma nota final de A+ a F.',
      criteriaTitle: '5 Critérios de Teste', criteriaSub: 'Cada critério é pontuado de 0 a 10. A nota final é a média.',
      processTitle: 'Nosso Processo', process1: 'Criamos uma conta real e usamos a ferramenta.', process2: 'Avaliações incluem data de "Último teste".', process3: 'Contato: hello@aigradelab.com',
      gradeLabels: [
        { grade: 'A+', label: 'Excepcional — Melhor da categoria', range: '9.0 – 10' },
        { grade: 'A', label: 'Excelente — Altamente recomendado', range: '8.0 – 8.9' },
        { grade: 'B+', label: 'Muito bom — Forte com ressalvas', range: '7.0 – 7.9' },
        { grade: 'B', label: 'Bom — Sólido para usos específicos', range: '6.0 – 6.9' },
        { grade: 'C', label: 'Médio — Cumpre a função', range: '5.0 – 5.9' },
        { grade: 'D', label: 'Abaixo da média — Problemas significativos', range: '4.0 – 4.9' },
        { grade: 'F', label: 'Reprovado — Não recomendado', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: 'Facilidade de uso', desc: 'A interface é intuitiva? Quão rápido um novo usuário obtém valor?' },
        { name: 'Qualidade dos resultados', desc: 'A ferramenta cumpre suas promessas? Testes reais.' },
        { name: 'Custo-benefício', desc: 'O preço é justo? Avaliamos planos gratuitos e pagos.' },
        { name: 'Integração e Workflow', desc: 'Se encaixa num workflow real? API, integrações, exportação.' },
        { name: 'Suporte e Atualizações', desc: 'A equipe responde? Qualidade da documentação, frequência de atualizações.' },
      ],
    },
    about: {
      metaTitle: 'Sobre o AIGradeLab', metaDesc: 'Avaliações independentes de ferramentas IA com notas transparentes.',
      title: 'Sobre o AIGradeLab', intro1: 'AIGradeLab é um site de avaliações independente dedicado a ajudar na escolha das ferramentas IA certas.', intro2: 'O mercado de ferramentas IA está explodindo. Quais realmente funcionam?',
      diffTitle: 'Nosso diferencial', diff1: 'Cada ferramenta passa pelo mesmo processo e recebe uma nota transparente de A+ a F.', diff2: 'Publicamos menos artigos, porém mais profundos, com testes reais.',
      moneyTitle: 'Como ganhamos dinheiro', moneyDesc: 'Publicidade e links de afiliados. Nunca afetam nossas notas.',
      ecoTitle: 'Parte de um ecossistema maior', ecoDesc: 'AIGradeLab trabalha junto ao ToolCraftKit, com mais de 49 ferramentas web gratuitas.',
      contact: 'Dúvidas, feedback ou parcerias:',
    },
    privacy: {
      metaTitle: 'Política de Privacidade', title: 'Política de Privacidade', updated: 'Última atualização: setembro 2026',
      intro: 'O AIGradeLab respeita sua privacidade.', sections: [
        { title: 'Dados coletados', content: 'Coletamos dados analíticos padrão via Google Analytics e Google AdSense.' },
        { title: 'Publicidade', content: 'Usamos Google AdSense para exibir anúncios.' },
        { title: 'Links de afiliados', content: 'Alguns artigos contêm links de afiliados.' },
        { title: 'Newsletter', content: 'Ao se inscrever, coletamos seu e-mail. Cancele a qualquer momento.' },
        { title: 'Contato', content: 'hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: 'Termos de Serviço', title: 'Termos de Serviço', updated: 'Última atualização: setembro 2026',
      intro: 'Ao acessar aigradelab.com, você concorda com estes termos.', sections: [
        { title: 'Conteúdo', content: 'Todas as avaliações representam nossa análise independente.' },
        { title: 'Divulgação de afiliados', content: 'Participamos de programas de afiliados.' },
        { title: 'Propriedade intelectual', content: 'Todo conteúdo é propriedade do AIGradeLab.' },
        { title: 'Limitação de responsabilidade', content: 'Informações fornecidas como orientação geral.' },
        { title: 'Contato', content: 'hello@aigradelab.com' },
      ],
    },
    footer: { copy: 'Cada ferramenta IA, testada e avaliada.', privacy: 'Privacidade', terms: 'Termos', methodology: 'Metodologia' },
    notFound: { title: '404', desc: 'Esta página não existe.', cta: 'Voltar ao início' },
  },
  nl: {
    nav: { reviews: 'Beoordelingen', methodology: 'Onze Cijfers', about: 'Over ons' },
    hero: {
      pill: 'Onafhankelijke AI-tool beoordelingen',
      title: 'Elke AI-Tool,', titleHighlight: 'Getest en Beoordeeld',
      subtitle: 'We testen AI-tools met echte accounts, beoordelen ze op 5 criteria en geven een transparant cijfer van A+ tot F.',
      cta1: 'Ons Beoordelingssysteem', cta2: 'Bekijk Beoordelingen',
    },
    how: {
      label: 'Hoe het werkt', title: 'Drie stappen. Nul vooroordeel.',
      steps: [
        { num: '01', title: 'We melden ons aan', desc: 'Echt account, echt geld. Geen persmappen of demo-modi.' },
        { num: '02', title: 'We testen', desc: 'Praktijktests op 5 criteria met originele screenshots.' },
        { num: '03', title: 'We beoordelen', desc: 'Transparante cijfers van A+ tot F. Geen betaalde plaatsingen.' },
      ],
    },
    criteria: {
      label: 'Onze methodologie', title: 'Beoordeeld op 5 criteria',
      items: [
        { icon: '⚡', name: 'Gebruiksgemak', desc: 'Interface & onboarding' },
        { icon: '✦', name: 'Kwaliteit van output', desc: 'Resultaten vs beloftes' },
        { icon: '💰', name: 'Prijs-kwaliteit', desc: 'Prijs vs waarde' },
        { icon: '🔗', name: 'Integratie', desc: 'API & workflow' },
        { icon: '🛟', name: 'Ondersteuning', desc: 'Documentatie & respons' },
      ],
    },
    grades: { label: 'De schaal', title: 'Van A+ tot F — geen grijze gebieden', sub: 'Elke tool verdient zijn cijfer.' },
    reviews: { label: 'Beoordelingen', title: 'Laatste beoordelingen' },
    newsletter: { badge: 'Gratis', title: 'Ontvang beoordelingen in je inbox', desc: 'Elke week nieuwe AI-tool cijfers. Geen spam — alleen eerlijke scores.', cta: 'Gratis abonneren' },
    tck: { title: 'Gratis tools nodig?', desc: 'ToolCraftKit heeft 49+ gratis webtools voor productiviteit, tekst, afbeeldingen en meer.', cta: 'Probeer gratis tools' },
    blog: { title: 'Alle Beoordelingen', subtitle: 'Elke tool getest, beoordeeld en becijferd. Geen gesponsorde rankings.', empty: 'Beoordelingen worden voorbereid in het lab.', metaTitle: 'Alle AI-Tool Beoordelingen', metaDesc: 'Bekijk alle AI-tool beoordelingen met transparante cijfers.' },
    article: { gradeLabel: 'Ons Cijfer', gradeSub: 'Gebaseerd op praktijktests op 5 criteria', testScores: 'Testscores', tryCta: 'Probeer', tested: 'Getest op', needFree: 'Gratis tools nodig?', freeDesc: 'ToolCraftKit heeft 49+ gratis webtools.', freeCta: 'Gratis Tools' },
    scoreLabels: { ux: 'Gebruiksgemak', quality: 'Kwaliteit', value: 'Prijs-kwaliteit', integration: 'Integratie', support: 'Ondersteuning' },
    methodology: {
      metaTitle: 'Onze Methodologie', metaDesc: 'Hoe AIGradeLab elke AI-tool test en beoordeelt.',
      title: 'Hoe We AI-Tools Beoordelen', intro1: 'Elke AI-tool doorloopt hetzelfde strenge testproces.', intro2: 'Geen tool betaalt voor een hoger cijfer.',
      scaleTitle: 'De Cijferschaal', scaleSub: 'Elke tool krijgt een eindcijfer van A+ tot F.',
      criteriaTitle: '5 Testcriteria', criteriaSub: 'Elk criterium scoort van 0 tot 10. Het eindcijfer is het gemiddelde.',
      processTitle: 'Ons Testproces', process1: 'We maken een echt account aan en gebruiken de tool.', process2: 'Beoordelingen bevatten een "Laatst getest" datum.', process3: 'Contact: hello@aigradelab.com',
      gradeLabels: [
        { grade: 'A+', label: 'Uitzonderlijk — Beste in klasse', range: '9.0 – 10' },
        { grade: 'A', label: 'Uitstekend — Sterk aanbevolen', range: '8.0 – 8.9' },
        { grade: 'B+', label: 'Zeer goed — Sterk met kanttekeningen', range: '7.0 – 7.9' },
        { grade: 'B', label: 'Goed — Solide voor specifiek gebruik', range: '6.0 – 6.9' },
        { grade: 'C', label: 'Gemiddeld — Doet wat het moet', range: '5.0 – 5.9' },
        { grade: 'D', label: 'Ondergemiddeld — Aanzienlijke problemen', range: '4.0 – 4.9' },
        { grade: 'F', label: 'Onvoldoende — Niet aanbevolen', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: 'Gebruiksgemak', desc: 'Is de interface intuïtief? Hoe snel heeft een nieuwe gebruiker waarde?' },
        { name: 'Kwaliteit van output', desc: 'Levert de tool wat beloofd wordt? Praktijktests.' },
        { name: 'Prijs-kwaliteit', desc: 'Is de prijs eerlijk? Gratis en betaalde plannen beoordeeld.' },
        { name: 'Integratie & Workflow', desc: 'Past het in een echte workflow? API, integraties, export.' },
        { name: 'Ondersteuning & Updates', desc: 'Reageert het team? Documentatiekwaliteit, updatefrequentie.' },
      ],
    },
    about: {
      metaTitle: 'Over AIGradeLab', metaDesc: 'Onafhankelijke AI-tool beoordelingen met transparante cijfers.',
      title: 'Over AIGradeLab', intro1: 'AIGradeLab is een onafhankelijke beoordelingssite gewijd aan het helpen kiezen van de juiste AI-tools.', intro2: 'De AI-tools markt explodeert. Welke leveren echt? Daar komen wij in beeld.',
      diffTitle: 'Wat ons anders maakt', diff1: 'Elke tool doorloopt hetzelfde proces en krijgt een transparant cijfer van A+ tot F.', diff2: 'Minder maar diepere reviews met echte tests en eerlijke meningen.',
      moneyTitle: 'Hoe we geld verdienen', moneyDesc: 'Reclame en affiliate links. Dit beïnvloedt nooit onze cijfers.',
      ecoTitle: 'Deel van een groter ecosysteem', ecoDesc: 'AIGradeLab werkt samen met ToolCraftKit, 49+ gratis webtools.',
      contact: 'Vragen, feedback of samenwerkingen:',
    },
    privacy: {
      metaTitle: 'Privacybeleid', title: 'Privacybeleid', updated: 'Laatst bijgewerkt: september 2026',
      intro: 'AIGradeLab respecteert uw privacy.', sections: [
        { title: 'Verzamelde gegevens', content: 'Standaard analysegegevens via Google Analytics en Google AdSense.' },
        { title: 'Advertenties', content: 'Google AdSense voor het tonen van advertenties.' },
        { title: 'Affiliate links', content: 'Sommige artikelen bevatten affiliate links.' },
        { title: 'Nieuwsbrief', content: 'Bij aanmelding verzamelen we uw e-mailadres.' },
        { title: 'Contact', content: 'hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: 'Gebruiksvoorwaarden', title: 'Gebruiksvoorwaarden', updated: 'Laatst bijgewerkt: september 2026',
      intro: 'Door aigradelab.com te bezoeken, stemt u in met deze voorwaarden.', sections: [
        { title: 'Inhoud', content: 'Alle beoordelingen vertegenwoordigen onze onafhankelijke beoordeling.' },
        { title: 'Affiliate verklaring', content: 'AIGradeLab neemt deel aan affiliateprogramma\'s.' },
        { title: 'Intellectueel eigendom', content: 'Alle inhoud is eigendom van AIGradeLab.' },
        { title: 'Beperking van aansprakelijkheid', content: 'Informatie ter algemene oriëntatie.' },
        { title: 'Contact', content: 'hello@aigradelab.com' },
      ],
    },
    footer: { copy: 'Elke AI-tool, getest en beoordeeld.', privacy: 'Privacy', terms: 'Voorwaarden', methodology: 'Methodologie' },
    notFound: { title: '404', desc: 'Deze pagina bestaat niet.', cta: 'Terug naar home' },
  },
  it: {
    nav: { reviews: 'Recensioni', methodology: 'I Nostri Voti', about: 'Chi siamo' },
    hero: {
      pill: 'Recensioni indipendenti di strumenti IA',
      title: 'Ogni Strumento IA,', titleHighlight: 'Testato e Valutato',
      subtitle: 'Testiamo strumenti IA con account reali, li valutiamo su 5 criteri e assegniamo un voto trasparente da A+ a F.',
      cta1: 'Il Nostro Sistema di Voti', cta2: 'Vedi Recensioni',
    },
    how: {
      label: 'Come funziona', title: 'Tre passi. Zero pregiudizi.',
      steps: [
        { num: '01', title: 'Ci registriamo', desc: 'Account reale, soldi veri. Nessun kit stampa o modalità demo.' },
        { num: '02', title: 'Testiamo', desc: 'Test pratici su 5 criteri con screenshot originali.' },
        { num: '03', title: 'Valutiamo', desc: 'Voti trasparenti da A+ a F. Nessun posizionamento a pagamento.' },
      ],
    },
    criteria: {
      label: 'La nostra metodologia', title: 'Valutato su 5 criteri',
      items: [
        { icon: '⚡', name: 'Facilità d\'uso', desc: 'Interfaccia e onboarding' },
        { icon: '✦', name: 'Qualità dei risultati', desc: 'Risultati vs promesse' },
        { icon: '💰', name: 'Rapporto qualità-prezzo', desc: 'Prezzo vs valore' },
        { icon: '🔗', name: 'Integrazione', desc: 'API e workflow' },
        { icon: '🛟', name: 'Supporto', desc: 'Documentazione e reattività' },
      ],
    },
    grades: { label: 'La scala', title: 'Da A+ a F — nessuna zona grigia', sub: 'Ogni strumento si guadagna il suo voto.' },
    reviews: { label: 'Recensioni', title: 'Ultime recensioni' },
    newsletter: { badge: 'Gratis', title: 'Ricevi le recensioni nella tua email', desc: 'Nuovi voti ogni settimana. Niente spam — solo punteggi onesti.', cta: 'Iscriviti gratis' },
    tck: { title: 'Hai bisogno di strumenti gratuiti?', desc: 'ToolCraftKit ha oltre 49 strumenti web gratuiti.', cta: 'Prova strumenti gratuiti' },
    blog: { title: 'Tutte le Recensioni', subtitle: 'Ogni strumento testato, valutato e votato. Nessuna classifica sponsorizzata.', empty: 'Le recensioni sono in preparazione in laboratorio.', metaTitle: 'Tutte le Recensioni di Strumenti IA', metaDesc: 'Sfoglia tutte le recensioni con voti trasparenti da A+ a F.' },
    article: { gradeLabel: 'Il Nostro Voto', gradeSub: 'Basato su test pratici su 5 criteri', testScores: 'Punteggi del Test', tryCta: 'Prova', tested: 'Testato il', needFree: 'Strumenti gratuiti?', freeDesc: 'ToolCraftKit ha oltre 49 strumenti web gratuiti.', freeCta: 'Strumenti Gratuiti' },
    scoreLabels: { ux: 'Facilità d\'uso', quality: 'Qualità', value: 'Rapporto qualità-prezzo', integration: 'Integrazione', support: 'Supporto' },
    methodology: {
      metaTitle: 'La Nostra Metodologia', metaDesc: 'Come AIGradeLab testa e valuta ogni strumento IA.',
      title: 'Come Valutiamo gli Strumenti IA', intro1: 'Ogni strumento IA passa per lo stesso rigoroso processo di test.', intro2: 'Nessuno strumento paga per un voto migliore.',
      scaleTitle: 'Scala dei Voti', scaleSub: 'Ogni strumento riceve un voto finale da A+ a F.',
      criteriaTitle: '5 Criteri di Test', criteriaSub: 'Ogni criterio viene valutato da 0 a 10. Il voto finale è la media.',
      processTitle: 'Il Nostro Processo', process1: 'Creiamo un account reale e usiamo lo strumento.', process2: 'Le recensioni includono una data di "Ultimo test".', process3: 'Contatto: hello@aigradelab.com',
      gradeLabels: [
        { grade: 'A+', label: 'Eccezionale — Migliore della categoria', range: '9.0 – 10' },
        { grade: 'A', label: 'Eccellente — Altamente raccomandato', range: '8.0 – 8.9' },
        { grade: 'B+', label: 'Molto buono — Forte con compromessi', range: '7.0 – 7.9' },
        { grade: 'B', label: 'Buono — Solido per usi specifici', range: '6.0 – 6.9' },
        { grade: 'C', label: 'Nella media — Fa il suo lavoro', range: '5.0 – 5.9' },
        { grade: 'D', label: 'Sotto la media — Problemi significativi', range: '4.0 – 4.9' },
        { grade: 'F', label: 'Insufficiente — Non raccomandato', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: 'Facilità d\'uso', desc: 'L\'interfaccia è intuitiva? Quanto velocemente si ottiene valore?' },
        { name: 'Qualità dei risultati', desc: 'Lo strumento mantiene le promesse? Test in condizioni reali.' },
        { name: 'Rapporto qualità-prezzo', desc: 'Il prezzo è giusto? Piani gratuiti e a pagamento valutati.' },
        { name: 'Integrazione e Workflow', desc: 'Si integra nel workflow? API, integrazioni, esportazione.' },
        { name: 'Supporto e Aggiornamenti', desc: 'Il team risponde? Qualità documentazione, frequenza aggiornamenti.' },
      ],
    },
    about: {
      metaTitle: 'Chi è AIGradeLab', metaDesc: 'Recensioni indipendenti di strumenti IA con voti trasparenti.',
      title: 'Chi è AIGradeLab', intro1: 'AIGradeLab è un sito di recensioni indipendente dedicato ad aiutarti a scegliere gli strumenti IA giusti.', intro2: 'Il mercato degli strumenti IA sta esplodendo. Quali funzionano davvero?',
      diffTitle: 'Cosa ci distingue', diff1: 'Ogni strumento passa per lo stesso processo e riceve un voto trasparente da A+ a F.', diff2: 'Meno articoli ma più approfonditi, con test reali e opinioni oneste.',
      moneyTitle: 'Come guadagniamo', moneyDesc: 'Pubblicità e link di affiliazione. Non influenzano mai i nostri voti.',
      ecoTitle: 'Parte di un ecosistema più grande', ecoDesc: 'AIGradeLab lavora con ToolCraftKit, oltre 49 strumenti web gratuiti.',
      contact: 'Domande, feedback o partnership:',
    },
    privacy: {
      metaTitle: 'Privacy Policy', title: 'Privacy Policy', updated: 'Ultimo aggiornamento: settembre 2026',
      intro: 'AIGradeLab rispetta la tua privacy.', sections: [
        { title: 'Dati raccolti', content: 'Dati analitici standard via Google Analytics e Google AdSense.' },
        { title: 'Pubblicità', content: 'Google AdSense per mostrare annunci.' },
        { title: 'Link di affiliazione', content: 'Alcuni articoli contengono link di affiliazione.' },
        { title: 'Newsletter', content: 'Iscrivendoti raccogliamo il tuo indirizzo email.' },
        { title: 'Contatto', content: 'hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: 'Termini di Servizio', title: 'Termini di Servizio', updated: 'Ultimo aggiornamento: settembre 2026',
      intro: 'Accedendo a aigradelab.com, accetti questi termini.', sections: [
        { title: 'Contenuto', content: 'Tutte le recensioni rappresentano la nostra valutazione indipendente.' },
        { title: 'Dichiarazione affiliati', content: 'Partecipiamo a programmi di affiliazione.' },
        { title: 'Proprietà intellettuale', content: 'Tutti i contenuti sono di proprietà di AIGradeLab.' },
        { title: 'Limitazione di responsabilità', content: 'Informazioni a scopo orientativo.' },
        { title: 'Contatto', content: 'hello@aigradelab.com' },
      ],
    },
    footer: { copy: 'Ogni strumento IA, testato e valutato.', privacy: 'Privacy', terms: 'Termini', methodology: 'Metodologia' },
    notFound: { title: '404', desc: 'Questa pagina non esiste.', cta: 'Torna alla home' },
  },
  ar: {
    nav: { reviews: 'المراجعات', methodology: 'تقييماتنا', about: 'عن الموقع' },
    hero: {
      pill: 'مراجعات مستقلة لأدوات الذكاء الاصطناعي',
      title: 'كل أداة ذكاء اصطناعي،', titleHighlight: 'مُختبرة ومُقيَّمة',
      subtitle: 'نختبر أدوات الذكاء الاصطناعي بحسابات حقيقية، ونقيّمها وفق 5 معايير، ونمنح كل أداة درجة شفافة من A+ إلى F.',
      cta1: 'نظام التقييم', cta2: 'تصفح المراجعات',
    },
    how: {
      label: 'كيف يعمل', title: 'ثلاث خطوات. بدون تحيز.',
      steps: [
        { num: '01', title: 'نسجّل', desc: 'حساب حقيقي، أموال حقيقية. بدون حزم صحفية أو أوضاع تجريبية.' },
        { num: '02', title: 'نختبر', desc: 'اختبارات عملية على 5 معايير مع لقطات شاشة أصلية.' },
        { num: '03', title: 'نقيّم', desc: 'درجات شفافة من A+ إلى F. بدون مواضع مدفوعة.' },
      ],
    },
    criteria: {
      label: 'منهجيتنا', title: 'تقييم على 5 معايير',
      items: [
        { icon: '⚡', name: 'سهولة الاستخدام', desc: 'الواجهة والتأهيل' },
        { icon: '✦', name: 'جودة المخرجات', desc: 'النتائج مقابل الوعود' },
        { icon: '💰', name: 'القيمة مقابل السعر', desc: 'السعر مقابل ما تحصل عليه' },
        { icon: '🔗', name: 'التكامل', desc: 'API وسير العمل' },
        { icon: '🛟', name: 'الدعم', desc: 'التوثيق والاستجابة' },
      ],
    },
    grades: { label: 'المقياس', title: 'من A+ إلى F — بدون مناطق رمادية', sub: 'كل أداة تكسب درجتها.' },
    reviews: { label: 'المراجعات', title: 'أحدث المراجعات' },
    newsletter: { badge: 'مجاني', title: 'احصل على المراجعات في بريدك', desc: 'درجات جديدة كل أسبوع. بدون إزعاج — فقط تقييمات صادقة.', cta: 'اشترك مجاناً' },
    tck: { title: 'تحتاج أدوات مجانية؟', desc: 'ToolCraftKit يوفر أكثر من 49 أداة ويب مجانية.', cta: 'جرب الأدوات المجانية' },
    blog: { title: 'جميع المراجعات', subtitle: 'كل أداة مُختبرة ومُقيَّمة. بدون تصنيفات مدفوعة.', empty: 'المراجعات قيد التحضير في المختبر.', metaTitle: 'جميع مراجعات أدوات الذكاء الاصطناعي', metaDesc: 'تصفح جميع مراجعات أدوات الذكاء الاصطناعي مع درجات شفافة.' },
    article: { gradeLabel: 'تقييمنا', gradeSub: 'بناءً على اختبارات عملية على 5 معايير', testScores: 'نتائج الاختبار', tryCta: 'جرّب', tested: 'تاريخ الاختبار', needFree: 'تحتاج أدوات مجانية؟', freeDesc: 'ToolCraftKit يوفر أكثر من 49 أداة مجانية.', freeCta: 'أدوات مجانية' },
    scoreLabels: { ux: 'سهولة الاستخدام', quality: 'جودة المخرجات', value: 'القيمة مقابل السعر', integration: 'التكامل', support: 'الدعم والتحديثات' },
    methodology: {
      metaTitle: 'منهجيتنا', metaDesc: 'كيف يختبر AIGradeLab كل أداة ذكاء اصطناعي.',
      title: 'كيف نقيّم أدوات الذكاء الاصطناعي', intro1: 'كل أداة تمر بنفس عملية الاختبار الصارمة.', intro2: 'لا تدفع أي أداة مقابل درجة أعلى.',
      scaleTitle: 'مقياس الدرجات', scaleSub: 'كل أداة تحصل على درجة نهائية من A+ إلى F.',
      criteriaTitle: '5 معايير اختبار', criteriaSub: 'كل معيار يُسجل من 0 إلى 10. الدرجة النهائية هي المتوسط.',
      processTitle: 'عملية الاختبار', process1: 'ننشئ حساباً حقيقياً ونستخدم الأداة.', process2: 'المراجعات تتضمن تاريخ "آخر اختبار".', process3: 'تواصل معنا: hello@aigradelab.com',
      gradeLabels: [
        { grade: 'A+', label: 'استثنائي — الأفضل في فئته', range: '9.0 – 10' },
        { grade: 'A', label: 'ممتاز — موصى به بشدة', range: '8.0 – 8.9' },
        { grade: 'B+', label: 'جيد جداً — قوي مع تنازلات', range: '7.0 – 7.9' },
        { grade: 'B', label: 'جيد — مناسب لاستخدامات محددة', range: '6.0 – 6.9' },
        { grade: 'C', label: 'متوسط — يؤدي المهمة', range: '5.0 – 5.9' },
        { grade: 'D', label: 'أقل من المتوسط — مشاكل كبيرة', range: '4.0 – 4.9' },
        { grade: 'F', label: 'راسب — غير موصى به', range: '0 – 3.9' },
      ],
      criteriaItems: [
        { name: 'سهولة الاستخدام', desc: 'هل الواجهة بديهية؟ ما سرعة حصول المستخدم الجديد على القيمة؟' },
        { name: 'جودة المخرجات', desc: 'هل تفي الأداة بوعودها؟ اختبارات في ظروف حقيقية.' },
        { name: 'القيمة مقابل السعر', desc: 'هل السعر عادل؟ تقييم الخطط المجانية والمدفوعة.' },
        { name: 'التكامل وسير العمل', desc: 'هل تتناسب مع سير العمل؟ API، تكاملات، خيارات التصدير.' },
        { name: 'الدعم والتحديثات', desc: 'هل الفريق يستجيب؟ جودة التوثيق، تكرار التحديثات.' },
      ],
    },
    about: {
      metaTitle: 'عن AIGradeLab', metaDesc: 'مراجعات مستقلة لأدوات الذكاء الاصطناعي مع درجات شفافة.',
      title: 'عن AIGradeLab', intro1: 'AIGradeLab موقع مراجعات مستقل مكرس لمساعدتك في اختيار أدوات الذكاء الاصطناعي الصحيحة.', intro2: 'سوق أدوات الذكاء الاصطناعي ينفجر. أيها يعمل فعلاً؟',
      diffTitle: 'ما يميزنا', diff1: 'كل أداة تمر بنفس العملية وتحصل على درجة شفافة من A+ إلى F.', diff2: 'مقالات أعمق مع اختبارات حقيقية وآراء صادقة.',
      moneyTitle: 'كيف نجني المال', moneyDesc: 'الإعلانات وروابط الإحالة. لا تؤثر أبداً على درجاتنا.',
      ecoTitle: 'جزء من منظومة أكبر', ecoDesc: 'AIGradeLab يعمل مع ToolCraftKit، أكثر من 49 أداة ويب مجانية.',
      contact: 'استفسارات أو تعاون:',
    },
    privacy: {
      metaTitle: 'سياسة الخصوصية', title: 'سياسة الخصوصية', updated: 'آخر تحديث: سبتمبر 2026',
      intro: 'AIGradeLab يحترم خصوصيتك.', sections: [
        { title: 'البيانات المجمعة', content: 'بيانات تحليلية قياسية عبر Google Analytics وGoogle AdSense.' },
        { title: 'الإعلانات', content: 'نستخدم Google AdSense لعرض الإعلانات.' },
        { title: 'روابط الإحالة', content: 'بعض المقالات تحتوي على روابط إحالة.' },
        { title: 'النشرة الإخبارية', content: 'عند الاشتراك نجمع بريدك الإلكتروني.' },
        { title: 'التواصل', content: 'hello@aigradelab.com' },
      ],
    },
    terms: {
      metaTitle: 'شروط الخدمة', title: 'شروط الخدمة', updated: 'آخر تحديث: سبتمبر 2026',
      intro: 'بالوصول إلى aigradelab.com، توافق على هذه الشروط.', sections: [
        { title: 'المحتوى', content: 'جميع المراجعات تمثل تقييمنا المستقل.' },
        { title: 'إفصاح الإحالة', content: 'نشارك في برامج الإحالة.' },
        { title: 'الملكية الفكرية', content: 'جميع المحتويات ملك لـ AIGradeLab.' },
        { title: 'تحديد المسؤولية', content: 'معلومات للتوجيه العام فقط.' },
        { title: 'التواصل', content: 'hello@aigradelab.com' },
      ],
    },
    footer: { copy: 'كل أداة ذكاء اصطناعي، مُختبرة ومُقيَّمة.', privacy: 'الخصوصية', terms: 'الشروط', methodology: 'المنهجية' },
    notFound: { title: '404', desc: 'هذه الصفحة غير موجودة.', cta: 'العودة للرئيسية' },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
