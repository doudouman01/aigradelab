---
title: "Análisis de GLM-5.4: el Loop Transformer de Z.ai reinventa cómo piensan los modelos de IA"
description: "El GLM-5.4 de Z.ai introduce el Loop Transformer, una arquitectura que ejecuta 28 capas dos veces para igualar modelos 3 veces más grandes. Analizamos qué significa, cómo rinde y si vale la pena usarlo."
category: "Análisis con nota"
categorySlug: "graded-reviews"
date: "2026-11-23"
lastTested: "2026-11-23"
readTime: "11 min de lectura"
grade: "B+"
scores_ux: 7
scores_quality: 8
scores_value: 7
scores_integration: 6
scores_support: 6
toolName: "GLM-5.4"
---

<h2>GLM-5.4 de un vistazo</h2>

<div style="margin: 1.5rem 0; padding: 1.5rem; border-left: 4px solid #2563eb;">
  <strong>Nota AIGradeLab: B+</strong><br>
  UX: 7/10 | Calidad: 8/10 | Valor: 7/10 | Integración: 6/10 | Soporte: 6/10<br><br>
  <strong>En resumen:</strong> GLM-5.4 es el lanzamiento de modelo más interesante arquitectónicamente de noviembre 2026. El Loop Transformer es una innovación genuina: reutilizar capas en lugar de apilar más es un enfoque elegante para hacer modelos más inteligentes sin triplicar los costes de cómputo. Pero el modelo se ve limitado por su disponibilidad restringida, la ausencia de acceso API y la falta de benchmarks oficiales. Por ahora, es un avance fascinante de hacia dónde se dirige la arquitectura IA, pero aún no un sustituto diario de Claude Fable 5.2 o GPT-6.2 Astra.
</div>

<h2>¿Qué es el Loop Transformer?</h2>

<p>Todos los grandes modelos de IA lanzados en 2026 han seguido la misma fórmula: apilar más capas, añadir más parámetros, entrenar con más datos. GLM-5.4 rompe el patrón. En lugar de añadir capas, Z.ai hace que las capas existentes trabajen más intensamente.</p>

<p>Así funciona: GLM-5.4 tiene aproximadamente 750 mil millones de parámetros organizados en 78 capas almacenadas. Pero 28 de esas capas — el «loop block» en el centro de la red — se ejecutan dos veces por pase directo con pesos compartidos. El resultado: 106 pases de capas efectivos por token, usando el almacenamiento de parámetros de un modelo de 78 capas.</p>

<p>Z.ai afirma que este enfoque permite a GLM-5.4 igualar la inteligencia de modelos de 2 a 3 billones de parámetros. Si es siquiera parcialmente cierto, es un avance arquitectónico significativo: se pueden construir modelos más inteligentes sin escalar proporcionalmente los costes de cómputo.</p>

<h3>Cómo funciona el bucle en la práctica</h3>

<p>La arquitectura tiene tres secciones:</p>

<ul>
  <li><strong>Capas preludio (1–26):</strong> Se ejecutan una vez por token. Construyen las representaciones iniciales de la entrada.</li>
  <li><strong>Capas de bucle (27–54):</strong> Estas 28 capas se ejecutan dos veces con pesos compartidos. Puertas por token controlan cuánta salida de cada iteración se escribe en el flujo residual. En el pase 1, las puertas tienden a quedarse pequeñas — el modelo construye contexto global. En el pase 2, las puertas se abren más, refinando la representación con el contexto del pase 1.</li>
  <li><strong>Capas coda (55–78):</strong> Se ejecutan una vez. Producen la salida final.</li>
</ul>

<p>Un truco ingenioso: en el segundo pase por el loop block, el modelo reutiliza el KV cache sparse y los índices de atención seleccionados durante el pase 1. Solo mantiene su propio cache local de ventana deslizante (aparentemente 128 tokens). Esto significa que la segunda iteración del bucle añade relativamente poca sobrecarga de memoria.</p>

<h2>Lo que sabemos sobre el rendimiento</h2>

<p>Aquí es donde las cosas se complican. Z.ai no ha publicado benchmarks oficiales ni model card. Un miembro del equipo dijo que las puntuaciones llegarán más adelante. Lo que tenemos son pruebas de terceros y los estudios de ablación internos de Z.ai.</p>

