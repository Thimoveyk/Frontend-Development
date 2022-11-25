
const nav = document.querySelector('.topnav');
const hamburger = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-x')

function openMenu() {
    nav.classList.add('show');
}
function closeMenu() {
    nav.classList.remove('show');
}

hamburger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
