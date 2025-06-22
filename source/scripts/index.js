const button = document.querySelector('.main-header__toggle');
const mainNav = document.querySelector('.main-header__nav');

mainNav.classList.remove('main-header__nav--nojs');
button.classList.remove('main-header__toggle--nojs');

button.onclick = function(){
  if (!button.classList.contains('main-header__toggle--closed')){
    button.classList.add('main-header__toggle--closed');
    mainNav.classList.add('main-header__nav--opened');
  } else {
    button.classList.remove('main-header__toggle--closed');
    mainNav.classList.remove('main-header__nav--opened');
  }
};
