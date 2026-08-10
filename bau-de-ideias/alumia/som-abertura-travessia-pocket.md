# Desenho de som da abertura: Travessia pocket das três da manhã

> Especificação de produção, 30/07/2026. Vale para o bloco 1 da Travessia pocket, os dois minutos de desaceleração expressa. Escrita para o tema definido em [`oceano-azul-primeira-travessia.md`](oceano-azul-primeira-travessia.md).

## As quatro restrições que mandam em tudo

O contexto define o som antes de qualquer gosto pessoal.

1. **São três da manhã e está escuro.** A audição está em estado de vigilância, e qualquer ataque rápido de instrumento entra como sobressalto.
2. **A pessoa já está acordada e assustada.** Beleza demais desperta. Se o ouvinte reparar na trilha, a trilha falhou.
3. **O aparelho é o celular na mesa de cabeceira ou fone de ouvido, em volume baixo.** Abaixo de 60 Hz não existe no alto-falante do telefone, e acima de 8 kHz é o que acorda.
4. **A participação é ativa.** A pessoa respira junto, e portanto a música precisa ser o metrônomo da respiração sem que ninguém precise contar.

## A escolha central: quinta justa aberta

Um bordão sustentado de tônica e quinta, **sem terça**. A terça é o que informa se a música é alegre ou triste, e no meio da madrugada não cabe dizer à pessoa como ela deve se sentir. A quinta aberta é também o som mais antigo que existe: é o organum medieval, a tampura indiana, a gaita de foles, o bordão de todas as tradições antes de o Ocidente decidir sobre harmonia. A fonte milenar aparece no som, e não só no texto.

**Nota fundamental entre 110 e 150 Hz**, faixa de lá2 a ré3. Abaixo disso some no celular, acima disso começa a chamar atenção. Sem modulação, sem mudança de acorde do começo ao fim.

## O metrônomo invisível da respiração

Esta é a decisão que resolve a participação ativa. O bordão não fica estático: ele cresce e decresce no ritmo exato da respiração pedida, com a saída mais longa que a entrada.

- **Crescimento de 4 segundos**, subindo cerca de 4 dB e abrindo um pouco o filtro.
- **Decaimento de 8 segundos**, voltando ao ponto de partida.
- Ciclo de 12 segundos, portanto **dez ciclos nos dois minutos de abertura**.

A voz entra sobre a subida e cala na descida. Quem escuta acaba respirando junto sem nenhuma instrução de contagem, porque o corpo acompanha o que ouve.

## Instrumentos que servem

- **Shruti box ou harmônio indiano.** Bordão contínuo, sem ataque, com a instabilidade humana do fole. É a primeira escolha.
- **Contrabaixo ou violoncelo em arco lento**, tocado *sul tasto*, sem vibrato. Dá corpo e respiração orgânica.
- **Taça tibetana friccionada com o bastão**, nunca percutida. Friccionada não tem ataque; percutida tem, e às três da manhã um toque de sino é um susto.
- **Pad de sintetizador analógico** com ataque de 2 a 4 segundos e cauda longa, com leve saturação de fita para tirar o brilho digital.
- **Ruído marrom** num piso muito baixo, de 12 a 15 dB abaixo do bordão. Não é enfeite: às três da manhã a pessoa escuta a geladeira, o cano, o vizinho, e o piso de ruído engole essas informações que reacendem o alerta. Marrom, e não branco nem rosa, porque tem menos energia no agudo.

## O que fica de fora

- **Qualquer melodia.** Melodia cria expectativa, e expectativa é atenção acordada.
- **Percussão**, ainda que suave.
- **Intervalos ascendentes** e qualquer resolução, porque anunciam que algo vai acontecer.
- **Reverb de catedral.** Cauda de oito segundos constrói uma sala enorme, e sala enorme no escuro é sensação de exposição. Usar sala pequena ou plate curto, com decaimento entre 1,5 e 2,5 segundos.
- **Chuva e tempestade.** Além de ser o mar vermelho absoluto da categoria, trovão é sobressalto.
- **Silêncio no começo.** Detalhe fácil de errar: se o áudio abre com dois segundos de nada, a pessoa acha que não funcionou, olha a tela, toma luz azul na cara e perde o pouco de sono que restava.

