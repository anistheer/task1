import {debounce} from './debounce';
import { hideMenu } from './menu';

const menuLis = {};
const bodyElements = {};

const blockSelectors = {
  home: '.home',
  about_me: '.content-block__body_aboutme',
  skills: '.content-block__body_skills',
  portfolio: '.content-block__body_portfolio',
  contacts: '.content-block__body_contacts',
};

let blockTops = [];

window.onload = () => {
  const headerHeight = document.querySelector('.header').getBoundingClientRect().height;
  const bodyHeight = document.querySelector('body').getBoundingClientRect().height;

  let currViewerPos = document.documentElement.scrollTop;

  Object.keys(blockSelectors).forEach((block, i) => {
    menuLis[block] = document.querySelector('.menu').getElementsByTagName('li')[i];
    bodyElements[block] = document.querySelector(blockSelectors[block]);
    blockTops[i] = bodyElements[block].getBoundingClientRect().top;

    menuLis[block].onclick = () => {
      console.log(`Scrolling to ${blockTops[i] - headerHeight}`);
      window.scrollTo({
        top: blockTops[i] - headerHeight,
        behavior: 'smooth',
      });
      if (window.innerWidth < 500) {
        hideMenu()
      }
    };
  });

  if (currViewerPos !== 0)
    blockTops = blockTops.map(item => item + currViewerPos);
  let index = 0;

  const onScroll = debounce(() => {
    currViewerPos = document.documentElement.scrollTop;
    let newIndex =
      blockTops.reduce((scrolledBlockId, item) => {
        if (item < currViewerPos + headerHeight + 100)
          return (scrolledBlockId += 1);
        return scrolledBlockId;
      }, 0) - 1;

    if (index != newIndex) {
      index = newIndex;
      changeActiveElement(
        document.querySelector('.menu').getElementsByTagName('li'),
        index,
        'menu__item_active',
      );
    }
  }, 100);

  window.addEventListener('scroll', onScroll);
};

function changeActiveElement(ElementList, index, className) {
  let i = 0;
  for (const elem of ElementList) {
    if (elem.classList.contains(className)) elem.classList.remove(className);
    if (i === index) elem.classList.add(className);
    i++;
  }
}
