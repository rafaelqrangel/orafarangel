export const meta = {
  name: 'gauntlet-travessia',
  description: 'Gauntlet Loop de qualquer Sessão TRAVESSIA: builders por bloco, críticos cegos, reparo e verificação',
  whenToUse: 'Depois que Rafael aprovar a etapa 1 de um episódio (percurso, símbolo, momento e alarme no corpo). Recebe o briefing em args e devolve o roteiro julgado.',
  phases: [
    { title: 'Construir', detail: 'um builder por bloco cronometrado' },
    { title: 'Julgar', detail: 'quatro críticos cegos de contexto limpo sobre o roteiro costurado' },
    { title: 'Reparar', detail: 'reescrita aplicando os defeitos confirmados' },
    { title: 'Verificar', detail: 'críticos finais sobre a versão reparada' },
  ],
}

// ---------------------------------------------------------------------------
// BRIEFING: chega em args. Ver bau-de-ideias/alumia/gauntlet-loop.md.
// Campos: formato ('pocket' | 'completa'), titulo, cenario, momento, alarme,
// inimigo, estacoes (texto do percurso nas cinco fases), simbolo, ancora,
// retorno, ppm (opcional, padrão 115).
// ---------------------------------------------------------------------------

const b = args || {}
const faltando = ['formato', 'titulo', 'cenario', 'momento', 'alarme', 'inimigo', 'estacoes', 'simbolo', 'ancora', 'retorno']
  .filter(k => !b[k])
if (faltando.length) {
  throw new Error(`Briefing incompleto. Faltam os campos: ${faltando.join(', ')}. Ver bau-de-ideias/alumia/gauntlet-loop.md.`)
}
if (b.formato !== 'pocket' && b.formato !== 'completa') {
  throw new Error(`Formato inválido: ${b.formato}. Só existe 'pocket' (10 min, 2-5-3) e 'completa' (22 min, 2-11-4-5).`)
}

const RAIZ = '/home/user/orafarangel'
const PPM = b.ppm || 115 // palavras por minuto de locução noturna lenta

// Fração de cada bloco que é pausa. Cresce do primeiro ao último bloco,
// cumprindo o mecanismo 1 do framework (pausas do fim são o dobro das do início).
const FORMATOS = {
  pocket: {
    rotulo: 'Travessia pocket',
    duracaoTotal: 600,
    coda: 0,
    metrica: '2 · 5 · 3',
    blocos: [
      { id: 'bloco1', nome: 'DESACELERAÇÃO EXPRESSA', vibracao: 2, inicio: 0, fim: 120, fracaoPausa: 0.58, pausaMin: 4, pausaMax: 8 },
      { id: 'bloco2', nome: 'O PONTO DE LUZ', vibracao: 5, inicio: 120, fim: 420, fracaoPausa: 0.50, pausaMin: 6, pausaMax: 12 },
      { id: 'bloco3', nome: 'CLAREZA E FOCO', vibracao: 3, inicio: 420, fim: 600, fracaoPausa: 0.62, pausaMin: 10, pausaMax: 16 },
    ],
  },
  completa: {
    rotulo: 'Travessia completa',
    duracaoTotal: 1320,
    coda: 300,
    metrica: '2 · 11 · 4 · 5',
    blocos: [
      { id: 'bloco1', nome: 'PREPARAÇÃO E CONEXÃO', vibracao: 2, inicio: 0, fim: 120, fracaoPausa: 0.58, pausaMin: 4, pausaMax: 8 },
      { id: 'bloco2', nome: 'A JORNADA', vibracao: 11, inicio: 120, fim: 780, fracaoPausa: 0.30, pausaMin: 5, pausaMax: 10 },
      { id: 'bloco3', nome: 'ANCORAGEM E CONSTRUÇÃO PRÁTICA', vibracao: 4, inicio: 780, fim: 1020, fracaoPausa: 0.55, pausaMin: 8, pausaMax: 14 },
    ],
  },
}

const F = FORMATOS[b.formato]
const tempoNarrado = F.duracaoTotal - F.coda

const mmss = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

