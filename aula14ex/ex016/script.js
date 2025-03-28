function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.Value.length == 0 || fim.Value.length == 0 || passo.Value.length == 0) {
        alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = "Contando:"
        let i = Number(ini.Value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
        }
    }
}