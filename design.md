# design.md — @orafarangel

> Especificação de identidade visual para agentes de codificação e design, no formato design.md. Qualquer interface, artefato ou peça gráfica gerada neste projeto deve derivar TODAS as decisões visuais deste arquivo. Fundamentos e validação: [`marca/proposta-identidade-v1.md`](marca/proposta-identidade-v1.md) e [`marca/briefing-branding.md`](marca/briefing-branding.md).

## Conceito

A marca vive na tensão entre três escalas de tempo: **o milenar** (a biblioteca antiga, o mármore), **o imediato** (o laboratório de comportamento, o cronômetro) e **o permanente** (a mudança consolidada). O movimento proprietário é **a Descida**: do abstrato ao concreto, do conceito ao chão — visualmente, um afunilamento (largo no alto, estreito e afiado embaixo). Personalidade: o Sábio com os pés no chão — calma, método, sobriedade intelectual com temperatura humana. Tagline: *"Sabedoria de milênios. Ação de 30 segundos. Mudança para sempre."*

## Tokens de cor

```css
:root {
  /* Primária — autoridade calma, inteligência, ciência */
  --azul-petroleo: #0C2340;      /* tipografia, marca estrutural, fundos de peso */

  /* Secundária — o gatilho, a ação, o "pé no chão" */
  --terracota: #C05C3E;          /* CTAs, frame do PROMPT, tags, destaques — máx ~10% da área */

  /* Apoio */
  --branco: #FFFFFF;             /* fundo dominante (~70% da área) */
  --cinza-slate: #E5E9EC;        /* fios, bordas, tabelas, apoio — NUNCA fundo de texto */

  /* Derivadas permitidas (apenas para UI digital) */
  --azul-petroleo-90: #1B3A5F;   /* hover/superfícies sobre azul */
  --terracota-escuro: #9A4832;   /* hover de CTA terracota */
}
```

### Regras de cor

1. **Proporção 70/20/10:** branco domina ~70% de qualquer composição; azul petróleo ~20% (texto e estrutura); terracota ~10% (somente ação e destaque). Motivo: o branco dominante evita o acorde marrom+cinza ("academia empoeirada") — o risco nº 1 mapeado na validação com Eva Heller.
2. **Terracota é semântico:** quando aparece, significa "hora de agir". Botões de ação, o card do PROMPT, tags de território. Nunca decorativo.
3. **Cinza slate nunca atrás de texto** — apenas fios, bordas, divisores, fundos de célula vazia.
4. **Proibidas (eliminatórias):** dourado, roxo/violeta, amarelo puro, vermelho puro, neon, pastéis etéreos, gradientes de qualquer tipo.
5. Texto sobre azul petróleo: branco ou cinza slate. Texto sobre terracota: branco. Texto sobre branco: azul petróleo (nunca preto puro).

## Tipografia

```css
--font-display-serif: "Playfair Display", "Lora", Georgia, serif;   /* a Voz Antiga */
--font-sans: "Inter", "Montserrat", -apple-system, sans-serif;      /* a Voz Moderna */
```

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Citação / palavra de peso | Playfair Display ou Lora | Bold | A FONTE (Marco Aurélio, Provérbios), momentos de lastro histórico |
| Título / headline | Inter ou Montserrat | SemiBold–Black | DOR de capa, títulos de página, UI |
| Corpo | Inter | Regular–Medium | Texto corrido, legendas |
| A tensão é proposital | — | — | Serifada e sans convivem na mesma peça: é o encontro dos dois tempos da marca |

Escala digital sugerida: 48/32/24/18/16/14px, line-height 1.2 (títulos) e 1.6 (corpo). Legibilidade em miniatura é eliminatória: um título de capa precisa ser lido em 1 segundo no feed.

## Espaçamento e grid

- Base 8px (4px para micro-ajustes). Espaço em branco generoso é parte da identidade — a marca respira.
- Composições tendem ao **afunilamento vertical**: conteúdo mais largo no topo, convergindo para um fechamento estreito e acionável embaixo (o PROMPT, o CTA).
- Cantos: raio 8–12px em cards e botões. Sem sombras dramáticas; elevação por contraste e fio, não por blur.

## Assinaturas gráficas

1. **O afunilamento (▼):** triângulo técnico apontando para baixo — símbolo da Descida (Escada da Abstração). Aparece pequeno e discreto junto ao handle @orafarangel.
2. **Tag de território:** retângulo pequeno terracota, texto branco em caps (CORPO · MENTE · EMOÇÃO · RELAÇÕES · SENTIDO), canto superior da peça.
3. **Card do PROMPT:** bloco terracota, tipografia branca, formato ficha técnica: `DEPOIS DE [ÂNCORA] ➜ EU VOU [MICRO-AÇÃO DE 30s]`. É o frame feito para print — o elemento mais importante de qualquer peça.

## Territórios proibidos (teste eliminatório)

A peça nunca pode evocar: **igreja/gospel** (dourado, luz celestial), **coach motivacional** (neon, fogo, seta pra cima), **new age** (pastel, mandala, manuscrito místico), **academia empoeirada** (sépia, ornamento, brasão), **autoajuda de feed** (frase sobre foto de paisagem). Se evocar qualquer um, refazer.

## Racional

O azul petróleo carrega o acorde da inteligência e da concentração (Heller: azul 25% inteligência, 23% concentração); o terracota traz a temperatura humana e o impulso de ação sem o ruído do laranja vibrante; o branco garante a clareza e a legibilidade de 1 segundo que o Instagram exige; o cinza slate existe só como infraestrutura silenciosa. A dupla serifada×sans materializa a tese da marca: sabedoria antiga operada com precisão moderna. Paleta validada por teste de estresse contra *A Psicologia das Cores* (Eva Heller) em 12/07/2026 — veredito: manter com as regras de aplicação acima.
