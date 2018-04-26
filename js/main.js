$('#coursesContainer').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    autoplay:false,
    margin: 5,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        580:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:6
        }
    }
});

$('#partners-container').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    autoplay:false,
    margin: 10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        580:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:6
        }
    }
});

$('#alumni-speaks-container').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    autoplay:false,
    margin: 15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:3
        }
    }
});

$('#related-courses-container').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    autoplay:false,
    margin: 30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:4
        }
    }
});

$('#video-testimonial-container').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    autoplay:false,
    margin: 15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:4
        }
    }
});

$('#our-trainers-container').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    autoplay:false,
    margin: 15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:4
        }
    }
});

AOS.init({
  offset: 300,
  duration: 600,
  easing: 'ease-in-sine',
  once: true,
  delay: 100,
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: -1,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 2,
      }
    }
});
