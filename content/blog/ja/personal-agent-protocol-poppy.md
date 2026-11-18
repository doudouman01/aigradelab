---
title: "パーソナルエージェントプロトコル（Poppy）：AIエージェントがあなたの代わりに行動する新標準"
description: "SierraのPoppy 1.0でAIエージェントが企業と安全に接続。ShopifyとMeta Museが採用。仕組みと影響を解説。"
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-19"
readTime: "8 min read"
---

<h2>AIエージェントの新しい接続方法</h2>
<p>Sierraが2026年11月13日にPersonal Agent Protocol 1.0（通称Poppy）をリリース。個人のAIエージェントが企業のウェブサイト、API、ビジネスエージェントに安全に接続する方法を定義するオープン標準です。</p>

<h2>なぜPoppyが必要か</h2>
<p>AIエージェントがウェブを自律的に操作する時代、企業はエージェントを識別し、ユーザーの許可を確認し、適切なアクセスを提供する標準が必要。Poppyはその標準です。</p>

<h2>5つの構成要素</h2>
<ol>
<li><strong>発見：</strong>企業が<code>/.well-known/poppy.json</code>でエージェントの接続方法を公開</li>
<li><strong>識別：</strong>エージェントが自分の身元と代理するユーザーを証明</li>
<li><strong>認証：</strong>OAuthベースでユーザーが企業ページで直接ログイン</li>
<li><strong>権限レベル：</strong>完全禁止から完全委任まで5段階</li>
<li><strong>実行：</strong>ウェブ操作、API呼び出し、企業エージェントとの対話</li>
</ol>

<h2>誰が使っているか</h2>
<ul>
<li><strong>Shopify：</strong>マーチャントプラットフォーム全体でPoppyを有効化</li>
<li><strong>Meta Muse：</strong>ウェブサイト訪問時にPoppyを検索</li>
<li><strong>35社のパートナー：</strong>Walmart、Stripe、Bank of America、Visa、Cloudflare他</li>
</ul>

<h2>ChatGPT Walletとの比較</h2>
<p>ChatGPT Wallet（<a href="/ja/blog/chatgpt-wallet-review">レビュー</a>）はOpenAIのプロプライエタリ決済ソリューション。Poppyはオープン標準で、決済はカバーしない（将来の拡張として検討中）。アプローチは異なるが、目的は同じ：AIエージェントが企業と安全にやり取りすること。</p>

<h2>AIツールユーザーへの意味</h2>
<p>Poppyが普及すれば、AIアシスタントに「ホテルを予約して」「保険を比較して」と頼むだけで、エージェントが各企業と直接やり取りし、結果を返すようになります。ウェブの使い方が根本的に変わる可能性があります。</p>

<p><em>AIGradeLab、2026年11月。</em></p>