// Regra crítica do framework: as fases rodam sobre o tempo narrado, com a coda descontada.
const FASES = [
  { nome: 'ENTRADA', de: 0, ate: 0.15, agencia: 'o ouvinte RECEBE: o mundo chega até ele, e ele apenas percebe' },
  { nome: 'DESCIDA', de: 0.15, ate: 0.40, agencia: 'o ouvinte RECEBE: o mundo chega até ele, e ele apenas percebe' },
  { nome: 'IMERSÃO', de: 0.40, ate: 0.65, agencia: 'o ouvinte AGE: ele se move, escolhe e sente dentro do cenário' },
  { nome: 'DERIVA', de: 0.65, ate: 0.85, agencia: 'o ouvinte AGE, com passividade crescente, até a sensação interna assumir' },
  { nome: 'ANCORAGEM', de: 0.85, ate: 1.0, agencia: 'o ouvinte É sujeito soberano de quase toda frase' },
].map(f => ({
  ...f,
  inicio: Math.round(f.de * tempoNarrado),
  fim: Math.round(f.ate * tempoNarrado),
}))

const mapaFases = FASES.map(f => `- ${f.nome}: ${mmss(f.inicio)} a ${mmss(f.fim)} — ${f.agencia}`).join('\n')

const blocos = F.blocos.map(bl => {
  const duracao = bl.fim - bl.inicio
  const pausa = Math.round(duracao * bl.fracaoPausa)
  const palavras = Math.round(((duracao - pausa) * PPM) / 60)
  const fasesDoBloco = FASES.filter(f => f.inicio < bl.fim && f.fim > bl.inicio)
    .map(f => `${f.nome} (${mmss(Math.max(f.inicio, bl.inicio))} a ${mmss(Math.min(f.fim, bl.fim))}), onde ${f.agencia}`)
  return { ...bl, duracao, pausa, palavras, fasesDoBloco }
})

const mapaBlocos = blocos.map(bl =>
  `- ${bl.nome} (${mmss(bl.inicio)} a ${mmss(bl.fim)}): cerca de ${bl.palavras} palavras e cerca de ${bl.pausa}s somados de pausa`).join('\n')

// ---------------------------------------------------------------------------

const LEITURA = `Antes de escrever ou julgar qualquer coisa, leia estes arquivos com a ferramenta Read:
- ${RAIZ}/bau-de-ideias/alumia/framework-ritmico.md (cinco fases, regra do tempo narrado, cinco mecanismos)
- ${RAIZ}/bau-de-ideias/alumia/gauntlet-loop.md (o método que você está executando agora)
- ${RAIZ}/.claude/skills/travessia/SKILL.md (a skill roteirista, com a varredura de tiques e os guarda-corpos)
- ${RAIZ}/bau-de-ideias/alumia/formato-travessia-${b.formato}.md (a métrica ${F.metrica})
- ${RAIZ}/bau-de-ideias/alumia/travessia-metodo.md (as nove etapas e o estilo narrativo)
- ${RAIZ}/marca/voz-e-tom.md (a voz do Rafael)

A pasta ${RAIZ}/bau-de-ideias/alumia/episodios/ está vazia de propósito: os rascunhos anteriores foram descartados e ainda não existe episódio estado da arte desta marca. Julgue contra o briefing e contra os mandatos, nunca comparando com peça nenhuma.`

const BRIEFING = `BRIEFING APROVADO PELO RAFAEL. Não invente outro cenário, não troque o símbolo, não mude o percurso.

Formato: ${F.rotulo}, ${F.duracaoTotal / 60} minutos, métrica ${F.metrica}${F.coda ? `, com coda de silêncio de ${F.coda / 60} minutos no fim` : ', sem coda de silêncio'}.
Tempo narrado para efeito de cálculo rítmico: ${mmss(tempoNarrado)}.
Título de trabalho: ${b.titulo}
Cenário: ${b.cenario}
Momento do mapa: ${b.momento}
Alarme no corpo: ${b.alarme}
Inimigo a desarmar: ${b.inimigo}
Retorno: ${b.retorno}

PERCURSO EM ESTAÇÕES, na ordem, encaixado nas cinco fases:
${b.estacoes}

Símbolo: ${b.simbolo}

Âncora final, no formato fixo do framework: ${b.ancora}

MAPA DAS CINCO FASES sobre o tempo narrado:
${mapaFases}

MAPA DOS BLOCOS e seus alvos de tamanho:
${mapaBlocos}`

