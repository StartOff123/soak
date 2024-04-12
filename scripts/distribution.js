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
        entry.target.children[0].classList.add("!translate-y-0");
        entry.target.children[1].classList.add("!opacity-100");
      } else {
        entry.target.children[0].classList.remove("!translate-y-0");
        entry.target.children[1].classList.remove("!opacity-100");
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
