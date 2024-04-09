window.addEventListener("load", () => {
  const observerVideo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    },
    {
      threshold: 0,
    }
  );

  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    observerVideo.observe(video);
  });
});
