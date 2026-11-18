---
title: "Personal Agent Protocol (Poppy): El Nuevo Estándar que Permite a los Agentes IA Actuar en tu Nombre"
description: "Sierra lanzó Poppy 1.0 el 13 de noviembre de 2026, un protocolo abierto que define cómo se conectan los agentes de IA personales con las empresas, autentican a los usuarios y completan tareas. Shopify y Meta ya se han sumado."
category: "Notas de Laboratorio"
categorySlug: "lab-notes"
date: "2026-11-19"
readTime: "8 min de lectura"
---

<h2>Los agentes de IA acaban de conseguir una puerta de entrada a todos los negocios</h2>

<p>El 13 de noviembre de 2026, Sierra lanzó Personal Agent Protocol 1.0, un estándar abierto al que llama <strong>Poppy</strong>, que define cómo se conecta el agente de IA de una persona con un negocio a través de su sitio web, sus API o su agente empresarial. El protocolo ya está en funcionamiento: Shopify lo activó automáticamente en toda su plataforma de comerciantes y el agente Muse de Meta ahora busca Poppy al visitar cualquier sitio web.</p>

<p>No es una especificación teórica. Es infraestructura desplegada que está cambiando ahora mismo cómo interactúan los agentes de IA con el internet comercial.</p>

<h2>Por qué existe Poppy</h2>

<p>El detonante fue un conflicto real. En septiembre de 2026, Amazon bloqueó al agente Muse de Meta en su tienda, alegando preocupaciones por el scraping. Ocurrió apenas 12 días después del lanzamiento de Muse. El incidente puso de manifiesto un problema fundamental: no había una forma estándar de que los agentes de IA se identificaran, autenticaran a los usuarios e interactuaran con los negocios.</p>

<p>Sin un protocolo, cada interacción entre un agente y un negocio era en esencia scraping web, una zona gris legal y técnica que empresas como Amazon no estaban dispuestas a tolerar.</p>

<p>Sierra (cofundada por el antiguo director ejecutivo de Salesforce, Bret Taylor) y Meta desarrollaron Poppy para resolverlo. El protocolo da a las empresas una forma de reconocer cuándo tratan con un agente de IA, verificar a quién representa y controlar lo que puede hacer.</p>

<h2>Cómo funciona Poppy: cinco bloques fundamentales</h2>

<p>Poppy se construye sobre cinco componentes esenciales que funcionan en conjunto:</p>

<h3>1. Descubrimiento</h3>

<p>Las empresas publican un archivo <code>/.well-known/poppy.json</code> en su sitio web, de forma similar a como <code>robots.txt</code> indica a los rastreadores de búsqueda qué indexar. Este archivo declara cómo pueden conectarse los agentes, qué métodos de inicio de sesión hay disponibles y qué capacidades se exponen. Cualquier agente de IA puede leer este archivo para entender cómo interactuar con el negocio.</p>

<h3>2. Identidad</h3>

<p>Cuando llega un agente de IA, la empresa puede identificar con claridad que trata con "el agente de IA del usuario X" y no con un bot anónimo. El agente presenta credenciales criptográficas (client_id, clave pública, dirección de callback) que establecen su identidad. Es fundamental: las empresas necesitan saber que atienden a un agente legítimo, no a un scraper o a un atacante.</p>

<h3>3. Autenticación (basada en OAuth)</h3>

<p>Poppy usa OAuth, el mismo estándar que impulsa "Iniciar sesión con Google" y flujos similares. El usuario inicia sesión en la propia página de la empresa; el agente de IA nunca ve la contraseña. Tras la autenticación, el agente recibe un token de sesión acotado con permisos mínimos. Esto significa que tu agente puede navegar por tu cuenta de Amazon, pero solo con los permisos que concedas de forma explícita.</p>

<h3>4. Permisos por niveles</h3>

