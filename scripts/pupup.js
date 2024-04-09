class Popup {
  constructor(id, { closedBg, bgId }) {
    this.popup_window = document.getElementById(id);
    this.blur_bg = document.getElementById(bgId);
    this.closedBg = closedBg;
    this.isOpen = false;

    this.blur_bg.addEventListener("click", () => {
      if (!closedBg) return;
      this.onClose();
    });
  }

  onOpen() {
    document.body.classList.add('overflow-hidden');
    this.isOpen = true;

    this.popup_window.classList.add("popup-open");
    this.blur_bg.classList.add("blur-open");
  }

  onClose() {
    document.body.classList.remove('overflow-hidden');
    this.isOpen = false;

    this.popup_window.classList.remove("popup-open");
    this.blur_bg.classList.remove("blur-open");
  }

  onStatePopup() {
    return this.isOpen;
  }
}