const Link = (href, title) => {
  return `
    <a
        href='${href}'
        class="text-zinc-500 hover:text-white transition duration-700"
        >${title}</a
    >
    `;
};

const header = document.querySelector("header");
const links = document.querySelectorAll("#header-link");
const headerSublinks = document.getElementById("header-sublinks");
const headerSearch = document.getElementById("header-search");
const headerSublinksBlock = document.getElementById("header-sublinks-block");
const burgerMenuBtn = document.getElementById("burger-menu-btn");
const headerMenu = document.getElementById("header-menu");

const headerSublinksArr = {
  home: [
    {
      href: "",
      title: "Новинки",
    },
    {
      href: "",
      title: "Продукция",
    },
    {
      href: "",
      title: "О нас",
    },
    {
      href: "",
      title: "Новости",
    },
    {
      href: "",
      title: "Карта",
    },
  ],
  products: [
    {
      href: "",
      title: "SOAK L",
    },
    {
      href: "",
      title: "SOAK M",
    },
    {
      href: "",
      title: "SOAK Q",
    },
    {
      href: "",
      title: "SOAK R",
    },
    {
      href: "",
      title: "Смотреть все",
    },
  ],
  distribution: [
    {
      href: "",
      title: "Награды",
    },
    {
      href: "",
      title: "О нас",
    },
    {
      href: "",
      title: "Оставить заявку",
    },
  ],
  cooperation: [
    {
      href: "",
      title: "Награды",
    },
    {
      href: "",
      title: "О нас",
    },
    {
      href: "",
      title: "Оставить заявку",
    },
  ],
  support: [
    {
      href: "",
      title: "Проверка устройства",
    },
    {
      href: "",
      title: "Бот заботы",
    },
    {
      href: "",
      title: "FAQ",
    },
  ],
};

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) {
    header.classList.remove("header-open");
    headerSearch.classList.remove("!opacity-100", "!pointer-events-auto");
    headerSublinks.classList.remove("!opacity-100", "!pointer-events-auto");
  }
});

links.forEach((link) => {
  link.addEventListener("mousemove", () => {
    header.classList.add("header-open");
    burgerMenuBtn.classList.remove("burger-open");
    headerSublinks.classList.add("!opacity-100", "!pointer-events-auto");
    headerSearch.classList.remove("!opacity-100", "!pointer-events-auto");

    headerSublinksBlock.innerHTML = "";
    headerSublinksArr[link.dataset.page].forEach((sublink) => {
      headerSublinksBlock.innerHTML += Link(sublink.href, sublink.title);
    });
  });
});

headerSublinks.addEventListener("mouseleave", () => {
  header.classList.remove("header-open");
  headerSublinks.classList.remove("!opacity-100", "!pointer-events-auto");
});

function handleToggleSearch() {
  if (headerMenu.classList.contains("!opacity-100")) {
    headerSearch.classList.add("!opacity-100");
    headerSearch.classList.add("!pointer-events-auto");
    headerMenu.classList.remove("!opacity-100", "!pointer-events-auto");
    return;
  }

  if (headerSublinks.classList.contains("!opacity-100")) {
    headerSearch.classList.add("!opacity-100");
    headerSearch.classList.add("!pointer-events-auto");
    headerSublinks.classList.remove("!opacity-100", "!pointer-events-auto");
    return;
  }

  header.classList.toggle("header-open");
  burgerMenuBtn.classList.toggle("burger-open");
  headerSearch.classList.toggle("!opacity-100");
  headerSearch.classList.toggle("!pointer-events-auto");
  headerSublinks.classList.remove("!opacity-100", "!pointer-events-auto");
  headerMenu.classList.remove("!opacity-100", "!pointer-events-auto");
}

function openCloseMenu() {
  if (burgerMenuBtn.classList.contains("burger-open")) {
    header.classList.remove("header-open");
    headerSearch.classList.remove("!opacity-100", "!pointer-events-auto");
    headerMenu.classList.remove("!opacity-100", "!pointer-events-auto");
    burgerMenuBtn.classList.remove("burger-open");
    return;
  }

  header.classList.add("header-open");
  burgerMenuBtn.classList.add("burger-open");
  headerMenu.classList.add("!opacity-100", "!pointer-events-auto");
}
