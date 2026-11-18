---
title: "Personal Agent Protocol (Poppy): O Novo Padrão Que Permite aos Agentes de IA Agirem em Seu Nome"
description: "A Sierra lançou o Poppy 1.0 em 13 de novembro de 2026, um protocolo aberto que define como agentes de IA pessoais se conectam a empresas, autenticam usuários e concluem tarefas. Shopify e Meta já aderiram."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-19"
readTime: "8 min de leitura"
---

<h2>Os Agentes de IA Acabam de Ganhar uma Porta de Entrada para Todas as Empresas</h2>

<p>Em 13 de novembro de 2026, a Sierra lançou o Personal Agent Protocol 1.0, um padrão aberto que ela chama de <strong>Poppy</strong>, que define como o agente de IA de uma pessoa se conecta a uma empresa por meio de seu site, de suas APIs ou de seu agente empresarial. O protocolo já está no ar: a Shopify o ativou automaticamente em toda a sua plataforma de lojistas, e o agente Muse, da Meta, agora procura o Poppy ao visitar qualquer site.</p>

<p>Esta não é uma especificação teórica. É infraestrutura implantada que está mudando agora mesmo a forma como os agentes de IA interagem com a internet comercial.</p>

<h2>Por Que o Poppy Existe</h2>

<p>O gatilho foi um conflito real. Em setembro de 2026, a Amazon bloqueou o agente Muse, da Meta, em sua loja, alegando preocupações com scraping. Isso aconteceu apenas 12 dias depois do lançamento do Muse. O incidente expôs um problema fundamental: não havia uma forma padrão para os agentes de IA se identificarem, autenticarem usuários e interagirem com empresas.</p>

<p>Sem um protocolo, toda interação entre agente e empresa era, na prática, web scraping, uma zona cinzenta jurídica e técnica que empresas como a Amazon não estavam dispostas a tolerar.</p>

<p>A Sierra (cofundada pelo ex-CEO da Salesforce, Bret Taylor) e a Meta desenvolveram o Poppy para resolver isso. O protocolo dá às empresas uma forma de reconhecer quando estão lidando com um agente de IA, verificar quem ele representa e controlar o que ele pode fazer.</p>

<h2>Como o Poppy Funciona: Cinco Blocos de Construção</h2>

<p>O Poppy é construído sobre cinco componentes centrais que trabalham juntos:</p>

<h3>1. Descoberta</h3>

<p>As empresas publicam um arquivo <code>/.well-known/poppy.json</code> em seus sites, de forma semelhante a como o <code>robots.txt</code> diz aos rastreadores de busca o que indexar. Esse arquivo declara como os agentes podem se conectar, quais métodos de login estão disponíveis e quais capacidades são expostas. Qualquer agente de IA pode ler esse arquivo para entender como interagir com a empresa.</p>

<h3>2. Identidade</h3>

<p>Quando um agente de IA chega, a empresa consegue identificar claramente que está lidando com o "agente de IA do Usuário X" e não com um bot anônimo. O agente apresenta credenciais criptográficas (client_id, chave pública, endereço de callback) que estabelecem sua identidade. Isso é crítico: as empresas precisam saber que estão atendendo um agente legítimo, e não um scraper ou um atacante.</p>

<h3>3. Autenticação (Baseada em OAuth)</h3>

<p>O Poppy usa o OAuth, o mesmo padrão que alimenta o "Entrar com o Google" e fluxos semelhantes. O usuário faz login na própria página da empresa; o agente de IA nunca vê a senha. Após a autenticação, o agente recebe um token de sessão com escopo e permissões mínimas. Isso significa que seu agente pode navegar pela sua conta da Amazon, mas apenas com as permissões que você concedeu explicitamente.</p>

<h3>4. Permissões em Níveis</h3>

