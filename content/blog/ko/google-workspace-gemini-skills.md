---
title: "Google Workspace, 맞춤 AI 스킬 도입: 나만의 Gemini 자동화 만들기"
description: "Google이 Workspace에 Skills를 도입합니다. Docs, Sheets, Gmail 등에서 Gemini에 재사용 가능한 맞춤 지침을 적용하는 기능으로, 비즈니스 생산성에 어떤 의미가 있는지 살펴봅니다."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-22"
readTime: "읽기 시간: 7분"
---

<h2>Gemini Skills, Google Workspace 전반에 순차 적용</h2>

<p>Google이 올해 가장 실용적인 AI 기능 중 하나인 Google Workspace의 Skills를 배포하고 있습니다. 2026년 11월 13일 주간에 발표된 Skills는 팀의 고유한 규칙, 템플릿, 참고 파일을 Gemini가 매번 일관되게 적용하도록 안내하는 재사용 가능한 맞춤 지침입니다.</p>

<p>코드를 작성하지 않고 나만의 Gemini 자동화를 만드는 것이라고 생각하시면 됩니다. Gemini에 프롬프트를 입력할 때마다 서식 선호도, 회사 용어, 검토 절차를 다시 설명하는 대신 Skill을 한 번 만들어 두고 Workspace 앱 전반에 적용할 수 있습니다.</p>

<h2>Gemini Skills란?</h2>

<p>Skill은 Gemini가 특정 유형의 작업을 어떻게 처리해야 하는지 알려 주는 저장된 지침 모음입니다. Skill을 호출하면 Gemini는 문서, 스프레드시트, 이메일 스레드 등 사용자가 제공하는 컨텍스트를 사용해 그 지침을 따릅니다.</p>

<h3>만들 수 있는 예시</h3>

<ul>
<li><strong>브랜드 보이스 검토기</strong> — 모든 문서를 회사 스타일 가이드에 맞춰 점검하고 어긋나는 부분을 표시하는 Skill</li>
<li><strong>회의록 포맷터</strong> — 원본 회의 녹취록을 실행 항목, 담당자, 마감일이 포함된 팀 표준 형식으로 변환</li>
<li><strong>이메일 답변 템플릿</strong> — 지원팀의 어조, 에스컬레이션 규칙, 제품 용어를 따라 고객 답변 초안을 작성</li>
<li><strong>재무 보고서 분석기</strong> — 회사의 KPI 정의와 보고 형식에 맞춰 스프레드시트 데이터를 요약</li>
<li><strong>코드 리뷰 체크리스트</strong> — 팀의 특정 표준과 컨벤션에 따라 코드 스니펫을 검토</li>
</ul>

<h2>Skills가 작동하는 곳</h2>

<p>Skills는 두 가지 환경에서 순차적으로 제공됩니다.</p>

<h3>Google Workspace Studio</h3>

<p>Workspace Studio는 비즈니스 자동화를 구축하기 위한 Google의 로우코드/노코드 플랫폼입니다. 여기서 만든 Skills는 조직 전체에서 공유할 수 있고 더 넓은 워크플로 자동화에 통합할 수 있습니다.</p>

<h3>Workspace 앱</h3>

<p>Skills는 이미 사용 중인 Workspace 앱인 Docs, Sheets, Slides, Gmail, Meet 안에서 바로 사용할 수 있습니다. 즉 문서를 작업하는 동안 별도의 도구로 전환하지 않고 Gemini 사이드 패널에서 Skill을 호출할 수 있습니다.</p>

<h2>이번 주 소식: Gmail에서 Gemini 확대</h2>

<p>Skills 출시와 함께 Google은 18세 이상의 더 많은 Workspace 사용자에게 Gmail의 Gemini를 확대하고 있습니다. 이전에는 특정 요금제 등급에만 제한되었던 스마트 작성, 이메일 요약, 답장 제안 같은 Gmail의 Gemini 기반 기능이 더 많은 Workspace 계정에서 이용 가능해집니다.</p>

<p>이번 확대는 Rapid Release와 Scheduled Release 도메인을 모두 대상으로 하므로 대부분의 조직에서 몇 주 안에 기능을 볼 수 있을 것입니다.</p>

<h2>Google Vids의 Gemini Omni 1.2 Flash</h2>

<p>Google은 Google Vids도 Gemini Omni 1.2 Flash로 업데이트하여 캐릭터 일관성과 음성 사실감이 개선된 더 긴 영상(최대 15초) 생성을 지원합니다. 사용자는 매월 15초 클립 3개를 무료로 이용할 수 있습니다.</p>

<p>빠른 제품 데모, 소셜 콘텐츠, 사내 교육 영상을 만드는 기업에게는 의미 있는 업그레이드입니다. 15초 제한과 월 3개 한도 때문에 전용 영상 도구를 대체하기보다는 "영상 워크플로를 보완하는" 수준에 머뭅니다.</p>

<h2>Gemini Decisions API</h2>

