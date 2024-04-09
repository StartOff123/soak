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
  mask: "XXXX-XXXX-XXXX-XXXX",
  definitions: {
    X: {
      mask: "0",
      placeholderChar: "X",
    },
  },
  lazy: false,
  overwrite: "shift",
});