<p>Los permisos se dividen en cinco niveles, desde la prohibición total hasta el acceso completo. Las empresas deciden qué nivel ofrecer y los usuarios deciden cuánto conceden. En el nivel básico (<code>poppy:read</code>), un agente puede consultar saldos y ver pedidos. Las operaciones de escritura, como hacer compras, requieren una autorización <code>poppy:write</code> aparte.</p>

<h3>5. Sesiones entre canales</h3>

<p>Un único token de autenticación funciona en el sitio web de la empresa, en su API e incluso en su propio agente de IA. Si te autenticas con un minorista a través de Poppy, tu agente puede pasar sin problemas de navegar por los productos en el sitio web a comprobar el inventario mediante la API y negociar devoluciones con el agente de atención al cliente de IA del minorista, todo en una sola sesión.</p>

<h2>¿Quién ya usa Poppy?</h2>

<p>Los socios de lanzamiento representan una sección transversal seria del comercio:</p>

<table>
  <thead>
    <tr>
      <th>Empresa</th>
      <th>Rol</th>
      <th>Qué hacen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Shopify</strong></td>
      <td>Socio de plataforma</td>
      <td>Activó Poppy automáticamente en todos los comerciantes: millones de tiendas son ahora accesibles para agentes</td>
    </tr>
    <tr>
      <td><strong>Meta (Muse)</strong></td>
      <td>Socio de agentes</td>
      <td>Muse ahora comprueba Poppy al visitar cualquier sitio web y lo usa para autenticarse y realizar transacciones</td>
    </tr>
    <tr>
      <td><strong>Walmart</strong></td>
      <td>Socio fundador</td>
      <td>Acceso de agentes al comercio minorista para compras y gestión de pedidos</td>
    </tr>
    <tr>
      <td><strong>Stripe</strong></td>
      <td>Socio de pagos</td>
      <td>Aporta capacidades de pago para que los agentes puedan completar compras</td>
    </tr>
    <tr>
      <td><strong>Rocket</strong></td>
      <td>Socio financiero</td>
      <td>Demostró cómo Muse obtenía la preaprobación de una hipoteca mediante Poppy en el Sierra Summit</td>
    </tr>
  </tbody>
</table>

<p>La lista completa de socios de diseño incluye más de 35 empresas: Adyen, Bank of America, BBVA, Chime, Cigna, Cloudflare, Comcast, DIRECTV, ElevenLabs, FOX, Gap Inc., GEICO, Hertz y muchas más. No es un experimento de startup: es infraestructura empresarial.</p>

<h2>Poppy + ChatGPT Wallet: toma forma la pila del comercio</h2>

<p>El lanzamiento de Poppy llega la misma semana que el de ChatGPT Wallet de OpenAI (13 de noviembre). Juntos revelan la arquitectura emergente del comercio impulsado por IA:</p>

<ul>
  <li><strong>Poppy</strong> se encarga de la identidad y la autorización: cómo demuestra un agente a quién representa y qué se le permite hacer</li>
  <li><strong>ChatGPT Wallet</strong> se encarga del pago: cómo paga un agente sin exponer números de tarjeta</li>
  <li><strong>Los agentes empresariales (Sierra, Genesys, etc.)</strong> se encargan del cumplimiento: la IA del lado del negocio que procesa pedidos y atiende a los clientes</li>
</ul>

<p>Júntalos y obtienes un mundo en el que tu agente de IA puede navegar por tiendas de Shopify, autenticarse con tu cuenta, seleccionar productos, pagar con tu cartera y gestionar devoluciones, todo sin que abras un navegador.</p>

<h2>Qué significa para las empresas</h2>

<p>Si gestionas una tienda en línea, Poppy debería estar en tu radar de inmediato. Este es el motivo:</p>

<h3>El cambio en la distribución</h3>

<p>Cuando Shopify activó Poppy automáticamente en su plataforma, hizo accesibles al instante millones de tiendas para los agentes de IA. Si tu tienda está en Shopify, ya estás dentro del protocolo: los agentes ya pueden descubrirte e interactuar contigo. Si no estás en Shopify, eres invisible para todos los agentes que usan Poppy para el descubrimiento.</p>

