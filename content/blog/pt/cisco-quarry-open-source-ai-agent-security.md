---
title: "Cisco libera o Quarry como código aberto: um motor de segurança que monitora agentes de IA"
description: "A Cisco liberou o Quarry como código aberto, um motor de detecção comportamental projetado para monitorar agentes de IA contra atividades maliciosas. Veja por que a segurança de agentes de IA está se tornando crítica — e como o Quarry funciona."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Cisco enfrenta o problema de segurança dos agentes de IA</h2>

<p>À medida que os agentes de IA se tornam mais autônomos — escrevendo código, navegando na web, gerenciando arquivos, fazendo chamadas de API — a pergunta sobre <strong>quem vigia os agentes</strong> se tornou urgente. A resposta da Cisco é o <strong>Quarry</strong>, um motor de detecção comportamental de código aberto projetado para monitorar agentes de IA em tempo real e alertar quando eles saem do controle.</p>

<p>A ferramenta foi publicada no GitHub e cobre uma ampla gama de cenários: conversas LLM de turno único e múltiplo, uso agêntico de ferramentas, interações via Model Context Protocol (MCP) e entradas multimodais. Já existem plugins disponíveis para <strong>Claude Code</strong>, <strong>Codex</strong> e outros agentes compatíveis com MCP.</p>

<h2>Por que a segurança de agentes de IA importa agora</h2>

<p>A maioria das ferramentas de segurança de IA existentes foca no que acontece no nível do modelo — injeção de prompt, jailbreaking, saídas prejudiciais. O Quarry adota uma abordagem diferente: ele observa o que os agentes <em>fazem</em>, não apenas o que dizem.</p>

<p>Essa distinção é importante porque os agentes de IA modernos podem:</p>

<ul>
<li>Executar código em servidores e máquinas locais</li>
<li>Ler, escrever e excluir arquivos</li>
<li>Fazer chamadas de API para serviços externos</li>
<li>Navegar na web e interagir com sites em tempo real</li>
<li>Encadear múltiplas ferramentas em fluxos de trabalho complexos</li>
</ul>

<p>Uma injeção de prompt que faz um chatbot dizer algo inapropriado é uma coisa. Uma injeção de prompt que faz um agente autônomo de codificação deletar um banco de dados de produção é algo completamente diferente. O Quarry foi construído para o segundo cenário.</p>

<h2>Como o Quarry funciona</h2>

<p>O Quarry opera como uma camada de detecção comportamental posicionada entre um agente de IA e suas ferramentas. Ele avalia as ações do agente com base em um conjunto configurável de regras, usando a <strong>Cisco AI Security & Safety Taxonomy</strong> como framework.</p>

<p>Funcionalidades principais:</p>

<ul>
<li><strong>Detecção baseada em regras:</strong> As equipes de segurança definem regras para comportamentos suspeitos — acesso não autorizado a arquivos, chamadas de rede inesperadas, tentativas de escalada de privilégios, padrões de exfiltração de dados.</li>
<li><strong>Consciência multi-turno:</strong> O Quarry rastreia o comportamento do agente ao longo dos turnos de conversa, detectando ataques que se desenrolam gradualmente em vez de ocorrer em um único prompt.</li>
<li><strong>Integração com MCP:</strong> O suporte nativo ao Model Context Protocol permite que o Quarry monitore as ferramentas específicas às quais um agente tem acesso e sinalize padrões incomuns de uso.</li>
<li><strong>Arquitetura modular:</strong> A Cisco fornece plugins para frameworks de agentes populares e incentiva a comunidade a criar mais.</li>
</ul>

<p>O repositório do projeto no GitHub inclui instruções de instalação, versões Python suportadas, exemplos de configuração e orientações para criação de regras.</p>

<h2>O panorama geral: segurança de agentes de IA é uma nova categoria</h2>

<p>O Quarry faz parte de uma tendência mais ampla. À medida que os agentes de IA saem das demos para a produção, toda uma categoria de segurança está surgindo ao redor deles:</p>

<ul>
<li><strong>Cisco AI Defense</strong> — A suíte comercial de segurança de IA da Cisco, agora desenvolvida inteiramente com o Codex da OpenAI, com funcionalidades entregues em semanas em vez de trimestres.</li>
<li><strong>Sistema de aprovação em níveis da Anthropic</strong> — Parte do novo pacote Claude Ship, onde as alterações de código são classificadas por nível de risco e exigem diferentes graus de aprovação humana. <a href="/pt/blog/claude-ship-ai-code-automation">Leia nossa cobertura aqui</a>.</li>
<li><strong>Daybreak Defense Network da OpenAI</strong> — Uma parceria de cibersegurança com a Cisco explorando triagem de ameaças com IA.</li>
</ul>

<p>O padrão é claro: as empresas que constroem os agentes mais capazes também constroem as proteções. A questão é se ferramentas de código aberto como o Quarry conseguem acompanhar o ritmo do desenvolvimento de agentes.</p>

<h2>Quem deve usar o Quarry</h2>

<p>O Quarry é principalmente relevante para:</p>

<ul>
<li><strong>Equipes de desenvolvimento</strong> que utilizam agentes de codificação IA (Claude Code, Codex, Cursor) em ambientes de produção.</li>
<li><strong>Equipes de segurança</strong> responsáveis por monitorar fluxos de trabalho baseados em IA na organização.</li>
<li><strong>Criadores de plataformas</strong> que desenvolvem produtos de IA agêntica e precisam de uma camada de detecção sem construir do zero.</li>
</ul>

<p>Se você está avaliando ferramentas de IA para desenvolvimento, confira nossos guias <a href="/pt/blog/best-ai-coding-tools-2026">Melhores ferramentas de IA para codificação em 2026</a> e <a href="/pt/blog/best-ai-tools-developers-2026">Melhores ferramentas de IA para desenvolvedores</a> para uma visão completa.</p>

<h2>Conclusão</h2>

<p>Os agentes de IA ficam mais poderosos a cada mês, e as ferramentas de segurança precisam acompanhar. A decisão da Cisco de liberar o Quarry como código aberto é inteligente — cria uma base compartilhada para a segurança de agentes em vez de deixar cada organização construir a sua. Seja o Quarry se tornando o padrão ou apenas uma entre muitas opções, a categoria veio para ficar.</p>

<p><em>Desenvolvendo com agentes de IA? Garanta que seu kit de ferramentas esteja completo. Confira o <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> para utilitários gratuitos — validadores JSON, testadores de regex, geradores de hash e muito mais.</em></p>
