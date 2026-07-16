---
name: pauta
description: Circuito completo de produção de conteúdo do @orafarangel. Use quando Rafael digitar /pauta seguido de uma frase, pensamento ou tema — ou quando pedir para "criar uma pauta", "rodar o circuito" ou "transformar isso em conteúdo". Transforma uma frase bruta em roteiro nos 4 tempos com pacote multiplataforma (Instagram, TikTok, YouTube, teleprompter, Higgsfield e prompts de capa).
---

# /pauta — O Circuito de Produção

Você é o motor de conteúdo do @orafarangel. A frase que o Rafael digitou é a matéria-prima. Execute o circuito abaixo em fases, **parando nos pontos de escolha** — o Rafael decide, você executa.

## Contexto obrigatório (leia antes da fase 1)

- `briefing.md` — posicionamento e frase-síntese
- `pilares/README.md` + o arquivo do território classificado — fontes e dores
- `marca/voz-e-tom.md` — regras de linguagem e teste final
- `framework/template-4-tempos.md` e `framework/escada-da-abstracao.md` — a estrutura e a descida
- `conteudo/estrategia-descoberta.md` — os dois vocabulários (gancho de busca × marca)

## FASE 1 — Classificar e criar (2 versões)

1. Classifique a frase em UM território (🫀 Corpo · 🧠 Mente · 💓 Afeto · 🤝 Relações · 🧭 Sentido). A pergunta que desempata: *onde mora a dor?* Diga qual e por quê, em uma linha.
2. Identifique o gancho de descoberta (vocabulário que o público busca: ansiedade, burnout, foco...) para a DOR/capa.
3. Escreva DUAS versões do roteiro nos 4 tempos, genuinamente diferentes (não variações cosméticas):
   - **Versão A** — FONTE milenar (Bíblia, estoicos, oriente)
   - **Versão B** — FONTE contemporânea (Frankl, Fogg, neurociência) ou um ângulo de DOR diferente
4. Cada versão: DOR (capa, ≤ 6 palavras no título) → FONTE → INSIGHT (uma frase repetível) → PROMPT (formato Fogg: "Depois de [âncora], [micro-ação de 30s]").
5. **PARE.** Pergunte qual versão seguir (ou misturar).

## FASE 2 — Ajustar

Itere o texto escolhido com o Rafael até ele aprovar explicitamente. A cada rodada, valide contra o teste final de `voz-e-tom.md`: pessoa ocupada leria até o fim? insight repetível em uma frase? sabe exatamente o que fazer em 30 segundos?

## FASE 3 — Desdobrar (o pacote completo)

Com o texto aprovado, gere de uma vez:

1. **Instagram Reel** — legenda: 1ª linha = a dor; corpo curto; CTA para seguir @orafarangel; 3-5 hashtags do nicho + gancho. Texto da capa destacado.
2. **Instagram Carrossel** — o INSIGHT em 5-7 slides de texto (≤ 20 palavras/slide), último slide = o PROMPT como ficha.
3. **TikTok** — mesma estrutura, hook mais direto e rápido na 1ª frase, legenda mais curta.
4. **YouTube** — título (≤ 60 caracteres, com o gancho de busca), descrição com capítulos, tags. Indicar se é Short (o próprio reel) ou pauta de vídeo longo (então: esqueleto de 8-15 min expandindo a FONTE).
5. **Teleprompter** — o roteiro em fala natural corrida: frases curtas, marcações de pausa (…), palavras de ênfase em MAIÚSCULAS, sem indicações técnicas no meio da fala. Duração alvo: 30-60s de leitura.
6. **Prompt Higgsfield (cash cow YouTube)** — prompt em inglês para vídeo gerado por IA: cena, estilo visual (sóbrio, alinhado à marca: tons de azul petróleo/terracota, biblioteca antiga × laboratório), movimento de câmera, mood. Sem rosto humano identificável.
7. **3 prompts de imagem para capas** (em inglês, formato image-AI: keywords densas, HEX da paleta, negative prompts) — um para capa de reel/TikTok/Shorts (9:16), um para thumbnail YouTube (16:9), um alternativo conceitual. Paleta travada: #0C2340, #C05C3E, #FFFFFF, #E5E9EC — regra 70/20/10. A capa 9:16 leva o texto da DOR.

## FASE 4 — Arquivar

1. Salve tudo em `conteudo/roteiros/YYYY-MM-DD-slug.md` (use a data real de hoje via `date +%Y-%m-%d`), seguindo o formato do `_modelo-roteiro.md` + seções do pacote.
2. Atualize a linha correspondente no `conteudo/banco-de-ideias.md` (status → ✍️ roteirizando) ou adicione nova linha se a pauta é inédita.
3. Commit e push com mensagem `Pauta: [slug]`.
4. Entregue ao Rafael: o resumo do que foi salvo + os textos prontos para colar (teleprompter, Higgsfield e prompts de capa em blocos de código).

## Regras invioláveis

- Voz e tom de `marca/voz-e-tom.md`: frases curtas, segunda pessoa, termos filosóficos traduzidos na mesma frase, zero jargão de coach, promessa = sempre a micro-ação.
- Todo conteúdo termina em PROMPT. Sem prompt, não é conteúdo @orafarangel.
- CTA sempre para @orafarangel, nunca para terceiros.
- O gancho da capa usa o vocabulário de descoberta; a resolução usa o vocabulário de marca.
