---
title: "Análise do GLM-5.4: o Loop Transformer da Z.ai reescreve como os modelos de IA pensam"
description: "O GLM-5.4 da Z.ai introduz o Loop Transformer — uma arquitetura que executa 28 camadas duas vezes para igualar modelos 3x maiores. Analisamos o que significa, como performa e se vale a pena usar."
category: "Avaliações com nota"
categorySlug: "graded-reviews"
date: "2026-11-23"
lastTested: "2026-11-23"
readTime: "11 min de leitura"
grade: "B+"
scores_ux: 7
scores_quality: 8
scores_value: 7
scores_integration: 6
scores_support: 6
toolName: "GLM-5.4"
---

<h2>GLM-5.4 em resumo</h2>

<div style="margin: 1.5rem 0; padding: 1.5rem; border-left: 4px solid #2563eb;">
  <strong>Nota AIGradeLab: B+</strong><br>
  UX: 7/10 | Qualidade: 8/10 | Custo-benefício: 7/10 | Integração: 6/10 | Suporte: 6/10<br><br>
  <strong>Em resumo:</strong> O GLM-5.4 é o lançamento de modelo mais interessante arquiteturalmente de novembro de 2026. O Loop Transformer é uma inovação genuína — reutilizar camadas em vez de empilhar mais delas é uma abordagem elegante para tornar os modelos mais inteligentes sem triplicar os custos de computação. Mas o modelo é limitado pela disponibilidade restrita, ausência de acesso via API e falta de benchmarks oficiais. Por enquanto, é uma prévia fascinante de para onde a arquitetura de IA está indo, ainda não um substituto diário para o Claude Fable 5.2 ou o GPT-6.2 Astra.
</div>

<h2>O que é o Loop Transformer?</h2>

<p>Todos os principais modelos de IA lançados em 2026 seguiram o mesmo roteiro: empilhar mais camadas, adicionar mais parâmetros, treinar com mais dados. O GLM-5.4 quebra o padrão. Em vez de adicionar camadas, a Z.ai faz as camadas existentes trabalharem mais.</p>

<p>Funciona assim: o GLM-5.4 tem aproximadamente 750 bilhões de parâmetros organizados em 78 camadas armazenadas. Mas 28 dessas camadas — o "loop block" no meio da rede — são executadas duas vezes por forward pass com pesos compartilhados. O resultado são 106 passagens efetivas de camadas por token, usando o armazenamento de parâmetros de um modelo de 78 camadas.</p>

<p>A Z.ai afirma que esta abordagem permite que o GLM-5.4 iguale a inteligência de modelos com 2 a 3 trilhões de parâmetros. Se isso for ao menos parcialmente verdade, é um avanço arquitetural significativo — significa que é possível construir modelos mais inteligentes sem escalar proporcionalmente os custos de computação.</p>

<h3>Como o Loop realmente funciona</h3>

<p>A arquitetura tem três seções:</p>

<ul>
  <li><strong>Camadas prelude (1–26):</strong> Executadas uma vez por token. Constroem as representações iniciais do input.</li>
  <li><strong>Camadas loop (27–54):</strong> Estas 28 camadas são executadas duas vezes com pesos compartilhados. Gates por token controlam quanto da saída de cada iteração do loop é escrita no residual stream. No passo 1, os gates tendem a permanecer pequenos — o modelo está construindo contexto global. No passo 2, os gates se abrem mais, refinando a representação com o contexto do passo 1.</li>
  <li><strong>Camadas coda (55–78):</strong> Executadas uma vez. Produzem a saída final.</li>
</ul>

<p>Um truque engenhoso: no segundo passo pelo loop block, o modelo reutiliza a KV cache esparsa e os índices de atenção selecionados durante o passo 1. Ele mantém apenas sua própria cache local de janela deslizante (segundo relatos, 128 tokens). Isso significa que a segunda iteração do loop adiciona relativamente pouco overhead de memória.</p>

<h2>O que sabemos sobre o desempenho</h2>

<p>Aqui as coisas se complicam. A Z.ai não publicou benchmarks oficiais nem model card. Um membro da equipe disse que os scores virão depois. O que temos são testes de terceiros e os estudos de ablação internos da Z.ai.</p>

