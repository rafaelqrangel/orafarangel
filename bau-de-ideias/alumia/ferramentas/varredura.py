#!/usr/bin/env python3
"""Varredura de tiques e métrica de um roteiro de Travessia.

Uso: python3 bau-de-ideias/alumia/ferramentas/varredura.py <arquivo.md>

Sai com codigo 1 se encontrar qualquer reprovacao. Nenhum roteiro entra em
episodios/ sem passar limpo aqui. O julgamento de agente e opiniao; isto e lei.
"""

import re
import sys
import unicodedata

PPM = 115  # palavras por minuto de locucao noturna lenta

ALVOS = {
    "pocket": [("1", 120), ("2", 300), ("3", 180)],
    "completa": [("1", 120), ("2", 660), ("3", 240)],
}


def sem_acento(texto):
    return "".join(
        c for c in unicodedata.normalize("NFD", texto) if unicodedata.category(c) != "Mn"
    ).lower()


# A unica excecao da casa: as tres negativas de dispensa do esforco que fecham
# o bloco final, vindas da terapia cognitivo-comportamental para insonia. Sao
# tríplices de proposito e nao contam como tique. Nada alem delas e isento.
ASSINATURA_NEGATIVAS = ("tenta dormir", "olha as horas", "confere se funcionou")


def e_assinatura(frase):
    f = sem_acento(frase)
    return any(marca in f for marca in ASSINATURA_NEGATIVAS)


def corpo_do_roteiro(texto):
    ini = texto.find("### BLOCO 1")
    fim = texto.find("## Notas de produção")
    if ini < 0:
        return "", []
    corpo = texto[ini:fim if fim > 0 else len(texto)]
    blocos = re.split(r"### BLOCO", corpo)[1:]
    return corpo, blocos


def falas(bloco):
    """Linhas que o locutor le, sem marcacoes, pausas e cabecalhos."""
    saida = []
    for linha in bloco.split("\n"):
        linha = linha.strip()
        if not linha or linha.startswith("[") or linha.startswith("---"):
            continue
        if re.fullmatch(r"\(\d+s\)", linha):
            continue
        if re.match(r"^\d+ — ", linha) or linha.startswith("###"):
            continue
        saida.append(linha)
    return saida


def frases(texto):
    return [f.strip() for f in re.split(r"(?<=[.!?])\s+", texto) if f.strip()]


# --- Regras de reprovacao -------------------------------------------------

def dicotomia_fatiada(linhas):
    """O vicio decretado: contraste partido em duas frases curtas.

    Pega 'Isso nao e X. E Y.', 'Todo mundo X. Voce Y.', 'X dorme. Voce nao.'
    """
    achados = []
    for linha in linhas:
        fs = frases(linha)
        for a, b in zip(fs, fs[1:]):
            bn = sem_acento(b)
            an = sem_acento(a)
            if e_assinatura(a) and e_assinatura(b):
                continue
            curta = len(b.split()) <= 6
            # segunda frase e uma negacao seca que contrasta com a anterior
            if curta and re.match(r"^(voce|eu|ele|ela|eles|elas|nos)?\s*nao\b", bn):
                achados.append(f"{a} {b}")
                continue
            # 'Nao e X. E Y.'
            if an.startswith("nao e ") and re.match(r"^e\s", bn):
                achados.append(f"{a} {b}")
                continue
            # duas frases curtas com sujeitos opostos e verbo repetido
            if curta and len(a.split()) <= 8:
                verbos_a = set(sem_acento(a).split())
                verbos_b = set(bn.split())
                if ("voce" in verbos_b) and ("voce" not in verbos_a) and len(verbos_b) <= 4:
                    achados.append(f"{a} {b}")
    return achados


def triade_anaforica(linhas):
    achados = []
    todas = [f for linha in linhas for f in frases(linha)]
    for i in range(len(todas) - 2):
        aberturas = [" ".join(sem_acento(f).split()[:2]) for f in todas[i:i + 3]]
        if all(e_assinatura(f) for f in todas[i:i + 3]):
            continue
        if aberturas[0] and aberturas[0] == aberturas[1] == aberturas[2]:
            achados.append(" | ".join(todas[i:i + 3]))
    return achados


def formula_repetida(corpo):
    achados = []
    for formula in ["como quem", "do jeito que", "com a calma de quem", "como se"]:
        n = len(re.findall(formula, sem_acento(corpo)))
        if n > 1:
            achados.append(f'"{formula}" aparece {n} vezes')
    return achados


def sentimento_generico(corpo):
    padroes = [
        r"voce se sente",
        r"se sentindo (calmo|leve|em paz|tranquilo)",
        r"uma sensacao de (paz|calma|leveza)",
    ]
    return [p for p in padroes if re.search(p, sem_acento(corpo))]


