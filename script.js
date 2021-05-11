const menu = document.querySelector('#hamburger');
menu.addEventListener('click', show_Menu);

const nav = document.querySelector('#nav_Mobile');
function show_Menu() {
    nav.classList.toggle('off')
}

const menu_List = document.querySelectorAll('.section_Title');


menu_List.forEach( list => list.addEventListener('click', toggle))

function toggle () {
    let rotate = this.children[1].style.transform || 'rotate(0deg)';
    
    if(rotate === 'rotate(0deg)') {
        this.nextElementSibling.classList.remove('off')
        return this.children[1].style.transform = 'rotate(180deg)'; 
    }
    this.nextElementSibling.classList.add('off')
    return this.children[1].style.transform = 'rotate(0deg)'
}

// set a connection to ul
// if rotate = 0 deg - display is off
// if rotate = 180 deg - display is on