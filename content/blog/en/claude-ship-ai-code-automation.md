---
title: "Claude Ship: Anthropic's AI Agents Now Review, Fix, and Approve Code"
description: "Anthropic launches Claude Ship, bundling Code Review with two new agents — PR Steward and auto-approval — to handle the full post-coding workflow. Here's what it means for dev teams."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Anthropic Bundles Its Code Agents Into Claude Ship</h2>

<p>On November 24, 2026, Anthropic announced <strong>Claude Ship</strong>, a unified set of AI agents designed to handle everything that happens after code is written. The bundle brings together the existing Code Review feature — already generally available — with two new agents currently in beta: <strong>PR Steward</strong> and a risk-based <strong>auto-approval system</strong>.</p>

<p>The launch reflects a shift in how AI coding tools are evolving. Writing code is no longer the bottleneck. Reviewing, fixing, and shipping it is.</p>

<h2>What Claude Ship Includes</h2>

<h3>1. Code Review (Generally Available)</h3>

<p>Launched in March 2026, Code Review dispatches a team of AI agents on every pull request. The agents work in parallel to find bugs, verify findings to filter out false positives, and rank issues by severity. Internally at Anthropic, the tool increased substantive review comments from 16% to 54% of PRs, with less than 1% of findings marked incorrect by engineers.</p>

<p>Reviews scale with complexity. Large or intricate pull requests receive more agents and deeper analysis; trivial changes get a lighter pass. The average review takes around 20 minutes and costs $15–25, billed on token usage.</p>

<h3>2. PR Steward (New — Beta)</h3>

<p>PR Steward is the second piece of the Claude Ship bundle, and it handles the tedious work that piles up after a code review. When a PR has failing CI checks, merge conflicts, or unresolved review feedback, PR Steward steps in to fix them automatically.</p>

<p>After every push, it comments on the PR with a summary of what it changed and instructions for how to roll it back. This is designed to keep the developer in control while removing the manual overhead that often causes PRs to stall in the queue.</p>

<h3>3. Risk-Based Auto-Approval (New — Beta)</h3>

<p>The third component introduces a tiered approval system. Low-risk modifications — documentation updates, internal features behind feature flags — may require no human approval. Medium-risk changes require one human reviewer. High-risk modifications need two.</p>

<p>An AI agent's approval never counts as a human's. The system is designed to accelerate safe changes without removing human judgment from decisions that matter.</p>

<h2>Why This Matters: The Review Bottleneck Is Real</h2>

<p>Anthropic's internal numbers tell the story. Claude Code's monorepo went from roughly 2,500 merged changes per day in May to more than 30,000 by September 2026. Claude now writes about 90% of Anthropic's code. Meanwhile, the revert rate dropped by more than 40% even as merged pull requests more than doubled.</p>

<p>The problem isn't code generation anymore — it's everything that comes after. Claude Ship is Anthropic's answer to the growing gap between how fast AI can write code and how fast humans can review it.</p>

<h2>How It Compares to Other AI Coding Tools</h2>

<p>Claude Ship occupies a different niche than tools like <strong>Cursor</strong> or <strong>GitHub Copilot</strong>, which focus on writing and editing code inside the IDE. Ship targets the post-coding workflow: review, CI fixes, and merge approval.</p>

<p>That said, it competes directly with GitHub's own Copilot code review features and emerging tools from startups building autonomous development agents. The key differentiator is depth — Anthropic's multi-agent approach is slower and more expensive than lightweight alternatives, but catches issues that surface-level scans miss.</p>

<p>For a full comparison of AI coding assistants, see our <a href="/en/blog/best-ai-coding-tools-2026">Best AI Coding Tools in 2026</a> guide. We also have detailed reviews of <a href="/en/blog/cursor-ai-review-2026">Cursor AI</a> and <a href="/en/blog/github-copilot-vs-cursor-2026">GitHub Copilot vs Cursor</a>.</p>

<h2>Pricing and Availability</h2>

<p>Code Review is generally available for Claude for Teams and Claude for Enterprise customers. PR Steward and auto-approval are in beta. Code Review is billed on token usage, typically $15–25 per review depending on PR size.</p>

<p>Claude Code's run-rate revenue has surpassed $2.5 billion since launch, suggesting strong enterprise adoption of Anthropic's developer tools.</p>

<h2>The Bottom Line</h2>

<p>Claude Ship is not a code generator — it's a code <em>shipper</em>. By bundling review, fix, and approval into a single workflow, Anthropic is betting that the next wave of developer productivity comes not from writing more code, but from shipping it faster and safer.</p>

<p>For teams already drowning in pull requests, that's a compelling pitch.</p>

<p><em>Need free developer utilities alongside your AI coding stack? Check out <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> for JSON formatters, code beautifiers, regex testers, and 100+ other tools — all free, no signup required.</em></p>
