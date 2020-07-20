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
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }  
  scrollIntoView(link);
});

// Handle click on 'contact me'  button on home
const home__contact__btn = document.querySelector('.home__contact');
home__contact__btn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
};


