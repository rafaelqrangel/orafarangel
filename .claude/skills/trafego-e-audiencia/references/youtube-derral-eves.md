# O motor do YouTube — trilho Derral Eves (The YouTube Formula)

A tese central de Eves: o algoritmo do YouTube não é um inimigo a hackear, é um espelho da satisfação do espectador. O YouTube ganha dinheiro mantendo pessoas assistindo; ele recomenda o que segura gente na plataforma. Toda otimização se resume a uma pergunta: este vídeo satisfaz a pessoa que clicou?

## As métricas que o algoritmo lê, em ordem de peso

1. **Satisfação do espectador** (pesquisas do próprio YouTube, likes, "não tenho interesse"): o norte invisível de tudo.
2. **AVD (average view duration) e retenção:** quanto do vídeo a pessoa assiste. É a métrica rainha do vídeo longo. Retenção acima de 50% em vídeo de 10 minutos é forte.
3. **CTR (click-through rate):** de quem viu a thumbnail, quantos clicaram. Entre 4% e 10% é saudável; CTR alto com retenção baixa é clickbait e o algoritmo pune o conjunto.
4. **Session time:** o espectador continuou na plataforma depois do seu vídeo? Vídeo que inicia sessões (trazido de fora ou de busca) e vídeo que prolonga sessões são premiados.
5. **Velocidade inicial:** as primeiras 24-48 horas dizem ao algoritmo para quem expandir a distribuição.

## Packaging antes do conteúdo

Eves é taxativo: título e thumbnail se decidem antes de gravar, porque são a promessa que o vídeo terá de pagar. O fluxo da marca: definir a palavra-chave (fluxo do SKILL.md), escrever o título com a fórmula da marca, desenhar a capa pelos 3 modos de `marca/capas-sistema.md`, e só então roteirizar — o roteiro existe para pagar a promessa da capa.

- Título: até 60 caracteres, termo buscável presente, promessa de saída como núcleo, tensão como complemento.
- Thumbnail: regra do outdoor (entende-se em 2 segundos), harmonia sem repetição com o título (a capa refraseia, não repete), teste do polegar.
- Os primeiros 30 segundos do vídeo são a segunda thumbnail: reafirme a promessa e mostre que ela será paga (a SAÍDA dos 4 tempos faz exatamente isso). A maior queda de retenção acontece aí.

## Arquitetura de retenção no vídeo longo (8-15 min)

- Abertura sem logo, sem "oi gente, tudo bem": direto na SAÍDA.
- Loop aberto: anuncie no início o que só se resolve no fim (no nosso caso, o PROMPT — "no final eu te entrego a versão de 30 segundos disso").
- Recompensas a cada 60-90 segundos: uma informação nova, uma virada, uma história. A Escada da Abstração é nossa arquitetura natural de retenção, porque cada degrau da descida é uma recompensa.
- Pattern interrupts visuais nos vales de retenção (b-roll, quadro, mudança de enquadramento).
- Fim sem rampa de despedida: terminou o PROMPT e o CTA, corta. Despedida longa mata o session time.

## Busca × recomendação na prática do canal

- Vídeos de busca (SEO) são o alicerce de canal novo: crescem devagar e rendem por anos. Os cinco primeiros vídeos da pauta são todos de busca por design.
- Vídeos de recomendação explodem depois que o canal tem histórico de satisfação. Não se força; constrói-se com consistência.
- Shorts alimentam descoberta e convertem pouco inscrito fiel; são a porta, não a casa. Derivar 3-5 Shorts de cada longo (cortes dos degraus da escada), sempre com CTA para o vídeo completo.
- "Estoicismo para dormir" e formatos de escuta longa são jogo próprio: retenção altíssima por natureza (a pessoa dorme ouvindo), competição baixa, monetização por watch time. Trilho paralelo que não canibaliza o canal principal.

## Baldes de vídeo (content buckets)

Eves: agrupamentos temáticos coerentes fazem o algoritmo entender a conexão entre os vídeos e sugerir o próximo da casa em vez do vídeo do vizinho — a toca de coelho de consumo contínuo. No nosso canal, os baldes já existem por arquitetura: os 5 territórios viram 5 playlists (Corpo, Mente, Emoção, Relações, Sentido), cada uma com padrão visual consistente de capa (os modos de `marca/capas-sistema.md` garantem isso) e metadados correlacionados — palavras-chave da mesma família no título e na primeira linha da descrição, antes do corte do "mostrar mais". Vídeo novo sempre entra num balde e aponta para o irmão mais forte do mesmo balde no card final e na descrição.

## Teste de ganchos (o laboratório dos irmãos Harmon)

Antes de apostar produção grande num ângulo, teste barato: grave 3 aberturas diferentes de 3 segundos para o mesmo roteiro, rode como anúncio de orçamento mínimo para o mesmo público e deixe o comportamento decidir — vence quem segura os 3 primeiros segundos e puxa mais clique. O gancho vencedor vira a SAÍDA da versão orgânica definitiva. É o jeito mais barato que existe de comprar certeza.

## A roda de dados de Eves

Ideate a partir de dados (pesquisa de palavra-chave, vídeos que performaram no nicho), lance, meça (CTR, retenção por segundo, origem de tráfego no YouTube Studio), aprenda e realimente a próxima ideação. Cada vídeo publicado registra performance no roteiro correspondente em `conteudo/roteiros/`, como o modelo já prevê. Depois de 10 vídeos, os padrões do próprio canal valem mais que qualquer benchmark externo.
