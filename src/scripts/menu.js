import { debounce } from "./debounce";

const header__burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const lang = document.querySelector('.lang');
const body = document.body;

const mobileBreakpoint = 500;
const resizes = [];

header__burger.addEventListener('click', () => {
  toggleElementClass(header__burger, 'header__burger_active');
  toggleMenuVisible();
  toggleElementClass(body, 'overflow-hidden');
});

const onResize = debounce(() => {
  resizes.push(window.innerWidth)  
  if (resizes.length > 2) resizes.shift();
  if (resizes[0] > mobileBreakpoint && resizes[1] < mobileBreakpoint) {
    hideMenu()
  }
}, 200)

window.addEventListener('resize', onResize)

function toggleElementClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else element.classList.add(className);
}

function toggleMenuVisible() {
  toggleElementClass(menu, 'hidden');
  toggleElementClass(lang, 'hidden');
}

function hideMenu() {
  header__burger.classList.remove( 'header__burger_active');
  menu.classList.add('hidden')
  lang.classList.add('hidden')
  body.classList.remove('overflow-hidden')
}

if (window.innerWidth < 500) {
  hideMenu()
}
