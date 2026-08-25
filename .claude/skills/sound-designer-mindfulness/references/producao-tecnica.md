# Especificação técnica de produção

## Loudness

- Programa final: menos 16 LUFS integrado. True peak em menos 1 dBTP.
- LRA entre 6 e 9 LU. Acima disso o ouvinte mexe no volume e quebra o estado.
- Trilha sob narração: menos 28 a menos 32 LUFS momentâneo.
- Trilha em trecho solo: menos 20 a menos 22 LUFS.
- Ambiência de fundo contínua: menos 45 a menos 38 dBFS.

## Voz

- Passa-alta em 80 Hz, 12 dB por oitava.
- Corte estreito de 2 a 3 dB entre 250 e 400 Hz para tirar peso de proximidade.
- Compressão em duas etapas: 2:1 com 3 dB de redução, depois 4:1 com 3 dB.
- De-esser em 6 a 8 kHz, redução máxima de 4 dB.
- Respiração preservada, atenuada em 4 a 6 dB, nunca eliminada. A respiração do narrador é o gatilho de entrainment mais barato do formato. Cortá-la remove o mecanismo.

## Convivência entre voz e trilha

- Cavar 3 a 4 dB na trilha entre 1,5 e 4 kHz, Q de 1,2.
- Ducking com 6 a 9 dB de redução, ataque 300 ms, release 800 ms. Ducking rápido é percebido como bombeamento e quebra a imersão.
- Voz centralizada e seca. Trilha e ambiência abertas, largura mínima de 60 por cento.

## Movimento espacial

- Autopan de rotação lenta, ciclo de 10 s, 0,1 Hz, amplitude máxima de 30 por cento de largura. Reduz habituação e mantém atenção passiva sem introduzir evento. Vale para camadas de ambiência, jamais para a voz.
- Compatibilidade mono obrigatória. Verificar cancelamento de fase antes de entregar.
- Binaural panning com aproximação e afastamento de fonte só faz sentido em entrega dedicada a fone.

## Fades

- Entrada de cue: mínimo 8 s. Ideal 15 a 25 s na abertura.
- Saída de cue: mínimo 12 s.
- Nenhum corte seco, exceto no ponto único de silêncio abrupto planejado.

## Formatos

- Master WAV 48 kHz 24 bits.
- Distribuição AAC 256 kbps ou superior. MP3 de baixa taxa degrada exatamente as caudas de reverb que carregam a emoção.
- Batimentos binaurais em versão separada, com aviso de fone. Portadora entre 100 e 400 Hz. Batimento de 6 Hz para hipnagogia e resgate de memória, 10 Hz para calma alerta.

## Estrutura do prompt de geração

```
[GÊNERO E FUNÇÃO] + [INSTRUMENTAÇÃO ESPECÍFICA] + [ANDAMENTO E COMPASSO] +
[TONALIDADE E MODO] + [DINÂMICA E ARCO] + [TEXTURA E PRODUÇÃO] +
[ESPAÇO E REVERB] + [DURAÇÃO] + [NEGATIVOS]
```

Exemplo bem construído:

> Ambient cinematográfico para meditação guiada. Piano de feltro com pedal sustentado, cordas graves em arco lento, drone de sintetizador analógico em ré, taça tibetana marcando o início. 54 BPM, compasso livre sem grade rítmica percebida. Ré dórico. Pianissimo constante, com crescendo de 6 dB entre 1:40 e 2:10 resolvendo em 2:20. Saturação de fita leve, ruído de fundo a menos 50 dB. Reverb de sala grande, pré-delay 45 ms, cauda 4,5 s. Três minutos com 20 s de fade final. Sem percussão, sem baixo pulsado, sem vocais com letra, sem transientes agudos, sem sidechain.

Negativos padrão para todo cue de mindfulness: sem percussão marcada, sem transientes agudos, sem letra, sem mudança abrupta de dinâmica, sem instrumento em primeiro plano entre 2 e 4 kHz.

## Motores de geração

- **Suno e Udio.** Aceitam prompt em prosa. Respondem bem a instrumentação, andamento e modo. Respondem mal a pedido de silêncio e a arco dinâmico longo. Gere blocos de 2 a 3 minutos e monte o arco no DAW.
- **Lyria.** Melhor controle de textura contínua e drone.
- **ElevenLabs.** Narração e clonagem de voz, não música.
- **Splice.** Biblioteca de samples e loops, matéria-prima para ambiência e camada de memória.
- Nenhum motor generativo entrega cue de 12 minutos com arco coerente. A montagem final é sempre manual.
