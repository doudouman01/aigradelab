---
title: "Google establece fecha límite MCP para febrero 2027: todos los agentes IA deberán usar nuevos protocolos Workspace"
description: "Google exige que todos los agentes IA usen sus servidores MCP de Workspace en lugar de las API REST para el 1 de febrero de 2027. Esto es lo que cambia para desarrolladores, empresas y el ecosistema de agentes IA — más los nuevos niveles de uso y controles de administrador."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-28"
readTime: "9 min de lectura"
---

<h2>Google reescribe las reglas para los agentes IA</h2>
<p>Google ha anunciado que todos los <strong>agentes IA y herramientas de acceso similares</strong> deberán usar sus <strong>servidores MCP (Model Context Protocol) de Workspace</strong> o la <strong>CLI de Workspace</strong> para acceder a los datos de Workspace — no las API REST tradicionales. La aplicación técnica comienza el <strong>1 de febrero de 2027</strong>, dando a los desarrolladores aproximadamente dos meses para migrar.</p>
<p>Ambas herramientas ya están <strong>disponibles de forma general</strong>, cubriendo <strong>Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat y Tasks</strong>, con <strong>Keep próximamente</strong>. El cambio viene acompañado de un nuevo Anexo de Herramientas IA de Workspace, precios en dos niveles y controles de administrador mejorados — representando el cambio más significativo en cómo las herramientas de terceros interactúan con Google Workspace desde el lanzamiento de la plataforma.</p>

<h2>Qué cambia el 1 de febrero de 2027</h2>
<p>El cambio fundamental es una migración de protocolo:</p>
<table>
  <thead>
    <tr><th>Antes del 1 feb 2027</th><th>Después del 1 feb 2027</th></tr>
  </thead>
  <tbody>
    <tr><td>Los agentes IA llaman directamente a las API REST de Workspace</td><td>Deben usar servidores MCP de Workspace o la CLI</td></tr>
    <tr><td>Los agentes definen sus propios patrones de acceso a datos</td><td>Acceso estandarizado a través de protocolos controlados por Google</td></tr>
    <tr><td>Visibilidad limitada del comportamiento de los agentes</td><td>Confirmaciones de usuario y registro de auditoría integrados</td></tr>
    <tr><td>Sin seguimiento de uso estandarizado</td><td>Sistema de dos niveles comenzando con Gmail, Drive, Calendar</td></tr>
  </tbody>
</table>

<h2>¿Qué es MCP y por qué importa?</h2>
<p><strong>MCP (Model Context Protocol)</strong> se está convirtiendo en el protocolo estándar para la interacción de agentes IA con herramientas y fuentes de datos externas. Desarrollado originalmente por Anthropic y rápidamente adoptado por la industria, MCP proporciona una forma estructurada para que los agentes IA puedan:</p>
<ul>
  <li><strong>Descubrir</strong> qué acciones están disponibles (leer correo, crear documento, etc.)</li>
  <li><strong>Solicitar permisos</strong> a través de confirmaciones de usuario estandarizadas</li>
  <li><strong>Ejecutar acciones</strong> con pistas de auditoría integradas</li>
  <li><strong>Respetar los límites</strong> establecidos por los administradores</li>
</ul>
<p>La adopción de MCP por parte de Google para Workspace es significativa porque valida MCP como estándar emergente — cuando la suite de productividad más grande del mundo lo exige, todo el ecosistema de agentes IA debe seguir.</p>

<h2>Los dos niveles de uso</h2>
<p>Google está introduciendo un <strong>sistema de uso en dos niveles</strong> para el acceso a API y MCP de Workspace, comenzando con Gmail, Drive y Calendar:</p>
<ul>
  <li><strong>Nivel estándar:</strong> incluido con los planes de Workspace existentes, cubriendo patrones de uso típicos para la mayoría de las organizaciones</li>
  <li><strong>Nivel premium:</strong> para casos de uso de alto volumen o agentes avanzados que excedan los límites estándar</li>
</ul>
<p>Este enfoque escalonado señala que Google espera que el tráfico de agentes IA eventualmente supere el uso humano de las API — y quiere monetizarlo en consecuencia.</p>

<h2>Seguridad: el verdadero impulsor</h2>
<p>La decisión de Google es fundamentalmente una cuestión de <strong>seguridad y control</strong>. Los agentes IA que acceden a datos de Workspace a través de API REST generan varios riesgos:</p>
<ul>
  <li><strong>Exfiltración de datos:</strong> un agente con acceso API podría copiar silenciosamente datos sensibles a servidores externos</li>
  <li><strong>Acciones no auditadas:</strong> sin registro estandarizado, las organizaciones no pueden rastrear qué hicieron los agentes con sus datos</li>
  <li><strong>Escalamiento de permisos:</strong> los agentes a menudo solicitan permisos más amplios de lo necesario, creando superficies de ataque</li>
  <li><strong>IA en la sombra:</strong> los empleados conectan agentes IA a Workspace sin aprobación de TI, creando flujos de datos no monitoreados</li>
