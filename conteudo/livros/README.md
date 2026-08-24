# Conteúdo visual de livros — Instagram e TikTok

Fluxo fixo: **foto real do livro → packshot (imagem) → animação (vídeo)**. O feed é uma coleção — mesmo cenário, mesma luz, mesmo enquadramento, só o livro muda.

## Ferramentas

- Imagem: Nano Banana (Gemini). 9:16, 2K.
- Vídeo: Veo, image-to-video, a partir do packshot aprovado. 9:16, 8s, 1080p.
- Nano Banana não gera vídeo — o vídeo sempre parte da imagem já aprovada.
- Os prompts são escritos aqui e colados nas ferramentas fora deste repositório. Este projeto não gera as imagens.

## Regras invioláveis

1. A capa do livro vem sempre da foto anexada, nunca de descrição em texto. Todo prompt de imagem carrega trava explícita: não redesenhar, reescrever, traduzir nem inventar texto, tipografia, logo ou cor da capa.
2. O molde de cenário em JSON descreve só o estúdio (superfície, luz, sombra, lente, enquadramento, acabamento) — nunca o produto.
3. A trava anti-alucinação vai em prosa fora do JSON, como ordem de prioridade.
4. Enquadramento sempre 9:16, com área limpa reservada para o gancho em texto do Reels.
5. Texto em páginas do livro: sempre "small illegible blurred print, no readable words".
6. Mãos e dedos: gerar 4 variações e conferir. Palma aberta erra menos que dedo em pinça.
7. Rosto do Rafael: só por foto de referência anexada, nunca por descrição em texto.
8. JSON plano, sem aninhamento, no máximo ~17 chaves.
9. JSON é molde reutilizável, não gera estética por si só — para estética nova, resposta em prosa.

## Os quatro moldes

| Molde | Cenário | Mostra a capa | Uso |
|---|---|---|---|
| 01 Concreto | packshot em mesa de concreto claro, estúdio | Sim | post principal |
| 02 Céu | mãos masculinas erguendo o livro contra o céu | Sim | post principal |
| 03 Túnel | macro de dentro da dobra do livro | Não | gancho de abertura (1–2s), corta para 01 ou 02 |
| 04 Escuro | retrato low-key, luz nascendo da página | Não | gancho de abertura (1–2s), corta para 01 ou 02 |

Os JSONs de cada molde ficam em `moldes/`, um arquivo por molde, para reuso entre livros.

## Estrutura da pasta

```
conteudo/livros/
├── README.md
└── moldes/
    ├── 01-concreto.json
    ├── 02-ceu.json
    ├── 03-tunel.json
    └── 04-escuro.json
```

Cada arquivo em `moldes/` é populado quando um molde é aprovado — o JSON vai puro no arquivo, a trava anti-alucinação e as notas de risco de alucinação ficam em comentário `README` desta pasta ou no próprio pedido, nunca dentro do JSON.
