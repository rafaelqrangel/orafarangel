# design.md — @orafarangel

> Especificação de identidade visual para agentes de codificação e design. Qualquer interface, artefato ou peça gráfica gerada neste projeto deve derivar TODAS as decisões visuais deste arquivo. Estrutura baseada no design system do designingyour.life (Stanford — fonte do território Sentido da marca), com a camada de cor e tipografia substituída pelos tokens oficiais @orafarangel. Fundamentos e validação: [`marca/proposta-identidade-v1.md`](marca/proposta-identidade-v1.md) · [`marca/capas-sistema.md`](marca/capas-sistema.md).

## 1. Conceito e atmosfera

A marca vive na tensão entre três escalas de tempo: **o milenar** (a biblioteca antiga), **o imediato** (o laboratório de comportamento) e **o permanente** (a mudança consolidada). O movimento proprietário é **a Descida**: do abstrato ao concreto — visualmente, um afunilamento. Atmosfera: calma, método e sobriedade intelectual com temperatura humana; espaço em branco generoso como sala de contemplação; curvas orgânicas suavizando a estrutura geométrica. Tagline: *"Sabedoria de milênios. Ação de 30 segundos. Mudança para sempre."*

## 2. Tokens de cor

```css
:root {
  /* Primária — autoridade calma, inteligência, ciência */
  --azul-petroleo: #0C2340;        /* texto principal, títulos, superfícies escuras */
  --azul-petroleo-90: #1B3A5F;     /* hover/camadas sobre azul */

  /* Secundária — o gatilho, a ação, o "pé no chão" */
  --terracota: #C05C3E;            /* CTAs, links de ação, frame do PROMPT, tags — máx ~10% da área */
  --terracota-escuro: #9A4832;     /* hover/active de elementos terracota */
  --terracota-15: rgba(192,92,62,0.15); /* fundos de badge/botão secundário */

  /* Fundos */
  --branco: #FFFFFF;               /* fundo primário (dominante, ~70%) */
  --creme: #FFF8F1;                /* fundo secundário quente — zonas de seção, inputs, contraste gentil */

  /* Sistema */
  --cinza-slate: #E5E9EC;          /* fios, bordas, divisores — NUNCA fundo de texto */
  --cinza-texto: rgba(12,35,64,0.72); /* texto secundário/mudo (azul petróleo rebaixado, nunca cinza puro) */

  /* Semânticas — SOMENTE estados de UI, nunca expressão de marca */
  --erro: #CF2E2E;
  --aviso: #B8860B;
  --sucesso: #2E6B4F;
}
```

### Regras de cor

1. **Proporção 70/20/10:** branco+creme dominam ~70% de qualquer composição; azul petróleo ~20% (texto e estrutura); terracota ~10% (somente ação e destaque). O claro dominante evita o acorde "academia empoeirada" — risco nº 1 da validação Heller.
2. **Terracota é semântico:** quando aparece, significa "hora de agir". Nunca decorativo.
3. **Creme define zonas** (seções secundárias, inputs) no lugar de bordas pesadas — é a temperatura da marca em superfícies digitais.
4. **Cinza slate nunca atrás de texto** — só fios, bordas, divisores.
5. Texto sobre azul petróleo: branco ou creme. Sobre terracota: branco. Sobre branco/creme: azul petróleo (nunca preto puro).
6. **Proibidas (eliminatórias):** dourado, roxo/violeta, rosa, amarelo e vermelho puros como expressão de marca, neon, gradientes. Semânticas de UI (erro/aviso/sucesso) são exceção funcional, nos tons rebaixados acima.

## 3. Tipografia

```css
--font-display: "Playfair Display", "Lora", Georgia, serif;  /* a Voz Antiga — títulos */
--font-serif-texto: "Lora", Georgia, serif;                  /* serifada de trabalho (capas, títulos menores) */
--font-sans: "Inter", "Montserrat", -apple-system, sans-serif; /* a Voz Moderna — UI, corpo, sistema */
```

| Papel | Fonte | Tamanho | Peso | Line-height | Notas |
|---|---|---|---|---|---|
| Display / Hero | Playfair Display | 64–96px | Bold | 1.1 | Headlines de página; impacto máximo |
| H1 | Playfair Display ou Lora | 44–56px | Bold | 1.15 | Títulos de seção |
| H2/H3 | Lora | 24–32px | Bold | 1.2 | Subseções |
| Título de capa/thumbnail | Lora Bold (padrão) / Playfair Bold (display) | — | **Bold/Black apenas** | 1.15 | ≤ 6 palavras, nunca sobre meio-tom |
| Corpo | Inter | 16–18px | Regular–Medium | 1.6 | Leitura confortável |
| UI / botões / tags | Inter | 14–16px | Medium–SemiBold | 1.4 | A Voz Moderna é a infraestrutura |
| Caption | Inter | 13–14px | Medium | 1.5 | Apoio, metadados |

**Princípios:** a tensão serifada×sans é proposital (os dois tempos da marca em toda superfície); contraste por peso antes de tamanho; nunca introduzir terceira família; line-height do corpo ≥ 1.5.

## 4. Componentes

### Botões

```css
/* Primário — a ação (terracota, semântico) */
.btn-primario { background:#C05C3E; color:#FFF; font:600 16px Inter; padding:14px 36px;
  border-radius:16px; border:0; }
.btn-primario:hover { background:#9A4832; }

/* Secundário */
.btn-secundario { background:rgba(192,92,62,0.15); color:#9A4832; border:2px solid #C05C3E;
  border-radius:16px; padding:14px 36px; }
.btn-secundario:hover { background:#C05C3E; color:#FFF; }

/* Ghost */
.btn-ghost { background:transparent; color:#0C2340; border:1px solid #0C2340;
  border-radius:16px; padding:14px 28px; }
.btn-ghost:hover { background:#FFF8F1; }

/* Pill (ênfase, ex. CTA de hero) */
.btn-pill { background:#0C2340; color:#FFF; border-radius:80px; padding:12px 32px; }
.btn-pill:hover { background:#C05C3E; }
```

