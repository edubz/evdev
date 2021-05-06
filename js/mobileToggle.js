
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const burgerSvg = document.querySelectorAll('rect')

console.log(nav.className)

window.onresize = function(event) {
    if (window.innerWidth >= 600 && nav.className == "menuToggle") {
        nav.classList.remove('menuToggle');
        burgerSvg[0].classList.remove('top');
        burgerSvg[1].classList.remove('middle');
        burgerSvg[2].classList.remove('bottom')
      }
}

  

hamburger.onclick = function(){
    nav.classList.toggle('menuToggle')
    burgerSvg[0].classList.toggle('top');
    burgerSvg[1].classList.toggle('middle');
    burgerSvg[2].classList.toggle('bottom')
}