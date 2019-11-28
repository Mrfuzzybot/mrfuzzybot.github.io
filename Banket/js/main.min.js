// Include you JavaScript Librarys. The following is an example import
////= library/youpathonjsfile.js
// You JavaScript Code

const parallax = event => {
  const elements = document.querySelectorAll('.element')
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]

    element.style.transform = `translate(${event.clientX / 100}px,${event.clientY / 100}px )`;
  }
}
document.querySelector('body').addEventListener('mousemove', parallax);


const tabsMenu = (items, content, desc) => {
  for (let i = 0; i < items.length; i++) {
    let menuItem = items[i];
    let contentItem = content[i];
    let contentDescItem = desc[i];

    menuItem.onclick = function () {
      for (let j = 0; j < items.length; j++) {
        items[j].classList.remove('active');
        content[j].classList.remove('visible');
        desc[j].classList.remove('visible')
      }
      menuItem.classList.add('active');
      contentItem.classList.add('visible');
      contentDescItem.classList.add('visible')
    }
  }
}

const iceCreamImage = document.querySelectorAll('.iceCream__image')
const iceCreamDesc = document.querySelectorAll('.iceCream__desc')
const iceCreamTab = document.querySelectorAll('.tabs__item-hover')

tabsMenu(iceCreamTab, iceCreamImage, iceCreamDesc)