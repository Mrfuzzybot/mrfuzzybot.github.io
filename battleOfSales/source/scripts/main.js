// Include you JavaScript Librarys. The following is an example import
////= library/youpathonjsfile.js
// You JavaScript Code
const accordionBtns = document.querySelectorAll('.accordion__btn')

accordionBtns.forEach((el, idx) => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('active')
  })
})

const parallax = event => {
  const elements = document.querySelectorAll('.paralax')
  elements.forEach(el => {
    el.style.transform = `translate(${event.clientX / 100}px,${event.clientY / 100}px )`;
  })
}

window.addEventListener('mousemove', parallax)


//drawer
const drawer = document.querySelector('.header__drawer')

const openDrawerBtn = document.querySelector('.aside-open')

const openDrawer = () => drawer.classList.add('visible')
const closeDrawer = () => drawer.classList.remove('visible')


openDrawerBtn.addEventListener('click', openDrawer)

drawer.addEventListener('click', e => {
  if (e.target.classList.contains('closeDrawer')) {
    closeDrawer()
  }
  if (e.target.classList.contains('drawer__link')) {
    closeDrawer()
  }
})
