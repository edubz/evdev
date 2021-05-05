
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const burgerSvg = document.querySelectorAll('rect')
console.log(burgerSvg)

hamburger.onclick = function(){
    nav.classList.toggle('menuToggle')
    burgerSvg[0].classList.toggle('top');
    burgerSvg[1].classList.toggle('middle');
    burgerSvg[2].classList.toggle('bottom')
}