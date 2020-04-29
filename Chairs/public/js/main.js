// Include you JavaScript Librarys. The following is an example import
////= library/youpathonjsfile.js
// You JavaScript Code
////= ./modal.js
const body = document.querySelector('body')
const modalBg = document.querySelector('.modal__bg')

function openModal (modal) {
  body.classList.add('modal-open')
  modal.classList.add('opened')
  modalBg.classList.add('active')
}
function closeModal (modal) {
  body.classList.remove('modal-open')
  modal.classList.remove('opened')
  modalBg.classList.remove('active')
}

// call modal
const callModal = document.querySelector('.modal-call')
const headerCallBtn = document.querySelector('.header__button')

headerCallBtn.addEventListener('click', () =>{
  openModal(callModal)
})
callModal.querySelector('.modal-close').addEventListener('click', (e) => {
  e.preventDefault()
  closeModal(callModal)
})

callModal.addEventListener('submit', () => {
  closeModal(callModal)
  openModal(thanksModal)
})
// thx modal
const thanksModal = document.querySelector('.modal-thanks')
thanksModal.querySelector('.modal-close').addEventListener('click', (e) => {
  e.preventDefault()
  closeModal(thanksModal)
})