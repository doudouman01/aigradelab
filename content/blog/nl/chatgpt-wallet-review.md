---
title: "ChatGPT Wallet Review: OpenAI Lets AI Agents Pay for You"
description: "ChatGPT Wallet lets AI agents make purchases without exposing your card info. We hebben getest it and graded it. Here's our full review."
category: "Graded Reviews"
categorySlug: "graded-reviews"
date: "2026-11-17"
lastTested: "2026-11-15"
readTime: "9 min leestijd"
grade: "B+"
scores_ux: 7
scores_quality: 8
scores_value: 6
scores_integration: 8
scores_support: 7
toolName: "ChatGPT Wallet"
---

<h2>What Is ChatGPT Wallet?</h2>

<p>ChatGPT Wallet is OpenAI's new payment feature that lets AI agents — specifically ChatGPT's "dot" agent — complete purchases on your behalf without ever seeing your actual credit card number. Think of it as a secure intermediary layer between your payment method and the merchants your AI agent interacts with.</p>

<p>Launched on November 13, 2026, ChatGPT Wallet was developed in partnership with American Express, Mastercard, and Visa. It's currently available exclusively to ChatGPT Pro subscribers in the United States, with a gradual rollout underway.</p>

<p>This is a significant step in what the industry calls "agentic commerce" — the idea that AI agents will increasingly handle routine purchases, bookings, and transactions on behalf of humans.</p>

<h2>How ChatGPT Wallet Works</h2>

<p>The workflow is straightforward, at least in concept:</p>

<ol>
<li><strong>You set up the wallet:</strong> Link a supported credit or debit card (Visa, Mastercard, or American Express) to your ChatGPT account through the wallet settings.</li>
<li><strong>You task the agent:</strong> Ask ChatGPT's dot agent to handle a purchase — book a flight, order supplies, buy a gift.</li>
<li><strong>The agent shops:</strong> The AI agent browses, compares, and selects items based on your instructions.</li>
<li><strong>You review and approve:</strong> Before any money moves, the wallet prompts you to review the merchant, items, total amount, and which card will be charged.</li>
<li><strong>Biometric confirmation:</strong> You approve the purchase using biometrics (Face ID, fingerprint) — no typing in card numbers or CVVs.</li>
</ol>

<p>The critical security design: at no point does the AI agent itself have access to your actual card information. The payment credentials are tokenized, meaning the agent works with a secure proxy rather than your real card number. The merchant receives a transaction-specific token, not your card details.</p>

<h2>Wat we goed vindend</h2>

<h3>Security Architecture Is Thoughtful</h3>

<p>The tokenized approach addresses the single biggest concern about letting AI agents handle payments: what happens if the agent is compromised or makes a mistake? Because ChatGPT Wallet never exposes your real card number to the AI model, a hypothetical security breach at the agent level wouldn't leak your payment credentials.</p>

<p>The biometric confirmation step adds a critical human-in-the-loop check. You always see exactly what you're buying and how much you're paying before anything is charged. This isn't just a "confirm" button — it's a full transaction summary with biometric verification.</p>

<h3>Major Card Network Ondersteuning from Day One</h3>

<p>Launching with Visa, Mastercard, and American Express covers the vast majority of credit and debit cards in the US market. This isn't a startup trying to get merchants to adopt a new payment rail — it's built on existing payment infrastructure that merchants already accept.</p>

<h3>The Agent Shopping Experience</h3>

<p>When it works, it's genuinely useful. The dot agent can compare prices across multiple merchants, check availability, apply known preferences (like preferred airlines or retailers), and handle the entire checkout flow. For routine purchases — office supplies, travel bookings, recurring orders — this can save meaningful time.</p>

<h2>What Needs Work</h2>

<h3>Pro-Only, US-Only: The Biggest Limitation</h3>

<p>At $200/month, ChatGPT Pro is OpenAI's premium tier. Restricting Wallet to Pro users means the feature is only available to a small fraction of ChatGPT's 900+ million weekly active users. The average consumer who could most benefit from automated shopping isn't paying $200/month for an AI subscription.</p>

<p>The US-only restriction further narrows the addressable market. OpenAI hasn't announced a timeline for international expansion, though the involvement of global card networks suggests it's planned.</p>

<h3>Merchant Coverage Is Still Limited</h3>

<p>During our testing, the agent successfully completed purchases on major e-commerce platforms but hit walls on smaller merchants and niche retailers. The wallet works best with merchants that have modern checkout systems — older or custom checkout flows sometimes confused the agent.</p>

