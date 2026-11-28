---
title: "Google, 2027년 2월 MCP 기한 설정: 모든 AI 에이전트가 새로운 Workspace 프로토콜 사용 필수"
description: "Google이 2027년 2월 1일까지 모든 AI 에이전트에 REST API 대신 Workspace MCP 서버 사용을 의무화합니다. 개발자, 기업, AI 에이전트 생태계에 무엇이 변하는지 — 새로운 사용량 등급과 관리자 제어를 포함하여 알아봅니다."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-28"
readTime: "9 min read"
---

<h2>Google이 AI 에이전트 규칙을 다시 쓴다</h2>
<p>Google은 모든 <strong>AI 에이전트 및 유사 액세스 도구</strong>가 Workspace 데이터에 접근하기 위해 기존의 REST API가 아닌 <strong>Workspace MCP(Model Context Protocol) 서버</strong> 또는 <strong>Workspace CLI</strong>를 사용해야 한다고 발표했습니다. 기술적 시행은 <strong>2027년 2월 1일</strong>에 시작되며, 개발자에게는 약 2개월의 마이그레이션 기간이 주어집니다.</p>
<p>두 도구 모두 현재 <strong>정식 출시(GA)</strong>되어 있으며, <strong>Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat, Tasks</strong>를 지원하고, <strong>Keep도 곧 추가</strong>될 예정입니다. 이 변경 사항은 새로운 Workspace AI 도구 부록, 2단계 사용량 가격 체계, 강화된 관리자 제어와 함께 제공됩니다 — 플랫폼 출시 이후 서드파티 도구가 Google Workspace와 상호 작용하는 방식에서 가장 중대한 변화입니다.</p>

<h2>2027년 2월 1일에 무엇이 변하는가</h2>
<p>핵심 변화는 프로토콜 마이그레이션입니다:</p>
<table>
  <thead>
    <tr><th>2027년 2월 1일 이전</th><th>2027년 2월 1일 이후</th></tr>
  </thead>
  <tbody>
    <tr><td>AI 에이전트가 Workspace REST API를 직접 호출</td><td>Workspace MCP 서버 또는 Workspace CLI 사용 필수</td></tr>
    <tr><td>에이전트가 자체 데이터 접근 패턴 정의</td><td>Google 관리 프로토콜을 통한 표준화된 접근</td></tr>
    <tr><td>에이전트 행동에 대한 제한된 가시성</td><td>내장된 사용자 확인 및 감사 로깅</td></tr>
    <tr><td>표준화된 사용량 추적 없음</td><td>Gmail, Drive, Calendar부터 시작하는 2단계 사용량 시스템</td></tr>
  </tbody>
</table>

<h2>MCP란 무엇이며 왜 중요한가?</h2>
<p><strong>MCP(Model Context Protocol)</strong>는 AI 에이전트가 외부 도구 및 데이터 소스와 상호 작용하기 위한 표준 프로토콜이 되고 있습니다. 원래 Anthropic이 개발하고 업계 전반에 걸쳐 빠르게 채택된 MCP는 AI 에이전트가 다음을 수행할 수 있는 구조화된 방법을 제공합니다:</p>
<ul>
  <li>사용 가능한 작업(이메일 읽기, 문서 생성 등)을 <strong>발견</strong></li>
  <li>표준화된 사용자 확인을 통해 <strong>권한 요청</strong></li>
  <li>내장된 감사 추적과 함께 <strong>작업 실행</strong></li>
  <li>관리자가 설정한 <strong>경계 존중</strong></li>
</ul>
<p>Google의 Workspace용 MCP 채택은 MCP를 새로운 표준으로 검증하기 때문에 중요합니다 — 세계 최대의 생산성 제품군이 이를 요구하면, 전체 AI 에이전트 생태계가 따라야 합니다.</p>

<h2>두 가지 사용량 등급</h2>
<p>Google은 Gmail, Drive, Calendar부터 시작하여 Workspace API 및 MCP 접근을 위한 <strong>2단계 사용량 시스템</strong>을 도입합니다:</p>
<ul>
  <li><strong>스탠다드 등급:</strong> 기존 Workspace 플랜에 포함, 대부분의 조직의 일반적인 사용 패턴 커버</li>
  <li><strong>프리미엄 등급:</strong> 스탠다드 한도를 초과하는 대량 또는 고급 에이전트 사용 사례용</li>
</ul>
<p>이 계층적 접근 방식은 Google이 AI 에이전트 트래픽이 궁극적으로 인간의 API 사용을 훨씬 능가할 것으로 예상하며, 이에 따라 수익화하려는 것을 시사합니다.</p>

<h2>보안: 진짜 동인</h2>
<p>Google의 조치는 근본적으로 <strong>보안과 통제</strong>에 관한 것입니다. 원시 REST API를 통해 Workspace 데이터에 접근하는 AI 에이전트는 여러 위험을 만듭니다:</p>
<ul>
  <li><strong>데이터 유출:</strong> API 접근 권한이 있는 에이전트가 조용히 민감한 데이터를 외부 서버로 복사할 수 있음</li>
  <li><strong>감사되지 않는 작업:</strong> 표준화된 로깅 없이는 에이전트가 데이터로 무엇을 했는지 조직이 추적할 수 없음</li>
  <li><strong>권한 확장:</strong> 에이전트가 필요 이상으로 넓은 권한을 요청하여 공격 표면 생성</li>
  <li><strong>섀도 AI:</strong> 직원들이 IT 승인 없이 AI 에이전트를 Workspace에 연결하여 모니터링되지 않는 데이터 흐름 생성</li>