const REGRAS = `REGRAS INVIOLÁVEIS DE REDAÇÃO:
- Português brasileiro. Grafia sempre "você", nunca "cê". NENHUM emoji, ícone ou seta decorativa, em lugar nenhum.
- Segunda pessoa e tempo presente do começo ao fim, desde o frame zero. O ouvinte é protagonista, nunca espectador. Isto é um simulador imersivo em segunda pessoa, não uma meditação guiada com história. O que escala é a agência (recebe, age, é), nunca o pronome.
- O relaxamento do corpo é SEMPRE consequência do que acontece na cena, nunca instrução do narrador. Proibido "você se sente calmo, leve, em paz" e qualquer sentimento genérico.
- Zero comando explícito de relaxar nas fases ENTRADA e DESCIDA. Nas fases DERIVA e ANCORAGEM a firmeza aparece só como dispensa do esforço, no padrão das negativas ("não tenta dormir, não olha as horas, não confere se funcionou"), nunca como ordem de dormir ou de sentir.
- Progressão sensorial obrigatória: audição e olfato primeiro, depois visão, depois tato, e sensação interna por último.
- Pausas marcadas em segundos entre parágrafos, no formato (4s), (8s), (12s). As pausas do último bloco são o dobro das do primeiro.
- MAIÚSCULA marca palavra dita mais grave e mais devagar. Colchetes marcam o que não se lê. Nunca abrir em silêncio: o bordão já está tocando quando a voz entra.
- Alguma coisa precisa se transformar: incidente com virada, ou processo lento acompanhado de perto até o fim. Cenário parado onde a pessoa só relaxa em lugar bonito está reprovado.
- O símbolo cabe na palma da mão e a pessoa consegue arrumar um igual no dia seguinte.
- Número sem dívida: escala grande demais para caber em calendário, nunca número que cobre alguma coisa de quem escuta.
- Nenhuma teoria, citação, dado científico ou ensinamento dentro da jornada.
- Nenhuma promessa clínica, nenhuma frequência cerebral, nenhum ponto de acupressão, nenhuma transformação prometida, nenhum testemunho inventado.
- Nenhum anúncio, CTA ou pedido para seguir.
- Nenhum dia da semana nomeado, nenhuma referência a data. A peça é atemporal e serve em qualquer noite.

TIQUES QUE REPROVAM:
- Tríade anafórica (três orações seguidas com a mesma abertura).
- A mesma fórmula de comparação ("do jeito que X faz Y", "com a calma de quem", "como quem") mais de uma vez no roteiro inteiro.
- Corrente de frases-fragmento usada como pontuação.
- Narrador comentando a própria cena ("não é coincidência", "sabia?").
- Parágrafos todos do mesmo tamanho e da mesma forma. Alterne período longo com vírgulas e frase seca de quatro palavras.
- DICOTOMIA FATIADA, o tique mais grave da lista e banido por decreto: contraste partido em duas frases curtas, em qualquer forma. "Isso não é X. É Y.", "não é X: é Y", "não é X; é Y", "Todo mundo X. Você Y.", "A casa dorme. Você não.", "Não é sobre X. É sobre Y." É a assinatura mais reconhecível de texto de máquina, e a pontuação não disfarça: ponto, dois-pontos e ponto e vírgula são o mesmo corte. A ideia se diz num período só, com conjunção no lugar do ponto. A única sequência de negativas permitida no roteiro inteiro são as três de dispensa do esforço do bloco final.
- Cadeia de "como se" decorativo, adjetivo dobrado, staccato de IA.
- Jargão de coach (destrave, mindset, próximo nível, alta performance) e misticismo gratiluz (vibrar na luz, energias do universo, limpar a aura).

DNA DE ESTILO: Gaiman (a mágica dita como fato, sem cerimônia, nada se explica), Martin (materialidade: peso, temperatura, textura específica daquele mundo), Springsteen (franqueza de classe trabalhadora, verso curto que cai como soco depois da frase longa), King (detalhe físico honesto no lugar de sentimento genérico), McKee (curva de tensão que desce).

TEXTURA DAS FASES DE ENTRADA E DESCIDA: densidade sensorial em camadas, acumulação rítmica que cresce até saturar e quebra num fragmento curto, e ambiente com intenção própria. Orientação antes de sensação: quem escuta precisa saber onde está e em que posição antes do primeiro detalhe sensorial.${b.estilo ? `

