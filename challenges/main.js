const navEl = [...document.getElementsByClassName("nav")];
const btnEl = [...document.getElementsByClassName("nav-toggle")];

btnEl[0].addEventListener('click', (event) => {
  navEl[0].classList.toggle('nav-visibility')
});