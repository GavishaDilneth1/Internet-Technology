 AOS.init({
    once: false, 
    duration: 1000, 
  });
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
const menuIcon = document.querySelector('.menu');
const navBar = document.querySelector('.nav_bar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active'); 
});