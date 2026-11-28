---
title: "GoogleがWorkspace AIエージェントに2027年2月のMCP期限を設定：新プロトコルへの移行が必須に"
description: "Googleは2027年2月1日までにすべてのAIエージェントにWorkspace MCP サーバーの使用を義務付けます。開発者、企業、AIエージェントエコシステムにとって何が変わるか — 新しい使用量ティアと管理者コントロールも含めて解説します。"
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-28"
readTime: "9 min read"
---

<h2>GoogleがAIエージェントのルールを書き換える</h2>
<p>Googleは、すべての<strong>AIエージェントおよび類似のアクセスツール</strong>がWorkspaceデータにアクセスするために、従来のREST APIではなく、<strong>Workspace MCP（Model Context Protocol）サーバー</strong>または<strong>Workspace CLI</strong>を使用する必要があると発表しました。技術的な強制は<strong>2027年2月1日</strong>から開始され、開発者にはおよそ2ヶ月の移行期間があります。</p>
<p>両ツールは現在<strong>一般提供</strong>されており、<strong>Gmail、Drive、Docs、Sheets、Slides、Calendar、Chat、Tasks</strong>をカバーし、<strong>Keepも近日対応予定</strong>です。この変更は、新しいWorkspace AIツール補遺、2段階の使用量課金、強化された管理者コントロールとともに実施されます — プラットフォームのローンチ以来、サードパーティツールがGoogle Workspaceと連携する方法における最も重要な変化です。</p>

<h2>2027年2月1日に何が変わるか</h2>
<p>コアとなる変更はプロトコルの移行です：</p>
<table>
  <thead>
    <tr><th>2027年2月1日以前</th><th>2027年2月1日以降</th></tr>
  </thead>
  <tbody>
    <tr><td>AIエージェントがWorkspace REST APIを直接呼び出す</td><td>Workspace MCPサーバーまたはWorkspace CLIを使用する必要がある</td></tr>
    <tr><td>エージェントが独自のデータアクセスパターンを定義</td><td>Google管理のプロトコルを通じた標準化されたアクセス</td></tr>
    <tr><td>エージェントの挙動への可視性が限定的</td><td>組み込みのユーザー確認と監査ログ</td></tr>
    <tr><td>標準化された使用量追跡なし</td><td>Gmail、Drive、Calendarから始まる2段階使用量システム</td></tr>
  </tbody>
</table>

<h2>MCPとは何か、なぜ重要か？</h2>
<p><strong>MCP（Model Context Protocol）</strong>は、AIエージェントが外部ツールやデータソースと連携するための標準プロトコルになりつつあります。もともとAnthropicが開発し、業界全体で急速に採用されたMCPは、AIエージェントが以下を行うための構造化された方法を提供します：</p>
<ul>
  <li>利用可能なアクション（メールの読み取り、ドキュメントの作成など）を<strong>発見する</strong></li>
  <li>標準化されたユーザー確認を通じて<strong>権限を要求する</strong></li>
  <li>組み込みの監査証跡とともに<strong>アクションを実行する</strong></li>
  <li>管理者が設定した<strong>境界を尊重する</strong></li>
</ul>
<p>GoogleのWorkspace向けMCP採用は重要です。なぜなら、世界最大のプロダクティビティスイートがMCPを要件にすることで、AIエージェントエコシステム全体がそれに従わざるを得なくなるためです。</p>

<h2>2つの使用量ティア</h2>
<p>Googleは、Gmail、Drive、Calendarから始まる、Workspace APIおよびMCPアクセスの<strong>2段階使用量システム</strong>を導入しています：</p>
<ul>
  <li><strong>スタンダードティア：</strong>既存のWorkspaceプランに含まれ、ほとんどの組織の一般的な使用パターンをカバー</li>
  <li><strong>プレミアムティア：</strong>スタンダードの制限を超える大量または高度なエージェント使用向け</li>
</ul>
<p>この段階的アプローチは、GoogleがAIエージェントのトラフィックがいずれ人間のAPI使用をはるかに上回ると予想し、それに応じてマネタイズしたいことを示しています。受信トレイを継続的に監視し、ドキュメントを処理し、カレンダーを管理する数十のAIエージェントを運用する組織は、プレミアムティアの閾値にすぐに到達する可能性があります。</p>

<h2>セキュリティ：本当の推進力</h2>
<p>Googleの動きは根本的に<strong>セキュリティとコントロール</strong>に関するものです。生のREST APIを通じてWorkspaceデータにアクセスするAIエージェントはいくつかのリスクを生みます：</p>
<ul>
  <li><strong>データの流出：</strong>APIアクセスを持つエージェントが機密データを外部サーバーに静かにコピーする可能性</li>
  <li><strong>監査されないアクション：</strong>標準化されたログなしでは、エージェントがデータで何をしたか組織が追跡できない</li>
  <li><strong>権限の肥大化：</strong>エージェントは必要以上に広い権限を要求することが多く、攻撃対象面が拡大</li>
  <li><strong>シャドーAI：</strong>従業員がIT承認なしにAIエージェントをWorkspaceに接続し、監視されないデータフローが発生</li>
