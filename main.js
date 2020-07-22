'use strict';

// Make navbar transparent when it is on the
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
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

// Make home slowly fade to  transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - (window.scrollY / homeHeight);
});

// show up-btn when scrolling down
const upBtn = document.querySelector('.up-btn');
document.addEventListener('scroll', ()=> {
  if(window.scrollY > homeHeight) {
    upBtn.classList.add('visible');
  }else {
    upBtn.classList.remove('visible');
  }
});

// Handle click on the up-btn
const upBtnClick = document.querySelector('.up-btn');
upBtnClick.addEventListener('click', () => {
  scrollIntoView('#home');
});

//Projects
const projectsNav = document.querySelector('.projects__nav');
projectsNav.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    console.log(filter);
});

//scrollIntoView function
const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
};


