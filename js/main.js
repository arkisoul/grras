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
    margin: 5,
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

$(function(){
    $(".element-group .element").typed({
        strings: ["Free Demo", "Career Guidance", "100% Placement Assistance", "15/30/45/60/180 Days Live Internship Program"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 50,
        // time before typing starts
        startDelay: 200,
        // backspacing speed
        backSpeed: 40,
        // time before backspacing
        backDelay: 800,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
});