</ul>
<p>MCPサーバーとCLIは、組み込みの監査ログ、ユーザー確認、管理者ポリシーを備えたGoogleが管理するチョークポイントを通じてすべてのエージェント操作を強制することで、これらのリスクに対処します。</p>

<h2>管理者コントロール</h2>
<p>Googleは同時に強化された管理機能を展開しています：</p>
<ul>
  <li><strong>エージェントのホワイトリスト化：</strong>管理者がWorkspaceデータへのアクセスを許可するAIエージェントを指定可能</li>
  <li><strong>サービスごとの制御：</strong>Gmailへのエージェントアクセスを有効にしながらDriveへのアクセスをブロックするなど</li>
  <li><strong>使用量モニタリング：</strong>組織全体のエージェント活動を表示するリアルタイムダッシュボード</li>
  <li><strong>コンプライアンス統合：</strong>エージェントのアクションが既存のコンプライアンスおよびeDiscoveryワークフローに流入</li>
</ul>

<h2>開発者がすべきこと</h2>
<p>Google Workspaceと連携するAIエージェントを構築する開発者にとって、移行チェックリストは明確です：</p>
<ol>
  <li>エージェントとWorkspace間の通信にWorkspace MCPサーバーを<strong>採用する</strong>（現在GA）</li>
  <li>代替統合パスとして<strong>Workspace CLIを使用する</strong></li>
  <li>2027年2月1日までにエージェントコードから<strong>直接のREST API呼び出しを削除する</strong></li>
  <li>新しいプロトコルで要求される<strong>ユーザー確認フローを実装する</strong></li>
  <li>新しいサービス利用規約について<strong>Workspace AIツール補遺を確認する</strong></li>
  <li>プレミアムティアのコストの可能性を考慮して<strong>段階的使用量を計画する</strong></li>
</ol>

<h2>より大きな視点：MCPが標準に</h2>
<p>GoogleのMCP義務化は、より広範な業界の収束の一部です：</p>
<ul>
  <li><strong>Anthropic</strong>がMCPを作成し、Claudeのツールエコシステムで広範に使用しています</li>
  <li><strong>OpenAI</strong>と<strong>Cisco</strong>は最近、MCPの原則に沿ったAIエージェントツールフレームワークを導入しました</li>
  <li><strong>Microsoft</strong>は独自のエージェントフレームワークを持っていますが、MCPとの相互運用性が高まっています</li>
  <li><strong>エンタープライズの採用：</strong>主要プラットフォームがエージェントアクセスのためにMCP互換インターフェースに標準化しています</li>
</ul>
<p>AIエージェントエコシステムにとって、これは成熟の瞬間です。最小限の監視でエージェントが任意のAPIを呼び出す無法地帯は終わり、能力とセキュリティのバランスをとる構造化されたプロトコルに置き換わります。</p>

<h2>おすすめAIエージェント開発ツール</h2>
<p>Workspace統合が必要なAIエージェントを構築する開発者向け：</p>
<ul>
  <li>AI搭載開発の最新情報については<a href="/ja/blog/cognition-swe-2-1-ai-coding-model-benchmarks">CognitionのSWE-2.1</a>の記事をお読みください</li>
  <li>開発ワークフローの最適化については<a href="/ja/blog/best-ai-coding-tools-2026">最高のAIコーディングツールガイド</a>をご覧ください</li>
</ul>
<p>エージェント統合を構築する開発者向けに、<a href="https://toolcraftkit.com">ToolCraftKit</a>は<a href="https://toolcraftkit.com/tools/code-formatter">Code Formatter</a>、API認証デバッグ用の<a href="https://toolcraftkit.com/tools/jwt-decoder">JWT Decoder</a>、エージェントスケジューリング用の<a href="https://toolcraftkit.com/tools/cron-expression-generator">Cron Expression Generator</a>、<a href="https://toolcraftkit.com/tools/robots-txt-generator">Robots.txt Generator</a>を含む無料の開発者ツールを提供しています。</p>

<h2>まとめ</h2>
<p>Googleの2027年2月のMCP期限は、企業データへの非構造化されたAIエージェントアクセスの終了を告げます。すべてのエージェントにMCPサーバーまたはCLIの使用を義務付けることで、Googleはセキュリティ問題（監査されないデータアクセス）、マネタイゼーション問題（段階的使用量）、エコシステム問題（標準化されたプロトコル）を同時に解決しています。開発者へのメッセージは明確です：今すぐ移行するか、Workspaceへのアクセスを失うか。企業へのメッセージはさらに明確です：AIエージェントは管理された、監査可能なITスタックの一部になりつつあります — 従業員が勝手に接続するシャドーサービスではなく。</p>
