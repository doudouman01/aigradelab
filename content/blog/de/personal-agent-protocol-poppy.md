---
title: "Personal Agent Protocol (Poppy): The New Standard That Lets AI Agents Act on Your Behalf"
description: "Sierra released Poppy 1.0 on November 13, 2026 — an open protocol that defines how personal AI agents connect to businesses, authenticate users, and complete tasks. Shopify and Meta are already on board."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-19"
readTime: "8 Min. Lesezeit"
---

<h2>AI Agents Just Got a Front Door to Every Business</h2>

<p>On November 13, 2026, Sierra released Personal Agent Protocol 1.0 — an open standard it calls <strong>Poppy</strong> — that defines how a person's AI agent connects to a business through its website, APIs, or business agent. The protocol is already live: Shopify auto-enabled it across its entire merchant platform, and Meta's Muse agent now looks for Poppy when visiting any website.</p>

<p>This is not a theoretical spec. It's deployed infrastructure that's changing how AI agents interact with the commercial internet right now.</p>

<h2>Why Poppy Exists</h2>

<p>The trigger was a real conflict. In September 2026, Amazon blocked Meta's Muse agent from its store, citing scraping concerns. That happened just 12 days after Muse launched. The incident exposed a fundamental problem: there was no standard way for AI agents to identify themselves, authenticate users, and interact with businesses.</p>

<p>Without a protocol, every agent-to-business interaction was essentially web scraping — a legal and technical gray area that companies like Amazon weren't willing to tolerate.</p>

<p>Sierra (co-founded by former Salesforce CEO Bret Taylor) and Meta developed Poppy to solve this. The protocol gives businesses a way to recognize when they're dealing with an AI agent, verify who it represents, and control what it can do.</p>

<h2>How Poppy Works: Five Building Blocks</h2>

<p>Poppy is built on five core components that work together:</p>

<h3>1. Discovery</h3>

<p>Businesses publish a <code>/.well-known/poppy.json</code> file on their website — similar to how <code>robots.txt</code> tells search crawlers what to index. This file declares how agents can connect, what login methods are available, and what capabilities are exposed. Any AI agent can read this file to understand how to interact with the business.</p>

<h3>2. Identity</h3>

<p>When an AI agent arrives, the business can clearly identify that it's dealing with "User X's AI agent" rather than an anonymous bot. The agent presents cryptographic credentials (client_id, public key, callback address) that establish its identity. This is critical — businesses need to know they're serving a legitimate agent, not a scraper or attacker.</p>

<h3>3. Authentication (OAuth-Based)</h3>

<p>Poppy uses OAuth, the same standard that powers "Sign in with Google" and similar flows. The user signs in on the business's own page — the AI agent never sees the password. After authentication, the agent receives a scoped session token with minimal permissions. This means your agent can browse your Amazon account, but only with the permissions you explicitly grant.</p>

<h3>4. Tiered Permissions</h3>

<p>Permissions are split into five levels, from fully prohibited to full access. Businesses decide which level to offer, and users decide how much to grant. At the basic level (<code>poppy:read</code>), an agent can check balances and view orders. Write operations like making purchases require separate <code>poppy:write</code> authorization.</p>

<h3>5. Cross-Channel Sessions</h3>

<p>A single authentication token works across the business's website, API, and even its own AI agent. If you authenticate with a retailer through Poppy, your agent can seamlessly move between browsing products on the website, checking inventory through the API, and negotiating returns with the retailer's AI customer service agent — all in one session.</p>

<h2>Who's Already Using Poppy?</h2>

<p>The launch partners represent a serious cross-section of commerce:</p>

<table>
  <thead>
    <tr>
      <th>Company</th>
      <th>Role</th>
      <th>What They're Doing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Shopify</strong></td>
      <td>Platform partner</td>
      <td>Auto-enabled Poppy across all merchants — millions of stores are now agent-accessible</td>
    </tr>
    <tr>
      <td><strong>Meta (Muse)</strong></td>
      <td>Agent partner</td>
      <td>Muse now checks for Poppy when visiting any website, using it to authenticate and transact</td>
    </tr>
    <tr>
      <td><strong>Walmart</strong></td>
      <td>Founding partner</td>
      <td>Retail agent access for shopping and order management</td>
    </tr>
    <tr>
      <td><strong>Stripe</strong></td>
      <td>Payments partner</td>
      <td>Contributing payment capabilities so agents can complete purchases</td>
    </tr>
    <tr>
      <td><strong>Rocket</strong></td>
      <td>Finance partner</td>
      <td>Demonstrated Muse getting pre-approved for a mortgage through Poppy at Sierra Summit</td>
    </tr>
  </tbody>