DIREÇÃO DE ESTILO ESPECÍFICA DESTE EPISÓDIO, que convive com o DNA acima e vence em caso de conflito de textura:
${b.estilo}

Estilo é influência de escrita, nunca reprodução: jamais copiar, parafrasear de perto ou citar frases de qualquer autor. O texto é original.` : ''}`

phase('Construir')

// Modo revisão: se o briefing trouxer um roteiro pronto (ou o caminho de um
// arquivo já escrito), a fase de construção é pulada e o circuito entra direto
// em julgar, reparar e verificar.
const partes = b.roteiro ? [b.roteiro] : await parallel(blocos.map(bl => () =>
  agent(`Você é roteirista do Alumia e está escrevendo UMA PARTE de uma ${F.rotulo}.

${LEITURA}

${BRIEFING}

${REGRAS}

SUA PARTE: o bloco ${bl.nome}, de ${mmss(bl.inicio)} a ${mmss(bl.fim)}.
Fases do framework que caem dentro dele: ${bl.fasesDoBloco.join('; ')}.
Alvo de tamanho, obedeça de perto: cerca de ${bl.palavras} palavras de texto e cerca de ${bl.pausa} segundos somados de pausa, distribuídos em pausas de ${bl.pausaMin}s a ${bl.pausaMax}s. Este alvo já está calculado para locução noturna de ${PPM} palavras por minuto: texto a mais estoura o bloco na gravação.

Escreva apenas o trecho do percurso que pertence a este bloco, sem adiantar nem repetir o que é dos outros.

Devolva APENAS o texto pronto para teleprompter, começando pela linha "### BLOCO ${blocos.indexOf(bl) + 1} — ${bl.nome} · ${mmss(bl.inicio)} a ${mmss(bl.fim)} · vibração ${bl.vibracao}" e em seguida o corpo com as pausas marcadas. Sem comentários, sem explicação, sem preâmbulo. O seu texto final É o entregável.`,
    { label: `builder:${bl.id}`, phase: 'Construir' })
))

const roteiroV1 = partes.filter(Boolean).join('\n\n')
if (!roteiroV1) throw new Error('Nenhum bloco foi construído e nenhum roteiro foi passado no briefing.')

phase('Julgar')

const VEREDITO = {
  type: 'object',
  properties: {
    aprovado: { type: 'boolean', description: 'true apenas se cumpre o mandato sem defeito que exija reescrita' },
    defeitos: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          onde: { type: 'string', description: 'trecho literal citado do roteiro onde está o defeito' },
          problema: { type: 'string', description: 'o que exatamente está errado' },
          correcao: { type: 'string', description: 'o que precisa acontecer para consertar' },
          gravidade: { type: 'string', enum: ['reprova', 'ajuste'] },
        },
        required: ['onde', 'problema', 'correcao', 'gravidade'],
      },
    },
    resumo: { type: 'string', description: 'uma ou duas frases de veredito' },
  },
  required: ['aprovado', 'defeitos', 'resumo'],
}

