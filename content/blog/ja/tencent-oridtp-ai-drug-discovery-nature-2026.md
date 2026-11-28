---
title: "TencentのAIがデュアルターゲット創薬ペプチドを設計：94%腫瘍縮小がNatureに掲載"
description: "TencentのORIDTPプラットフォームはAIを使用して、肥満、糖尿病、がんに対して2つの治療標的を同時に狙うペプチドを設計します。Natureに掲載された結果はマウスで94.2%の腫瘍縮小を示しています。"
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-28"
readTime: "9 min read"
---

<h2>AI創薬が大きな検証を獲得</h2>
<p>Tencent Holdingsは<strong>Nature</strong>に<strong>ORIDTP</strong>（Oriented Reinforcement-Iterative Design of Targeted Peptides）に関する画期的な論文を発表しました。これは<strong>2つの治療標的を同時に</strong>狙えるペプチドを設計するAIプラットフォームです。結果は顕著です：ORIDTPが設計したデュアルターゲットペプチドは、マウス研究で<strong>94.2%の腫瘍体積の縮小</strong>を達成し、代謝マーカーを大幅に改善しました。</p>
<p><strong>モナシュ大学を含む8つの機関</strong>の研究者とともにTencentのAI for Life Sciences Labが主導したこの研究は、ソーシャルメディアやゲームで知られるテック企業から生まれた、製薬研究を変革するAIの可能性の最も説得力のあるデモンストレーションの一つです。</p>

<h2>ORIDTPの機能</h2>
<p>従来の創薬は通常、単一の生物学的メカニズムを標的にします。ORIDTPの画期的な点は、<strong>2つの標的を同時に</strong>エンゲージするペプチドを設計することです：</p>
<ul>
  <li><strong>GLP-1受容体（GLP-1R）：</strong>大型薬のOzempicやWegoyが使用するのと同じ標的。GLP-1Rアゴニストは食欲、血糖値、代謝を調節します</li>
  <li><strong>2番目の補完的標的：</strong>用途に応じて、ORIDTPはがん、糖尿病、肥満に関連する2番目の受容体を同時に活性化するペプチドを設計します</li>
</ul>
<p>デュアルターゲットアプローチが重要なのは、多くの疾患が複雑な生物学的ネットワークを含み、単一の経路を標的にすると限られた効果しか得られないためです。2つの標的を同時に狙うことで、デュアルアクションペプチドはシングルターゲット薬では達成できない相乗的な治療効果を実現できます。</p>

<h2>ORIDTPの仕組み</h2>
<p>AIパイプラインは複数の技術を新しい方法で組み合わせます：</p>
<ul>
  <li><strong>少数ショット能動学習：</strong>何百万もの例を必要とするAIシステムとは異なり、ORIDTPは少量のデータセットから学習します ― 実験データの生成が高価な創薬では重要です</li>
  <li><strong>インシリコペプチド生成：</strong>AIが候補ペプチド構造をコンピュータ上で生成し、実験的に探索不可能な広大な化学空間を探索します</li>
  <li><strong>結合親和性の成熟：</strong>生成されたペプチドは標的受容体により強く結合するよう精緻化されます</li>
  <li><strong>ウェットラボフィードバックループ：</strong>最も有望なAI設計ペプチドが合成され実験でテストされます。結果はAIモデルにフィードバックされ、将来の世代を改善します</li>
  <li><strong>反復強化：</strong>生成-テスト-学習の複数サイクルでペプチドの生物活性を段階的に向上させます</li>
</ul>
<p>4回の反復ラウンドの後、ORIDTPは<strong>EC50値が8.1 pM</strong>（ピコモル）まで低いペプチドを設計しました ― つまり極めて低い濃度で活性があることを意味します。比較すると、既知の最高生物活性を持つ天然ペプチド（40.8 pM）を約<strong>5倍</strong>上回っています。</p>

<h2>結果：がん、肥満、糖尿病</h2>
<p>マウス研究（人間での臨床試験はまだ）で、ORIDTPが設計したペプチドは以下を達成しました：</p>
<table>
  <thead>
    <tr><th>用途</th><th>主要結果</th></tr>
  </thead>
  <tbody>
    <tr><td>がん（腫瘍モデル）</td><td>94.2%の腫瘍体積縮小</td></tr>
    <tr><td>代謝マーカー</td><td>グルコースおよびインスリン指標の大幅改善</td></tr>
    <tr><td>デュアルターゲット結合</td><td>両方の受容体標的で同時に活性を維持</td></tr>
    <tr><td>天然ペプチドとの生物活性比較</td><td>最良の既知天然ペプチドの最大5倍の効力</td></tr>
  </tbody>
</table>
<p><strong>重要な注意：</strong>これらの結果はマウスのみのものです。ヒト臨床試験は実施されていません。マウスの結果はヒトの有効性に直接変換されないことが多く、マウス研究から承認薬までの道のりは通常10〜15年かかり、約90%の失敗率です。</p>

