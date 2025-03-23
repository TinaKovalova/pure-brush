const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 2500,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
  },
});

const swiperReviews = new Swiper(".swiper-reviews", {
  spaceBetween: 24,
  loop: true,
  speed: 2500,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: "auto",
    },
  },
});