const CRITICOS = [
  {
    id: 'relaxamento',
    mandato: `Você é o crítico de RELAXAMENTO E IMERSÃO. Julgue uma coisa só: este roteiro desliga de verdade uma cabeça acesa e conduz ao estado de retorno previsto no briefing?
Reprove se: for cenário bonito onde nada se transforma; se o ouvinte assistir em vez de habitar; se o relaxamento for pedido pelo narrador em vez de acontecer por consequência da cena; se houver qualquer sentimento genérico; se a curva de tensão não descer do começo ao fim; se algum trecho acender a mente em vez de apagar (pergunta ao ouvinte, cálculo, cobrança, susto, número que cobra alguma coisa).
Verifique a agência progressiva: o "você" presente desde o frame zero, recebendo nas fases ENTRADA e DESCIDA, agindo na IMERSÃO e na DERIVA, sujeito soberano na ANCORAGEM.`,
  },
  {
    id: 'metrica',
    mandato: `Você é o crítico de MÉTRICA E FRAMEWORK. Julgue a estrutura contando de verdade, e diga os números que encontrou.
Conte as palavras de cada bloco e some as pausas marcadas em segundos, bloco a bloco. Compare com os alvos declarados no briefing. Reprove qualquer bloco que estoure ou falte mais de 15% do alvo.
Confira a conta de tempo de cada bloco: (palavras dividido por ${PPM}, vezes 60) mais as pausas somadas precisa dar aproximadamente a duração do bloco.
Verifique também: as pausas do último bloco são o dobro das do primeiro? A progressão sensorial obedece audição e olfato, depois visão, depois tato, e sensação interna por último? O primeiro movimento de relaxamento aparece depois do fim da fase ENTRADA? A âncora está nos últimos 10 a 15% do tempo narrado e no formato fixo do framework? A coda de silêncio existe ou não existe conforme o formato?`,
  },
  {
    id: 'voz',
    mandato: `Você é o crítico de VOZ E TIQUES. Rode a varredura de tiques da skill linha por linha e cite o trecho literal de cada ocorrência.
PRIMEIRA COISA A FAZER, antes de qualquer outra: caçar dicotomia fatiada, frase por frase. Toda vez que uma frase curta contrastar com a anterior por oposição de sujeito ou por negação seca, é reprovação automática, sem discussão e sem atenuante. Formas a caçar: "Isso não é X. É Y.", "não é X: é Y", "não é X; é Y", "Todo mundo X. Você Y.", "A casa dorme. Você não.", "Não é sobre X. É sobre Y.", e qualquer variação que ponha o contraste num ponto final, em dois-pontos ou em ponto e vírgula. A correção é sempre a mesma: dizer a ideia num período só, com conjunção no lugar do ponto. A única exceção do roteiro inteiro são as três negativas de dispensa do esforço do bloco final.
Reprove também se encontrar: tríade anafórica; a mesma fórmula de comparação mais de uma vez no roteiro inteiro; corrente de frases-fragmento usada como pontuação; narrador comentando a própria cena; parágrafos todos do mesmo tamanho e da mesma forma; sentimento genérico; cadeia de "como se" decorativo; adjetivo dobrado; dicotomia fatiada "Não é X. É Y."; staccato de IA; jargão de coach; misticismo gratiluz; qualquer emoji ou seta decorativa; a grafia "cê"; qualquer dia da semana ou data nomeada.
Verifique também se o texto soa como a voz do Rafael e se cumpre o DNA de estilo (Gaiman, Martin, Springsteen, King, McKee), mais a direção de estilo específica deste episódio, se houver. Reprove qualquer trecho que copie, parafraseie de perto ou cite frase de autor real: a influência é de textura, e o texto tem de ser original.`,
  },
  {
    id: 'pnl',
    mandato: `Você é o crítico de PNL E HONESTIDADE.
Do lado da técnica, verifique se estão tecidas DENTRO da cena, nunca explicadas: pacing e leading (algo na cena puxando o ritmo do corpo de quem escuta), transferência de responsabilidade (o mundo trabalhando sozinho, sem precisar do ouvinte), pressuposição de resultado (o corpo descendo como fato consumado), ancoragem tátil no símbolo com instalação no mundo real, e dispensa do esforço nas negativas finais. Reprove se as técnicas estiverem ausentes ou se aparecerem como explicação ao ouvinte.
Do lado da honestidade, reprove qualquer: promessa clínica ou de transformação; menção a frequência cerebral, onda alfa ou teta, binaural, nervo vago, ponto de acupressão; afirmação de mecanismo fisiológico ou cerebral; testemunho inventado; dado científico ou histórico apresentado como fato dentro da jornada; CTA ou autopromoção.
Verifique também se o símbolo cabe na palma da mão e se a pessoa consegue arrumar um igual no dia seguinte.`,
  },
]

const mandatoCego = c => `Você é um crítico cego. Você não escreveu este roteiro, não conhece quem escreveu, e o seu trabalho é encontrar o que está errado. Não elogie. Seja implacável e específico, citando trechos literais.

${LEITURA}

${BRIEFING}

${REGRAS}

${c.mandato}

IMPORTANTE: não existe ainda um episódio estado da arte desta marca. Julgue contra o mandato acima e contra o briefing, nunca comparando com outro episódio para reprovar.`

const julgamento = await parallel(CRITICOS.map(c => () =>
  agent(`${mandatoCego(c)}

ROTEIRO A JULGAR:

${roteiroV1}`,
    { label: `critico:${c.id}`, phase: 'Julgar', schema: VEREDITO })
    .then(v => ({ critico: c.id, ...v }))
))

