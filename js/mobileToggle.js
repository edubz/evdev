
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.onclick = function(){
    nav.classList.toggle('menuToggle')
}