## Regras de mixagem

- **O som já existe quando o play é apertado.** Começar com o bordão audível e subir de lá, em quatro segundos, em vez de nascer do zero.
- **Nada mais alto que nada.** A distância entre o pico da voz e o pico da música deve ser pequena e constante ao longo dos dez minutos. O que acorda não é o volume, é a diferença de volume.
- Cortar tudo acima de 10 kHz na música e domar as sibilantes da voz, que são o que mais desperta em fone de ouvido.
- Nível integrado entre -18 e -20 LUFS, com pico real em -3 dBTP. Fica abaixo do padrão de podcast de propósito, e a normalização das plataformas resolve o resto sem estragar a dinâmica interna.
- Sem compressão que respire ou bombeie junto com a voz.

## Narração do ambiente, para instruir uma IA de geração de áudio

### Em português, para leitura e ajuste

Um som grave já está no quarto antes de você perceber que ele começou. É um bordão contínuo de harmônio indiano, ar atravessando palhetas, com um contrabaixo tocado de arco muito devagar sustentando a mesma nota mais embaixo. São duas notas apenas, a tônica e a quinta, sem nenhuma terceira nota que diga se aquilo é alegre ou triste. Do começo ao fim nada muda de harmonia e nada se resolve.

O som respira. A cada doze segundos ele cresce por quatro, como se o quarto inspirasse, e recua por oito, sempre mais devagar do que subiu. Não existe batida, não existe melodia, não existe nenhuma nota que anuncie a próxima.

Por baixo de tudo, num nível quase inaudível, corre um ruído grave e aveludado, do tipo que engole o barulho da geladeira e do cano da casa sem chamar atenção para si.

O espaço é pequeno e próximo, do tamanho de um quarto com a porta fechada, e não de uma igreja. Os agudos são escuros, sem brilho, como fita magnética velha. Nada nesse som é bonito o bastante para ser notado, e é exatamente essa a intenção.

### Em inglês, para colar direto no gerador

```
Deep sustained sleep drone. Indian shruti box and very slowly bowed double bass
holding one open fifth — root and fifth only, no third, no chord changes ever.
Fundamental around 130 Hz. Extremely slow breathing swell: the drone rises over
4 seconds and falls back over 8 seconds, one full cycle every 12 seconds,
repeating. No melody, no percussion, no rhythm, no vocals, no bells. Warm analog
tape saturation, dark rolled-off highs. Small intimate bedroom reverb with a
short 2-second tail, never a cathedral. A very quiet bed of brown noise
underneath. Still, low, unchanging, hypnotic. Nothing builds, nothing resolves,
nothing surprises. Seamlessly loopable.
```

Prompt negativo, se o gerador aceitar:

```
drums, percussion, melody, arpeggio, piano melody, vocals, choir, bells, chimes,
singing bowl strikes, rain, thunder, risers, build-ups, crescendo, key change,
bright high frequencies, sparkle, shimmer, long reverb tails, cinematic
```

### Ajustes prováveis depois da primeira geração

Estes modelos tendem a três desvios com este tipo de pedido, e todos têm conserto no prompt:

- **Insere melodia mesmo proibida.** Reforçar com "single sustained note only, no notes change".
- **Deixa brilhante demais.** Acrescentar "muffled, as if heard through a wall" e "heavily filtered, dark".
- **Faz o swell rápido demais.** Trocar a instrução por "almost imperceptible volume movement, glacial" e assumir que o crescimento e o decaimento serão desenhados na edição, com automação de volume, em vez de gerados.

O caminho mais seguro é gerar o bordão estático e limpo, e desenhar a respiração de quatro por oito na automação depois. O modelo entrega bem a textura e mal o tempo.

## Uma nota de honestidade

Existe um mercado inteiro vendendo frequências milagrosas, 432 Hz, 528 Hz e batidas binaurais com promessa de estado cerebral. A evidência disso é fraca e o Alumia não vende isso. Se a escolha da nota fundamental for feita por critério numerológico, ela é uma decisão de desenho e de coerência simbólica da marca, e é assim que se declara, jamais como efeito clínico.
