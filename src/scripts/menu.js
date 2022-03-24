import { debounce } from "./debounce";
import { MOBILE_BREAKPOINT } from "./variables";

const header__burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const lang = document.querySelector('.lang');
const body = document.body;

const resizes = [ window.innerWidth, window.innerWidth ];

let firstResize = false;

const onResize = debounce(() => {
  if (!firstResize) {
    firstResize=true;
    hideMenu();
  }
  resizes.push(window.innerWidth)  
  resizes.shift();  
  if ( resizes[0] < MOBILE_BREAKPOINT && resizes[1] > MOBILE_BREAKPOINT) {
    hideMenu();
  }
}, 50)


window.addEventListener('resize', onResize)

header__burger.addEventListener('click', () => {
  toggleElementClass(header__burger, 'header__burger_active');
  toggleMenuVisible();
  toggleElementClass(body, 'overflow-hidden');
});

window.addEventListener('load', () => {
  if (window.innerWidth < MOBILE_BREAKPOINT) {
    hideMenu();
  }
})

export function hideMenu() {
  header__burger.classList.remove( 'header__burger_active');
  menu.classList.add('header__menu_hidden')
  lang.classList.add('info__lang_hidden')
  body.classList.remove('overflow-hidden')
}

function toggleMenuVisible() {
  toggleElementClass(menu, 'header__menu_hidden');
  toggleElementClass(lang, 'info__lang_hidden');
}

function toggleElementClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else element.classList.add(className);
}