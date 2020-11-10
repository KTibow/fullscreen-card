var the_card;
class FullscreenCard extends HTMLElement {
  set hass(hass) {
    if (!this.content && this.config) {
      this.content = document.createElement("ha-card");
      this.content.style.padding = "15px";
      this.fullscreen = false;
      this.atag = document.createElement("a");
      this.atag.innerHTML = "Go fullscreen";
      this.atag.style.border = "2px solid var(--primary-color)";
      this.atag.style.fontSize = "2em";
      this.atag.style.padding = "0.5em";
      this.atag.style.display = "block";
      this.atag.style.background = "var(--primary-color)";
      this.atag.style.color = "white";
      this.atag.style.textAlign = "center";
      this.atag.style.borderRadius = "var(--ha-card-border-radius, 4px)";
      this.atag.style.cursor = "pointer";
      this.atag.onclick = function () {
        if (this.fullscreen) {
          document.exitFullscreen();
          this.atag.innerHTML =
            this.config["go_fullscreen"] || "Go fullscreen";
        } else {
          document.documentElement.requestFullscreen();
          this.atag.innerHTML =
            this.config["exit_fullscreen"] || "Exit fullscreen";
        }
        this.fullscreen = !this.fullscreen;
      }.bind(this);
      this.content.appendChild(this.atag);
      this.appendChild(this.content);
      the_card = this;
    }
  }
  setConfig(config) {
    this.config = config;
  }
  getCardSize() {
    return 2;
  }
}

customElements.define("fullscreen-card", FullscreenCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "fullscreen-card",
  name: "Fullscreen card",
  preview: true,
  description: "Card to go fullscreen.",
});
document.body.onkeydown = (event) => {
  if (event.key == "F11") {
    event.preventDefault();
    the_card.atag.onclick();
  }
};
