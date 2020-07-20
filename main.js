'use strict';

// Make navbar transparent when it is on the
const navbar = document.getElementById('navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window,scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when click on the navbar menu 

const navbarMenu = document.getElementById('.navbar__menu');
navbarMenu.addEventListener('click', () => {
  console.log('clicked');
})



