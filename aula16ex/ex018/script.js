let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value)) {

    } else {
        alert('Valor inálido ou já encontrado na lista.')
    }
}