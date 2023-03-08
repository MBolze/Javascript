function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var idade = ano - Number(fano.value)
    if (fano.value.length == 0 || fano.value > ano || idade > 130) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade <21) {
                img.setAttribute('src', 'rapaz.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade <21) {
                img.setAttribute('src', 'moca.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}