<p>As permissões são divididas em cinco níveis, de totalmente proibido a acesso total. As empresas decidem qual nível oferecer e os usuários decidem quanto conceder. No nível básico (<code>poppy:read</code>), um agente pode consultar saldos e visualizar pedidos. Operações de escrita, como fazer compras, exigem uma autorização <code>poppy:write</code> separada.</p>

<h3>5. Sessões Entre Canais</h3>

<p>Um único token de autenticação funciona no site da empresa, na API e até no seu próprio agente de IA. Se você se autenticar com um varejista pelo Poppy, seu agente pode passar sem problemas de navegar por produtos no site, a verificar o estoque pela API e a negociar devoluções com o agente de IA de atendimento ao cliente do varejista, tudo em uma única sessão.</p>

<h2>Quem Já Está Usando o Poppy?</h2>

<p>Os parceiros de lançamento representam um recorte relevante do comércio:</p>

<table>
  <thead>
    <tr>
      <th>Empresa</th>
      <th>Papel</th>
      <th>O Que Estão Fazendo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Shopify</strong></td>
      <td>Parceira de plataforma</td>
      <td>Ativou o Poppy automaticamente para todos os lojistas: milhões de lojas agora são acessíveis a agentes</td>
    </tr>
    <tr>
      <td><strong>Meta (Muse)</strong></td>
      <td>Parceira de agente</td>
      <td>O Muse agora verifica a presença do Poppy ao visitar qualquer site, usando-o para autenticar e transacionar</td>
    </tr>
    <tr>
      <td><strong>Walmart</strong></td>
      <td>Parceira fundadora</td>
      <td>Acesso de agentes ao varejo para compras e gerenciamento de pedidos</td>
    </tr>
    <tr>
      <td><strong>Stripe</strong></td>
      <td>Parceira de pagamentos</td>
      <td>Contribuindo com capacidades de pagamento para que os agentes possam concluir compras</td>
    </tr>
    <tr>
      <td><strong>Rocket</strong></td>
      <td>Parceira financeira</td>
      <td>Demonstrou o Muse obtendo pré-aprovação de uma hipoteca pelo Poppy no Sierra Summit</td>
    </tr>
  </tbody>
</table>

<p>A lista completa de parceiros de design inclui mais de 35 empresas: Adyen, Bank of America, BBVA, Chime, Cigna, Cloudflare, Comcast, DIRECTV, ElevenLabs, FOX, Gap Inc., GEICO, Hertz e muitas outras. Isso não é um experimento de startup: é infraestrutura corporativa.</p>

<h2>Poppy + ChatGPT Wallet: A Pilha do Comércio Toma Forma</h2>

<p>O lançamento do Poppy acontece na mesma semana do lançamento do ChatGPT Wallet da OpenAI (13 de novembro). Juntos, eles revelam a arquitetura emergente do comércio com IA:</p>

<ul>
  <li><strong>Poppy</strong> cuida de identidade e autorização: como um agente prova quem representa e o que tem permissão para fazer</li>
  <li><strong>ChatGPT Wallet</strong> cuida do pagamento: como um agente paga por coisas sem expor números de cartão</li>
  <li><strong>Agentes empresariais (Sierra, Genesys etc.)</strong> cuidam do atendimento: a IA do lado da empresa que processa pedidos e faz o atendimento ao cliente</li>
</ul>

<p>Junte tudo isso e você terá um mundo em que seu agente de IA pode navegar em lojas Shopify, autenticar-se com sua conta, selecionar produtos, pagar com sua carteira e cuidar de devoluções, tudo sem você abrir um navegador.</p>

<h2>O Que Isso Significa para as Empresas</h2>

<p>Se você tem uma loja online, o Poppy deve estar no seu radar imediatamente. Veja por quê:</p>

<h3>A Mudança na Distribuição</h3>

<p>Quando a Shopify ativou o Poppy automaticamente em sua plataforma, tornou instantaneamente milhões de lojas acessíveis a agentes de IA. Se sua loja está na Shopify, você já está no protocolo: os agentes já podem descobrir e interagir com você. Se você não está na Shopify, está invisível para todos os agentes que usam o Poppy para descoberta.</p>

