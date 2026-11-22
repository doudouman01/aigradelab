import { Grade, Scores, computeGrade } from '../lib/grades';

export type ToolCategory =
  | 'chatbot'
  | 'writing'
  | 'image'
  | 'video'
  | 'audio'
  | 'coding'
  | 'productivity'
  | 'seo'
  | 'design'
  | 'research'
  | 'marketing'
  | 'data'
  | 'education'
  | 'healthcare'
  | 'business';

export type Tool = {
  slug: string;
  name: string;
  category: ToolCategory;
  website: string;
  description: string; // EN short description
  grade: Grade | null;
  scores: Scores | null;
  affiliateUrl: string | null;
  reviewSlug: string | null; // links to blog article
  pricing: string; // e.g. "Freemium", "From $20/mo", "Free"
  highlight: string; // one-line unique selling point
};

function tool(
  slug: string, name: string, category: ToolCategory, website: string,
  description: string, scores: Scores | null, affiliateUrl: string | null,
  reviewSlug: string | null, pricing: string, highlight: string,
  gradeOverride?: Grade
): Tool {
  return {
    slug, name, category, website, description,
    grade: gradeOverride ?? (scores ? computeGrade(scores) : null),
    scores, affiliateUrl, reviewSlug, pricing, highlight,
  };
}

