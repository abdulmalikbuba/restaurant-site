 var swiper = new Swiper(".slide-content", {
     slidesPerView: 3,
     spaceBetween: 25,
     loop: true,
     centerSlide: 'true',
     fade: 'true',
     grabCursor: 'true',
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
         dynamicBullets: true,
     },
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },

     breakpoints: {
         0: {
             slidesPerView: 1,
         },
         520: {
             slidesPerView: 2,
         },
         950: {
             slidesPerView: 3,
         },
     },

 });
 //  let index_currentSlide = instance_swiper.realIndex;
 //  let currentSlide = instance_swiper.slides[index_currentSlide];

 //  const instance_swiper = new Swiper(".swiper-container", {
 //      on: {
 //          slideChange: function() {
 //              const index_currentSlide = instance_swiper.realIndex;
 //              const currentSlide = instance_swiper.slides[index_currentSlide]
 //                  //
 //              currentSlide.card = "red";
 //          },
 //      },
 //  });
 //  swiper.on('transitionEnd', function(e) {
 //      if (this.activeIndex == 2) {
 //          document.querySelector(".swiper-slide-active").style.border = 'none';
 //          //  document.querySelector(".swiper-slide-active").style.box = 'gray';

 //      }
 //  });
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() { scrollFunction() };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("myBtn").style.display = "block";
     } else {
         document.getElementById("myBtn").style.display = "none";
     }

 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {

     $('html, body').animate({ scrollTop: 0 }, 'slow');
 }