<h3>Resultados de terceiros: KingBench 4</h3>

<p>O harness KingBench 4 da AICodeKing testou o GLM-5.4 em seis projetos de coding. Os resultados:</p>

<ul>
  <li><strong>7° no geral</strong> de 18 modelos testados</li>
  <li><strong>1° entre os modelos open-weight</strong></li>
  <li><strong>Tempo de execução: 431 minutos</strong> — significativamente mais lento que o Gemini 4 Neon (109 minutos)</li>
  <li><strong>Passos de raciocínio: 1.128</strong> vs. 244 do Gemini 4 Neon — o modelo pensa profundamente, às vezes profundamente demais</li>
  <li><strong>Taxa de falha em tool-call: 1,56%</strong>, mas 66% das chamadas falhadas foram recuperadas no retry — taxa de recuperação maior que qualquer modelo Claude ou Codex no teste</li>
</ul>

<p>Para contextualizar, o <a href="/pt/blog/claude-fable-5-2-review">Claude Fable 5.2</a> ficou em 1° no geral no KingBench 4 com 42/60 pontos. O Gemini 4 Neon ficou em 2° com 37,9/60. O GLM-5.4 ficou aproximadamente onde se esperaria que um modelo open-weight forte ficasse.</p>

<h3>Validação interna da Z.ai</h3>

<p>A Z.ai conduziu um experimento controlado na escala de 30B parâmetros — mesma arquitetura, com e sem loop — usando cerca de 10% mais compute de treinamento para a versão com loop. Resultados: o comprimento do output caiu 10–14% nos benchmarks (até 14,9% no MMLU-Pro), e os ganhos foram maiores em matemática, raciocínio científico e tarefas de contexto longo.</p>

<p>O design foi validado em quatro escalas: 1B, 4B, 30B e 750B parâmetros.</p>

<h3>Uma descoberta qualitativa interessante</h3>

<p>Pelo menos um revisor independente relatou que o GLM-5.4 identificou bugs de aplicação e vulnerabilidades de segurança que o Claude Fable 5.2 e outros modelos testados não detectaram. Isso é consistente com o design da arquitetura — o duplo passo pelas camadas loop dá ao modelo mais tempo para "notar" problemas sutis. A avaliação do DataCamp é que o GLM-5.4 é melhor utilizado como segundo revisor do que como agente de coding primário.</p>

<h2>Pontuação UX: 7/10</h2>

<p>O GLM-5.4 é acessível através da assinatura GLM Coding Plan da Z.ai, do ZCode (zcode.z.ai) e do Z.ai Chat (chat.z.ai). As interfaces são funcionais, mas não estão no nível das experiências polidas do ChatGPT ou do Claude. Suporta janelas de contexto de 1M de tokens — a Z.ai recomenda configurar o cliente para 512.000 tokens para melhores resultados de coding. O modelo também suporta input de visão para tarefas de coding visual.</p>

<p>Um problema conhecido que a própria Z.ai reconhece: o modelo pode ficar preso em longos loops de "marathon thinking". Este é o trade-off do Loop Transformer — o mesmo mecanismo que permite um raciocínio mais profundo pode às vezes levar a deliberação excessiva.</p>

<p>A velocidade é aceitável: a Z.ai afirma até 200 tokens/s fora de pico e 70–80 tokens/s sob carga.</p>

<h2>Pontuação Qualidade: 8/10</h2>

<p>Com base nos testes de terceiros disponíveis e nos primeiros relatos de usuários, a qualidade de raciocínio do GLM-5.4 é genuinamente sólida — especialmente para code review e análise de segurança. A arquitetura Loop Transformer parece dar ao modelo uma vantagem qualitativa em tarefas de análise profunda. Atribuímos um 8 com base nos resultados do KingBench e na clara inovação da arquitetura, mas essa pontuação pode mudar quando a Z.ai publicar os benchmarks oficiais.</p>

<h2>Pontuação Custo-benefício: 7/10</h2>