const vereditos = julgamento.filter(Boolean)
const defeitos = vereditos.flatMap(v => (v.defeitos || []).map(d => ({ critico: v.critico, ...d })))
const reprovacoes = defeitos.filter(d => d.gravidade === 'reprova')

log(`Rodada 1: ${vereditos.filter(v => v.aprovado).length} de ${vereditos.length} críticos aprovaram. ${reprovacoes.length} reprovações e ${defeitos.length - reprovacoes.length} ajustes.`)

let roteiroFinal = roteiroV1
let rodadas = []
let rodada = 1

// Loop do gauntlet: repara e rejulga até passar, com teto de três rodadas.
while (defeitosPendentes(rodadas, defeitos).length > 0 && rodada <= 3) {
  const pendentes = defeitosPendentes(rodadas, defeitos)

  phase('Reparar')

  const lista = pendentes.map((d, i) =>
    `${i + 1}. [${d.gravidade.toUpperCase()} · crítico de ${d.critico}]
   Onde: ${d.onde}
   Problema: ${d.problema}
   Correção exigida: ${d.correcao}`).join('\n\n')

  const reparado = await agent(`Você é o roteirista reparador do Alumia. Recebeu um roteiro de ${F.rotulo} e a lista de defeitos que os críticos cegos encontraram. Reescreva o roteiro inteiro corrigindo TODOS eles, sem introduzir defeito novo e sem estragar o que já estava bom.

${LEITURA}

${BRIEFING}

${REGRAS}

DEFEITOS A CORRIGIR:

${lista}

ROTEIRO ATUAL:

${roteiroFinal}

Devolva APENAS o roteiro completo e corrigido, com os cabeçalhos de bloco e as pausas marcadas. Sem comentários, sem lista do que mudou, sem preâmbulo.`,
    { label: `reparador:r${rodada}`, phase: 'Reparar' })

  if (!reparado) break
  roteiroFinal = reparado

  phase('Verificar')

  const rejulgamento = (await parallel(CRITICOS.map(c => () =>
    agent(`${mandatoCego(c)}

ROTEIRO A JULGAR:

${roteiroFinal}`,
      { label: `verifica:${c.id}:r${rodada}`, phase: 'Verificar', schema: VEREDITO })
      .then(v => ({ critico: c.id, ...v }))
  ))).filter(Boolean)

  const novos = rejulgamento.flatMap(v => (v.defeitos || []).map(d => ({ critico: v.critico, ...d })))
  rodadas.push({ rodada, vereditos: rejulgamento, defeitos: novos })
  log(`Rodada ${rodada + 1}: ${rejulgamento.filter(v => v.aprovado).length} de ${rejulgamento.length} críticos aprovaram. ${novos.filter(d => d.gravidade === 'reprova').length} reprovações restantes.`)
  rodada++
}

// Só reprovação bloqueia. Ajuste é preferência de crítico: entra no relatório e
// vai junto no reparo da rodada, mas nunca segura o circuito. Um gauntlet que
// espera zero preferências nunca aprova nada e roda até o teto sem convergir.
function defeitosPendentes(historico, iniciais) {
  const ultimo = historico.length ? historico[historico.length - 1].defeitos : iniciais
  return ultimo.filter(d => d.gravidade === 'reprova')
}

const ultimaRodada = rodadas.length ? rodadas[rodadas.length - 1] : { vereditos, defeitos }
const passouLimpo = ultimaRodada.vereditos.every(v => v.aprovado)

return {
  formato: b.formato,
  titulo: b.titulo,
  passouLimpo,
  rodadasExecutadas: rodadas.length + 1,
  roteiro: roteiroFinal,
  alvos: blocos.map(bl => ({ bloco: bl.nome, de: mmss(bl.inicio), ate: mmss(bl.fim), palavras: bl.palavras, pausaSegundos: bl.pausa })),
  fases: FASES.map(f => ({ fase: f.nome, de: mmss(f.inicio), ate: mmss(f.fim) })),
  primeiroJulgamento: vereditos.map(v => ({ critico: v.critico, aprovado: v.aprovado, resumo: v.resumo, defeitos: v.defeitos })),
  ultimoJulgamento: ultimaRodada.vereditos.map(v => ({ critico: v.critico, aprovado: v.aprovado, resumo: v.resumo, defeitos: v.defeitos })),
}
