let hamburger = document.getElementById("hamburger");
let nav = document.getElementById("nav");

hamburger.onclick = () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  console.log(nav);
};