<h3>Implementación</h3>

<p>Para las empresas que no usan Shopify, implementar Poppy requiere:</p>

<ol>
  <li>Publicar un archivo de descubrimiento <code>/.well-known/poppy.json</code></li>
  <li>Configurar endpoints de OAuth para la autenticación de agentes</li>
  <li>Definir niveles de permisos y capacidades</li>
  <li>Probar con agentes socios (Meta Muse es ahora mismo el principal agente de pruebas)</li>
</ol>

<p>Poppy se basa en estándares existentes (OAuth, JWT, HTTPS, OpenAPI, MCP), por lo que la mayoría de las empresas pueden implementarlo con las herramientas que ya tienen.</p>

<h2>Qué significa para los usuarios de herramientas de IA</h2>

<p>Si usas agentes de IA (Claude, ChatGPT, Gemini o Muse de Meta), Poppy importa porque es la infraestructura que determinará <strong>lo que tu agente puede hacer realmente por ti</strong>.</p>

<p>Ahora mismo, la mayoría de los agentes de IA se limitan a responder preguntas y generar contenido. Poppy abre la puerta a agentes que:</p>

<ul>
  <li>Compren por ti en cualquier tienda compatible con Poppy</li>
  <li>Gestionen tus suscripciones y cuentas</li>
  <li>Se encarguen de las interacciones de atención al cliente</li>
  <li>Comparen precios y encuentren ofertas en varios minoristas</li>
  <li>Obtengan la preaprobación de productos financieros</li>
</ul>

<p>La palabra clave es "tú". Poppy está diseñado con el control del usuario en el centro. Tú te autenticas, tú concedes los permisos y puedes revocar el acceso en cualquier momento. El agente actúa en tu nombre, no por su cuenta.</p>

<h2>Consideraciones de seguridad</h2>

<p>Conviene examinar con atención el modelo de seguridad de Poppy:</p>

<ul>
  <li><strong>Los usuarios inician sesión por sí mismos:</strong> el agente nunca ve tu contraseña. La autenticación ocurre en la propia página de la empresa</li>
  <li><strong>Permisos mínimos:</strong> los agentes obtienen el menor acceso necesario para la tarea. Leer tu historial de pedidos no concede permiso para hacer pedidos</li>
  <li><strong>Registro de auditoría completo:</strong> las empresas pueden ver el historial completo de lo que hizo un agente en una sesión</li>
  <li><strong>Revocación instantánea:</strong> los usuarios pueden desconectar a cualquier agente de cualquier cuenta en cualquier momento</li>
  <li><strong>DPoP (Demonstration of Proof-of-Possession):</strong> las aserciones firmadas evitan el robo de tokens: un token robado no puede ser usado por otro agente</li>
</ul>

<p>El modelo es sólido en teoría. La verdadera prueba será a escala, cuando millones de agentes realicen transacciones a la vez en miles de empresas.</p>

<h2>Conclusión</h2>

<p>Poppy 1.0 es una de esas versiones de infraestructura que no acapara los titulares de un lanzamiento de modelo, pero que puede acabar importando más. Es la fontanería que permitirá a los agentes de IA pasar de "responder preguntas" a "hacer cosas", y hacer cosas significa interactuar con las empresas en tu nombre.</p>

<p>La velocidad de adopción es lo que hace notable a Poppy. El despliegue de Shopify en toda su plataforma y la integración de Muse de Meta significan que Poppy ya funciona a gran escala. Si otras plataformas de comercio electrónico lo siguen, el protocolo podría convertirse en la forma estándar en que los agentes de IA interactúan con el internet comercial en cuestión de meses, no de años.</p>

<p><em>¿Estás creando herramientas con IA? Explora las utilidades gratuitas de <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a>: generadores de QR, creadores de facturas, herramientas de PDF y mucho más.</em></p>