</ul>
<p>Los servidores MCP y la CLI abordan estos riesgos forzando todas las interacciones de los agentes a través de puntos de control gestionados por Google con registro de auditoría integrado, confirmaciones de usuario y políticas de administrador. Ambas herramientas incluyen confirmaciones de usuario y registro de auditoría <strong>por defecto</strong>.</p>

<h2>Controles de administrador</h2>
<p>Google está desplegando simultáneamente capacidades de administración mejoradas:</p>
<ul>
  <li><strong>Lista blanca de agentes:</strong> los administradores pueden especificar qué agentes IA tienen permiso para acceder a datos de Workspace</li>
  <li><strong>Controles por servicio:</strong> habilitar el acceso de agentes a Gmail pero bloquear el acceso a Drive, por ejemplo</li>
  <li><strong>Monitoreo de uso:</strong> paneles en tiempo real mostrando la actividad de los agentes en toda la organización</li>
  <li><strong>Integración de cumplimiento:</strong> las acciones de los agentes alimentan los flujos de trabajo de cumplimiento y eDiscovery existentes</li>
</ul>

<h2>Lo que los desarrolladores deben hacer</h2>
<p>Para los desarrolladores que construyen agentes IA que interactúan con Google Workspace, la lista de migración es clara:</p>
<ol>
  <li><strong>Adoptar los servidores MCP de Workspace</strong> para la comunicación agente-Workspace (ahora GA)</li>
  <li><strong>O usar la CLI de Workspace</strong> como ruta de integración alternativa</li>
  <li><strong>Eliminar las llamadas directas a la API REST</strong> del código de los agentes antes del 1 de febrero de 2027</li>
  <li><strong>Implementar flujos de confirmación de usuario</strong> según lo requerido por los nuevos protocolos</li>
  <li><strong>Revisar el Anexo de Herramientas IA de Workspace</strong> para las nuevas condiciones de servicio</li>
  <li><strong>Planificar el uso escalonado</strong> y asegurar que tu modelo de precios contemple los costos potenciales del nivel premium</li>
</ol>

<h2>El panorama general: MCP se convierte en el estándar</h2>
<p>El mandato MCP de Google forma parte de una convergencia industrial más amplia:</p>
<ul>
  <li><strong>Anthropic</strong> creó MCP y lo utiliza extensivamente en el ecosistema de herramientas de Claude</li>
  <li><strong>OpenAI</strong> y <strong>Cisco</strong> introdujeron recientemente frameworks de herramientas para agentes IA alineados con los principios de MCP</li>
  <li><strong>Microsoft</strong> tiene su propio framework de agentes pero es cada vez más interoperable con MCP</li>
  <li><strong>Adopción empresarial:</strong> las principales plataformas están estandarizando interfaces compatibles con MCP para el acceso de agentes</li>
</ul>
<p>Para el ecosistema de agentes IA, este es un momento de maduración. El salvaje oeste de agentes llamando a API arbitrarias con supervisión mínima está terminando, reemplazado por protocolos estructurados que equilibran capacidad y seguridad.</p>

<h2>Herramientas recomendadas para el desarrollo de agentes IA</h2>
<p>Para desarrolladores que construyen agentes IA que necesitan integración con Workspace:</p>
<ul>
  <li>Lee nuestra cobertura de <a href="/es/blog/cognition-swe-2-1-ai-coding-model-benchmarks">SWE-2.1 de Cognition</a> para lo último en desarrollo impulsado por IA</li>
  <li>Explora nuestra <a href="/es/blog/best-ai-coding-tools-2026">guía de las mejores herramientas de código IA</a> para optimizar tu flujo de desarrollo</li>
</ul>
<p>Para desarrolladores que construyen integraciones de agentes, <a href="https://toolcraftkit.com">ToolCraftKit</a> proporciona herramientas de desarrollo gratuitas incluyendo un <a href="https://toolcraftkit.com/tools/code-formatter">Formateador de código</a>, un <a href="https://toolcraftkit.com/tools/jwt-decoder">Decodificador JWT</a> para depuración de autenticación API, un <a href="https://toolcraftkit.com/tools/cron-expression-generator">Generador de expresiones Cron</a> para programar agentes, y un <a href="https://toolcraftkit.com/tools/robots-txt-generator">Generador de Robots.txt</a>.</p>

<h2>Conclusión</h2>
<p>La fecha límite MCP de Google en febrero de 2027 marca el fin del acceso no estructurado de los agentes IA a los datos empresariales. Al exigir que todos los agentes usen servidores MCP o la CLI, Google está resolviendo simultáneamente el problema de seguridad (acceso a datos no auditado), el problema de monetización (uso escalonado) y el problema del ecosistema (protocolos estandarizados). Para los desarrolladores, el mensaje es claro: migra ahora o pierde el acceso a Workspace. Para las empresas, el mensaje es aún más claro: los agentes IA se están convirtiendo en una parte gestionada y auditable de la infraestructura de TI — no un servicio en la sombra que los empleados conectan por su cuenta.</p>
