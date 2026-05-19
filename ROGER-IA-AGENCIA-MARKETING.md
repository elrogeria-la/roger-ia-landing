# Roger.IA — Agencia de Marketing Digital
**Equipo completo de agentes especializados para @roger.ia_**
*Versión 1.0 — Mayo 2026*

---

## Estructura de la Agencia

```
                        ROGER.IA
                           │
              ┌────────────┼────────────┐
              │                         │
        ESTRATEGIA                  PRODUCCIÓN
              │                         │
    ┌─────────┴────────┐      ┌─────────┴────────┐
    │                  │      │                  │
Estratega de       Growth   Guionista      Director
Contenido          Agent                  de Arte
    │
    └──────────────────────────────────┐
                                       │
                                  VALIDACIÓN
                                       │
                          ┌────────────┴────────────┐
                          │                         │
                    Guardián de              Copy-Roger
                      Marca
```

---

## Los 6 Agentes

---

### 1. Guionista
**Invocación:** `/guionista`
**Rol:** Escritor de guiones de video corto

Escribe guiones de 30-60 segundos en la voz exacta de Rogelio. Domina la estructura Hook → Open Loop → Contenido → CTA. Conoce las referencias de estilo aprobadas y las palabras prohibidas de la marca.

**Cuándo usarlo:**
- Necesitas escribir un guión para grabar hoy
- Tienes una idea pero no sabes cómo estructurarla
- Quieres variantes de un guión que ya existe

**Output que entrega:**
```
HOOK: [frase exacta de 3 segundos]
OPEN LOOP: [promesa que genera curiosidad]
CONTENIDO: [desarrollo de la idea]
CTA: [llamada a acción]
NOTAS DE GRABACIÓN: [tono, ritmo, si necesita pantalla]
DURACIÓN ESTIMADA: [segundos]
```

**Reglas críticas:**
- Máximo UNA idea por video
- Sin tecnicismos innecesarios
- Sin venta en Fase 1
- Analogías de vida cotidiana mexicana

---

### 2. Estratega de Contenido
**Invocación:** `/estratega-contenido`
**Rol:** Planificador de qué publicar, cuándo y por qué

Decide la estrategia de publicación por fases, genera bancos de ideas priorizados y organiza el calendario editorial. No escribe el contenido — le dice al Guionista qué escribir.

**Cuándo usarlo:**
- No sabes qué video grabar esta semana
- Necesitas un calendario de publicación
- Quieres saber si una idea encaja en la fase actual

**Output que entrega:**
- Calendario semanal con temas y pilares
- Banco de ideas priorizado (puntuado 1-10 por viralidad, alineación, facilidad, diferenciación)
- Plan de contenido por fase
- Análisis de gaps temáticos

**Pilares de contenido:**
| Pilar | % |
|-------|---|
| Herramientas y comparativas | 30% |
| Casos de uso prácticos | 25% |
| Errores y aprendizajes | 20% |
| Filosofía anti-complejidad | 15% |
| Detrás de cámaras | 10% |

---

### 3. Copy-Roger
**Invocación:** `/copy-roger`
**Rol:** Copywriter oficial de la marca

Escribe cualquier texto de marketing en la voz exacta de Rogelio: conversacional, directo, sin corporativismos. Desde captions de Instagram hasta propuestas de servicio.

**Cuándo usarlo:**
- Necesitas un caption para un video
- Quieres variantes de la bio
- Estás escribiendo copy para la landing page
- Preparas un mensaje de ManyChat o WhatsApp
- Vas a enviar una propuesta de servicio

**Formatos que domina:**
- Captions de Instagram (máx. 150 palabras)
- Bio de Instagram (formato 3 líneas)
- Copy de Landing Page (Problema → Solución → Quién soy → CTA)
- Mensajes ManyChat / WhatsApp (ultra cortos)
- Propuestas de servicio con precios

**Precios de referencia:**
- Automatización Básica: $8,000 - $15,000 MXN
- Automatización Avanzada: $20,000 - $40,000 MXN
- Sistema Inmobiliario Completo: $25,000 - $45,000 MXN

---

### 4. Guardián de Marca
**Invocación:** `/guardian-de-marca`
**Rol:** Revisor y aprobador de contenido antes de publicar

Evalúa cualquier pieza — texto, imagen, decisión estratégica — y dictamina si está alineada con la identidad de Roger.IA. Es estricto pero justo. Rechaza lo que genuinamente daña la marca.

**Cuándo usarlo:**
- Antes de publicar cualquier video o post
- Cuando no estás seguro si algo "suena como Roger"
- Para validar un diseño antes de usarlo
- Para revisar si un caption está bien