<h3>Resultados de terceros: KingBench 4</h3>

<p>El framework KingBench 4 de AICodeKing probó GLM-5.4 en seis proyectos de código. Los resultados:</p>

<ul>
  <li><strong>7º en la clasificación general</strong> de 18 modelos probados</li>
  <li><strong>1º entre los modelos open-weight</strong></li>
  <li><strong>Tiempo de ejecución: 431 minutos</strong> — significativamente más lento que Gemini 4 Neon (109 minutos)</li>
  <li><strong>Pasos de razonamiento: 1.128</strong> frente a los 244 de Gemini 4 Neon — el modelo piensa profundamente, a veces demasiado</li>
  <li><strong>Tasa de fallo de llamadas a herramientas: 1,56 %</strong>, pero el 66 % de las llamadas fallidas se recuperaron al reintentar — mayor recuperación que cualquier modelo Claude o Codex en la prueba</li>
</ul>

<p>Para contexto, <a href="/es/blog/claude-fable-5-2-review">Claude Fable 5.2</a> se clasificó 1º en la clasificación general de KingBench 4 con 42/60 puntos. Gemini 4 Neon fue 2º con 37,9/60. GLM-5.4 aterrizó aproximadamente donde se esperaría un modelo open-weight sólido.</p>

<h3>Validación interna de Z.ai</h3>

<p>Z.ai realizó un experimento controlado a escala de 30B parámetros — misma arquitectura, con y sin bucle — usando aproximadamente un 10 % más de cómputo de entrenamiento para la versión con bucle. Resultados: la longitud de salida cayó entre un 10–14 % en todos los benchmarks (hasta un 14,9 % en MMLU-Pro), y las mayores ganancias se observaron en matemáticas, razonamiento científico y tareas de contexto largo.</p>

<p>Validaron el diseño en cuatro escalas: 1B, 4B, 30B y 750B parámetros.</p>

<h3>Un hallazgo cualitativo interesante</h3>

<p>Al menos un revisor independiente informó que GLM-5.4 detectó bugs de aplicación y vulnerabilidades de seguridad que Claude Fable 5.2 y otros modelos probados pasaron por alto. Esto se alinea con el diseño de la arquitectura: el doble pase por las capas de bucle da al modelo más tiempo para «notar» problemas sutiles. La evaluación de DataCamp es que GLM-5.4 se usa mejor como segundo revisor que como agente de código principal.</p>

<h2>Nota UX: 7/10</h2>

<p>GLM-5.4 es accesible a través de la suscripción GLM Coding Plan de Z.ai, ZCode (zcode.z.ai) y Z.ai Chat (chat.z.ai). Las interfaces son funcionales pero no al nivel de las experiencias pulidas de ChatGPT o Claude. Soporta ventanas de contexto de 1M tokens — Z.ai recomienda configurar el cliente a 512.000 tokens para mejores resultados en código. El modelo también admite entrada de visión para tareas de código visual.</p>

<p>Un problema conocido que Z.ai reconoce: el modelo puede quedarse atrapado en largos bucles de «pensamiento maratón». Es la contrapartida del Loop Transformer: el mismo mecanismo que permite un razonamiento más profundo puede a veces llevar a una deliberación excesiva.</p>

<p>La velocidad es aceptable: Z.ai afirma hasta 200 tokens/s fuera de horas punta y 70–80 tokens/s bajo carga.</p>

<h2>Nota calidad: 8/10</h2>

<p>Basándonos en las pruebas de terceros disponibles y los primeros informes de usuarios, la calidad de razonamiento de GLM-5.4 es genuinamente sólida, especialmente en revisión de código y análisis de seguridad. La arquitectura Loop Transformer parece dar al modelo una ventaja cualitativa en tareas de análisis profundo. Le damos un 8 basándonos en los resultados de KingBench y la clara innovación arquitectónica, pero esta nota podría cambiar cuando Z.ai publique sus benchmarks oficiales.</p>

<h2>Nota valor: 7/10</h2>

