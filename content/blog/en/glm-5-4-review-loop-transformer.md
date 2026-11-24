---
title: "GLM-5.4 Review: Z.ai's Loop Transformer Rewrites How AI Models Think"
description: "Z.ai's GLM-5.4 introduces the Loop Transformer — an architecture that runs 28 layers twice to match models 3x its size. We break down what it means, how it performs, and whether it's worth using."
category: "Graded Reviews"
categorySlug: "graded-reviews"
date: "2026-11-23"
lastTested: "2026-11-23"
readTime: "11 min read"
grade: "B+"
scores_ux: 7
scores_quality: 8
scores_value: 7
scores_integration: 6
scores_support: 6
toolName: "GLM-5.4"
---

<h2>GLM-5.4 at a Glance</h2>

<div style="margin: 1.5rem 0; padding: 1.5rem; border-left: 4px solid #2563eb;">
  <strong>AIGradeLab Grade: B+</strong><br>
  UX: 7/10 | Quality: 8/10 | Value: 7/10 | Integration: 6/10 | Support: 6/10<br><br>
  <strong>Bottom line:</strong> GLM-5.4 is the most architecturally interesting model release of November 2026. The Loop Transformer is a genuine innovation — reusing layers instead of stacking more of them is an elegant approach to making models smarter without tripling compute costs. But the model is held back by limited availability, no API access, and missing official benchmarks. Right now, it's a fascinating preview of where AI architecture is heading, not yet a daily-driver replacement for Claude Fable 5.2 or GPT-6.2 Astra.
</div>

<h2>What Is the Loop Transformer?</h2>

<p>Every major AI model released in 2026 has followed the same playbook: stack more layers, add more parameters, train on more data. GLM-5.4 breaks the pattern. Instead of adding layers, Z.ai makes existing layers work harder.</p>

<p>Here's how it works: GLM-5.4 has roughly 750 billion parameters arranged in 78 stored layers. But 28 of those layers — the "loop block" in the middle of the network — run twice per forward pass with shared weights. The result is 106 effective layer passes per token, using the parameter storage of a 78-layer model.</p>

<p>Z.ai claims this approach lets GLM-5.4 match the intelligence of models with 2 to 3 trillion parameters. If that's even partially true, it's a significant architectural breakthrough — it means you can build smarter models without proportionally scaling compute costs.</p>

<h3>How the Loop Actually Works</h3>

<p>The architecture has three sections:</p>

<ul>
  <li><strong>Prelude layers (1–26):</strong> Run once per token. Build initial representations of the input.</li>
  <li><strong>Loop layers (27–54):</strong> These 28 layers run twice with shared weights. Per-token gates control how much of each loop iteration's output gets written to the residual stream. In pass 1, the gates tend to stay small — the model is building global context. In pass 2, the gates open wider, refining the representation with the context from pass 1.</li>
  <li><strong>Coda layers (55–78):</strong> Run once. Produce the final output.</li>
</ul>

<p>A clever trick: on the second pass through the loop block, the model reuses the sparse key-value (KV) cache and attention indices selected during pass 1. It only maintains its own local sliding-window cache (reportedly 128 tokens). This means the second loop iteration adds relatively little memory overhead.</p>

<h2>What We Know About Performance</h2>

<p>Here's where things get complicated. Z.ai has published no official benchmarks and no model card. A team member said scores will come later. What we have are third-party tests and Z.ai's own internal ablation studies.</p>

<h3>Third-Party Results: KingBench 4</h3>

<p>AICodeKing's KingBench 4 harness tested GLM-5.4 across six coding projects. The results:</p>

<ul>
  <li><strong>7th overall</strong> out of 18 models tested</li>
  <li><strong>1st among open-weight models</strong></li>
  <li><strong>Runtime: 431 minutes</strong> — significantly slower than Gemini 4 Neon (109 minutes)</li>
  <li><strong>Reasoning steps: 1,128</strong> vs. Gemini 4 Neon's 244 — the model thinks deeply, sometimes too deeply</li>
  <li><strong>Tool-call failure rate: 1.56%</strong>, but 66% of failed calls recovered on retry — higher recovery than any Claude or Codex model in the test</li>
</ul>

<p>For context, <a href="/blog/claude-fable-5-2-review">Claude Fable 5.2</a> scored 1st overall on KingBench 4 with 42/60 points. Gemini 4 Neon was 2nd with 37.9/60. GLM-5.4 landed roughly where you'd expect a strong open-weight model to land.</p>

<h3>Z.ai's Internal Validation</h3>

<p>Z.ai ran a controlled experiment at the 30B parameter scale — same architecture, looped vs. unlooped — using about 10% more training compute for the looped version. Results: output length dropped 10–14% across benchmarks (up to 14.9% on MMLU-Pro), and gains were largest on math, scientific reasoning, and long-context tasks.</p>

<p>They validated the design at four scales: 1B, 4B, 30B, and 750B parameters.</p>

<h3>An Interesting Qualitative Finding</h3>