export const tools: Tool[] = [
  // ── CHATBOTS ──
  tool('chatgpt', 'ChatGPT', 'chatbot', 'https://chat.openai.com',
    'The most popular AI assistant for text, code, images, voice and more.',
    { ux: 9.2, quality: 8.5, value: 9.0, integration: 8.5, support: 8.0 },
    null, 'chatgpt-review-2026', 'Freemium', 'Most versatile all-in-one AI'),
  tool('claude', 'Claude', 'chatbot', 'https://claude.ai',
    'Anthropic\'s AI assistant known for safety, reasoning and long context.',
    { ux: 8.5, quality: 9.5, value: 8.2, integration: 8.0, support: 8.2 },
    null, 'claude-review-2026', 'Freemium', 'Best reasoning and analysis'),
  tool('gemini', 'Google Gemini', 'chatbot', 'https://gemini.google.com',
    'Google\'s multimodal AI with deep Google ecosystem integration.',
    { ux: 8.5, quality: 8.0, value: 8.5, integration: 9.0, support: 7.5 },
    null, 'gemini-review-2026', 'Freemium', 'Best Google integration', 'B+'),
  tool('copilot', 'Microsoft Copilot', 'chatbot', 'https://copilot.microsoft.com',
    'Microsoft\'s AI assistant integrated into Windows, Office and Edge.',
    { ux: 8.0, quality: 7.5, value: 6.5, integration: 9.5, support: 8.0 },
    null, 'microsoft-copilot-review-2026', 'Freemium', 'Best Microsoft 365 integration'),
  tool('deepseek', 'DeepSeek', 'chatbot', 'https://chat.deepseek.com',
    'Open-source Chinese AI with strong coding and math capabilities.',
    { ux: 7.5, quality: 8.0, value: 9.5, integration: 6.5, support: 6.0 },
    null, 'deepseek-review-2026', 'Free', 'Best free open-source model'),
  tool('perplexity', 'Perplexity', 'research', 'https://perplexity.ai',
    'AI-powered search engine with cited answers and research capabilities.',
    { ux: 9.2, quality: 9.0, value: 8.5, integration: 7.5, support: 7.5 },
    null, 'perplexity-ai-review-2026', 'Freemium', 'Best AI search engine'),
  tool('poe', 'Poe', 'chatbot', 'https://poe.com',
    'Multi-model platform giving access to ChatGPT, Claude, Gemini and more.',
    null, null, null, 'Freemium', 'Access multiple AI models in one app'),
  tool('character-ai', 'Character.AI', 'chatbot', 'https://character.ai',
    'Chat with AI characters and personalities for entertainment and roleplay.',
    null, null, null, 'Freemium', 'Most popular AI character platform'),
  tool('pi', 'Pi by Inflection', 'chatbot', 'https://pi.ai',
    'Emotionally intelligent AI designed for personal conversations.',
    null, null, null, 'Free', 'Most empathetic conversational AI'),
  tool('you-com', 'You.com', 'research', 'https://you.com',
    'AI search engine with multiple modes for research, coding and creativity.',
    null, null, null, 'Freemium', 'Multi-mode AI search'),

  // ── WRITING ──
  tool('grammarly', 'Grammarly', 'writing', 'https://grammarly.com',
    'AI writing assistant for grammar, tone, clarity and plagiarism detection.',
    { ux: 9.0, quality: 8.0, value: 7.0, integration: 9.2, support: 7.5 },
    null, 'grammarly-review-2026', 'Freemium', 'Most widely used writing assistant', 'B+'),
  tool('jasper', 'Jasper', 'writing', 'https://jasper.ai',
    'AI content platform for marketing teams with brand voice and templates.',
    { ux: 8.5, quality: 8.0, value: 6.5, integration: 8.0, support: 8.0 },
    null, 'jasper-ai-review-2026', 'From $49/mo', 'Best for marketing teams'),
  tool('copy-ai', 'Copy.ai', 'writing', 'https://copy.ai',
    'AI writing tool focused on marketing copy, social posts and sales content.',
    null, null, null, 'Freemium', 'Best for sales and marketing copy'),
  tool('writesonic', 'Writesonic', 'writing', 'https://writesonic.com',
    'AI content generator with SEO optimization and blog writing tools.',
    null, null, null, 'Freemium', 'AI writing with built-in SEO'),
  tool('sudowrite', 'Sudowrite', 'writing', 'https://sudowrite.com',
    'AI writing assistant designed specifically for fiction and creative writing.',
    null, null, null, 'From $19/mo', 'Best AI for fiction writers'),
  tool('wordtune', 'Wordtune', 'writing', 'https://wordtune.com',
    'AI rewriting tool that helps rephrase and improve existing text.',
    null, null, null, 'Freemium', 'Best for rewriting and rephrasing'),
  tool('quillbot', 'QuillBot', 'writing', 'https://quillbot.com',
    'Paraphrasing tool with grammar checker and citation generator.',
    null, null, null, 'Freemium', 'Best paraphrasing tool'),
  tool('rytr', 'Rytr', 'writing', 'https://rytr.me',
    'Affordable AI writing assistant with 40+ use cases and 30+ languages.',
    { ux: 8.5, quality: 7.5, value: 9.5, integration: 7.0, support: 7.5 },
    'https://rytr.me/?via=xavier-nelsom', 'rytr-review-2026', 'From $9/mo', 'Most affordable AI writer'),

  // ── IMAGE GENERATION ──
  tool('midjourney', 'Midjourney', 'image', 'https://midjourney.com',
    'Premium AI image generator known for stunning artistic quality.',
    { ux: 7.5, quality: 9.8, value: 7.5, integration: 6.5, support: 7.0 },
    null, 'midjourney-review-2026', 'From $10/mo', 'Highest quality AI art', 'A'),
  tool('dall-e', 'DALL-E 3', 'image', 'https://openai.com/dall-e-3',
    'OpenAI\'s image generator integrated into ChatGPT with text rendering.',
    null, null, null, 'Via ChatGPT Plus', 'Best text-in-image rendering'),
  tool('stable-diffusion', 'Stable Diffusion', 'image', 'https://stability.ai',
    'Open-source image generation model you can run locally or in the cloud.',
    null, null, null, 'Free / Paid API', 'Best open-source image model'),
  tool('leonardo-ai', 'Leonardo.AI', 'image', 'https://leonardo.ai',
    'AI image generation platform with fine-tuned models and game assets.',
    null, null, null, 'Freemium', 'Best for game and concept art'),
  tool('ideogram', 'Ideogram', 'image', 'https://ideogram.ai',
    'AI image generator excelling at typography and text integration.',
    null, null, null, 'Freemium', 'Best typography in AI images'),
  tool('flux', 'Flux by Black Forest Labs', 'image', 'https://blackforestlabs.ai',
    'Next-gen open image model from ex-Stability AI team.',
    null, null, null, 'Free / API', 'Fastest open-source image generation'),
  tool('canva-ai', 'Canva', 'design', 'https://canva.com',
    'All-in-one design platform with AI-powered image generation and editing.',
    { ux: 9.5, quality: 8.0, value: 8.5, integration: 8.0, support: 7.5 },
    'https://partner.canva.com/aigradelab', 'canva-ai-review-2026', 'Freemium', 'Best all-in-one design + AI'),

  // ── VIDEO ──
  tool('runway', 'Runway', 'video', 'https://runwayml.com',
    'Leading AI video generation and editing platform for creators.',
    { ux: 8.2, quality: 9.2, value: 7.0, integration: 7.8, support: 7.5 },
    null, 'runway-review-2026', 'Freemium', 'Best AI video generation quality', 'A'),
  tool('sora', 'Sora', 'video', 'https://openai.com/sora',
    'OpenAI\'s text-to-video model generating realistic scenes.',
    { ux: 8.0, quality: 8.5, value: 8.5, integration: 7.0, support: 7.0 },
    null, 'sora-review-2026', 'Via ChatGPT Plus', 'Most hyped text-to-video'),
  tool('heygen', 'HeyGen', 'video', 'https://heygen.com',
    'AI video creation with realistic avatars and voice cloning.',
    { ux: 8.8, quality: 8.5, value: 8.5, integration: 7.5, support: 7.5 },
    null, 'heygen-review-2026', 'Freemium', 'Best AI avatar videos'),
  tool('synthesia', 'Synthesia', 'video', 'https://synthesia.io',
    'Enterprise AI video platform for training and corporate communications.',
    { ux: 8.5, quality: 8.5, value: 6.5, integration: 7.5, support: 8.5 },
    null, 'synthesia-review-2026', 'From $29/mo', 'Best for corporate training videos'),
  tool('kling-ai', 'Kling AI', 'video', 'https://klingai.com',
    'Chinese AI video generator with strong motion and physics understanding.',
    { ux: 7.5, quality: 8.0, value: 9.0, integration: 6.5, support: 6.5 },
    null, 'kling-ai-review-2026', 'Freemium', 'Best value AI video generator'),
  tool('invideo', 'InVideo AI', 'video', 'https://invideo.io',
    'AI video editor that turns text prompts into complete videos.',
    null, null, null, 'Freemium', 'Easiest text-to-video editor'),
  tool('descript', 'Descript', 'video', 'https://descript.com',
    'AI-powered video and podcast editor with text-based editing.',
    null, null, null, 'Freemium', 'Edit video like a document'),
  tool('opus-clip', 'Opus Clip', 'video', 'https://opus.pro',
    'AI tool that turns long videos into viral short clips.',
    null, null, null, 'Freemium', 'Best AI for short-form content'),
  tool('pictory', 'Pictory', 'video', 'https://pictory.ai',
    'AI video creation from scripts, blogs and long-form content.',
    null, null, null, 'From $19/mo', 'Best blog-to-video tool'),

  // ── AUDIO & VOICE ──
  tool('elevenlabs', 'ElevenLabs', 'audio', 'https://elevenlabs.io',
    'Most realistic AI voice generation and cloning platform.',
    { ux: 8.5, quality: 9.5, value: 7.0, integration: 8.0, support: 7.5 },
    'https://try.elevenlabs.io/hxkztstnql2g', 'elevenlabs-review-2026', 'Freemium', 'Most realistic AI voices'),
  tool('murf', 'Murf AI', 'audio', 'https://murf.ai',
    'AI voice generator for voiceovers, presentations and e-learning.',
    null, null, null, 'Freemium', 'Best for professional voiceovers'),
  tool('suno', 'Suno', 'audio', 'https://suno.com',
    'AI music generator that creates full songs from text prompts.',
    null, null, null, 'Freemium', 'Best AI music generator'),
  tool('udio', 'Udio', 'audio', 'https://udio.com',
    'AI music creation platform with high-fidelity audio generation.',
    null, null, null, 'Freemium', 'High-fidelity AI music'),
  tool('speechify', 'Speechify', 'audio', 'https://speechify.com',
    'Text-to-speech app that reads any text aloud with natural voices.',
    null, null, null, 'Freemium', 'Best text-to-speech reader'),

  // ── CODING ──
  tool('cursor', 'Cursor', 'coding', 'https://cursor.com',
    'AI-first code editor built on VS Code with inline AI assistance.',
    { ux: 8.8, quality: 9.2, value: 8.0, integration: 8.5, support: 7.5 },
    null, 'cursor-ai-review-2026', 'Freemium', 'Best AI code editor'),
  tool('github-copilot', 'GitHub Copilot', 'coding', 'https://github.com/features/copilot',
    'AI pair programmer that suggests code completions in your IDE.',
    null, null, null, 'From $10/mo', 'Most popular AI coding assistant'),
  tool('replit', 'Replit', 'coding', 'https://replit.com',
    'Cloud IDE with AI agent that can build and deploy full apps.',
    null, null, null, 'Freemium', 'Best AI for building full apps'),
  tool('v0', 'v0 by Vercel', 'coding', 'https://v0.dev',
    'AI UI generator that creates React components from text descriptions.',
    null, null, null, 'Freemium', 'Best AI for frontend components'),
  tool('codeium', 'Codeium', 'coding', 'https://codeium.com',
    'Free AI code completion supporting 70+ programming languages.',
    null, null, null, 'Free', 'Best free Copilot alternative'),
  tool('tabnine', 'Tabnine', 'coding', 'https://tabnine.com',
    'AI code assistant focused on privacy with on-premise deployment.',
    null, null, null, 'Freemium', 'Best private AI code assistant'),
  tool('bolt', 'Bolt.new', 'coding', 'https://bolt.new',
    'AI-powered full-stack web app builder in the browser.',
    null, null, null, 'Freemium', 'Build full-stack apps with AI'),
  tool('lovable', 'Lovable', 'coding', 'https://lovable.dev',
    'AI app builder that generates production-ready web applications.',
    null, null, null, 'Freemium', 'AI-powered app development'),

  // ── PRODUCTIVITY ──
  tool('notion-ai', 'Notion AI', 'productivity', 'https://notion.so',
    'AI assistant built into Notion for writing, summarizing and organizing.',
    { ux: 8.8, quality: 8.5, value: 7.5, integration: 9.2, support: 8.0 },
    null, 'notion-ai-review-2026', 'From $10/mo add-on', 'Best AI workspace integration'),
  tool('otter', 'Otter.ai', 'productivity', 'https://otter.ai',
    'AI meeting assistant for transcription, notes and action items.',
    null, null, null, 'Freemium', 'Best AI meeting transcription'),
  tool('mem', 'Mem', 'productivity', 'https://mem.ai',
    'AI-powered note-taking that organizes and surfaces knowledge.',
    null, null, null, 'Freemium', 'Self-organizing AI notes'),
  tool('reclaim', 'Reclaim.ai', 'productivity', 'https://reclaim.ai',
    'AI scheduling assistant that optimizes your calendar automatically.',
    null, null, null, 'Freemium', 'Best AI calendar optimizer'),
  tool('zapier', 'Zapier', 'productivity', 'https://zapier.com',
    'Automation platform connecting 6000+ apps with AI-powered workflows.',
    null, null, null, 'Freemium', 'Most connected automation platform'),
  tool('make', 'Make (Integromat)', 'productivity', 'https://make.com',
    'Visual automation platform for complex multi-step workflows.',
    null, null, null, 'Freemium', 'Most powerful visual automation'),

  // ── SEO & MARKETING ──
  tool('surfer-seo', 'Surfer SEO', 'seo', 'https://surferseo.com',
    'AI-powered SEO tool for content optimization and SERP analysis.',
    null, null, null, 'From $89/mo', 'Best AI content optimization'),
  tool('semrush', 'Semrush', 'seo', 'https://semrush.com',
    'All-in-one SEO platform with keyword research, audit and competitor analysis.',
    null, null, null, 'From $129/mo', 'Most comprehensive SEO suite'),
  tool('ahrefs', 'Ahrefs', 'seo', 'https://ahrefs.com',
    'SEO toolset known for the best backlink database and site explorer.',
    null, null, null, 'From $99/mo', 'Best backlink analysis tool'),
  tool('clearscope', 'Clearscope', 'seo', 'https://clearscope.io',
    'AI content optimization platform for high-ranking blog posts.',
    null, null, null, 'From $170/mo', 'Premium content optimization'),
  tool('frase', 'Frase', 'seo', 'https://frase.io',
    'AI SEO tool for content research, outlines and optimization.',
    null, null, null, 'From $15/mo', 'Most affordable AI SEO tool'),

  // ── DESIGN ──
  tool('figma-ai', 'Figma AI', 'design', 'https://figma.com',
    'Design platform with AI features for auto-layout, prototyping and content.',
    null, null, null, 'Freemium', 'Best collaborative design + AI'),
  tool('adobe-firefly', 'Adobe Firefly', 'image', 'https://firefly.adobe.com',
    'Adobe\'s commercially safe AI image generator integrated into Creative Cloud.',
    null, null, null, 'Freemium', 'Best for commercial-safe AI images'),
  tool('remove-bg', 'Remove.bg', 'design', 'https://remove.bg',
    'AI background removal tool with one-click processing.',
    null, null, null, 'Freemium', 'Best one-click background removal'),
  tool('photoroom', 'PhotoRoom', 'design', 'https://photoroom.com',
    'AI photo editing for product shots, backgrounds and marketing visuals.',
    null, null, null, 'Freemium', 'Best for product photography'),

  // ── RESEARCH & DATA ──
  tool('elicit', 'Elicit', 'research', 'https://elicit.com',
    'AI research assistant that finds and analyzes academic papers.',
    null, null, null, 'Freemium', 'Best AI for academic research'),
  tool('consensus', 'Consensus', 'research', 'https://consensus.app',
    'AI search engine for scientific research with evidence-based answers.',
    null, null, null, 'Freemium', 'Science-backed AI answers'),
  tool('scispace', 'SciSpace', 'research', 'https://scispace.com',
    'AI tool for reading, understanding and explaining research papers.',
    null, null, null, 'Freemium', 'Best for understanding papers'),
  tool('tableau-ai', 'Tableau AI', 'data', 'https://tableau.com',
    'Business intelligence platform with AI-powered data visualization.',
    null, null, null, 'From $75/mo', 'Best AI data visualization'),
  tool('julius-ai', 'Julius AI', 'data', 'https://julius.ai',
    'AI data analyst that creates charts and insights from your data.',
    null, null, null, 'Freemium', 'Easiest AI data analysis'),

  // ── EDUCATION ──
  tool('khan-academy-khanmigo', 'Khanmigo', 'education', 'https://khanacademy.org/khanmigo',
    'Khan Academy\'s AI tutor for personalized learning and homework help.',
    null, null, null, 'From $4/mo', 'Best AI tutor for students'),
  tool('duolingo-max', 'Duolingo Max', 'education', 'https://duolingo.com',
    'AI-powered language learning with roleplay and explanation features.',
    null, null, null, 'From $14/mo', 'Best AI language learning'),
  tool('socratic', 'Socratic by Google', 'education', 'https://socratic.org',
    'Free AI homework helper that explains step-by-step solutions.',
    null, null, null, 'Free', 'Best free homework helper'),

  // ── BUSINESS & SALES ──
  tool('salesforce-einstein', 'Salesforce Einstein', 'business', 'https://salesforce.com/einstein',
    'AI layer across Salesforce CRM for predictions, automation and insights.',
    null, null, null, 'Enterprise', 'Best AI CRM integration'),
  tool('hubspot-ai', 'HubSpot AI', 'business', 'https://hubspot.com',
    'AI features across HubSpot for content, emails, analytics and CRM.',
    null, null, null, 'Freemium', 'Best AI for inbound marketing'),
  tool('beautiful-ai', 'Beautiful.ai', 'business', 'https://beautiful.ai',
    'AI presentation maker with smart templates and auto-design.',
    null, null, null, 'From $12/mo', 'Best AI presentation maker'),
  tool('gamma', 'Gamma', 'business', 'https://gamma.app',
    'AI-powered presentation and document creation platform.',
    null, null, null, 'Freemium', 'Fastest way to create presentations'),
  tool('tome', 'Tome', 'business', 'https://tome.app',
    'AI storytelling platform for presentations and pitch decks.',
    null, null, null, 'Freemium', 'Best for AI pitch decks'),

  // ── HEALTHCARE ──
  tool('ada-health', 'Ada Health', 'healthcare', 'https://ada.com',
    'AI symptom checker with medical knowledge base for health assessments.',
    null, null, null, 'Free', 'Most accurate AI symptom checker'),
  tool('glass-health', 'Glass Health', 'healthcare', 'https://glass.health',
    'AI clinical decision support tool for healthcare professionals.',
    null, null, null, 'Free for clinicians', 'Best AI for clinical decisions'),

  // ── MORE POPULAR TOOLS ──
  tool('anthropic-claude-code', 'Claude Code', 'coding', 'https://docs.anthropic.com/en/docs/claude-code',
    'Anthropic\'s agentic coding tool for terminal-based development.',
    null, null, null, 'Via Claude Pro', 'Best agentic coding from terminal'),
  tool('fireflies', 'Fireflies.ai', 'productivity', 'https://fireflies.ai',
    'AI meeting assistant that records, transcribes and summarizes meetings.',
    null, null, null, 'Freemium', 'Best AI meeting recorder'),
  tool('luma-ai', 'Luma AI', 'video', 'https://lumalabs.ai',
    'AI video generation and 3D capture for creators and developers.',
    null, null, null, 'Freemium', 'Best AI 3D capture'),
  tool('pika', 'Pika', 'video', 'https://pika.art',
    'AI video generation and editing with creative effects.',
    null, null, null, 'Freemium', 'Most creative AI video effects'),
  tool('krisp', 'Krisp', 'audio', 'https://krisp.ai',
    'AI noise cancellation and meeting assistant for calls.',
    null, null, null, 'Freemium', 'Best AI noise cancellation'),
  tool('chatpdf', 'ChatPDF', 'productivity', 'https://chatpdf.com',
    'Chat with any PDF document using AI to get instant answers.',
    null, null, null, 'Freemium', 'Best for chatting with PDFs'),
  tool('humata', 'Humata', 'productivity', 'https://humata.ai',
    'AI document analysis tool for summarizing and querying files.',
    null, null, null, 'Freemium', 'Best for document Q&A'),
  tool('brandmark', 'Brandmark', 'design', 'https://brandmark.io',
    'AI logo maker and brand identity generator.',
    null, null, null, 'From $25', 'Best AI logo generator'),
  tool('looka', 'Looka', 'design', 'https://looka.com',
    'AI-powered logo maker with full brand kit generation.',
    null, null, null, 'From $20', 'Best AI brand kit generator'),
  tool('mailchimp-ai', 'Mailchimp AI', 'marketing', 'https://mailchimp.com',
    'Email marketing platform with AI content generation and optimization.',
    null, null, null, 'Freemium', 'Best AI email marketing'),
  tool('tidio', 'Tidio', 'business', 'https://tidio.com',
    'AI chatbot for customer service and live chat automation.',
    null, null, null, 'Freemium', 'Best AI customer service chatbot'),
  tool('drift', 'Drift', 'business', 'https://drift.com',
    'Conversational AI platform for B2B sales and marketing.',
    null, null, null, 'Enterprise', 'Best AI for B2B conversations'),
  tool('browse-ai', 'Browse AI', 'data', 'https://browse.ai',
    'AI web scraping tool that extracts data from any website.',
    null, null, null, 'Freemium', 'Easiest AI web scraping'),
  tool('bardeen', 'Bardeen', 'productivity', 'https://bardeen.ai',
    'AI automation tool that connects apps and automates browser workflows.',
    null, null, null, 'Freemium', 'Best browser automation AI'),
  tool('liner', 'Liner', 'research', 'https://getliner.com',
    'AI-powered search and research tool that highlights key information.',
    null, null, null, 'Freemium', 'Best AI research highlighter'),
  tool('claude-fable', 'Claude Fable 5.2', 'chatbot', 'https://claude.ai',
    'Anthropic\'s most advanced model with Mythos-tier capabilities.',
    { ux: 9, quality: 9, value: 8, integration: 8, support: 8 },
    null, 'claude-fable-5-2-review', 'Via Claude Pro', 'Most powerful reasoning model'),
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter(t => t.category === category);
}

export const toolCategories: { slug: ToolCategory; name: string }[] = [
  { slug: 'chatbot', name: 'AI Chatbots' },
  { slug: 'writing', name: 'Writing' },
  { slug: 'image', name: 'Image Generation' },
  { slug: 'video', name: 'Video' },
  { slug: 'audio', name: 'Audio & Voice' },
  { slug: 'coding', name: 'Coding' },
  { slug: 'productivity', name: 'Productivity' },
  { slug: 'seo', name: 'SEO' },
  { slug: 'design', name: 'Design' },
  { slug: 'research', name: 'Research' },
  { slug: 'marketing', name: 'Marketing' },
  { slug: 'data', name: 'Data & Analytics' },
  { slug: 'education', name: 'Education' },
  { slug: 'healthcare', name: 'Healthcare' },
  { slug: 'business', name: 'Business' },
];
