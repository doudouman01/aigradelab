---
title: "Cisco, Quarry 오픈소스 공개: AI 에이전트를 감시하는 보안 엔진"
description: "Cisco가 AI 에이전트의 악의적 활동을 모니터링하는 행동 탐지 엔진 Quarry를 오픈소스로 공개했습니다. AI 에이전트 보안이 중요해지는 이유와 Quarry의 작동 방식을 알아보세요."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Cisco, AI 에이전트 보안 문제에 대응하다</h2>

<p>AI 에이전트가 더 자율적으로 변하면서 — 코드 작성, 웹 브라우징, 파일 관리, API 호출 — <strong>누가 에이전트를 감시하는가</strong>라는 질문이 시급해졌습니다. Cisco의 답은 <strong>Quarry</strong>입니다. AI 에이전트를 실시간으로 모니터링하고 이상 행동을 감지하는 오픈소스 행동 탐지 엔진입니다.</p>

<p>이 도구는 GitHub에서 공개되었으며, 단일 및 다중 턴 LLM 대화, 에이전틱 도구 사용, Model Context Protocol(MCP) 상호작용, 멀티모달 입력 등 다양한 시나리오를 지원합니다. <strong>Claude Code</strong>, <strong>Codex</strong> 및 기타 MCP 호환 에이전트용 플러그인이 이미 제공되고 있습니다.</p>

<h2>AI 에이전트 보안이 지금 중요한 이유</h2>

<p>기존 AI 보안 도구 대부분은 모델 수준에서 일어나는 일에 초점을 맞춥니다 — 프롬프트 인젝션, 탈옥, 유해한 출력. Quarry는 다른 접근 방식을 취합니다: 에이전트가 무엇을 말하는지가 아니라 무엇을 <em>하는지</em>를 감시합니다.</p>

<p>현대 AI 에이전트가 할 수 있는 일을 생각하면 이 차이는 매우 중요합니다:</p>

<ul>
<li>서버와 로컬 머신에서 코드 실행</li>
<li>파일 읽기, 쓰기, 삭제</li>
<li>외부 서비스로 API 호출</li>
<li>웹 브라우징 및 라이브 웹사이트와 상호작용</li>
<li>복잡한 워크플로에서 여러 도구 연결</li>
</ul>

<p>챗봇이 부적절한 말을 하게 만드는 프롬프트 인젝션은 하나의 문제입니다. 자율 코딩 에이전트가 프로덕션 데이터베이스를 삭제하게 만드는 프롬프트 인젝션은 완전히 다른 차원의 문제입니다. Quarry는 후자의 시나리오를 위해 만들어졌습니다.</p>

<h2>Quarry 작동 방식</h2>

<p>Quarry는 AI 에이전트와 도구 사이에 위치하는 행동 탐지 레이어로 작동합니다. <strong>Cisco AI Security & Safety Taxonomy</strong>를 프레임워크로 사용하여, 구성 가능한 규칙 세트에 따라 에이전트의 행동을 평가합니다.</p>

<p>주요 기능:</p>

<ul>
<li><strong>규칙 기반 탐지:</strong> 보안 팀이 의심스러운 행동의 기준을 정의합니다 — 무단 파일 접근, 예상치 못한 네트워크 호출, 권한 상승 시도, 데이터 유출 패턴.</li>
<li><strong>다중 턴 인식:</strong> Quarry는 대화 턴 전반에 걸쳐 에이전트 행동을 추적하여, 단일 프롬프트가 아닌 점진적으로 전개되는 공격을 감지합니다.</li>
<li><strong>MCP 통합:</strong> Model Context Protocol의 네이티브 지원으로 Quarry는 에이전트가 접근할 수 있는 특정 도구를 모니터링하고 비정상적인 사용 패턴을 감지할 수 있습니다.</li>
<li><strong>플러그인 아키텍처:</strong> Cisco는 인기 있는 에이전트 프레임워크용 플러그인을 제공하며, 커뮤니티에서 추가 개발하도록 장려합니다.</li>
</ul>

<p>프로젝트의 GitHub 리포지토리에는 설치 가이드, 지원 Python 버전, 구성 예제, 규칙 작성 가이드가 포함되어 있습니다.</p>

<h2>큰 그림: AI 에이전트 보안은 새로운 카테고리</h2>

<p>Quarry는 더 큰 트렌드의 일부입니다. AI 에이전트가 데모에서 프로덕션으로 이동하면서, 에이전트 보안이라는 완전히 새로운 카테고리가 등장하고 있습니다:</p>

<ul>
<li><strong>Cisco AI Defense</strong> — Cisco의 상용 AI 보안 제품군으로, 현재 OpenAI의 Codex를 사용해 완전히 개발되며, 분기가 아닌 몇 주 만에 기능이 제공됩니다.</li>
<li><strong>Anthropic의 계층형 승인 시스템</strong> — 새로운 Claude Ship 번들의 일부로, 코드 변경이 위험 수준별로 분류되며 다양한 수준의 인간 승인이 필요합니다. <a href="/ko/blog/claude-ship-ai-code-automation">자세한 내용 보기</a>.</li>
<li><strong>OpenAI의 Daybreak Defense Network</strong> — AI 기반 위협 분류를 탐구하는 Cisco와의 사이버 보안 파트너십.</li>
</ul>

<p>패턴은 분명합니다: 가장 강력한 에이전트를 만드는 기업들이 가드레일도 함께 만들고 있습니다. 문제는 Quarry와 같은 오픈소스 도구가 에이전트 개발 속도를 따라갈 수 있느냐는 것입니다.</p>

<h2>Quarry를 사용해야 할 사람</h2>

<p>Quarry는 주로 다음과 같은 분들에게 유용합니다:</p>

<ul>
<li><strong>개발 팀</strong> — 프로덕션 환경에서 AI 코딩 에이전트(Claude Code, Codex, Cursor)를 운영하는 경우.</li>
<li><strong>보안 팀</strong> — 조직 전반의 AI 기반 워크플로를 모니터링하는 담당자.</li>
<li><strong>플랫폼 개발자</strong> — 에이전틱 AI 제품을 만들면서 처음부터 구축하지 않고 탐지 레이어가 필요한 경우.</li>
</ul>

<p>개발용 AI 도구를 평가 중이시라면, <a href="/ko/blog/best-ai-coding-tools-2026">2026년 최고의 AI 코딩 도구</a>와 <a href="/ko/blog/best-ai-tools-developers-2026">개발자를 위한 최고의 AI 도구</a> 가이드를 확인하세요.</p>

<h2>결론</h2>

<p>AI 에이전트는 매달 더 강력해지고 있으며, 보안 도구도 이에 맞춰 발전해야 합니다. Cisco가 Quarry를 오픈소스로 공개한 결정은 현명합니다 — 각 조직이 자체적으로 만드는 대신 에이전트 보안의 공유 기반을 만들어냅니다. Quarry가 표준이 되든 여러 옵션 중 하나가 되든, 이 카테고리 자체는 계속 존재할 것입니다.</p>

<p><em>AI 에이전트로 개발하고 계신가요? 개발자 툴킷을 확인하세요. <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a>에서 JSON 검증기, 정규식 테스터, 해시 생성기 등 무료 도구를 이용할 수 있습니다.</em></p>
