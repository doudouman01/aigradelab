---
title: "Google define prazo MCP para fevereiro de 2027: todos os agentes de IA deverão usar novos protocolos do Workspace"
description: "O Google está exigindo que todos os agentes de IA usem seus servidores MCP do Workspace em vez de APIs REST até 1º de fevereiro de 2027. Veja o que muda para desenvolvedores, empresas e o ecossistema de agentes de IA — mais os novos níveis de uso e controles de administrador."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-28"
readTime: "9 min de leitura"
---

<h2>Google reescreve as regras para agentes de IA</h2>
<p>O Google anunciou que todos os <strong>agentes de IA e ferramentas de acesso similares</strong> devem usar seus <strong>servidores MCP (Model Context Protocol) do Workspace</strong> ou a <strong>CLI do Workspace</strong> para acessar dados do Workspace — não as tradicionais APIs REST. A aplicação técnica começa em <strong>1º de fevereiro de 2027</strong>, dando aos desenvolvedores aproximadamente dois meses para migrar.</p>
<p>Ambas as ferramentas já estão <strong>disponíveis de forma geral</strong>, cobrindo <strong>Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat e Tasks</strong>, com <strong>Keep chegando em breve</strong>. A mudança vem com um novo Adendo de Ferramentas IA do Workspace, preços em dois níveis e controles de administrador aprimorados — representando a mudança mais significativa na forma como ferramentas de terceiros interagem com o Google Workspace desde o lançamento da plataforma.</p>

<h2>O que muda em 1º de fevereiro de 2027</h2>
<table>
  <thead>
    <tr><th>Antes de 1º fev 2027</th><th>Após 1º fev 2027</th></tr>
  </thead>
  <tbody>
    <tr><td>Agentes de IA chamam APIs REST do Workspace diretamente</td><td>Devem usar servidores MCP do Workspace ou a CLI</td></tr>
    <tr><td>Agentes definem seus próprios padrões de acesso a dados</td><td>Acesso padronizado por protocolos controlados pelo Google</td></tr>
    <tr><td>Visibilidade limitada do comportamento dos agentes</td><td>Confirmações de usuário e logging de auditoria integrados</td></tr>
    <tr><td>Sem rastreamento de uso padronizado</td><td>Sistema de dois níveis começando por Gmail, Drive, Calendar</td></tr>
  </tbody>
</table>

<h2>O que é MCP e por que importa?</h2>
<p><strong>MCP (Model Context Protocol)</strong> está se tornando o protocolo padrão para a interação de agentes de IA com ferramentas e fontes de dados externas. Originalmente desenvolvido pela Anthropic e rapidamente adotado pela indústria, o MCP fornece uma forma estruturada para agentes de IA:</p>
<ul>
  <li><strong>Descobrir</strong> quais ações estão disponíveis (ler e-mail, criar documento, etc.)</li>
  <li><strong>Solicitar permissões</strong> através de confirmações de usuário padronizadas</li>
  <li><strong>Executar ações</strong> com trilhas de auditoria integradas</li>
  <li><strong>Respeitar limites</strong> definidos pelos administradores</li>
</ul>
<p>A adoção do MCP pelo Google para o Workspace é significativa porque valida o MCP como padrão emergente — quando a maior suíte de produtividade do mundo o exige, todo o ecossistema de agentes de IA precisa seguir.</p>

<h2>Os dois níveis de uso</h2>
<ul>
  <li><strong>Nível padrão:</strong> incluído nos planos Workspace existentes, cobrindo padrões de uso típicos para a maioria das organizações</li>
  <li><strong>Nível premium:</strong> para casos de uso de alto volume ou agentes avançados que excedem os limites padrão</li>
</ul>

<h2>Segurança: o verdadeiro motivador</h2>
<p>A decisão do Google é fundamentalmente uma questão de <strong>segurança e controle</strong>. Agentes de IA acessando dados do Workspace por APIs REST criam vários riscos:</p>
<ul>
  <li><strong>Exfiltração de dados:</strong> um agente com acesso API poderia silenciosamente copiar dados sensíveis para servidores externos</li>
  <li><strong>Ações não auditadas:</strong> sem logging padronizado, as organizações não conseguem rastrear o que os agentes fizeram com seus dados</li>
  <li><strong>Escalação de permissões:</strong> agentes frequentemente solicitam permissões mais amplas do que necessário, criando superfícies de ataque</li>
  <li><strong>Shadow AI:</strong> funcionários conectam agentes de IA ao Workspace sem aprovação de TI, criando fluxos de dados não monitorados</li>
