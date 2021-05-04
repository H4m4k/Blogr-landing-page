const menu = document.querySelector('#hamburger');
menu.addEventListener('click', show_Menu);

const nav = document.querySelector('#nav');
function show_Menu() {
    nav.classList.toggle('off')
}

const menu_List = document.querySelectorAll('.section_Title');

menu_List.forEach( list => list.addEventListener('click', toggle))

function toggle () {
    let rotate = this.children[1].style.transform || 'rotate(0deg)';
    
    if(rotate === 'rotate(0deg)') return this.children[1].style.transform = 'rotate(180deg)'; 
    return this.children[1].style.transform = 'rotate(0deg)'
}