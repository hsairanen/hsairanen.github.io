// Portfolio heading animation
const spans = document.querySelectorAll('.portfolio-heading span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx+1))
});

// The code above is from https://codepen.io/FlorinPop17/full/WEBNyx

// Menu Button and menu
const menuButton = document.querySelector('header i');
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');
let menuClosed = true;

menuButton.addEventListener('click', (e) => {
  if(menuClosed){
      e.target.classList.add('fa-spin');
      header.classList.add('show');
      menu.classList.add('show');
      menuClosed = false;
  }
  else{
      e.target.classList.remove('fa-spin');
      menu.classList.remove('show');
      header.classList.remove('show');
      menuClosed = true;
  }
});

// Close the menu when a menu link is clicked
menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        menuButton.click();
    })
});
