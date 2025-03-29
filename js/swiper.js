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
    type: "bullets",
    renderBullet: function (index, className) {
      return index < 3 ? `<span class="${className}"></span>` : "";
    },
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
    type: "bullets",
    renderBullet: function (index, className) {
      return index < 3 ? `<span class="${className}"></span>` : "";
    },
  },
  breakpoints: {
    600: {
      slidesPerView: "auto",
    },
  },
});
const swiperBestSellers = new Swiper(".swiper-best-sellers", {
  spaceBetween: 75,
  centerInsufficientSlides:true,
  speed: 2000,
  grabCursor: true,
  // autoHeight:true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets',
    renderBullet: function (index, className) {
      return index<3?`<span class="${className}"></span>`:''
    },
  },

  breakpoints: {
    601: {
      spaceBetween: 30,
      slidesPerView: "auto",
    },
  },
});