def narrador_aparecendo(corpo):
    padroes = ["nao e coincidencia", "sabia?", "voce e que ainda", "repare que", "perceba que"]
    return [p for p in padroes if p in sem_acento(corpo)]


def vocabulario_banido(corpo):
    banidas = [
        "destrave", "mindset", "proximo nivel", "alta performance",
        "vibrar na luz", "energias do universo", "limpar a aura",
        "transformador", "extraordinario",
    ]
    return [b for b in banidas if b in sem_acento(corpo)]


def marcas_proibidas(corpo):
    achados = []
    if re.search(r"\bcê\b", corpo):
        achados.append('grafia "cê"')
    dias = re.findall(r"\b(segunda|terça|quarta|quinta|sexta|sábado|domingo)\b", corpo, re.I)
    if dias:
        achados.append(f"dia da semana nomeado: {set(d.lower() for d in dias)}")
    emojis = [c for c in corpo if ord(c) > 0x2100 and unicodedata.category(c) == "So"]
    if emojis:
        achados.append(f"emoji ou simbolo decorativo: {set(emojis)}")
    setas = [s for s in ["→", "➜", "←", "▶", "•"] if s in corpo]
    if setas:
        achados.append(f"seta ou marcador decorativo: {setas}")
    return achados


def monotonia(linhas):
    """Paragrafos todos da mesma forma: oracao, virgula, 'e', oracao."""
    total = len(linhas)
    if total < 6:
        return []
    iguais = sum(1 for l in linhas if re.search(r",\s+e\s+\w", l))
    if iguais / total > 0.4:
        return [f"{iguais} de {total} parágrafos usam a dobradiça vírgula mais 'e'"]
    return []


# --- Metrica --------------------------------------------------------------

def metrica(blocos, formato):
    linhas_saida = []
    problemas = []
    total = 0
    alvos = ALVOS[formato]
    for i, bloco in enumerate(blocos):
        ls = falas(bloco)
        palavras = sum(len(l.split()) for l in ls)
        pausa = sum(int(x) for x in re.findall(r"\((\d+)s\)", bloco))
        duracao = palavras / PPM * 60 + pausa
        total += duracao
        rotulo, alvo = alvos[i] if i < len(alvos) else (str(i + 1), 0)
        desvio = (duracao - alvo) / alvo * 100 if alvo else 0
        linhas_saida.append(
            f"  bloco {rotulo}: {palavras} palavras, {pausa}s de pausa, "
            f"{duracao:.0f}s contra alvo de {alvo}s ({desvio:+.1f}%)"
        )
        if alvo and abs(desvio) > 15:
            problemas.append(f"bloco {rotulo} fora da tolerância de 15%: {desvio:+.1f}%")
    janela = 600 if formato == "pocket" else 1020
    linhas_saida.append(f"  episódio: {total:.0f}s contra janela narrada de {janela}s")
    if abs(total - janela) / janela > 0.05:
        problemas.append(f"episódio fora de 5% da janela: {total:.0f}s contra {janela}s")
    return linhas_saida, problemas


def main():
    if len(sys.argv) < 2:
        print("uso: varredura.py <arquivo.md>")
        return 2

    caminho = sys.argv[1]
    texto = open(caminho, encoding="utf-8").read()
    formato = "completa" if "travessia-completa" in caminho else "pocket"

    corpo, blocos = corpo_do_roteiro(texto)
    if not corpo:
        print("Não achei '### BLOCO 1' no arquivo.")
        return 2

    linhas = [l for b in blocos for l in falas(b)]

    reprovacoes = []

    def registrar(nome, achados):
        for a in achados:
            reprovacoes.append((nome, a))

    registrar("dicotomia fatiada", dicotomia_fatiada(linhas))
    registrar("tríade anafórica", triade_anaforica(linhas))
    registrar("fórmula repetida", formula_repetida(corpo))
    registrar("sentimento genérico", sentimento_generico(corpo))
    registrar("narrador aparecendo", narrador_aparecendo(corpo))
    registrar("vocabulário banido", vocabulario_banido(corpo))
    registrar("marca proibida", marcas_proibidas(corpo))
    registrar("monotonia sintática", monotonia(linhas))

    print(f"\nVarredura de {caminho}  [formato {formato}]\n")
    print("Métrica:")
    linhas_metrica, problemas_metrica = metrica(blocos, formato)
    for l in linhas_metrica:
        print(l)
    registrar("métrica", problemas_metrica)

    print("\nTiques:")
    if not reprovacoes:
        print("  nada encontrado")
        print("\nPASSOU\n")
        return 0

    for nome, achado in reprovacoes:
        print(f"  [{nome}] {achado}")
    print(f"\nREPROVADO: {len(reprovacoes)} ocorrência(s)\n")
    return 1


if __name__ == "__main__":
    sys.exit(main())
