function Item(title, img) {
  return `
    <button class="relative group flex gap-x-3 items-center py-2.5">
      <span
        class="relative w-1 h-5 overflow-hidden rounded-[0.5px_10px_0.5px_10px] block opacity-80 group-hover:rotate-90 group-hover:translate-x-2 group-hover:opacity-100 transition duration-700"
      >
        <img
          src="assets/img/palette/${img}"
          alt="${img}"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 scale-[30]"
        />
      </span>
      <p
        class="text-zinc-500 group-hover:text-white group-hover:translate-x-3 transition duration-700 text-left max-sm:text-xs"
      >
        ${title}
      </p>
    </button>
    `;
}

let paletteItems = [],
  currentWidth;

const filterPopup = new Popup("filter-popup", {
  closedBg: true,
  bgId: "filter-bg",
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#palette-btn")[0].classList.add("!text-white");

  fetch("data/palette.json")
    .then((response) => response.json())
    .then((data) => {
      paletteItems = data;
      renderPaletteItems("all");
    });

  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    if (currentWidth === screenWidth) return;
    currentWidth = screenWidth;

    renderPaletteItems("all");
  });
});

function handleTab(type) {
  document.querySelectorAll("#palette-btn").forEach((btn) => {
    if (btn.dataset.type === type) btn.classList.add("!text-white");
    else btn.classList.remove("!text-white");
  });
  document.querySelectorAll("#filter-btn").forEach((btn) => {
    if (btn.dataset.type === type) btn.children[0].checked = true;
    else btn.children[0].checked = false;
  });

  renderPaletteItems(type);
}

function handleOpenFilter() {
  filterPopup.onOpen();
}

function handleCloseFilter() {
  filterPopup.onClose();
}

function handleResetFilter() {
  handleTab("all");
  renderPaletteItems("all");
}

function renderPaletteItems(type) {
  const screenWidthLocal = window.innerWidth;
  const paletteContainer = document.getElementById("palette-container");
  const paletteCarousel = document.getElementById("palette-carousel");

  let localPaletteItems = paletteItems;

  if (type !== "all") {
    localPaletteItems = paletteItems.filter((item) => item.type === type);
  }

  if (screenWidthLocal <= 767) {
    const subarraySize = 10;
    let subarrayPaletteItems = [];

    for (
      let i = 0;
      i < Math.ceil(localPaletteItems.length / subarraySize);
      i++
    ) {
      subarrayPaletteItems[i] = localPaletteItems.slice(
        i * subarraySize,
        i * subarraySize + subarraySize
      );
    }

    paletteCarousel.innerHTML = "";

    subarrayPaletteItems.forEach((subarray) => {
      let div = document.createElement("div");
      div.className = "swiper-slide !grid !grid-cols-2 !gap-x-4";

      subarray.forEach((item) => {
        div.insertAdjacentHTML("beforeend", Item(item.title, item.img));
      });

      paletteCarousel.append(div);
    });
  } else {
    if (filterPopup.onStatePopup()) filterPopup.onClose();

    paletteContainer.innerHTML = "";

    localPaletteItems.forEach((item) => {
      paletteContainer.insertAdjacentHTML(
        "beforeend",
        Item(item.title, item.img)
      );
    });
  }
}

new Swiper(".swiper-palette", {
  direction: "horizontal",
  slidesPerView: 1,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination-palette",
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class='${className}'></span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
