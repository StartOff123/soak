gsap.registerPlugin(ScrollTrigger);
const canvas = document.getElementById("sequence-canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  render();
});

const canvasInfo = {
  totalFrames: 133,
  totalTime: 12,
  images: [],
  currentFrame: 0,
  currentImage: (index) =>
    `assets/img/product/soak-q/q_${index.toString()}.jpg`,
};

for (let i = 0; i <= canvasInfo.totalFrames; i++) {
  const img = new Image();
  img.src = canvasInfo.currentImage(i);
  canvasInfo.images.push(img);
}

gsap.to(canvasInfo, {
  currentFrame: canvasInfo.totalFrames,
  snap: "currentFrame",
  ease: "none",
  scrollTrigger: {
    trigger: canvas,
    start: "top",
    end: `bottom+=${canvasInfo.totalFrames * canvasInfo.totalTime}`,
    scrub: true,
    pin: true,
  },
  onUpdate: render,
});

canvasInfo.images[0].onload = () => {
  const currentImage = canvasInfo.images[0];

  let width = canvas.width / currentImage.width,
    height = canvas.height / currentImage.height,
    ratio = Math.min(width, height),
    center_x = (canvas.width - currentImage.width * ratio) / 2,
    center_y = (canvas.height - currentImage.height * ratio) / 2;

  context.drawImage(
    currentImage,
    0,
    0,
    currentImage.width,
    currentImage.height,
    center_x,
    center_y,
    currentImage.width * ratio,
    currentImage.height * ratio
  );
};

function render() {
  const currentImage = canvasInfo.images[canvasInfo.currentFrame];

  let width = canvas.width / currentImage.width,
    height = canvas.height / currentImage.height,
    ratio = Math.min(width, height),
    center_x = (canvas.width - currentImage.width * ratio) / 2,
    center_y = (canvas.height - currentImage.height * ratio) / 2;

  context.drawImage(
    currentImage,
    0,
    0,
    currentImage.width,
    currentImage.height,
    center_x,
    center_y,
    currentImage.width * ratio,
    currentImage.height * ratio
  );
}
