function contar() {
    var inicio = document.getElementById('incnum').value
    var fim = document.getElementById('fimnum').value
    var passo = document.getElementById('pasnum').value
    var res = document.getElementById('res')

    if (inicio === "" || fim === "" || passo === "") {
        res.innerHTML = "<strong>Por favor, preencha todos os campos</strong> ";
        return 
    }

    inicio = parseInt(inicio)
    fim = parseInt(fim)
    passo = parseInt(passo)

    if (passo <= 0) {
        alert("Passo está invalido, considerando passo = 1")
        passo = 1
    }


    res.innerHTML = "contando:  <br>" 

    if (inicio < fim) {
        for ( let i = inicio; i <= fim; i += passo)
            res.innerHTML += `${i} \u{21D2}`
    } else {
        for (let i = inicio; i>= fim; i -= passo) {
            res.innerHTML += `${i} \u{21D2} `
        }
    }

    res.innerHTML += ` \u{1F3C1}`
}

