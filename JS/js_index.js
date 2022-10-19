
const navMenu = document.getElementById('boton-menu');
const navUl = document.getElementById('nav-ul');

navMenu.addEventListener('click', () => {
    navUl.classList.toggle('nav-ul--show');
});