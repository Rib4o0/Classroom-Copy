const openMenuBtn = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');

openMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('closed');
})