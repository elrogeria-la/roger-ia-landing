# De Idea a Video en 30 Minutos
### El workflow exacto que uso para producir Reels de calidad sin equipo

> **Roger.IA** · @roger.ia_ · "La IA no es complicada, te la complican."
> Rogelio Rodríguez · Mazatlán, Sinaloa · Mayo 2026

---

Este no es un tutorial teórico. Es el workflow exacto, con los prompts reales y los settings específicos que yo uso para ir de tener una idea en la cabeza a tener un video listo para publicar.

30 minutos. Sin cámara. Sin equipo. Sin agencia.

---

## Antes de Empezar: Lo que necesitas

| Herramienta | Plan Mínimo | Costo |
|-------------|-------------|-------|
| Claude.ai | Pro | $20 USD/mes |
| Gemini | Gratis o AI Premium | $0–$20 USD/mes |
| Higgsfield | Basic | $8 USD/mes |
| CapCut | Gratis | $0 |
| ElevenLabs | Gratis | $0 (10K caracteres/mes) |

**Costo total del workflow: desde $28 USD/mes**

---

## Vista General del Flujo

```
IDEA (en tu cabeza)
    │
    ▼
[0-5 min]  GUIÓN ─────────────── Claude
    │
    ▼
[5-10 min] IMAGEN/VISUAL ──────── Gemini Imagen 3
    │
    ▼
[10-20 min] ANIMACIÓN DE VIDEO ── Higgsfield
    │
    ▼
[20-30 min] EDICIÓN FINAL ──────── CapCut
    │
    ▼
VIDEO LISTO PARA PUBLICAR ✅
```

---

---

## MINUTO 0-5: Guión con Claude

### Objetivo de esta fase
Transformar una idea vaga en un guión listo para grabar (o narrar con voz IA) en menos de 5 minutos.

---

### El Prompt Exacto

Copia este prompt a Claude y reemplaza lo que está entre [ ]:

```
Eres el Guionista de Roger.IA. Escribe un guión de video corto para Instagram 
Reels con estas características:

TEMA: [Tu idea en una frase. Ejemplo: "Cómo ChatGPT puede responder WhatsApp 
de clientes automáticamente"]

AUDIENCIA: Dueños de negocio en México y LATAM, 28-45 años, que quieren 
usar IA pero sienten que es complicado.

DURACIÓN OBJETIVO: [30 segundos / 45 segundos / 60 segundos]

VOZ: Conversacional, directo, sin tecnicismos. Como si le explicara a un 
amigo. Analogías de vida cotidiana mexicana.

ESTRUCTURA OBLIGATORIA:
1. HOOK (3 segundos): Frase de apertura que detenga el scroll. Sin saludar.
2. OPEN LOOP (5 segundos): Promesa de lo que van a aprender.
3. CONTENIDO (el grueso del video): La información concreta, en pasos 
   o puntos simples.
4. CTA (5 segundos): Llamada a acción. En Fase 1 debe ser: "Escribe 
   [PALABRA CLAVE] en los comentarios y te mando [recurso]"

FORMATO DE ENTREGA:
- El guión listo para leer en cámara
- Notas de grabación (tono, si muestra pantalla, ritmo)
- Duración estimada en segundos
- Palabras clave para el caption

PALABRAS PROHIBIDAS: innovador, disruptivo, sinergia, potenciar, escalable, 
revolucionario, transformador.
```

---

### Tips para el Prompt

**1. Sé específico en el tema**
- ❌ Malo: "Algo sobre ChatGPT"
- ✅ Bueno: "Los 3 tipos de preguntas que deberías hacer a ChatGPT antes de una reunión con clientes"

**2. Da el contexto de fase**
Si estás en Fase 1 (sin venta), díselo a Claude. Si ya estás en Fase 2 y quieres un CTA de contacto, especifícalo.

**3. Pide variantes si no te convence el hook**
Si el primer hook no te pega, escribe: "Dame 5 variantes del hook, más agresivos para detener el scroll." Claude te dará opciones.

---

### Output que vas a recibir

