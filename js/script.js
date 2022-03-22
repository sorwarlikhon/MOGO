
$(function(){
    $('.banar_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      });

      $('.icon_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.meet_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.jon_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });
   
      // counter up
      $('.counter').counterUp({
        delay: 10,
        time: 1500,
    });
    // lightbox part
    lightbox.option({
    })
})
// back to top
var back_to_top = document.querySelector(".back_to_top");
window.addEventListener("scroll", function(){
  back_to_top.classList.toggle("hide",window.scrollY>150)
})

