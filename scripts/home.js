document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery768 = window.matchMedia("(max-width: 768px)");

  setMediaQuery(mediaQuery768, handleMediaAbout);

  mediaQuery768.addEventListener("change", () => {
    setMediaQuery(mediaQuery768, handleMediaAbout);
  });
});

const observerAbout = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.children[1].classList.add("!translate-y-0");
        entry.target.children[2].classList.add("!opacity-100");
      } else {
        entry.target.children[1].classList.remove("!translate-y-0");
        entry.target.children[2].classList.remove("!opacity-100");
      }
    });
  },
  {
    threshold: 1,
  }
);

function handleMediaAbout(matchMedia) {
  const aboutBlocks = document.querySelectorAll("#about-block");

  if (matchMedia.matches) {
    aboutBlocks.forEach((aboutBlock) => {
      observerAbout.observe(aboutBlock);
    });
  } else {
    aboutBlocks.forEach((aboutBlock) => {
      observerAbout.unobserve(aboutBlock);
    });
  }
}

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