```
HOOK: "Tus clientes te escriben y tardan horas en recibir respuesta. 
       Eso se llama perder ventas."

OPEN LOOP: "Te voy a mostrar cómo configurar una respuesta automática 
            con IA en menos de 30 minutos."

CONTENIDO:
Paso 1: [Desarrollo del paso]
Paso 2: [Desarrollo del paso]
Paso 3: [Desarrollo del paso]

CTA: "Escribe AUTO en los comentarios y te mando la guía gratis."

NOTAS DE GRABACIÓN: Ritmo rápido. Mira directo a cámara en el hook. 
En el contenido puedes mostrar pantalla. Énfasis en los números.

DURACIÓN ESTIMADA: 42 segundos

PALABRAS CLAVE PARA CAPTION: automatización, WhatsApp, clientes, respuesta automática
```

---

### Si no vas a grabar en cámara: Voz IA con ElevenLabs

1. Copia el guión (sin las notas, solo el texto)
2. Ve a [elevenlabs.io](https://elevenlabs.io)
3. Pega el texto en el generador de voz
4. Si tienes tu voz clonada, selecciónala
5. Genera el audio y descárgalo como MP3

**Tiempo extra: 2-3 minutos**

---

---

## MINUTO 5-10: Imagen con Gemini

### Objetivo de esta fase
Crear la imagen visual principal del video o el thumbnail con Imagen 3 de Google.

---

### El Prompt de Imagen

En Gemini (usa Imagen 3, disponible en el plan AI Premium o como acceso anticipado):

```
[ESTILO VISUAL]
Ilustración flat design, minimalista, estética tech moderna.
Paleta de colores: fondo negro (#000000), acento naranja (#E87040), 
blanco (#FFFFFF). Sin gradientes complejos.

[PERSONAJE - si aplica]
Personaje masculino latinoamericano, 30 años, cabello oscuro corto, 
actitud confiada y amigable. Estilo flat vector.

[ESCENA]
[Describe qué debe aparecer en la imagen. Ejemplo: "El personaje 
mirando a cámara con un teléfono en mano, con íconos de WhatsApp 
y un robot de IA flotando alrededor, expresión de sorpresa positiva"]

[COMPOSICIÓN]
Formato vertical 9:16. El personaje centrado en el tercio inferior. 
Espacio en la parte superior para texto superpuesto.

[TEXTO EN IMAGEN - opcional]
Si quieres texto, especifica: "Agrega el texto [TU TEXTO] en la parte 
superior, tipografía bold, color blanco, fondo transparente"

[CALIDAD]
Alta resolución, limpio, sin ruido visual, adecuado para redes sociales.
```

---

### Prompts Específicos por Tipo de Video

**Para video de "Error que cometes":**
```
Ilustración flat: Personaje masculino latinoamericano con expresión de 
"¡Ay no!", mano en la frente. Íconos de error (X roja) flotando alrededor. 
Fondo negro, detalles en naranja. Vertical 9:16.
```

**Para video de "Herramienta que debes usar":**
```
Ilustración flat: Personaje apuntando con entusiasmo hacia el logo de 
[HERRAMIENTA]. Fondo negro. Detalles en naranja y blanco. Expresión de 
revelación. Vertical 9:16.
```

**Para video de "Comparativa":**
```
Ilustración flat: Dos iconos grandes enfrentados (logo vs logo) con el 
personaje al centro haciendo gesto de árbitro. Fondo negro dividido. 
Vertical 9:16.
```

**Para video de "Pasos o tutorial":**
```
Ilustración flat: Personaje con laptop, íconos de pasos numerados (1, 2, 3) 
flotando en un arco alrededor. Expresión concentrada y positiva. 
Fondo negro. Vertical 9:16.
```

---

### Tips de Imagen

**1. Itera rápido**
Gemini genera 4 variantes por prompt. Si ninguna está perfecta, modifica un elemento y regenera. No des más de 3-4 iteraciones por imagen.

**2. Guarda tus prompts que funcionan**
En Notion, crea una base de datos de prompts de imagen que te han dado buenos resultados. Cuando vuelvas a necesitar un estilo similar, tienes la base.

**3. Para thumbnails con texto**
Es más confiable generar la imagen sin texto y agregar el texto en Canva. Los modelos de IA todavía cometen errores de ortografía en texto dentro de imágenes.

---

### Descarga y guarda

Una vez que tengas la imagen:
- Descarga en la mayor resolución disponible
- Guarda en una carpeta organizada: `Videos/[Fecha]-[Tema]/`
- Guarda también el prompt que usaste junto a la imagen

---

---

## MINUTO 10-20: Animación con Higgsfield

### Objetivo de esta fase
Convertir tu imagen o concepto en clips de video animados con movimiento cinematográfico.

---

### ¿Por qué Higgsfield?

Higgsfield genera video de alta calidad con control preciso del movimiento de cámara. Es lo que diferencia un Reel de producción de agencia de uno amateur: el movimiento.

---

### Cómo generar tus clips

**Accede a:** [higgsfield.ai](https://higgsfield.ai)

**Dos formas de trabajar:**

**Opción A — Image to Video (recomendada para thumbnails)**
1. Sube tu imagen de Gemini
2. Describe el movimiento que quieres
3. Genera

**Opción B — Text to Video (para clips complementarios)**
1. Describe la escena completa
2. Genera

---

### Settings que uso para Roger.IA

```
DURACIÓN:        4 segundos (editar clips cortos es más fácil)
RESOLUCIÓN:      1080p mínimo, 4K si el plan lo permite
MOTION:          Slow push in (zoom suave hacia adentro) para apertura
                 Orbit left/right para mostrar productos o conceptos
                 Static con ligero movimiento para diálogo
STYLE:           Photorealistic (para video realista)
                 Animated (para estilo de ilustración)
CAMERA MOTION:   Subtle (evita movimientos extremos que distraen)
```

---

### Mis Prompts de Video Más Usados

**Intro / Apertura del video:**
```
A young Latin American man in a modern dark studio, looking directly at 
camera with confident expression, slight smile. Cinematic slow push in. 
Dramatic lighting with orange accent light from the left. 4K, 
photorealistic. 4 seconds.
```

**Transición de herramienta tech:**
```
Futuristic digital interface floating in dark space, glowing orange and 
white holographic elements. Text panels and data visualizations appearing. 
Camera moves slowly through the elements. Cinematic. 4 seconds.
```

**Escena de trabajo / productividad:**
```
Close up of hands typing on a laptop keyboard in a dark modern workspace. 
Orange ambient light. Screen glow reflected on face. Slow push back to 
reveal full setup. Photorealistic. 4 seconds.
```

**Ciudad / escena de negocio:**
```
Timelapse-style drone shot of Mazatlán city at dusk, city lights coming on, 
golden hour light. Smooth slow forward camera movement. Cinematic wide shot. 
4 seconds.
```

---

### Cuántos clips necesitas

Depende de la duración del video:

| Duración del video | Clips de Higgsfield | Total segundos de video |
|--------------------|---------------------|-------------------------|
| 30 segundos | 4-5 clips de 4s | 16-20 segundos de B-roll |
| 45 segundos | 6-7 clips de 4s | 24-28 segundos |
| 60 segundos | 8-10 clips de 4s | 32-40 segundos |

El resto del video puede ser: pantalla de computadora grabada, texto animado en CapCut, o tu cara en cámara.

---

### Organiza los clips

Después de generar, descarga todos los clips y nómbralos por orden:
```
01-apertura.mp4
02-intro-herramienta.mp4
03-pantalla-demo.mp4
04-conclusion.mp4
05-cierre.mp4
```

---

---

## MINUTO 20-30: Edición con CapCut

### Objetivo de esta fase
Ensamblar todos los elementos en un video final listo para publicar.

---

### Setup inicial en CapCut

1. **Nuevo proyecto:** Relación de aspecto 9:16 (vertical para Reels)
2. **Resolución:** 1080 x 1920 (Full HD) o 2160 x 3840 (4K si tienes el plan Pro)
3. **FPS:** 30fps

---

### Orden de ensamblaje

```
PISTA 1 (fondo): Clips de Higgsfield en orden
PISTA 2 (audio): Narración (tu voz o ElevenLabs) + Música de Epidemic Sound
PISTA 3 (texto): Subtítulos y textos clave
PISTA 4 (overlay): Logo animado de Jitter + efectos
```

---

### Efectos Esenciales en CapCut

#### 1. Subtítulos automáticos (Auto Captions)
- Ve a **Texto → Auto Captions**
- Elige el idioma: Español
- Estilo recomendado: texto blanco, borde negro, posición en el tercio inferior
- Revisa y corrige errores ortográficos manualmente

**Por qué es crítico:** 85% de los videos en Instagram se ven sin sonido. Sin subtítulos, pierdes a esa audiencia.

#### 2. Transiciones entre clips
- Para contenido de marca: **Dissolve** o **Fade to Black** (0.3 segundos)
- Para ritmo rápido: **Cut** directo sin transición
- Evita: transiciones con efectos exagerados (parece de 2015)

#### 3. Música de fondo
- Importa tu track de Epidemic Sound
- Volumen del audio: 15-25% (debe sentirse, no escucharse)
- Si hay narración, la música va más baja (10-15%)
- Aplica **Fade Out** en los últimos 2 segundos

#### 4. Color Grading básico
- Accede a **Ajustes → Filtros**
- Para el estilo Roger.IA: filtro levemente oscuro con contraste alto
- O manualmente: Brillo -5, Contraste +10, Saturación -5, Temperatura -5 (más frío)

#### 5. Zoom en momentos clave
- En el punto más importante del guión, agrega un **Ken Burns Effect** (zoom lento de 100% a 105%)
- Crea énfasis sin corte brusco

---

### El Texto de Gancho (Hook Visual)

Los primeros 3 segundos son críticos. Además de la narración, agrega texto en pantalla:

**Settings del texto de apertura:**
- Fuente: **Montserrat Bold** o **Impact** 
- Color: Blanco con borde negro (o naranja si es acento)
- Tamaño: Grande, que ocupe 60% del ancho de pantalla
- Animación de entrada: **Pop** o **Typewriter** (0.3 segundos)
- Duración en pantalla: Exactamente los 3 segundos del hook

---

### Logo animado de Jitter

Si tienes el overlay de logo exportado de Jitter (MP4 con fondo transparente):
1. Agrega como nueva pista de video
2. Colócalo en la esquina inferior derecha
3. Tamaño: 15-20% del ancho total
4. Opacidad: 80% (no debe competir con el contenido)
5. Duración: todo el video

---

### El CTA Visual Final

Los últimos 5 segundos deben tener texto en pantalla con el CTA:

```
"Escribe [PALABRA] en los comentarios 👇"
```

**Settings:**
- Texto centrado, grande
- Animación de entrada: Flash o Pop
- Emoji de flecha hacia abajo si aplica
- Mantén hasta el último frame

---

### Exportación

- **Formato:** MP4 / H.264
- **Resolución:** 1080p mínimo
- **FPS:** 30
- **Calidad:** Alta (no comprimas para ahorrar espacio — la compresión de Instagram ya lo va a comprimir)

---

---

## CHECKLIST IMPRIMIBLE

### ✅ Checklist de Producción de Video — Roger.IA

Imprime esta página y úsala para cada video.

---

**📝 FASE 1: GUIÓN (0-5 min)**

- [ ] La idea está clara en una sola frase
- [ ] Abrí Claude con el prompt de Guionista
- [ ] Especifiqué tema, duración y audiencia
- [ ] El guión tiene Hook — Open Loop — Contenido — CTA
- [ ] El CTA tiene la palabra clave de ManyChat activa
- [ ] Revisé que no hay palabras prohibidas (innovador, disruptivo, sinergia...)
- [ ] Tengo las notas de grabación

---

**🖼️ FASE 2: IMAGEN (5-10 min)**

- [ ] Fui a Gemini con el prompt de imagen
- [ ] Especifiqué: paleta negra/naranja/blanca, formato 9:16
- [ ] Generé al menos 4 variantes
- [ ] Seleccioné la mejor y la descargué en alta resolución
- [ ] Guardé el prompt que usé en Notion para futura referencia

---

**🎬 FASE 3: VIDEO (10-20 min)**

- [ ] Entré a Higgsfield
- [ ] Definí cuántos clips necesito (4-5 clips para 30s)
- [ ] Usé duración de 4 segundos por clip
- [ ] Seleccioné Motion: Slow push / Orbit / Static según escena
- [ ] Style: Photorealistic para video realista
- [ ] Descargué todos los clips y los nombré en orden (01-, 02-...)
- [ ] Organicé en carpeta `Videos/[Fecha]-[Tema]/`

---

**✂️ FASE 4: EDICIÓN (20-30 min)**

- [ ] Nuevo proyecto en CapCut, formato 9:16, 1080x1920, 30fps
- [ ] Clips de Higgsfield en pista 1, en orden
- [ ] Audio (narración o ElevenLabs) en pista 2
- [ ] Música de Epidemic Sound importada, volumen al 15-20%
- [ ] Auto Captions activado, revisado y corregido
- [ ] Texto de hook en los primeros 3 segundos (Montserrat Bold, blanco)
- [ ] Transiciones: Dissolve o Cut directo (sin efectos exagerados)
- [ ] Color grading aplicado (oscuro, contraste +10)
- [ ] Logo animado de Jitter en esquina inferior derecha (si aplica)
- [ ] CTA visual en los últimos 5 segundos
- [ ] Fade out de música en los últimos 2 segundos
- [ ] Revisé el video completo una vez antes de exportar
- [ ] Exporté en MP4, 1080p, 30fps, calidad alta

---

**📤 FASE 5: PUBLICACIÓN (Post-30 min)**

- [ ] Caption escrito con Copy-Roger o Claude
- [ ] Caption revisado con Guardián de Marca
- [ ] Hashtags relevantes (máx 5-7, relevantes, no genéricos)
- [ ] Horario de publicación: Martes-Jueves, 7-9pm hora México
- [ ] ManyChat keyword activa y flujo probado antes de publicar
- [ ] Thumbnail seleccionado (el frame más impactante del video)
- [ ] Publicado y guardado en el calendario editorial de Notion

---

**📊 FASE 6: SEGUIMIENTO (24-48h después)**

- [ ] Revisé alcance y engagement a las 24 horas
- [ ] Respondí todos los comentarios en las primeras 2 horas (algoritmo)
- [ ] Anoté en Notion qué funcionó y qué mejorar
- [ ] Si llegó a 5K+ alcance: analizar qué lo hizo destacar
- [ ] Si estuvo bajo 2K alcance: revisar hook y duración

---

---

## Cuándo Sale el Video "Mal"

No todo video sale perfecto. Aquí los problemas más comunes y su solución:

| Problema | Causa probable | Solución |
|----------|----------------|----------|
| El video se ve pixelado | Exportaste en baja calidad | Exporta de nuevo en 1080p, calidad alta |
| El audio y video no sincronizan | Alineaste mal las pistas | Revisa el punto de inicio de cada pista |
| Los subtítulos están mal | Auto Captions con error | Corrígelos manualmente, es normal |
| El hook no detiene el scroll | Primera frase débil | Pide 5 variantes de hook a Claude |
| Los clips de Higgsfield no coinciden | Generaste sin prompt coherente | Usa el mismo estilo visual en todos los clips |
| La música tapa la voz | Volumen muy alto | Baja la música a 10% cuando hay narración |

---

---

## Variaciones del Flujo para Diferentes Estilos de Video

### Si vas a grabarte en cámara

- Fase 1 (Guión): Igual
- Fase 2 (Imagen): Úsala solo para el thumbnail, no para el video
- Fase 3 (Higgsfield): Genera solo el B-roll de apoyo (pantallas, conceptos)
- Fase 4 (CapCut): Tu cara es la pista principal, Higgsfield va en cortes de apoyo

### Si es video de pantalla (screen recording)

- Fase 1 (Guión): Igual
- Fase 2 (Imagen): Para thumbnail solamente
- Fase 3 (Higgsfield): Para la apertura y el cierre
- Fase 4 (CapCut): Screen recording es la pista principal, Higgsfield para intro/outro

### Si es video 100% generado con IA (sin cara ni pantalla)

- Fase 1 (Guión): Igual + genera el audio con ElevenLabs
- Fase 2 (Imagen): Referencia visual para el estilo de los clips
- Fase 3 (Higgsfield): Genera TODOS los clips del video
- Fase 4 (CapCut): Higgsfield es la pista principal, ElevenLabs es el audio

---

---

## El Secreto que Nadie Te Dice

La calidad del video importa menos de lo que crees. Lo que importa es la **consistencia**.

Un video promedio publicado cada semana durante 3 meses supera a un video extraordinario publicado una vez al mes.

Este workflow existe para que no tengas excusa de "no tuve tiempo". 30 minutos es lo que tardas en una reunión que pudiste haber sido un email.

Úsalo. Repítelo. Mejora 1% cada video.

---

> *"El primer video no tiene que ser perfecto. Tiene que existir."*
> — Roger.IA

---

**¿Tienes dudas sobre algún paso del workflow?**
Escríbeme a @roger.ia_ con la palabra **FLOW** y te respondo personalmente.

---

*Roger.IA © 2026 — Mazatlán, Sinaloa · @roger.ia_*
*Este workflow puede actualizarse conforme las herramientas evolucionan.*
*Última actualización: Mayo 2026*
