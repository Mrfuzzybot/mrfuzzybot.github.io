// Include you JavaScript Librarys. The following is an example import
////= library/youpathonjsfile.js
// You JavaScript Code

const parallax = (event) => {
  const elements = document.querySelectorAll('.element')
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]

    element.style.transform = `translate(${event.clientX / 100}px,${event.clientY / 100}px )`;
  }
}
document.querySelector('body').addEventListener('mousemove', parallax);