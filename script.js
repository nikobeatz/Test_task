'use strict';


// show menu

let menu = document.querySelector('.menu');
let menuOpenBtn = document.querySelector('.bottom-wrapper__menu-button button');
menu.style.display = 'none'

menuOpenBtn.addEventListener("click", function () {

  if (menu.style.display == 'none') menu.style.display = 'block';
  else menu.style.display = 'none'

});

//end show menu


// start services slider 

$(document).ready(function(){
    $('.services-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  });

// end services slider


// start show more projects

let projectsRow = document.querySelector('.project-items:nth-last-child(2)');
let openBtn = document.querySelector('.show-projects');
projectsRow.style.display = 'none'


openBtn.addEventListener("click", function () {

  if (projectsRow.style.display == 'none') projectsRow.style.display = 'flex';
  else projectsRow.style.display = 'none'

});

// end show more projects