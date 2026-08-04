# Ferramentas de produção de áudio do AlumiaCast

> Levantado em 30/07/2026. Preços e termos de licença mudam rápido, e este documento envelhece: confira na fonte antes de assinar qualquer coisa. A regra que organiza tudo aqui é uma só: **IA para o que não existe no mundo, gravação real para o que existe.**

## Trilha sonora e ambiência

**Primeira escolha: Stable Audio (Stability AI).** É o único gerador da categoria feito para design de som, textura e loop em vez de canção com refrão, que é exatamente o que a Travessia precisa. Treina em base licenciada da AudioSparx, o que reduz o risco comercial, e faz áudio para áudio, permitindo mandar uma referência sua e pedir variação em cima dela. É a ferramenta certa para o bordão da Travessia e para as camadas de ambiência que não existem em biblioteca.

**Segunda escolha: Suno.** O gerador de música mais capaz do mercado, e serve para o que tem forma: vinheta de abertura, música de encerramento do episódio padrão, peça curta com começo e fim. A ressalva é que a situação de licenciamento dele com as gravadoras é mais movimentada que a do Stable Audio. Quem quiser o caminho conservador nesse segundo lugar pode trocar pelo ElevenLabs Music, que treina em base licenciada e resolve quase tão bem.

## Efeitos sonoros e ambiência gravada

**Primeira escolha: ElevenLabs Sound Effects.** O melhor texto para efeito disponível hoje, funciona tanto para evento curto quanto para ambiência longa, e gera em loop.

**Segunda escolha: Stable Audio**, de novo, que se sai muito bem em camada ambiente extensa.

**A ressalva que vale mais que o ranking:** para passo na areia, grilo e voz ao fundo, biblioteca real ganha da IA. Passo na areia tem uma granulação que os modelos achatam, grilo é fácil de achar gravado em qualidade excelente, e voz ao fundo é onde a IA mais falha, porque produz fonemas quase-palavras que o ouvido reconhece como errado e que puxam a atenção justamente quando queremos que ela relaxe. Para esses casos: Epidemic Sound, Artlist, Splice, Freesound e o arquivo de efeitos da BBC.

O mesmo vale para o bordão: um aplicativo de shruti box ou um sample de harmônio real, esticado em loop, costuma bater qualquer geração de nota sustentada.

## Montagem do episódio

**Para a Travessia, primeira escolha: GarageBand.** Já vem no Mac, é gratuito, faz multipista e faz **automação de volume**, que é o requisito inegociável: a respiração de quatro segundos subindo e oito descendo se desenha na curva de volume da linha do tempo. Uma faixa para a voz, uma para o bordão, uma para os efeitos, e cada passo na areia colocado no segundo exato em que a narração o menciona.

**Segunda escolha, quando o GarageBand doer: Reaper.** Licença barata de compra única, roda no Mac, é o padrão de quem faz podcast a sério e não tem limite de faixas nem de automação. A curva de aprendizado é mais íngreme e o momento de migrar é quando a montagem começar a levar mais tempo por limitação da ferramenta do que por decisão criativa. Quem preferir ficar no ecossistema Apple pode ir de Logic Pro, também compra única.

**Para o episódio padrão de 21 minutos: Descript.** É um trabalho diferente do da Travessia, porque ali não se montam camadas, se cortam hesitação e repetição. Editar apagando texto da transcrição transforma horas de trabalho em minutos. **Nunca passar a Travessia pelo Studio Sound dele**, porque em material muito silencioso e sussurrado esse processamento inventa artefato.

## Exportação para o Spotify for Creators

- WAV ou MP3 de 320 kbps, em estéreo.
- Deixar folga de pico de um a dois decibéis.
- Não perseguir um número de loudness na régua, porque a plataforma normaliza na entrega. O que ela não conserta, e o que importa de verdade na Travessia, é a **dinâmica interna**: nenhum trecho pode estar mais alto que outro dentro do episódio.
- Conferir o padrão vigente na documentação do Spotify for Creators antes de subir o primeiro episódio.

## Ordem de gasto

1. **Agora, para a primeira Travessia: nada.** Um aplicativo de shruti box de alguns reais, efeitos do Freesound e do arquivo da BBC, montagem no GarageBand. Publicar primeiro, comprar ferramenta depois.
2. **Primeira assinatura, quando a produção virar semanal:** biblioteca com direitos liberados, tipo Epidemic Sound ou Artlist, que cobre música, ambiência e efeitos numa conta só e elimina o risco de direito autoral.
3. **Stable Audio:** quando fizer falta textura que biblioteca nenhuma tem, ou quando a assinatura sonora exclusiva do Alumia virar decisão de marca em vez de necessidade de produção.
4. **Descript:** quando o episódio padrão semanal estiver rodando e o gargalo passar a ser o tempo de corte de fala.

Ferramenta comprada antes de publicar é a armadilha mais comum desse negócio.
