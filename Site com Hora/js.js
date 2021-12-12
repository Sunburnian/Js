function carregar(){
    var sms = document.getElementById('hora');
    var imagem = document.getElementById('imagem');
    var data = new Date();
    //var hora = data.getHours()
    var hora = 18
    sms.innerHTML = `Agora são ${hora} horas`;
    
    if(hora>=0 && hora<12){
        imagem.src = 'Img/Manha.png'
        document.body.style.backgroundColor = '#f1a9b5'
    } else{
        if(hora >=12 && hora<18){
            imagem.src = 'Img/Tarde.png'
            document.body.style.backgroundColor = '#f56835'
        } else{
            imagem.src = 'Img/Noite.png'
        }
     
    }
}