<p>Sin precios API publicados, puntuar el valor es difícil. El acceso requiere actualmente una suscripción GLM Coding Plan con cuotas semanales aparentemente un 50 % superiores a las de GLM-5.3. El modelo aún no está disponible en OpenRouter, Cursor, GitHub Copilot ni las principales plataformas cloud (Vertex AI, Azure AI Foundry, AWS Bedrock). Esto limita significativamente su valor práctico.</p>

<h2>Nota integración: 6/10</h2>

<p>Este es el punto más débil de GLM-5.4. No hay acceso API disponible aún — Z.ai dice que se abrirá tras una evaluación de seguridad. El modelo funciona en Claude Code (provider ID: «zai-coding-plan/glm-5.4») y las herramientas propias de Z.ai, pero está ausente de las principales plataformas de IA que la mayoría de desarrolladores usan a diario. Los pesos abiertos están planificados pero no publicados — Z.ai menciona un «refuerzo de seguridad» sin fecha anunciada.</p>

<h2>Nota soporte: 6/10</h2>

<p>Z.ai no ha publicado model card, ni benchmarks oficiales, ni documentación detallada. La falta de transparencia es preocupante para un modelo tan ambicioso arquitectónicamente. El soporte parece limitado al ecosistema propio de Z.ai.</p>

<h2>El Loop Transformer: por qué importa más allá de GLM-5.4</h2>

<p>Aunque GLM-5.4 en sí no esté listo para reemplazar tu modelo de código principal, la arquitectura Loop Transformer es significativa para toda la industria de IA. He aquí por qué:</p>

<ul>
  <li><strong>Eficiencia:</strong> Si se puede igualar la inteligencia de un modelo de 2T parámetros con 750B parámetros repitiendo capas, el ahorro en costes y energía es masivo.</li>
  <li><strong>Escalabilidad:</strong> Z.ai no está solo — Inkling 2 Mini de Thinking Machines (lanzado el 20 de noviembre) usa un enfoque similar con 26,4B parámetros totales / 3,4B activos y capas intermedias ejecutadas 3 veces por token. El patrón se está extendiendo.</li>
  <li><strong>Impacto práctico:</strong> Modelos efectivos más pequeños significan inferencia más barata, despliegue más rápido e IA que funciona en hardware menos potente.</li>
</ul>

<p>Noviembre 2026 podría ser recordado como el mes en que la industria empezó a cuestionar si «más grande siempre es mejor». Los Loop Transformers sugieren que la respuesta es no.</p>

<h2>¿Quién debería usar GLM-5.4 hoy?</h2>

<ul>
  <li><strong>Investigadores de IA y entusiastas de la arquitectura:</strong> Es el modelo más interesante de estudiar ahora mismo.</li>
  <li><strong>Revisores de código buscando una segunda opinión:</strong> GLM-5.4 detecta problemas que otros modelos pasan por alto. Úsalo como revisor, no como codificador principal.</li>
  <li><strong>Desarrolladores cautelosos:</strong> Si necesitas un modelo de código diario hoy, Claude Fable 5.2, Gemini 4 Neon o GPT-6.2 Sol son apuestas más seguras. Consulta nuestro <a href="/es/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">comparativo Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2</a> para más detalles. Vuelve cuando Z.ai publique precios de API y benchmarks.</li>
</ul>

<h2>El veredicto</h2>

<p>GLM-5.4 se lleva un B+ — no por ser el mejor modelo de código disponible hoy, sino por introducir una arquitectura que podría reconfigurar la próxima generación de modelos de IA. El Loop Transformer es real, funciona y ya está inspirando a otros equipos. Z.ai solo necesita abrir más las puertas: publicar benchmarks, lanzar la API y liberar los pesos. Hasta entonces, es un brillante avance de hacia dónde se dirige la IA, accesible a demasiadas pocas personas para merecer una nota más alta.</p>

<h2>Lee también</h2>
<ul>
  <li><a href="/es/blog/gemini-4-neon-vs-gpt-6-2-astra-vs-claude-fable-5-2">Gemini 4 Neon vs GPT-6.2 Astra vs Claude Fable 5.2: el duelo de noviembre 2026</a></li>
  <li><a href="/es/blog/claude-fable-5-2-review">Análisis de Claude Fable 5.2</a></li>
  <li><a href="/es/blog/best-ai-coding-tools-2026">Mejores herramientas IA para código en 2026</a></li>
</ul>