<h2>なぜテック企業が創薬を行うのか</h2>
<p>Tencentの製薬AIへの関与は、テック企業がヘルスケアに参入するより広いトレンドの一部です：</p>
<ul>
  <li><strong>TencentのAI for Life Sciences Lab</strong>は数年にわたり分子シミュレーションと創薬設計の能力を構築してきました</li>
  <li>ORIDTPは<strong>TencentのWorkBuddy</strong>エージェントAI製品に統合されており、同社が創薬AIを研究だけでなく商業的提供として見ていることを示唆しています</li>
  <li>AI創薬を追求する他のテック企業には<strong>Google DeepMind</strong>（AlphaFold）、<strong>Microsoft</strong>（タンパク質構造予測）、<strong>Baidu</strong>（PaddleHelix）があります</li>
  <li><strong>Insilico Medicine</strong>や<strong>MindRank</strong>などの中国AI創薬企業はすでに臨床試験中の候補を持っています</li>
</ul>

<h2>GLP-1コネクション：AIと減量薬ブームの出会い</h2>
<p>ORIDTPのGLP-1受容体ペプチドへの焦点は、製薬開発の最もホットな分野の中心に位置しています。世界の肥満治療市場は<strong>2030年までに600億ドルに達する</strong>と予測されており、以下の薬が牽引しています：</p>
<ul>
  <li><strong>セマグルチド</strong>（Ozempic/Wegovy）― Novo NordiskのブロックバスターGLP-1アゴニスト</li>
  <li><strong>チルゼパチド</strong>（Mounjaro/Zepbound）― Eli LillyのデュアルGIP/GLP-1アゴニスト</li>
</ul>
<p>ORIDTPが設計したペプチドは、追加の経路を標的にすることで既存薬に対する利点を提供できる可能性があります ― 副作用を軽減しながら有効性を向上させる可能性があります。AIが設計したペプチドは、従来の製薬アプローチよりも迅速かつ安価に開発できる可能性もあります。</p>

<h2>AI創薬：分野の現状</h2>
<p>TencentのNature掲載は、2026年のAI創薬マイルストーンの増加する一群に加わります：</p>
<ul>
  <li><strong>スタンフォードの研究者</strong>がPeptide PredictorというAIモデルを使って「天然のOzempic」（BRPペプチド）を発見し、Natureに掲載</li>
  <li><strong>Insilico Medicine</strong>（中国）は肥満を標的とするAI設計の薬剤候補（ISM0676）を前臨床開発中</li>
  <li><strong>Penn Engineers</strong>は特定の生物学的効果を持つペプチドを設計するAIフレームワークTD3Bを開発し、ICML 2026で発表</li>
  <li><strong>FDAはAIツールを承認</strong>し、乳がんリスク予測に使用。ヘルスケアにおけるAIの規制受容の拡大を示唆 ― <a href="/ja/blog/neuralink-fda-pivotal-trial-brain-chip-paralysis">Neuralink FDA報道を読む</a></li>
</ul>

<h2>推奨AIヘルスケアツール</h2>
<p>ヘルスケアの研究者・専門家向け：</p>
<ul>
  <li><strong>Perplexity AI</strong>は医学文献の調査と統合に優れています — <a href="/ja/blog/perplexity-ai-review-2026">レビューを読む</a></li>
  <li><strong>ChatGPT</strong>は研究論文や臨床データの分析に優れた機能を提供 — <a href="/ja/blog/chatgpt-review-2026">レビューを見る</a></li>
</ul>
<p>ヘルスケアの専門家・研究者向けに、<a href="https://toolcraftkit.com">ToolCraftKit</a>は学術論文用の<a href="https://toolcraftkit.com/tools/citation-generator">Citation Generator</a>、<a href="https://toolcraftkit.com/tools/blood-pressure-tracker">Blood Pressure Tracker</a>、<a href="https://toolcraftkit.com/tools/medication-reminder">Medication Reminder Planner</a>を含む無料ツールを提供しています。AIとヘルスケアについて出版する研究者には、<a href="https://indiepress.gumroad.com">IndiePress Toolkit</a>が科学・技術コンテンツの自費出版リソースを提供しています。</p>

<h2>結論</h2>
<p>TencentのNature掲載ORIDTP論文は、テクノロジーの2つの最も重要なトレンド ― AI能力と製薬イノベーション ― の収束を表しています。AIが前臨床モデルで天然の代替品を劇的に上回るデュアルターゲットペプチドを設計できることを実証することで、この研究は人工知能によって創薬が根本的に加速される未来を検証しています。94.2%の腫瘍縮小と天然ペプチドの生物活性に対する5倍の改善は見出しの数字ですが、真の画期的進歩は方法論にあります：事実上あらゆる疾患標的に適用できる再利用可能なAIパイプラインです。ORIDTPのアプローチがマウスからヒトへの長い道のりを生き延びれば、医薬品の作り方を再定義する可能性があります。</p>
