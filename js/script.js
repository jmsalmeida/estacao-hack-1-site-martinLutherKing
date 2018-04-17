let oracao = 'A verdadeira medida de um homem não se vê na forma como se comporta em momentos de conforto e conveniência, mas em como se mantém em tempos de controvérsia e desafio.';

function escreverFrase() {
    for (let i = 0; i < oracao.length; i++) {
        (function (j) {
            setTimeout(function () {
                let span = document.querySelector('.text-main').innerHTML += oracao[j];

            }, 120 * i)
        })(i)
    }
}

escreverFrase()

let togle = document.querySelector('.togle-menu');
let mobileMenu = document.querySelector('.menu-mobile ul');
let itemLista = document.querySelectorAll('li')

togle.onclick = function () {
    if (mobileMenu.style.transform == 'translateY(-150%)') {
        mobileMenu.style.transform = `translateY(0)`;
    } else {
        mobileMenu.style.transform = `translateY(-150%)`;
    }

}

for (item of itemLista) {
    item.onclick = function () {
        mobileMenu.style.transform = `translateY(-150%)`;
    }
}

// LIVROS SLIDER

let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
let carousel = document.querySelectorAll('.carousel');

let carouselAtivo = 0;

btnNext.onclick = function(){
    carousel[carouselAtivo].style.transform = `translateX(150%)`;
    carouselAtivo++;
}
