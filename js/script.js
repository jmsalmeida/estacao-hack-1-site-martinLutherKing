let oracao = 'A verdadeira medida de um homem não se vê na forma como se comporta em momentos de conforto e conveniência, mas em como se mantém em tempos de controvérsia e desafio.';

function escreverFrase(){
    for(let i = 0; i < oracao.length; i++){
        (function(j) {
            setTimeout(function() {
                let span = document.querySelector('.text-main').innerHTML += oracao[j];
                
            }, 120 * i)
        })(i)
    }
}

window.onload = function(){
    escreverFrase()
}
let togle = document.querySelector('.togle-menu');

let mobileMenu = document.querySelector('.menu-mobile ul');

togle.onclick = function(){
    if (mobileMenu.style.display == 'none'){
        mobileMenu.style = `display: block`;
    } else {
        mobileMenu.style = `display: none`;
    }
}