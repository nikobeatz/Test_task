'use strict';


// start services slider 

$(document).ready(function(){
    $('.services-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
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