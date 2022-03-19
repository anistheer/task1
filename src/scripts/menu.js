const header__burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const lang = document.querySelector('.lang');
const body = document.body;

header__burger.addEventListener('click', () => {
  toggleElementClass(header__burger, 'header__burger_active');
  toggleMenuVisible()
  toggleElementClass(body, 'overflow-hidden')
});

function toggleElementClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else element.classList.add(className)
}

function toggleMenuVisible() {
  toggleElementClass(menu, 'hidden');
  toggleElementClass(lang, 'hidden');
}

if(window.innerWidth < 500) {
  toggleMenuVisible()
}