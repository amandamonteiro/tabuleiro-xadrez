function criarTabuleiro() {


    let tabuleiro = document.createElement("div")
    tabuleiro.setAttribute("id", "tabuleiro")

    let tab = document.createElement("div")
    tab.setAttribute("id", "tab")
    tabuleiro.append(tab)

    let container = document.createElement("div")
    container.setAttribute("id", "container")
    tab.append(container)

    let lineId = 1

    for (let i = 1; i < 9; i++) {
        let linha = document.createElement("div")
        linha.setAttribute("class", `row line-${lineId}`)

        if (lineId == 1) {
            lineId++
        } else {
            lineId--
        }

        for (let i = 1; i < 9; i++) {
            let celula = document.createElement("div")
            celula.setAttribute("id", i)
            linha.append(celula)
        }

        container.append(linha)
    }


    document.body.appendChild(tabuleiro)
}


criarTabuleiro()