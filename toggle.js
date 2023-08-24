const button = document.querySelector('.mega__menu__button');
const megaMenu = document.querySelector('.mega__menu__container');

button.addEventListener('click', () => {
  megaMenu.classList.toggle('show');
  button.classList.toggle('active-button');
});


const tabletMenu = document.querySelector('.tablet-menu');
const sideMenu = document.querySelector('.side-menu');

tabletMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});