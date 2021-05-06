
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const burgerSvg = document.querySelectorAll('rect');
const navLink = document.querySelectorAll('.navLink');
const menu = document.getElementById('menu')


window.onresize = function(event) {
    if (window.innerWidth >= 600 && nav.className == "menuToggle") {
        nav.classList.remove('menuToggle');
        burgerSvg[0].classList.remove('top');
        burgerSvg[1].classList.remove('middle');
        burgerSvg[2].classList.remove('bottom')
      }
}
window.onresize = function(event) {
if (window.innerWidth <= 600 && nav.className == "menuToggle"){
    navLink[0].setAttribute("tabindex", -1)
    navLink[1].setAttribute("tabindex", -1)
    navLink[2].setAttribute("tabindex", -1)
    navLink[3].setAttribute("tabindex", -1)
 }
}


hamburger.onclick = function(){
    nav.classList.toggle('menuToggle')
    menu.classList.toggle('displayMenu')
    burgerSvg[0].classList.toggle('top');
    burgerSvg[1].classList.toggle('middle');
    burgerSvg[2].classList.toggle('bottom');
    if(nav.classList != 'menuToggle'){
        navLink[0].setAttribute("tabindex", -1)
        navLink[1].setAttribute("tabindex", -1)
        navLink[2].setAttribute("tabindex", -1)
        navLink[3].setAttribute("tabindex", -1)
        menu.style.display = "none";
    } else {
        navLink[0].setAttribute("tabindex", 0)
        navLink[1].setAttribute("tabindex", 0)
        navLink[2].setAttribute("tabindex", 0)
        navLink[3].setAttribute("tabindex", 0)
        menu.style.display = "block";
    }
    console.log(navLink)
}