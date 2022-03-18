const header__burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const lang = document.querySelector('.lang');
const body = document.body;

header__burger.addEventListener('click', () => {
  switchElementClass(header__burger, 'header__burger_active');
  toggleMenuVisible()
  switchElementClass(body, 'overflow-hidden')
});

function switchElementClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else element.classList.add(className)
}

function toggleMenuVisible() {
  switchElementClass(menu, 'hidden');
  switchElementClass(lang, 'hidden');
}

if(window.innerWidth < 500) {
  toggleMenuVisible()
}