### Cards e containers

- Card padrão: fundo `#FFFFFF` (ou `#FFF8F1` em página branca), raio **24px**, padding 32px, sem borda — zonas definidas por cor de fundo, não por linha.
- Card escuro (ênfase): fundo `#0C2340`, texto branco, raio generoso (32–80px em destaques).
- Card do PROMPT (assinatura da marca): fundo `#C05C3E`, texto branco, raio 24px, formato ficha técnica: `DEPOIS DE [ÂNCORA] ➜ EU VOU [MICRO-AÇÃO]`.
- Modal: branco, raio 16px, sombra `0 8px 32px rgba(0,0,0,.12)`, padding 48px.

### Inputs

- Fundo `#FFF8F1`, texto `#0C2340`, raio 24px (32px em campos grandes), padding 14px 20px, sombra inset sutil `inset 2px 2px 2px rgba(0,0,0,.06)`.
- Placeholder: `--cinza-texto`. Focus: borda/anel `#C05C3E` + sombra externa suave.
- O campo "Do que vamos falar hoje?" (Etapa 2): estilo de input grande — 20px, altura ~96px, raio 32px, creme.

### Navegação e links

- Nav: transparente, Inter 16px, cor `rgba(12,35,64,0.8)`; hover: cor `#C05C3E` + border-bottom 2px; ativo: `#0C2340` weight 600.
- Link inline: `#C05C3E` sem sublinhado; hover: sublinhado + `#9A4832`.

### Badges / tags

- Tag de território (assinatura): fundo `#C05C3E`, texto branco caps Inter 600, raio 8px, padding 4–6px 12px.
- Badge neutro: fundo `--terracota-15`, texto `#9A4832`, raio 8px.

## 5. Layout

- **Base 8px** (4px para micro). Padding mínimo de container: 16px; padrão 24–32px; separação entre seções 32–64px.
- Container máx **1200px**; grid 12 colunas, gutter 24px (16px tablet); mobile single-column com margens de 16px.
- **Whitespace é elemento de design:** vertical > horizontal, favorecendo a leitura descendente — coerente com a Descida da marca. Zonas definidas por creme×branco, não por bordas.
- **Afunilamento como padrão de composição:** heros e seções tendem a abrir largos e convergir para um fechamento estreito e acionável (o CTA, o PROMPT).

### Escala de raios

8px (badges, tags) · 12px (utilitários) · **16px (botões — padrão)** · **24px (cards, inputs — padrão)** · 32px (campos grandes) · 80px (pill/ênfase, usar com parcimônia) · imagens: ~10% para o corte orgânico.

## 6. Profundidade

Sombras mínimas e propositais, sempre suaves (opacidade ≤ 0.15): nível 0 flat (padrão) · inset em inputs · `0 4px 12px rgba(0,0,0,.08)` cards flutuantes · `0 8px 32px rgba(0,0,0,.12)` modais. Elevação preferencialmente por camadas de cor (branco/creme/azul), não por sombra.

## 7. Do's & Don'ts

**Do:** duas famílias tipográficas sempre (serifada título + sans sistema) · terracota só para ação · creme para zonas quentes · raio 16/24 como padrão · focus states visíveis (anel terracota) · touch targets ≥ 48px · contraste WCAG 4.5:1 no corpo.

**Don't:** terceira família de fontes · cores fora da paleta · sombras duras/escuras · layouts apertados (padding < 16px) · preto puro em texto (usar `#0C2340`) · cinza slate atrás de texto · gradientes · pill 80px banalizado · evocar os territórios proibidos (gospel, coach, new age, academia, autoajuda de feed).

## 8. Responsivo

Breakpoints: mobile ≤ 600px (single-column, margens 16px, hero com padding vertical 32px) · tablet 601–1024px (2 colunas, hamburger < 768px) · desktop ≥ 1025px (3+ colunas, container 1200px centrado). Tipografia: Display 96→56→36px; H1 56→40→30px; corpo fixo 16px. Line-height proporcional constante.

## 9. Guia rápido para agentes

- CTA primário: terracota `#C05C3E` (hover `#9A4832`)
- Texto e títulos: azul petróleo `#0C2340` — títulos SEMPRE serifados Bold
- Fundo primário: branco · secundário/inputs: creme `#FFF8F1` · bordas: slate `#E5E9EC`
- Card escuro: `#0C2340` · Card de ação/PROMPT: terracota
- Assinaturas da marca: tag de território terracota · ▼ @orafarangel · afunilamento como composição
- Na dúvida de proporção: 70 claro / 20 azul / 10 terracota

## 10. Racional

O azul petróleo carrega o acorde da inteligência e concentração (Heller); o terracota é o dinamismo do laranja aterrado pelo marrom — o gatilho sem o grito do coach; o creme dá a temperatura que impede a frieza corporativa do azul+branco+cinza; o branco garante a clareza de 1 segundo que o feed exige. A dupla serifada×sans materializa a tese da marca: sabedoria antiga operada com precisão moderna. Paleta validada contra *A Psicologia das Cores* (Eva Heller) em 12/07/2026; estrutura de componentes herdada do design system do designingyour.life (Stanford) em 16/07/2026, com a camada cromática e tipográfica substituída pelos tokens da marca.
