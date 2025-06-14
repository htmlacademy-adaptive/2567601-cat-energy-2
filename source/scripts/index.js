const button = document.querySelector('.main-header__toggle');
const mainNav = document.querySelector('.main-nav');
const mainHeaderNav = document.querySelector('.main-header__nav');

button.onclick = function(){
  if (!button.classList.contains('main-header__toggle--closed')){
    button.classList.add('main-header__toggle--closed');
    mainNav.classList.add('main-nav--opened');
    mainHeaderNav.style.position = 'absolute';
    mainHeaderNav.style.width = '100%';
  } else {
    button.classList.remove('main-header__toggle--closed');
    mainNav.classList.remove('main-nav--opened');
    mainHeaderNav.style.position = 'relative';
  }
};
