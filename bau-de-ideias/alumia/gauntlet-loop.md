# O Gauntlet Loop do Alumia

> Adaptado do Gauntlet Loop de Matt Shumer em 15/08/2026. **Obrigatório para toda Sessão TRAVESSIA, completa e pocket.** Nenhum roteiro entra em `episodios/` sem ter passado por aqui.

## A ideia, em uma frase

Nenhum agente escreve, julga o próprio trabalho e para por aí. O objetivo é quebrado em partes julgáveis separadamente, cada parte ganha um construtor especialista, e críticos cegos de contexto limpo julgam contra um mandato explícito. O que reprova volta, é reescrito e rejulgado, até passar.

## O que é blueprint e o que muda a cada episódio

O circuito, os mandatos dos críticos, as regras de redação e o cálculo de tempo são fixos e valem para qualquer história. O que muda é só o briefing da etapa 1, que Rafael aprova antes de qualquer linha de roteiro ser escrita. O circuito mora em [`../../.claude/workflows/gauntlet-travessia.js`](../../.claude/workflows/gauntlet-travessia.js) e recebe o briefing como argumento.

## O fluxo completo de um episódio

1. Rafael manda o tema.
2. A resposta é só a **etapa 1**: o percurso em estações encaixado nas cinco fases, o símbolo físico nomeado, o momento do mapa e onde o alarme mora no corpo naquele momento. Nada de roteiro.
3. Rafael aprova ou manda refazer.
4. Aprovado, o briefing vira argumento do Gauntlet Loop, que constrói, julga, repara e verifica.
5. O roteiro sai com o veredito de cada crítico, e Rafael lê antes de qualquer coisa ser salva.
6. Aprovado, o arquivo é montado com cabeçalho, ficha e notas de produção, salvo em `episodios/`, commitado e enviado.

## O circuito, fase por fase

**Construir.** Um construtor por bloco cronometrado, em paralelo. Cada um recebe o briefing inteiro, as fases do framework que caem dentro do bloco dele, o alvo de palavras e de pausa já calculado, e escreve só o trecho do percurso que é dele.

**Julgar.** Quatro críticos cegos leem o roteiro já costurado. São cegos de verdade: não sabem quem escreveu, não veem o processo, e a instrução é encontrar defeito, não elogiar. Cada defeito precisa citar o trecho literal, dizer o problema, exigir a correção e classificar entre reprova e ajuste.

**Reparar.** Um reparador reescreve o roteiro inteiro corrigindo tudo que foi apontado, sem introduzir defeito novo.

**Verificar.** Os quatro críticos julgam de novo, com contexto limpo, sem ter visto a versão anterior. Enquanto sobrar defeito, o ciclo de reparo e verificação se repete, com teto de três rodadas.

## Os quatro mandatos

**Relaxamento e imersão.** A única pergunta é se a peça desliga uma cabeça acesa e conduz ao estado de retorno previsto. Reprova cenário parado onde nada se transforma, ouvinte que assiste em vez de habitar, relaxamento pedido pelo narrador, sentimento genérico, curva que não desce, e qualquer trecho que acenda a mente. Confere também a agência progressiva do "você".

**Métrica e framework.** Conta as palavras e soma as pausas bloco a bloco, e diz os números que encontrou. Reprova bloco que estoure ou falte mais de 15% do alvo. Confere a progressão sensorial, o primeiro movimento de relaxamento só depois da fase de entrada, as pausas do fim dobrando as do começo, e a âncora nos últimos 10 a 15% do tempo narrado.

**Voz e tiques.** Roda a varredura de tiques da skill linha por linha, citando cada ocorrência. Confere o DNA de estilo e a voz do Rafael.

**PNL e honestidade.** De um lado, verifica se as técnicas estão tecidas dentro da cena e nunca explicadas: pacing e leading, transferência de responsabilidade, pressuposição de resultado, ancoragem tátil e dispensa do esforço. Do outro, reprova qualquer promessa clínica, menção a frequência cerebral ou nervo vago, mecanismo fisiológico afirmado, testemunho inventado e autopromoção.

## Sobre o benchmark

O Gauntlet original manda o crítico só aprovar se o resultado for melhor que uma referência real do mundo. Aqui essa trava está desligada por decisão de Rafael, porque o Alumia ainda não tem o episódio estado da arte que serviria de barra. Os críticos julgam contra o mandato e contra o briefing. Quando nascer o episódio que virar referência, ele entra como benchmark e a trava é ligada.

## O cálculo de tamanho, que é onde os roteiros morriam

O alvo de cada bloco é derivado, nunca chutado:

```
duração do bloco = tempo de fala + tempo de pausa
tempo de fala = palavras dividido pelo ritmo de locução
palavras = (duração do bloco − pausa alvo) × ppm ÷ 60
```

O ritmo padrão é de **115 palavras por minuto**, que é locução noturna lenta. A fração de pausa cresce do primeiro ao último bloco, cumprindo o mecanismo das pausas crescentes.

Os rascunhos descartados em agosto de 2026 erravam justamente aqui: declaravam cerca de 480 palavras e 247 segundos de pausa dentro de uma janela de 300 segundos, o que exigiria falar quinhentas palavras por minuto. Gravados, estourariam o formato em vários minutos. Por isso os alvos agora são calculados pelo circuito e checados por um crítico que conta.
