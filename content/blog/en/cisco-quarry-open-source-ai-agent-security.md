---
title: "Cisco Open-Sources Quarry: A Security Engine That Watches AI Agents"
description: "Cisco has open-sourced Quarry, a behavior detection engine designed to monitor AI agents for malicious or rogue activity. Here's why AI agent security is becoming critical — and how Quarry works."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Cisco Tackles the AI Agent Security Problem</h2>

<p>As AI agents become more autonomous — writing code, browsing the web, managing files, calling APIs — the question of <strong>who watches the agents</strong> has become urgent. Cisco's answer is <strong>Quarry</strong>, an open-source behavior detection engine designed to monitor AI agents in real time and flag when they go off the rails.</p>

<p>The tool was released on GitHub and covers a broad range of AI agent scenarios: single- and multi-turn LLM conversations, agentic tool use, Model Context Protocol (MCP) interactions, and multimodal inputs. Plugins are already available for <strong>Claude Code</strong>, <strong>Codex</strong>, and other MCP-compatible agents.</p>

<h2>Why AI Agent Security Matters Now</h2>

<p>Most existing AI security tools focus on what happens at the model level — prompt injection, jailbreaking, harmful outputs. Quarry takes a different approach: it watches what agents <em>do</em>, not just what they say.</p>

<p>This distinction matters because modern AI agents can:</p>

<ul>
<li>Execute code on servers and local machines</li>
<li>Read, write, and delete files</li>
<li>Make API calls to external services</li>
<li>Browse the web and interact with live websites</li>
<li>Chain together multiple tools in complex workflows</li>
</ul>

<p>A prompt injection that makes a chatbot say something inappropriate is one thing. A prompt injection that makes an autonomous coding agent delete a production database is something else entirely. Quarry is built for the second scenario.</p>

<h2>How Quarry Works</h2>

<p>Quarry operates as a behavior detection layer that sits between an AI agent and its tools. It evaluates agent actions against a configurable rule set, using the <strong>Cisco AI Security & Safety Taxonomy</strong> as its framework.</p>

<p>Key features:</p>

<ul>
<li><strong>Rule-based detection:</strong> Security teams define rules for what constitutes suspicious behavior — unauthorized file access, unexpected network calls, privilege escalation attempts, data exfiltration patterns.</li>
<li><strong>Multi-turn awareness:</strong> Quarry tracks agent behavior across conversation turns, catching attacks that unfold gradually rather than in a single prompt.</li>
<li><strong>MCP integration:</strong> Native support for Model Context Protocol means Quarry can monitor the specific tools an agent has access to and flag unusual patterns in tool usage.</li>
<li><strong>Pluggable architecture:</strong> Cisco provides plugins for popular agent frameworks and encourages the community to build more.</li>
</ul>

<p>The project's GitHub repository includes installation instructions, supported Python versions, configuration examples, and rule-writing guidance.</p>

<h2>The Bigger Picture: AI Agent Security Is a New Category</h2>

<p>Quarry is part of a broader trend. As AI agents move from demos to production, an entire security category is emerging around them:</p>

<ul>
<li><strong>Cisco AI Defense</strong> — Cisco's commercial AI security suite, now being written entirely using OpenAI's Codex, with features delivered in weeks instead of quarters.</li>
<li><strong>Anthropic's tiered approval system</strong> — Part of the new Claude Ship bundle, where code changes are classified by risk level and require varying levels of human approval. <a href="/en/blog/claude-ship-ai-code-automation">Read our coverage here</a>.</li>
<li><strong>OpenAI's Daybreak Defense Network</strong> — A cybersecurity partnership with Cisco exploring AI-powered threat triage.</li>
</ul>

<p>The pattern is clear: the companies building the most capable agents are also building the guardrails. The question is whether open-source tools like Quarry can keep pace with the speed of agent development.</p>

<h2>Who Should Use Quarry</h2>

<p>Quarry is primarily relevant for:</p>

<ul>
<li><strong>Development teams</strong> deploying AI coding agents (Claude Code, Codex, Cursor) in production environments.</li>
<li><strong>Security teams</strong> responsible for monitoring AI-powered workflows across the organization.</li>
<li><strong>Platform builders</strong> creating agentic AI products who need a detection layer without building one from scratch.</li>
</ul>

<p>If you're evaluating AI tools for development, see our <a href="/en/blog/best-ai-coding-tools-2026">Best AI Coding Tools in 2026</a> and <a href="/en/blog/best-ai-tools-developers-2026">Best AI Tools for Developers</a> guides for the full landscape.</p>

<h2>The Bottom Line</h2>

<p>AI agents are getting more powerful every month, and the security tooling needs to keep up. Cisco's decision to open-source Quarry is a smart move — it creates a shared foundation for agent security instead of leaving every organization to build its own. Whether Quarry becomes the standard or just one of many options, the category itself is here to stay.</p>

<p><em>Building with AI agents? Make sure your developer toolkit is covered. Check out <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> for free developer utilities — JSON validators, regex testers, hash generators, and more.</em></p>