</ul>
<p>MCP 서버와 CLI는 내장된 감사 로깅, 사용자 확인, 관리자 정책을 갖춘 Google 관리 체크포인트를 통해 모든 에이전트 상호 작용을 강제함으로써 이러한 위험에 대처합니다.</p>

<h2>관리자 제어</h2>
<p>Google은 동시에 강화된 관리 기능을 출시합니다:</p>
<ul>
  <li><strong>에이전트 허용 목록:</strong> 관리자가 Workspace 데이터에 접근할 수 있는 AI 에이전트 지정 가능</li>
  <li><strong>서비스별 제어:</strong> Gmail에 대한 에이전트 접근은 활성화하면서 Drive 접근은 차단하는 등</li>
  <li><strong>사용량 모니터링:</strong> 조직 전체의 에이전트 활동을 보여주는 실시간 대시보드</li>
  <li><strong>컴플라이언스 통합:</strong> 에이전트 작업이 기존 컴플라이언스 및 eDiscovery 워크플로에 연동</li>
</ul>

<h2>개발자가 해야 할 일</h2>
<p>Google Workspace와 상호 작용하는 AI 에이전트를 구축하는 개발자를 위한 마이그레이션 체크리스트는 명확합니다:</p>
<ol>
  <li>에이전트-Workspace 통신을 위해 <strong>Workspace MCP 서버 채택</strong>(현재 GA)</li>
  <li>대체 통합 경로로 <strong>Workspace CLI 사용</strong></li>
  <li>2027년 2월 1일까지 에이전트 코드에서 <strong>직접 REST API 호출 제거</strong></li>
  <li>새 프로토콜에서 요구하는 <strong>사용자 확인 흐름 구현</strong></li>
  <li>새로운 서비스 약관을 위해 <strong>Workspace AI 도구 부록 검토</strong></li>
  <li>가격 모델이 잠재적 프리미엄 등급 비용을 고려하도록 <strong>계층적 사용량 계획</strong></li>
</ol>

<h2>더 큰 그림: MCP가 표준이 되다</h2>
<p>Google의 MCP 의무화는 더 넓은 업계 수렴의 일부입니다:</p>
<ul>
  <li><strong>Anthropic</strong>이 MCP를 만들고 Claude의 도구 생태계에서 광범위하게 사용합니다</li>
  <li><strong>OpenAI</strong>와 <strong>Cisco</strong>는 최근 MCP 원칙에 부합하는 AI 에이전트 도구 프레임워크를 도입했습니다</li>
  <li><strong>Microsoft</strong>는 자체 에이전트 프레임워크를 보유하고 있지만 MCP와의 상호 운용성이 증가하고 있습니다</li>
  <li><strong>엔터프라이즈 채택:</strong> 주요 플랫폼들이 에이전트 접근을 위해 MCP 호환 인터페이스로 표준화하고 있습니다</li>
</ul>

<h2>추천 AI 에이전트 개발 도구</h2>
<p>Workspace 통합이 필요한 AI 에이전트를 구축하는 개발자를 위해:</p>
<ul>
  <li>AI 기반 개발의 최신 정보는 <a href="/ko/blog/cognition-swe-2-1-ai-coding-model-benchmarks">Cognition의 SWE-2.1</a> 기사를 읽어보세요</li>
  <li>개발 워크플로 최적화를 위해 <a href="/ko/blog/best-ai-coding-tools-2026">최고의 AI 코딩 도구 가이드</a>를 살펴보세요</li>
</ul>
<p>에이전트 통합을 구축하는 개발자를 위해, <a href="https://toolcraftkit.com">ToolCraftKit</a>은 <a href="https://toolcraftkit.com/tools/code-formatter">Code Formatter</a>, API 인증 디버깅용 <a href="https://toolcraftkit.com/tools/jwt-decoder">JWT Decoder</a>, 에이전트 스케줄링용 <a href="https://toolcraftkit.com/tools/cron-expression-generator">Cron Expression Generator</a>, <a href="https://toolcraftkit.com/tools/robots-txt-generator">Robots.txt Generator</a>를 포함한 무료 개발자 도구를 제공합니다.</p>

<h2>핵심 요약</h2>
<p>Google의 2027년 2월 MCP 기한은 기업 데이터에 대한 비구조적 AI 에이전트 접근의 종말을 나타냅니다. 모든 에이전트에 MCP 서버 또는 CLI 사용을 의무화함으로써, Google은 보안 문제(감사되지 않는 데이터 접근), 수익화 문제(계층적 사용량), 생태계 문제(표준화된 프로토콜)를 동시에 해결하고 있습니다. 개발자에게 메시지는 명확합니다: 지금 마이그레이션하거나 Workspace 접근을 잃거나. 기업에게 메시지는 더욱 명확합니다: AI 에이전트는 관리되고 감사 가능한 IT 스택의 일부가 되고 있습니다 — 직원들이 자체적으로 연결하는 그림자 서비스가 아닙니다.</p>