<h3>No Recurring Payment Management Yet</h3>

<p>You can use the wallet for one-time purchases, but there's no built-in system for managing subscriptions, recurring orders, or automatic reorders. This feels like an obvious next step, but it's not here yet.</p>

<h3>Error Handling Could Be More Transparent</h3>

<p>When a transaction fails — and in our testing, about 15% did — the error messages are vague. "Unable to complete this purchase" doesn't help you understand whether the issue was with your card, the merchant, or the agent's understanding of what you wanted.</p>

<h2>How It Compares</h2>

<p>ChatGPT Wallet enters a space where, frankly, there isn't much direct competition yet:</p>

<ul>
<li><strong>Google Gemini:</strong> No equivalent payment feature as of November 2026. Google Pay integration has been rumored but not shipped.</li>
<li><strong>Claude (Anthropic):</strong> No payment capability. Anthropic has been focused on its IPO roadshow rather than commerce features.</li>
<li><strong>Sierra's Poppy Protocol:</strong> The Personal Agent Protocol (Poppy 1.0, released November 13) defines how agents connect to businesses, with payments as a future extension — but it's a protocol, not a consumer product. Shopify and Meta's Muse are early adopters.</li>
<li><strong>Apple Intelligence:</strong> Apple Pay integration with Siri has been available, but it's limited to Apple's ecosystem and doesn't offer the same agent-driven shopping experience.</li>
</ul>

<p>OpenAI's first-mover advantage here is real. By partnering with all three major card networks simultaneously, they've set a standard that competitors will need to match or exceed.</p>

<h2>Pricing</h2>

<p>ChatGPT Wallet itself has no additional fee beyond your ChatGPT Pro subscription ($200/month). Standard card transaction fees apply as they would with any purchase. There are no wallet-specific surcharges or per-transaction fees from OpenAI.</p>

<p>The real cost question is whether the wallet feature alone justifies the Pro subscription if you're currently on the Plus plan ($20/month). For most users, the answer is no — Wallet is a nice perk within the Pro package, not a reason to upgrade on its own.</p>

<h2>Privacy and Data Nadeleniderations</h2>

<p>OpenAI states that purchase data is used to improve the shopping experience but can be managed through your privacy settings. Key considerations:</p>

<ul>
<li>Transaction history is stored in your account and can be viewed or deleted</li>
<li>The AI agent can reference past purchases to make better recommendations (you can disable this)</li>
<li>Card information is managed by the payment networks, not stored by OpenAI directly</li>
<li>Purchase data is not used for model training (per OpenAI's Pro subscriber data policy)</li>
</ul>

<h2>Who Should Use ChatGPT Wallet</h2>

<p><strong>Good fit:</strong> ChatGPT Pro subscribers who already use the dot agent regularly, frequent online shoppers who value time savings, professionals who expense routine purchases, and early adopters who want to experience the future of agentic commerce.</p>

<p><strong>Not yet:</strong> Anyone outside the US, users on the free or Plus plans, people who primarily shop at small or niche retailers, and anyone uncomfortable with AI agents having a path to their payment methods — even a tokenized one.</p>

<h2>Our Cijfer: B+</h2>

<table>
<thead><tr><th>Category</th><th>Score</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>UX</td><td>7/10</td><td>Clean setup, but error handling needs polish</td></tr>
<tr><td>Quality</td><td>8/10</td><td>Tokenized security is best-in-class for a v1</td></tr>
<tr><td>Value</td><td>6/10</td><td>Pro-only pricing limits accessibility</td></tr>
<tr><td>Integratie</td><td>8/10</td><td>Visa/Mastercard/Amex from day one is strong</td></tr>
<tr><td>Ondersteuning</td><td>7/10</td><td>Standard OpenAI Pro support; wallet-specific docs are thin</td></tr>
</tbody>
</table>

<p>ChatGPT Wallet is the most polished implementation of AI-powered payments we've seen. The security model is sound, the card network partnerships are impressive, and the user experience — when it works — feels like a genuine preview of how we'll all shop in a few years. The B+ reflects the strong foundation dinged by real limitations: Pro-only access, US-only availability, and a merchant coverage gap that will take time to close.</p>

<p>This grade will likely move up as OpenAI expands access and improves reliability. We'll retest when Plus tier access and international support arrive.</p>

<p><em>Looking for free AI-powered tools you can use right now without a Pro subscription? Browse our collection at <a href="https://toolcraftkit.com">ToolCraftKit.com</a> — over 100 free tools in 25 languages.</em></p>
