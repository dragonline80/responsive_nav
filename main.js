const toggleMenu = document.querySelector('.menu');
const navMenu = document.querySelector('.navbar_menu');
const navLink = document.querySelector('.navbar_links');


toggleMenu.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
    navLink.classList.toggle('active');
})