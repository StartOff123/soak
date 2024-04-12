const loadingScreen = document.getElementById("loading-screen");

let isOpenMenu = false;

// Loading Screen
document.body.classList.add("overflow-hidden");

window.addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.classList.add("loading-stop");
    document.body.classList.remove("overflow-hidden");
    firstOpenAgeСonfirmationPopup();
  }, 1000);
});

// Media Query
function setMediaQuery(mediaQuery, callback) {
  if (mediaQuery.media === "(max-width: 425px)") return callback(mediaQuery);
  if (mediaQuery.media === "(max-width: 640px)") return callback(mediaQuery);
  if (mediaQuery.media === "(max-width: 768px)") return callback(mediaQuery);
}

// Age Confirmation Popup
const ageСonfirmationPopup = new Popup("age-confirmation-popup", {
  closedBg: false,
  bgId: "age-confirmation-bg",
});

function firstOpenAgeСonfirmationPopup() {
  const isAgeConfirm = window.localStorage.getItem("is-age-confirm");
  if (isAgeConfirm) return;

  ageСonfirmationPopup.onOpen();
}

function handleConfirmAge() {
  window.localStorage.setItem("is-age-confirm", true);

  ageСonfirmationPopup.onClose();
}

function handleCLoseWindow() {
  window.close();
}

// Menu
function handleToggleMenu() {
  document.getElementById("menu-icon").classList.remove("opacity-100");
  document.getElementById("menu-icon").classList.add("opacity-0");

  setTimeout(() => {
    document.getElementById("menu-icon").classList.remove("opacity-0");
    document.getElementById("menu-icon").classList.add("opacity-100");

    if (isOpenMenu) {
      document.getElementById("menu-icon").src = "assets/icons/close-menu.svg";
    } else {
      document.getElementById("menu-icon").src = "assets/icons/burger-menu.svg";
    }
  }, 300);


  isOpenMenu = !isOpenMenu;

  document.body.classList.toggle("overflow-hidden");
  document.querySelector("header").classList.toggle("!bg-black");
  document.getElementById("menu-btn").classList.toggle("!opacity-100");
  document.getElementById("menu").classList.toggle("!opacity-100");
  document.getElementById("menu").classList.toggle("!pointer-events-auto");
}

// Scroll Buttons
function handleScrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function handleScrollBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
}

// Popular Carousel

new Swiper(".swiper-popular", {
  direction: "horizontal",
  spaceBetween: 40,
  centeredSlides: true,
  loop: false,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    955: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    650: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 1.99,
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

new IMask(document.getElementById("phone-number"), {
  mask: "+{7} (000) 000-00-00",
});