<p>Sem preços de API publicados, pontuar o custo-benefício é difícil. O acesso atualmente requer uma assinatura GLM Coding Plan com cotas semanais supostamente 50% maiores que as do GLM-5.3. O modelo ainda não está disponível no OpenRouter, Cursor, GitHub Copilot ou nas principais plataformas cloud (Vertex AI, Azure AI Foundry, AWS Bedrock). Isso limita significativamente seu valor prático.</p>

<h2>Pontuação Integração: 6/10</h2>

<p>Este é o ponto mais fraco do GLM-5.4. Ainda não há acesso via API — a Z.ai diz que será aberto após uma avaliação de segurança. O modelo funciona no Claude Code (provider ID: "zai-coding-plan/glm-5.4") e nas ferramentas próprias da Z.ai, mas está ausente das principais plataformas de IA que a maioria dos desenvolvedores usa diariamente. Os pesos abertos estão planejados mas não foram liberados — a Z.ai menciona um "safety hardening" sem data anunciada.</p>

<h2>Pontuação Suporte: 6/10</h2>

<p>A Z.ai não publicou nenhuma model card, nenhum benchmark oficial e nenhuma documentação detalhada. A falta de transparência é preocupante para um modelo tão ambicioso arquiteturalmente. O suporte parece limitado ao ecossistema da Z.ai.</p>

<h2>O Loop Transformer: por que importa além do GLM-5.4</h2>

<p>Mesmo que o GLM-5.4 em si não esteja pronto para substituir seu modelo de coding principal, a arquitetura Loop Transformer é significativa para toda a indústria de IA. Eis por quê:</p>

<ul>
  <li><strong>Eficiência:</strong> Se é possível igualar a inteligência de um modelo de 2T parâmetros com 750B parâmetros fazendo loop das camadas, a economia de custos e energia é enorme.</li>
  <li><strong>Escalabilidade:</strong> A Z.ai não está sozinha — o Inkling 2 Mini da Thinking Machines (lançado em 20 de novembro) usa uma abordagem similar com 26,4B parâmetros totais / 3,4B ativos e camadas centrais executando 3 vezes por token. O padrão está se espalhando.</li>
  <li><strong>Impacto prático:</strong> Modelos efetivamente menores significam inferência mais barata, deploy mais rápido e IA que roda em hardware menos potente.</li>
</ul>

<p>Novembro de 2026 pode ser lembrado como o mês em que a indústria começou a questionar se "maior é sempre melhor". Os Loop Transformers sugerem que a resposta é não.</p>

<h2>Quem deve usar o GLM-5.4 hoje?</h2>

<ul>
  <li><strong>Pesquisadores de IA e entusiastas de arquitetura:</strong> Este é o modelo mais interessante para estudar agora.</li>
  <li><strong>Revisores de código em busca de uma segunda opinião:</strong> O GLM-5.4 identifica problemas que outros modelos não detectam. Use-o como revisor, não como coder primário.</li>
  <li><strong>Desenvolvedores cautelosos:</strong> Se você precisa de um modelo de coding para uso diário hoje, Claude Fable 5.2, Gemini 4 Neon ou GPT-6.2 Sol são apostas mais seguras. Confira nosso <a href="/pt/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">comparativo Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2</a> para detalhes. Volte quando a Z.ai publicar os preços da API e os benchmarks. Confira nosso <a href="/pt/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">comparativo Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2</a> para detalhes.</li>
</ul>

<h2>O veredito</h2>

<p>O GLM-5.4 merece um B+ — não por ser o melhor modelo de coding disponível hoje, mas por introduzir uma arquitetura que pode remodelar a próxima geração de modelos de IA. O Loop Transformer é real, funciona e já está inspirando outras equipes. A Z.ai só precisa abrir as portas mais amplamente: publicar benchmarks, lançar a API e liberar aqueles pesos. Até lá, é uma prévia brilhante de para onde a IA está indo, disponível para poucas pessoas para merecer uma nota mais alta.</p>

<h2>Leia também</h2>
<ul>
  <li><a href="/pt/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2: o confronto de novembro de 2026</a></li>
  <li><a href="/pt/blog/claude-fable-5-2-review">Análise do Claude Fable 5.2</a></li>
  <li><a href="/pt/blog/best-ai-coding-tools-2026">Melhores ferramentas IA para código em 2026</a></li>
</ul>


