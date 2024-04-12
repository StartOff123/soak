const mediaStartVideo = {
  home: {
    desktop: "assets/video/home/start.webm",
    mobile: "assets/video/home/start-mobile.webm",
  },
  product: {
    desktop: "assets/video/product/soak-q.webm",
    mobile: "assets/video/product/soak-q-mobile.webm",
  },
  distribution: {
    desktop: "assets/video/distribution/start.webm",
    mobile: "assets/video/distribution/start-mobile.webm",
  },
  support: {
    desktop: "assets/video/support/start.webm",
    mobile: "assets/video/support/start-mobile.webm",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const mediaQuery425 = window.matchMedia("(max-width: 425px)");

  setMediaQuery(mediaQuery425, (matchMedia) => setVideoMedia(matchMedia, page));

  mediaQuery425.addEventListener("change", () => {
    setMediaQuery(mediaQuery425, (matchMedia) =>
      setVideoMedia(matchMedia, page)
    );
  });
});

function setVideoMedia(matchMedia, page) {
  const video = document.getElementById("video-section");
  if (matchMedia.matches) {
    return (video.src = mediaStartVideo[page].mobile);
  }
  video.src = mediaStartVideo[page].desktop;
}
