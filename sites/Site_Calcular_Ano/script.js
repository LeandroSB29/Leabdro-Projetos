function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');

    } else {
        var formulario_sexo = document.getElementsByName('radsex');
        const idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (formulario_sexo[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'bebe-masculino.png');
                
            } else if (idade > 5 && idade <= 15) {
                img.setAttribute('src', 'crianca-masculino.png');
                
            } else if (idade <= 21) {
                img.setAttribute('src', 'adolescente-masculino.png');

            } else if (idade < 50 ) {
                img.setAttribute('src', 'adulto.png');
                
            } else {
                img.setAttribute('src', 'idoso.png');
                
            }               
        }
        else if (formulario_sexo[1].checked) {
            genero= 'Mulher';

            if (idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'bebe-feminino.png');
               
            } else if (idade > 5 && idade <= 15) {
                img.setAttribute('src', 'crianca-feminino.png');
                //criança
            } else if (idade <= 21) {
                img.setAttribute('src', 'adolescente-feminina.png');
                
            } else if (idade <= 50 ){
                img.setAttribute('src', 'adulta.png');
                
            } else {
                img.setAttribute('src', 'idosa.png');
                
        }
        
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
        
       
        
    }
}