<p>11월 11일 Google은 새로운 Gemini Decision 1 모델을 기반으로 하는 Gemini Decisions API를 출시했습니다. Gemini API와 Google AI Studio를 통해 이용할 수 있는 이 API는 자유 형식 텍스트 생성보다는 구조화된 의사결정이 필요한 애플리케이션을 위해 설계되었습니다.</p>

<p>활용 사례로는 고객 지원 티켓 라우팅, 작업 대기열 우선순위 지정, 구조화된 데이터 입력에 기반한 진행/중단 이진 결정이 있습니다. Decisions API는 신뢰도 점수가 포함된 구조화된 출력을 반환하므로 자동화된 워크플로에 통합하기가 더 쉽습니다.</p>

<h2>비즈니스 생산성에 의미하는 바</h2>

<h3>스킬 경제의 도래</h3>

<p>Skills는 기업이 AI를 사용하는 방식의 전환을 의미합니다. 모든 직원이 품질 편차가 큰 자신만의 프롬프트를 만드는 대신, 조직은 모범 사례를 담은 표준화된 Skills를 만들 수 있습니다. 이는 다음을 의미합니다.</p>

<ul>
<li><strong>일관성</strong> — 모든 팀원이 동일한 표준을 따르는 결과물을 만듭니다</li>
<li><strong>온보딩</strong> — 신입 사원이 조직의 지식을 먼저 익힐 필요 없이 조직의 Skills를 바로 사용할 수 있습니다</li>
<li><strong>품질 관리</strong> — Skills에 검토 기준과 컴플라이언스 요구 사항을 내장할 수 있습니다</li>
<li><strong>확장성</strong> — 한 번 만들어 수백 명의 사용자에게 배포할 수 있습니다</li>
</ul>

<h3>Microsoft Copilot과의 경쟁</h3>

<p>Google의 Skills 기능은 M365 생태계에서 Microsoft의 Copilot 에이전트 및 맞춤 지침과 직접 경쟁합니다. 접근 방식은 다릅니다. Google의 Skills는 더 템플릿 중심이고 Microsoft의 Copilot 에이전트는 더 에이전트적일 수 있지만, 코드 없이 기업이 AI 동작을 맞춤 설정하게 한다는 목표는 같습니다.</p>

<p>Google Workspace와 Microsoft 365 중에서 선택하는 조직에게 AI 맞춤 설정 능력은 전통적인 기능 비교와 함께 의사결정 요소가 되고 있습니다.</p>

<h2>시작하는 방법</h2>

<h3>Workspace 관리자</h3>

<ol>
<li>Workspace 에디션을 확인하십시오. Skills에는 Business Standard 이상이 필요합니다</li>
<li>아직 활성화되지 않았다면 관리 콘솔에서 Gemini 기능을 활성화하십시오</li>
<li>Workspace Studio에 접속하여 조직 전체 Skills를 만들고 관리하십시오</li>
<li>팀에서 가장 반복적인 AI 작업을 다루는, 영향력 큰 Skill 2-3개로 시작하십시오</li>
</ol>

<h3>개별 사용자</h3>

<ol>
<li>Workspace 앱(Docs, Sheets, Gmail)을 여십시오</li>
<li>Gemini 사이드 패널을 여십시오</li>
<li>프롬프트 인터페이스에서 Skills 옵션을 찾으십시오</li>
<li>개인 Skills를 만들거나 조직에서 공유한 Skills를 사용하십시오</li>
</ol>

<h3>Skill 설계 팁</h3>

<ul>
<li><strong>구체적으로 작성하세요</strong> — 모호한 지침은 모호한 결과를 낳습니다. 좋은 출력과 나쁜 출력의 예시를 포함하십시오.</li>
<li><strong>참고 파일을 포함하세요</strong> — 스타일 가이드, 템플릿, 샘플 문서를 첨부하여 Gemini에 구체적인 예시를 제공하십시오.</li>
<li><strong>반복적으로 테스트하세요</strong> — 팀과 공유하기 전에 다양한 입력으로 Skill을 실행하여 예외 상황을 찾아내십시오.</li>
<li><strong>버전 관리를 하세요</strong> — 무엇을 왜 바꿨는지 기록해 두십시오. Skills는 프로세스와 함께 발전합니다.</li>
</ul>

<p>여러 도구에 걸친 생산성 워크플로를 관리하고 있다면, <a href="https://toolcraftkit.com">ToolCraftKit</a>이 청구서 생성기부터 Pomodoro 타이머까지 구독 비용 없이 Workspace 환경을 보완하는 무료 유틸리티를 제공합니다.</p>

<h2>결론</h2>

<p>Google Workspace Skills는 Google이 이번 분기에 내놓은 가장 실용적인 AI 기능입니다. 팀 간 일관되지 않은 AI 출력이라는 현실적인 문제를 간단한 해법으로 해결합니다. Gmail의 Gemini 확대, Vids의 영상 생성, 새로운 Decisions API와 결합하여 Google은 Workspace가 기업을 위한 AI 우선 생산성 제품군이라는 강력한 근거를 제시하고 있습니다.</p>

<p>문제는 Skills를 쓸지 말지가 아니라 어떤 프로세스부터 표준화할 것인가입니다.</p>
