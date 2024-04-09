const mediaStartVideo = {
  home: {
    desktop: "assets/video/home/start.mp4",
    mobile: "assets/video/home/start-mobile.mp4",
  },
  product: {
    desktop: "assets/video/product/soak-q.mp4",
    mobile: "assets/video/product/soak-q-mobile.mp4",
  },
  distribution: {
    desktop: "assets/video/distribution/start.mp4",
    mobile: "assets/video/distribution/start-mobile.mp4",
  },
  support: {
    desktop: "assets/video/support/start.mp4",
    mobile: "assets/video/support/start-mobile.mp4",
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
