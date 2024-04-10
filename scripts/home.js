new Swiper(".swiper-news", {
  direction: "horizontal",
  spaceBetween: 40,
  slidesPerView: 3,
  centeredSlides: true,
  loop: false,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1200: {
      centeredSlides: false,
      slidesPerView: 3,
    },
    828: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 1.32,
      centeredSlides: true,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class='${className}'></span>`;
    },
  },
});

new Swiper(".swiper-new-items", {
  direction: "horizontal",
  spaceBetween: 40,
  centeredSlides: true,
  loop: false,
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
    727: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class='${className}'></span>`;
    },
  },
});