<h3>Implementação</h3>

<p>Para empresas que não estão na Shopify, implementar o Poppy exige:</p>

<ol>
  <li>Publicar um arquivo de descoberta <code>/.well-known/poppy.json</code></li>
  <li>Configurar endpoints OAuth para autenticação de agentes</li>
  <li>Definir níveis de permissão e capacidades</li>
  <li>Testar com agentes parceiros (o Meta Muse é o principal agente de teste no momento)</li>
</ol>

<p>O Poppy é construído sobre padrões existentes (OAuth, JWT, HTTPS, OpenAPI, MCP), então a maioria das empresas pode implementá-lo com as ferramentas que já tem.</p>

<h2>O Que Isso Significa para os Usuários de Ferramentas de IA</h2>

<p>Se você usa agentes de IA (Claude, ChatGPT, Gemini ou o Muse da Meta), o Poppy importa porque é a infraestrutura que determinará <strong>o que seu agente realmente pode fazer por você</strong>.</p>

<p>Hoje, a maioria dos agentes de IA se limita a responder perguntas e gerar conteúdo. O Poppy abre a porta para agentes que:</p>

<ul>
  <li>Fazem compras para você em qualquer loja compatível com o Poppy</li>
  <li>Gerenciam suas assinaturas e contas</li>
  <li>Cuidam de interações de atendimento ao cliente</li>
  <li>Comparam preços e encontram ofertas em vários varejistas</li>
  <li>Obtêm pré-aprovação para produtos financeiros</li>
</ul>

<p>A palavra-chave é "você". O Poppy foi projetado com o controle do usuário no centro. Você se autentica, concede as permissões e pode revogar o acesso a qualquer momento. O agente age em seu nome, não por conta própria.</p>

<h2>Considerações de Segurança</h2>

<p>O modelo de segurança do Poppy merece uma análise cuidadosa:</p>

<ul>
  <li><strong>Os usuários fazem login por conta própria:</strong> O agente nunca vê sua senha. A autenticação acontece na própria página da empresa</li>
  <li><strong>Permissões mínimas:</strong> Os agentes recebem o menor acesso necessário para a tarefa. Ler seu histórico de pedidos não dá permissão para fazer pedidos</li>
  <li><strong>Trilha de auditoria completa:</strong> As empresas podem ver o histórico completo do que um agente fez em uma sessão</li>
  <li><strong>Revogação instantânea:</strong> Os usuários podem desconectar qualquer agente de qualquer conta a qualquer momento</li>
  <li><strong>DPoP (Demonstration of Proof-of-Possession):</strong> Asserções assinadas impedem o roubo de tokens: um token roubado não pode ser usado por outro agente</li>
</ul>

<p>O modelo é sólido em teoria. O teste de verdade será em escala, quando milhões de agentes estiverem transacionando simultaneamente em milhares de empresas.</p>

<h2>Resumindo</h2>

<p>O Poppy 1.0 é daquelas versões de infraestrutura que não ganham as manchetes de um lançamento de modelo, mas podem acabar importando mais. É o encanamento que permitirá aos agentes de IA passar de "responder perguntas" a "fazer coisas", e fazer coisas significa interagir com empresas em seu nome.</p>

<p>A velocidade de adoção é o que torna o Poppy notável. O lançamento da Shopify em toda a plataforma e a integração do Muse da Meta significam que o Poppy já está no ar em escala massiva. Se outras plataformas de e-commerce o seguirem, o protocolo pode se tornar a forma padrão de os agentes de IA interagirem com a internet comercial em meses, não em anos.</p>

<p><em>Está criando ferramentas com IA? Explore os utilitários gratuitos em <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a>: geradores de QR code, criadores de faturas, ferramentas de PDF e mais.</em></p>