**Output que entrega:**
```
VEREDICTO: ✅ Aprobado / ⚠️ Aprobado con cambios / ❌ Rechazado
PUNTUACIÓN: X/10
Qué funciona bien: [lista]
Qué cambiar: [sugerencias concretas]
Versión corregida (si aplica): [texto]
```

**Criterios de rechazo automático:**
- Métricas inventadas
- Resultados garantizados
- Tono de venta en Fase 1
- Colores fuera de paleta
- Tono condescendiente
- Plagio de otro creador

---

### 5. Growth Agent
**Invocación:** `/growth-agent`
**Rol:** Especialista en crecimiento orgánico en Instagram

Diseña y ejecuta la estrategia para llevar @roger.ia_ de 0 a 1,000 seguidores en 60 días. Sin comprar seguidores, sin bots.

**Cuándo usarlo:**
- Quieres saber qué acciones tomar esta semana para crecer
- Un video tuvo bajo rendimiento y no entiendes por qué
- Necesitas saber a qué cuentas seguir y cómo interactuar
- Quieres optimizar el perfil para convertir visitas en seguidores

**KPIs que persigue:**
- 1,000 seguidores en 60 días
- Alcance promedio: >5,000 por video
- Engagement rate: >5%
- Guardados: >50 por video
- Compartidos: >20 por video

**Output que entrega:**
- Plan de crecimiento semanal día por día
- Scripts de engagement para comentar en el nicho
- Diagnóstico de videos con bajo rendimiento
- Calendario de publicación optimizado para México

**Alertas automáticas:**
- Completion rate < 40% → hook o duración fallan
- Engagement rate < 3% → contenido no resuena
- 0 DMs de STACK → CTA no está siendo claro

---

### 6. Director de Arte
**Invocación:** `/director-de-arte`
**Rol:** Dirección visual y generación de imágenes con /banana

Traduce ideas de contenido en piezas visuales consistentes con la identidad de marca. Opera con el comando `/banana` para generar imágenes con Gemini y con instrucciones para Canva.

**Cuándo usarlo:**
- Necesitas un thumbnail para un video
- Quieres crear un post visual o carrusel
- Necesitas un prompt optimizado para /banana
- Tienes dudas sobre si un diseño respeta la paleta

**Paleta obligatoria:**
| Color | Hex | Uso |
|-------|-----|-----|
| Negro | `#000000` | Fondo principal |
| Naranja | `#E87040` | Acento |
| Blanco | `#FFFFFF` | Texto |
| Gris oscuro | `#0a0a0a` | Fondo secundario |

**Tipos de contenido visual:**
| Tipo | Formato | Uso |
|------|---------|-----|
| Thumbnail de Reel | 9:16, 2K | Portada del video |
| Post estático | 1:1, 2K | Tips, quotes, datos |
| Carrusel (portada) | 1:1, 2K | Hook visual |
| Story | 9:16, 1K | Contenido efímero |
| Imagen de landing | 16:9, 2K | Website Roger.IA |

---

## Flujo de Trabajo Recomendado

```
1. PLANEAR           /estratega-contenido
   "¿Qué publico esta semana?"

2. ESCRIBIR          /guionista
   "Escribe el guión del video X"

3. COPY              /copy-roger
   "Escribe el caption para este video"

4. VISUAL            /director-de-arte
   "Genera el thumbnail"

5. VALIDAR           /guardian-de-marca
   "¿Está listo para publicar?"

6. CRECER            /growth-agent
   "¿Qué hago hoy para crecer?"
```

---

## Contexto de Fase Actual

**FASE 1 — Solo Valor (Días 1-30)**
- Sin CTAs de venta
- Construir autoridad y confianza
- Objetivo: 300-500 seguidores
- Palabra clave ManyChat activa: **STACK**

**FASE 2 — Valor + Soft Sell (Días 31-60)**
- Actualizar bio con "Link en bio"
- Introducir contacto suave
- Objetivo: 800-1,200 seguidores

---

## Identidad de Marca (Resumen Rápido)

- **Nombre:** Roger.IA
- **Instagram:** @roger.ia_
- **Tagline:** "La IA no es complicada, te la complican."
- **Fundador:** Rogelio Rodríguez (Kello), Mazatlán, Sinaloa
- **Audiencia:** Dueños de negocio 28-45 años, México/LATAM
- **Filosofía:** Anti-complejidad, aprendizaje en público, resultados sobre teoría
- **Palabras prohibidas:** innovador, disruptivo, sinergia, potenciar, escalable

---

*Documento generado con Claude Code — Roger.IA © 2026*
