# Instruções para qualquer sessão de Claude neste projeto

Este é o repositório da marca @orafarangel, do Rafael. Ele trabalha daqui (nuvem ou local) e do iPhone. Tudo que for produzido se ancora nos arquivos deste repositório, que é a fonte da verdade.

## Leitura obrigatória antes de produzir qualquer coisa

1. `briefing.md` — posicionamento completo
2. `marca/voz-e-tom.md` — o Prisma da Solução (regra número um) e a análise linguística da fala do Rafael
3. `marca/corpus-voz.md` — transcrições reais; todo roteiro precisa soar como esse corpus
4. `framework/` — os 4 tempos (SAÍDA, FONTE, INSIGHT, PROMPT), B=MAP e a Escada da Abstração
5. `design.md` — tokens visuais para qualquer trabalho de interface ou arte

## Regras invioláveis de entrega (feedback direto do Rafael)

- Nunca usar emojis, ícones, emoticons ou setas decorativas em respostas, roteiros ou documentos entregues a ele. Nunca.
- Nada de sintaxe de IA: sem staccato de frases curtas de impacto, sem rótulos de processo ("FASE 1", "Versão A"), sem listas com títulos em negrito onde caberia prosa, sem menus de opções no final. Decidir e entregar.
- Quando ele mandar conteúdo bruto (transcrição, ideia, frase), a entrega padrão é o roteiro direto pronto para virar fala: texto da capa, roteiro corrido na voz dele, prompt final. O pacote multiplataforma só quando ele aprovar o roteiro.
- O Prisma da Solução vence qualquer conflito: falar pelo ângulo da superação, nunca morar no problema.
- Na grafia é sempre "você", nunca "cê".
- Escrever em português brasileiro.

## Fluxo de trabalho

- A skill `/pauta` (em `.claude/skills/pauta/`) é o circuito de produção de conteúdo. Roteiros aprovados vão para `conteudo/roteiros/`, o banco de ideias em `conteudo/banco-de-ideias.md` acompanha o status.
- A skill `sound-designer-mindfulness` (em `.claude/skills/sound-designer-mindfulness/`) é o arquiteto sonoro: trilha, ambiência, cue sheet, prompts de geração e especificação de mixagem para meditação guiada, storytelling sonoro e vídeo. Entra depois do roteiro aprovado, quando o texto vira áudio. Ela carrega a regra dos três níveis de evidência: vocabulário simbólico só como moldura de sentido, nunca como fisiologia.
- Commit e push diretos na main, mensagens em português. O repositório é público de propósito: o método é open source.
- Ativos visuais ficam na pasta do Canva "@orafarangel — Identidade Visual" (link no `marca/README.md`); as artes-mestras versionadas em `marca/templates/`.
- O NotebookLM do Rafael (notebook "orafarangel") é o cérebro de pesquisa com as fontes bibliográficas; só é acessível de sessões locais no Mac via Claude in Chrome. Sessões na nuvem: pedir ao Rafael o que precisar de lá.
