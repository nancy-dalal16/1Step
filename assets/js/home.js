// On Scroll Animation Intialization
AOS.init();

$("#homeapps").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 10000,
  nav: false,
  dots: true,
  animateIn: "fadeIn",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

const images = document.querySelectorAll(".slideshow img");
let currentIndex = 0;

setInterval(() => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}, 3000); // Change image every 3 seconds

$("#green-slide").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: true,
  navText: [
    "<img src='assets/img/1StepApp/dark-left-arrow.png'>",
    "<img src='assets/img/1StepApp/dark-right-arrow.png'>",
  ],
  dots: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

$("#healthy-habits").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4000,
  nav: false,
  dots: false,

  animateIn: "fadeIn",

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
$("#testi").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 10000,
  nav: true,
  navText: [
    "<img src='assets/img/1StepApp/light-left-arrow.png'>",
    "<img src='assets/img/1StepApp/light-right-arrow.png'>",
  ],
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

$("#offering-green-slide").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: false,
  dots: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