</ul>

<h2>Controles de administrador</h2>
<ul>
  <li><strong>Lista de permitidos de agentes:</strong> administradores podem especificar quais agentes de IA têm permissão para acessar dados do Workspace</li>
  <li><strong>Controles por serviço:</strong> habilitar acesso de agentes ao Gmail mas bloquear acesso ao Drive, por exemplo</li>
  <li><strong>Monitoramento de uso:</strong> dashboards em tempo real mostrando a atividade dos agentes em toda a organização</li>
  <li><strong>Integração de compliance:</strong> as ações dos agentes alimentam workflows de compliance e eDiscovery existentes</li>
</ul>

<h2>O que os desenvolvedores devem fazer</h2>
<ol>
  <li><strong>Adotar os servidores MCP do Workspace</strong> para comunicação agente-Workspace (agora GA)</li>
  <li><strong>Ou usar a CLI do Workspace</strong> como caminho alternativo de integração</li>
  <li><strong>Remover chamadas diretas à API REST</strong> do código dos agentes antes de 1º de fevereiro de 2027</li>
  <li><strong>Implementar fluxos de confirmação de usuário</strong> conforme exigido pelos novos protocolos</li>
  <li><strong>Revisar o Adendo de Ferramentas IA do Workspace</strong> para os novos termos de serviço</li>
  <li><strong>Planejar para uso em níveis</strong> e garantir que seu modelo de preços considere os potenciais custos do nível premium</li>
</ol>

<h2>O quadro geral: MCP se torna o padrão</h2>
<ul>
  <li><strong>Anthropic</strong> criou o MCP e o utiliza extensivamente no ecossistema de ferramentas do Claude</li>
  <li><strong>OpenAI</strong> e <strong>Cisco</strong> introduziram recentemente frameworks de ferramentas para agentes de IA alinhados com os princípios do MCP</li>
  <li><strong>Microsoft</strong> tem seu próprio framework de agentes mas é cada vez mais interoperável com MCP</li>
  <li><strong>Adoção empresarial:</strong> as principais plataformas estão padronizando interfaces compatíveis com MCP para acesso de agentes</li>
</ul>

<h2>Ferramentas recomendadas para desenvolvimento de agentes de IA</h2>
<ul>
  <li>Leia nossa cobertura sobre o <a href="/pt/blog/cognition-swe-2-1-ai-coding-model-benchmarks">SWE-2.1 da Cognition</a> para as últimas novidades em desenvolvimento assistido por IA</li>
  <li>Explore nosso <a href="/pt/blog/best-ai-coding-tools-2026">guia das melhores ferramentas de código IA</a> para otimizar seu fluxo de desenvolvimento</li>
</ul>
<p>Para desenvolvedores construindo integrações de agentes, o <a href="https://toolcraftkit.com">ToolCraftKit</a> oferece ferramentas de desenvolvimento gratuitas incluindo um <a href="https://toolcraftkit.com/tools/code-formatter">Formatador de Código</a>, um <a href="https://toolcraftkit.com/tools/jwt-decoder">Decodificador JWT</a> para debugging de autenticação API, um <a href="https://toolcraftkit.com/tools/cron-expression-generator">Gerador de Expressões Cron</a> para agendamento de agentes, e um <a href="https://toolcraftkit.com/tools/robots-txt-generator">Gerador de Robots.txt</a>.</p>

<h2>Conclusão</h2>
<p>O prazo MCP do Google em fevereiro de 2027 marca o fim do acesso não estruturado de agentes de IA a dados empresariais. Ao exigir que todos os agentes usem servidores MCP ou a CLI, o Google está resolvendo simultaneamente o problema de segurança (acesso não auditado a dados), o problema de monetização (uso em níveis) e o problema do ecossistema (protocolos padronizados). Para os desenvolvedores, a mensagem é clara: migre agora ou perca o acesso ao Workspace. Para as empresas, a mensagem é ainda mais clara: agentes de IA estão se tornando uma parte gerenciada e auditável da infraestrutura de TI — não um serviço paralelo que funcionários conectam por conta própria.</p>
