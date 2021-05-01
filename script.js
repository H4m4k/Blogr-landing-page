const menu = document.querySelector('#hamburger');
menu.addEventListener('click', show_Menu);

const nav = document.querySelector('#nav');
function show_Menu() {
    nav.classList.toggle('off')
}