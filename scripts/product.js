document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery640 = window.matchMedia("(max-width: 640px)");
  setMediaQuery(mediaQuery640, setBoxImage);

  mediaQuery640.addEventListener("change", () => {
    setMediaQuery(mediaQuery640, setBoxImage);
  });
});

function setBoxImage(mediaQuery) {
  const img = document.getElementById("box-image");

  if (mediaQuery.matches) {
    return (img.src = "assets/img/box-mobile.png");
  }

  img.src = "assets/img/box.png";
}

new Swiper(".swiper-colors", {
  direction: "horizontal",
  spaceBetween: 40,
  slidesPerView: 3,
  loop: false,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    932: {
      centeredSlides: false,
      slidesPerView: 3,
    },
    656: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    440: {
      slidesPerView: 1.4,
      centeredSlides: true,
    },
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
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