</table>

<p>The full design partner list includes 35+ companies: Adyen, Bank of America, BBVA, Chime, Cigna, Cloudflare, Comcast, DIRECTV, ElevenLabs, FOX, Gap Inc., GEICO, Hertz, and many more. This isn't a startup experiment — it's enterprise infrastructure.</p>

<h2>Poppy + ChatGPT Wallet: The Commerce Stack Takes Shape</h2>

<p>Poppy's release comes the same week as OpenAI's ChatGPT Wallet launch (November 13). Together, they reveal the emerging architecture of AI-powered commerce:</p>

<ul>
  <li><strong>Poppy</strong> handles identity and authorization — how an agent proves who it represents and what it's allowed to do</li>
  <li><strong>ChatGPT Wallet</strong> handles payment — how an agent pays for things without exposing card numbers</li>
  <li><strong>Business agents (Sierra, Genesys, etc.)</strong> handle fulfillment — the business-side AI that processes orders and handles customer service</li>
</ul>

<p>Put them together and you get a world where your AI agent can browse Shopify stores, authenticate with your account, select products, pay with your wallet, and handle returns — all without you opening a browser.</p>

<h2>What This Means for Businesses</h2>

<p>If you run an online store, Poppy should be on your radar immediately. Here's why:</p>

<h3>The Distribution Shift</h3>

<p>When Shopify auto-enabled Poppy across its platform, it instantly made millions of stores accessible to AI agents. If your store is on Shopify, you're already in the protocol — agents can already discover and interact with you. If you're not on Shopify, you're invisible to every agent that uses Poppy for discovery.</p>

<h3>Implementation</h3>

<p>For non-Shopify businesses, implementing Poppy requires:</p>

<ol>
  <li>Publishing a <code>/.well-known/poppy.json</code> discovery file</li>
  <li>Setting up OAuth endpoints for agent authentication</li>
  <li>Defining permission levels and capabilities</li>
  <li>Testing with agent partners (Meta Muse is the primary test agent right now)</li>
</ol>

<p>Poppy is built on existing standards (OAuth, JWT, HTTPS, OpenAPI, MCP), so most businesses can implement it using tools they already have.</p>

<h2>What This Means for AI Tool Users</h2>

<p>If you use AI agents — Claude, ChatGPT, Gemini, or Meta's Muse — Poppy matters because it's the infrastructure that will determine <strong>what your agent can actually do for you</strong>.</p>

<p>Right now, most AI agents are limited to answering questions and generating content. Poppy opens the door to agents that:</p>

<ul>
  <li>Shop for you across any Poppy-enabled store</li>
  <li>Manage your subscriptions and accounts</li>
  <li>Handle customer service interactions</li>
  <li>Compare prices and find deals across multiple retailers</li>
  <li>Get pre-approved for financial products</li>
</ul>

<p>The key word is "you." Poppy is designed with user control at its center. You authenticate, you grant permissions, you can revoke access at any time. The agent acts on your behalf, not on its own.</p>

<h2>Security Nachteileiderations</h2>

<p>Poppy's security model is worth examining closely:</p>

<ul>
  <li><strong>Users sign in themselves:</strong> The agent never sees your password. Authentication happens on the business's own page</li>
  <li><strong>Minimal permissions:</strong> Agents get the least access needed for the task. Reading your order history doesn't grant permission to place orders</li>
  <li><strong>Full audit trail:</strong> Businesses can see the complete history of what an agent did in a session</li>
  <li><strong>Instant revocation:</strong> Users can disconnect any agent from any account at any time</li>
  <li><strong>DPoP (Demonstration of Proof-of-Possession):</strong> Signed assertions prevent token theft — a stolen token can't be used by a different agent</li>
</ul>

<p>The model is sound in theory. The real test will be at scale — when millions of agents are transacting simultaneously across thousands of businesses.</p>

<h2>Fazit</h2>

<p>Poppy 1.0 is one of those infrastructure releases that doesn't get the headlines of a new model launch but may end up mattering more. It's the plumbing that will enable AI agents to move from "answering questions" to "doing things" — and doing things means interacting with businesses on your behalf.</p>

<p>The speed of adoption is what makes Poppy notable. Shopify's platform-wide rollout and Meta's Muse integration mean Poppy is already live at massive scale. If other ecommerce platforms follow, the protocol could become the standard way AI agents interact with the commercial internet within months, not years.</p>

<p><em>Building AI-powered tools? Explore the free utilities at <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> — QR generators, invoice builders, PDF tools, and more.</em></p>
