---
title: "ChatGPT Is Retiring Advanced Voice: Everything You Need to Know About GPT-Live"
description: "OpenAI is sunsetting Advanced and Standard Voice on December 11, 2026. Here's what GPT-Live replaces, what changes, and how to prepare for the transition."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-21"
readTime: "7 分で読めます"
---

<h2>The Voice Transition Is Coming</h2>

<p>OpenAI has confirmed that ChatGPT will retire both Advanced Voice and Standard Voice on December 11, 2026. The company is consolidating its voice capabilities around GPT-Live, its newer and more capable voice model. If you use ChatGPT's voice features regularly, here's everything you need to know about the switch.</p>

<h2>What's Being Retired</h2>

<h3>Standard Voice</h3>

<p>Standard Voice was ChatGPT's original voice interaction mode — a cascade system that converted your speech to text, processed it through a text-based model, and converted the response back to speech. It worked, but conversations felt stilted. There were noticeable pauses between your question and the response, and the system couldn't handle interruptions naturally.</p>

<h3>Advanced Voice</h3>

<p>Advanced Voice launched in late 2024 as a significant upgrade. It introduced more natural-sounding voices, better handling of conversational patterns, and reduced latency. However, it was still fundamentally a cascade system — speech went through text before being processed — which limited how naturally the AI could converse.</p>

<h2>What GPT-Live Brings</h2>

<p>GPT-Live represents a fundamental architecture shift. Rather than the speech-to-text-to-speech cascade, GPT-Live processes audio natively. It can hear your tone, detect hesitation, understand emphasis, and respond in a way that feels more like a real conversation.</p>

<h3>Key Improvements Over Advanced Voice</h3>

<ul>
<li><strong>True full-duplex</strong> — GPT-Live can listen while speaking, allowing natural interruptions and conversational back-and-forth without awkward pauses</li>
<li><strong>Emotional awareness</strong> — The model picks up on tone and vocal cues, adjusting its responses accordingly</li>
<li><strong>Lower latency</strong> — Responses feel nearly instantaneous, eliminating the "thinking" gaps that made voice AI feel robotic</li>
<li><strong>Richer voice quality</strong> — More expressive and natural-sounding output voices</li>
<li><strong>Multi-turn context</strong> — Better at maintaining conversation context across long voice sessions</li>
</ul>

<h2>Timeline and Availability</h2>

<table>
<thead>
<tr><th>Date</th><th>Event</th></tr>
</thead>
<tbody>
<tr><td>November 10, 2026</td><td>OpenAI announces retirement of Advanced and Standard Voice</td></tr>
<tr><td>November 10 - December 10</td><td>Transition period — all three voice modes available</td></tr>
<tr><td>December 11, 2026</td><td>Advanced Voice and Standard Voice permanently disabled</td></tr>
<tr><td>December 11+</td><td>GPT-Live becomes the sole voice interaction mode</td></tr>
</tbody>
</table>

<h2>Who Is Affected?</h2>

<h3>ChatGPT Plus and Pro Subscribers</h3>

<p>If you're on a paid plan, you already have access to GPT-Live. The transition should be seamless — you're likely already using GPT-Live if you've used voice features recently, as OpenAI has been defaulting to it for months.</p>

<h3>無料プラン Users</h3>

<p>Free users who had limited access to Standard Voice will transition to limited GPT-Live access. The specifics of free-tier voice limits haven't been updated for the post-December landscape yet.</p>

<h3>API Developers</h3>

<p>Developers using the Audio API endpoints should check their integration. The legacy voice endpoints will be deprecated alongside the consumer features. OpenAI's GPT-Live API offers different capabilities and pricing compared to the previous voice APIs.</p>

<h3>Enterprise and Team Users</h3>

<p>Enterprise accounts with custom voice configurations should review their settings before December 11. Any workflows built around Advanced Voice's specific behavior patterns may need adjustment.</p>

<h2>What to Do Now</h2>

<h3>1. Test GPT-Live Before the Switch</h3>

<p>If you haven't used GPT-Live yet, start now. Open ChatGPT, tap the voice icon, and confirm you're using GPT-Live (it should be the default). Spend a few sessions getting comfortable with its conversational style.</p>

<h3>2. Update Your Workflows</h3>

<p>If you've built any processes around ChatGPT's voice features — daily briefings, brainstorming sessions, hands-free note-taking — test them with GPT-Live during the transition period to catch any behavioral differences.</p>

<h3>3. Check Your API 連携機能s</h3>

<p>Developers should review the GPT-Live API documentation and test their integrations well before the December 11 deadline. Don't wait for the last day.</p>

<h3>4. Explore Alternatives</h3>

<p>GPT-Live isn't the only game in town for voice AI. If you're evaluating options:</p>

<ul>
<li><strong>Google Gemini</strong> — Offers voice interaction through the Gemini app and Google Assistant</li>
<li><strong>Claude</strong> — Anthropic offers voice mode with CarPlay support</li>
<li><strong>ElevenLabs</strong> — For custom voice generation and voice-first applications</li>
</ul>

<h2>The Bigger Picture: Voice AI Is デメリットolidating</h2>

<p>OpenAI's decision to retire older voice modes reflects a broader trend in AI: consolidation around native multimodal models. Rather than bolting voice capabilities onto text models, the industry is building models that understand audio, text, images, and video natively.</p>

<p>This same trend is visible across the market:</p>

<ul>
<li>Google's Gemini 4 models are natively multimodal</li>
<li>Bland AI just launched Tofu-1, a native speech-to-speech model</li>
<li>Meta's Muse agent works across text and voice</li>
</ul>

<p>The cascade approach — speech to text to model to speech — is becoming a legacy architecture. If your business relies on voice AI, planning for native multimodal is the right long-term bet.</p>

<h2>まとめ</h2>

<p>The retirement of Advanced and Standard Voice is a cleanup, not a downgrade. GPT-Live is objectively better in every measurable dimension. The main risk is for developers and businesses with hard-coded integrations against the old API endpoints — test now, migrate early, and you'll be fine.</p>

<p>For most users, you won't notice a thing on December 12. Voice in ChatGPT will just work — and work better than it ever has.</p>

<p><em>Need to organize your AI tool workflow? Check out the free <a href="https://toolcraftkit.com">Pomodoro Timer</a> and productivity tools at ツールCraftKit to stay on top of your AI evaluations.</em></p>
