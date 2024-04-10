const phoneMobile = document.getElementById("phone-mobile");
const careBot = document.getElementById("care-bot");

window.addEventListener("load", () => {
  const observerPhoneMobile = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        phoneMobile.classList.add("!translate-y-0", "!opacity-100");
      } else {
        phoneMobile.classList.remove("!translate-y-0", "!opacity-100");
      }
    },
    {
      threshold: 0.7,
    }
  );

  observerPhoneMobile.observe(careBot);
});

const antiCounterfeitProtectionPopup = new Popup(
  "anti-counterfeit-protection-popup",
  {
    closedBg: true,
    bgId: "anti-counterfeit-protection-popup-bg",
  }
);

function handleOpenAntiCounterfeitProtectionPopup() {
  antiCounterfeitProtectionPopup.onOpen();
}

new IMask(document.getElementById("device-number"), {
  mask: "XXX-XXXX-XXXX-XXXX",
  definitions: {
    X: {
      mask: "0",
      placeholderChar: "X",
    },
  },
  lazy: false,
  overwrite: "shift",
});
