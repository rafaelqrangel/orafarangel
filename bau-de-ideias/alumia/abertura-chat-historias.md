# Texto de abertura para o chat de criação de histórias

> Cole o bloco abaixo como primeira mensagem de qualquer chat novo do Claude Code dedicado a escrever Travessias. Ele define o escopo da sessão e evita que o chat vire conversa de estratégia.

---

```
Este chat existe para uma coisa só: escrever roteiros de Sessão TRAVESSIA
do Alumia. Nada de estratégia, canvas, tráfego, landing page ou decisão de
negócio. Se eu puxar assunto fora disso, me lembre de abrir outro chat.

Antes de escrever qualquer coisa, leia:
- .claude/skills/travessia/SKILL.md e o playbook em playbook-v3.md
- bau-de-ideias/alumia/travessia-metodo.md
- bau-de-ideias/alumia/formato-travessia-completa.md
- bau-de-ideias/alumia/formato-travessia-pocket.md
- bau-de-ideias/alumia/som-abertura-travessia-pocket.md
- bau-de-ideias/alumia/poco-de-ideias.md (o mapa de momentos)
- os episódios já escritos em bau-de-ideias/alumia/episodios/

O fluxo de cada roteiro, nesta ordem, e parando para eu aprovar entre uma
etapa e outra:

1. Você me devolve o esqueleto Pixar da história em seis linhas (era uma
   vez, todo dia, um dia, por causa disso, por causa disso, até que no
   fim), o símbolo físico e palpável já nomeado, o momento do mapa e onde
   o alarme mora no corpo naquele momento. Só isso, sem roteiro.
2. Eu aprovo ou mando refazer.
3. Você escreve o roteiro completo no padrão dos episódios existentes:
   cabeçalho com blocos cronometrados, ficha, roteiro de teleprompter com
   pausas em segundos, e notas de produção.
4. Você salva em bau-de-ideias/alumia/episodios/, commita e me manda o
   link direto do arquivo no GitHub, no branch de trabalho.

Regras que não se negociam:
- Travessia completa: 22 minutos, 2-11-4-5, com silêncio verbal total no
  bloco final. Travessia pocket: 10 minutos, 2-5-3, sem silêncio. Não
  existe formato de 11 minutos.
- Segunda pessoa e tempo presente do começo ao fim. O ouvinte age dentro
  da cena, nunca assiste.
- Tem que ACONTECER alguma coisa. Cenário bonito onde a pessoa relaxa não
  é história e volta para a prancheta.
- O símbolo cabe na mão e a pessoa consegue arrumar um igual no dia
  seguinte.
- O relaxamento do corpo é consequência do que acontece na cena, e nunca
  instrução do narrador.
- Nenhuma teoria, citação ou ensinamento dentro do bloco de jornada.
- Nenhuma promessa clínica, nenhuma frequência cerebral, nenhum ponto de
  acupressão, nenhuma transformação prometida.
- Antes de salvar, passe a varredura de tiques da skill e me diga que
  passou.

Quando eu mandar o tema, comece pela etapa 1.
```

---

## Como usar

**Um chat por episódio**, ou um por semana de produção. Chat longo perde qualidade porque carrega discussão antiga que não interessa à escrita.

**O que eu trago para o chat:** o momento do dia em que a pessoa vai escutar e o estado do corpo dela naquele momento, o formato (completa ou pocket, e se a pocket é diurna ou noturna) e o cenário, se já houver um na cabeça.

**O que fica fora:** pesquisa de fonte, que é trabalho do NotebookLM, e qualquer decisão de negócio, que é trabalho do chat principal.

## A divisão de trabalho entre as ferramentas

| Ferramenta | Função |
|---|---|
| **NotebookLM de histórias** | Pesquisa de fonte com citação. Achar a fonte milenar, conferir se a leitura de um autor está correta, colher matéria-prima. Não escreve roteiro final. |
| **Claude Code com a skill `/travessia`** | Escreve o roteiro, aplica formato e estilo, salva no repositório e commita. É o único que fecha o circuito. |
| **Chat principal do Claude Code** | Estratégia, canvas, tráfego, produto, landing. Nunca roteiro. |
