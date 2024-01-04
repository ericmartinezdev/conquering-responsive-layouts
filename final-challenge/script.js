let toggleEl = document.getElementsByClassName('nav-toggle')[0];
let headerEl = document.getElementsByClassName('header')[0];
let navEl = document.getElementsByClassName('nav')[0];

toggleEl.addEventListener('click' , () => {
  headerEl.classList.toggle('nav--height');
  navEl.classList.toggle('nav--visible');
})