<p>At least one independent reviewer reported that GLM-5.4 surfaced application bugs and security vulnerabilities that Claude Fable 5.2 and other tested models missed. This aligns with the architecture's design — the double pass through loop layers gives the model more time to "notice" subtle issues. DataCamp's assessment is that GLM-5.4 is better used as a second reviewer than as a primary coding agent.</p>

<h2>UX Score: 7/10</h2>

<p>GLM-5.4 is accessible through Z.ai's GLM Coding Plan subscription, ZCode (zcode.z.ai), and Z.ai Chat (chat.z.ai). The interfaces are functional but not on the level of ChatGPT or Claude's polished experiences. It supports 1M token context windows — Z.ai recommends setting the client to 512,000 tokens for best coding results. The model also supports vision input for visual coding tasks.</p>

<p>One known issue Z.ai itself acknowledges: the model can get stuck in long "marathon thinking" loops. This is the trade-off of the Loop Transformer — the same mechanism that enables deeper reasoning can sometimes lead to excessive deliberation.</p>

<p>Speed is acceptable: Z.ai claims up to 200 tokens/s off-peak and 70–80 tokens/s under load.</p>

<h2>Quality Score: 8/10</h2>

<p>Based on available third-party tests and early user reports, GLM-5.4's reasoning quality is genuinely strong — especially for code review and security analysis. The Loop Transformer architecture appears to give the model a qualitative edge in deep analysis tasks. We're giving it an 8 based on KingBench results and the architecture's clear innovation, but this score may change once Z.ai publishes official benchmarks.</p>

<h2>Value Score: 7/10</h2>

<p>Without published API pricing, scoring value is difficult. Access currently requires a GLM Coding Plan subscription with weekly quotas reportedly 50% higher than GLM-5.3's. The model is not yet available on OpenRouter, Cursor, GitHub Copilot, or major cloud platforms (Vertex AI, Azure AI Foundry, AWS Bedrock). This limits its practical value significantly.</p>

<h2>Integration Score: 6/10</h2>

<p>This is GLM-5.4's weakest area. No API access is available yet — Z.ai says it will open after a safety evaluation. The model works in Claude Code (provider ID: "zai-coding-plan/glm-5.4") and Z.ai's own tools, but it's absent from the major AI platforms most developers use daily. Open weights are planned but not released — Z.ai mentions "safety hardening" with no announced date.</p>

<h2>Support Score: 6/10</h2>

<p>Z.ai has published no model card, no official benchmarks, and no detailed documentation. The lack of transparency is concerning for a model this architecturally ambitious. Support appears limited to Z.ai's own ecosystem.</p>

<h2>The Loop Transformer: Why It Matters Beyond GLM-5.4</h2>

<p>Even if GLM-5.4 itself isn't ready to replace your primary coding model, the Loop Transformer architecture is significant for the entire AI industry. Here's why:</p>

<ul>
  <li><strong>Efficiency:</strong> If you can match a 2T-parameter model's intelligence with 750B parameters by looping layers, the cost and energy savings are massive.</li>
  <li><strong>Scalability:</strong> Z.ai isn't alone — Thinking Machines' Inkling 2 Mini (released November 20) uses a similar approach with 26.4B total / 3.4B active parameters and middle layers running 3 times per token. The pattern is spreading.</li>
  <li><strong>Practical impact:</strong> Smaller effective models mean cheaper inference, faster deployment, and AI that runs on less powerful hardware.</li>
</ul>

<p>November 2026 may be remembered as the month the industry started questioning whether "bigger is always better." Loop Transformers suggest the answer is no.</p>

<h2>Who Should Use GLM-5.4 Today?</h2>

<ul>
  <li><strong>AI researchers and architecture enthusiasts:</strong> This is the most interesting model to study right now.</li>
  <li><strong>Code reviewers looking for a second opinion:</strong> GLM-5.4 catches issues other models miss. Use it as a reviewer, not a primary coder.</li>
  <li><strong>Wait-and-see developers:</strong> If you need a daily-driver coding model today, Claude Fable 5.2, Gemini 4 Neon, or GPT-6.2 Sol are safer bets. See our <a href="/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2</a> comparison for details. Check back when Z.ai publishes API pricing and benchmarks. See our <a href="/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2</a> comparison for details.</li>
</ul>

<h2>The Verdict</h2>

<p>GLM-5.4 earns a B+ — not for being the best coding model available today, but for introducing an architecture that could reshape the next generation of AI models. The Loop Transformer is real, it works, and it's already inspiring other teams. Z.ai just needs to open the doors wider: publish benchmarks, launch the API, and release those weights. Until then, it's a brilliant preview of where AI is heading, available to too few people to grade higher.</p>

<h2>Read Also</h2>
<ul>
  <li><a href="/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2: The November 2026 Showdown</a></li>
  <li><a href="/blog/claude-fable-5-2-review">Claude Fable 5.2 Review</a></li>
  <li><a href="/blog/best-ai-coding-tools-2026">Best AI Coding Tools in 2026</a></li>
</ul>
