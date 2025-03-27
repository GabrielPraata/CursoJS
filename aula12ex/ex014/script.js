function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora sao ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'manha'
    } else if(hora >=12 && hora <= 18) {
        //Boa tarde
         img.src = 'tarde'
    } else {
        //Boa noite
         img.src = 'noite'
    }
}
