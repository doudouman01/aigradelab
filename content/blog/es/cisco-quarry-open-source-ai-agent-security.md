---
title: "Cisco lanza Quarry en código abierto: un motor de seguridad que vigila a los agentes de IA"
description: "Cisco ha publicado Quarry como código abierto, un motor de detección de comportamiento diseñado para monitorear agentes de IA contra actividad maliciosa. Así funciona y por qué la seguridad de los agentes de IA es cada vez más crítica."
category: "Lab Notes"
categorySlug: "lab-notes"
date: "2026-11-24"
readTime: "7 min read"
---

<h2>Cisco aborda el problema de seguridad de los agentes de IA</h2>

<p>A medida que los agentes de IA se vuelven más autónomos — escribiendo código, navegando por la web, gestionando archivos, llamando a APIs — la pregunta de <strong>quién vigila a los agentes</strong> se ha vuelto urgente. La respuesta de Cisco es <strong>Quarry</strong>, un motor de detección de comportamiento de código abierto diseñado para monitorear agentes de IA en tiempo real y alertar cuando se desvían.</p>

<p>La herramienta fue publicada en GitHub y cubre una amplia gama de escenarios: conversaciones LLM de uno y múltiples turnos, uso de herramientas agénticas, interacciones con el Model Context Protocol (MCP) y entradas multimodales. Ya hay plugins disponibles para <strong>Claude Code</strong>, <strong>Codex</strong> y otros agentes compatibles con MCP.</p>

<h2>Por qué la seguridad de los agentes de IA importa ahora</h2>

<p>La mayoría de las herramientas de seguridad de IA existentes se centran en lo que sucede a nivel del modelo — inyección de prompts, jailbreaking, salidas dañinas. Quarry adopta un enfoque diferente: observa lo que los agentes <em>hacen</em>, no solo lo que dicen.</p>

<p>Esta distinción es importante porque los agentes de IA modernos pueden:</p>

<ul>
<li>Ejecutar código en servidores y máquinas locales</li>
<li>Leer, escribir y eliminar archivos</li>
<li>Realizar llamadas API a servicios externos</li>
<li>Navegar por la web e interactuar con sitios en vivo</li>
<li>Encadenar múltiples herramientas en flujos de trabajo complejos</li>
</ul>

<p>Una inyección de prompt que hace que un chatbot diga algo inapropiado es una cosa. Una inyección de prompt que hace que un agente de codificación autónomo elimine una base de datos en producción es algo completamente distinto. Quarry está diseñado para el segundo escenario.</p>

<h2>Cómo funciona Quarry</h2>

<p>Quarry opera como una capa de detección de comportamiento ubicada entre un agente de IA y sus herramientas. Evalúa las acciones del agente contra un conjunto de reglas configurable, utilizando la <strong>Cisco AI Security & Safety Taxonomy</strong> como marco de referencia.</p>

<p>Características principales:</p>

<ul>
<li><strong>Detección basada en reglas:</strong> Los equipos de seguridad definen qué constituye un comportamiento sospechoso — acceso no autorizado a archivos, llamadas de red inesperadas, intentos de escalada de privilegios, patrones de exfiltración de datos.</li>
<li><strong>Conciencia multi-turno:</strong> Quarry rastrea el comportamiento del agente a lo largo de los turnos de conversación, detectando ataques que se desarrollan gradualmente en lugar de en un solo prompt.</li>
<li><strong>Integración con MCP:</strong> El soporte nativo del Model Context Protocol permite a Quarry monitorear las herramientas específicas a las que tiene acceso un agente y señalar patrones inusuales de uso.</li>
<li><strong>Arquitectura modular:</strong> Cisco proporciona plugins para frameworks de agentes populares y anima a la comunidad a crear más.</li>
</ul>

<p>El repositorio del proyecto en GitHub incluye instrucciones de instalación, versiones de Python compatibles, ejemplos de configuración y guías para crear reglas.</p>

<h2>El panorama general: la seguridad de agentes de IA es una nueva categoría</h2>

<p>Quarry forma parte de una tendencia más amplia. A medida que los agentes de IA pasan de las demos a la producción, toda una categoría de seguridad está emergiendo en torno a ellos:</p>

<ul>
<li><strong>Cisco AI Defense</strong> — La suite comercial de seguridad de IA de Cisco, que ahora se desarrolla íntegramente usando Codex de OpenAI, con funcionalidades entregadas en semanas en lugar de trimestres.</li>
<li><strong>Sistema de aprobación por niveles de Anthropic</strong> — Parte del nuevo paquete Claude Ship, donde los cambios de código se clasifican por nivel de riesgo y requieren distintos grados de aprobación humana. <a href="/es/blog/claude-ship-ai-code-automation">Lee nuestra cobertura aquí</a>.</li>
<li><strong>Daybreak Defense Network de OpenAI</strong> — Una alianza de ciberseguridad con Cisco que explora el triaje de amenazas con IA.</li>
</ul>

<p>El patrón es claro: las empresas que construyen los agentes más capaces también construyen las barreras de seguridad. La pregunta es si herramientas de código abierto como Quarry pueden mantener el ritmo del desarrollo de agentes.</p>

<h2>Quién debería usar Quarry</h2>

<p>Quarry es principalmente relevante para:</p>

<ul>
<li><strong>Equipos de desarrollo</strong> que despliegan agentes de codificación IA (Claude Code, Codex, Cursor) en entornos de producción.</li>
<li><strong>Equipos de seguridad</strong> responsables de monitorear flujos de trabajo impulsados por IA en la organización.</li>
<li><strong>Creadores de plataformas</strong> que desarrollan productos de IA agéntica y necesitan una capa de detección sin construirla desde cero.</li>
</ul>

<p>Si estás evaluando herramientas de IA para desarrollo, consulta nuestras guías <a href="/es/blog/best-ai-coding-tools-2026">Mejores herramientas de IA para codificación en 2026</a> y <a href="/es/blog/best-ai-tools-developers-2026">Mejores herramientas de IA para desarrolladores</a> para ver el panorama completo.</p>

<h2>Conclusión</h2>

<p>Los agentes de IA se vuelven más poderosos cada mes, y las herramientas de seguridad deben estar a la altura. La decisión de Cisco de publicar Quarry como código abierto es acertada — crea una base compartida para la seguridad de agentes en lugar de que cada organización construya la suya. Ya sea que Quarry se convierta en el estándar o en una entre muchas opciones, la categoría llegó para quedarse.</p>

<p><em>¿Desarrollas con agentes de IA? Asegúrate de tener las herramientas adecuadas. Visita <a href="https://toolcraftkit.com" target="_blank" rel="noopener">ToolCraftKit.com</a> para utilidades gratuitas — validadores JSON, testers de regex, generadores de hash y mucho más.</em></p>
