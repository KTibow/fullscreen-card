class FullscreenCard extends HTMLElement {
  set hass(hass) {
    if (!this.content && this.config) {
      this.content = document.createElement("ha-card");
      this.content.style.padding = "1rem";

      this.tag = document.createElement("button");
      if (window["fullScreen"] || document.fullscreenElement) {
        this.tag.innerHTML =
          this.config["exit_fullscreen"] || "Exit fullscreen";
      } else {
        this.tag.innerHTML =
          this.config["go_fullscreen"] || "Go fullscreen";
      }
      this.tag.style.width = "100%";
      this.tag.style.fontSize = "var(--paper-font-display1_-_font-size)";
      this.tag.style.padding = "0.5rem";
      this.tag.style.background = "var(--primary-color)";
      this.tag.style.color = "var(--text-primary-color)";
      this.tag.style.border = "none";
      this.tag.style.textAlign = "center";
      this.tag.style.borderRadius = "var(--ha-card-border-radius, 4px)";
      this.tag.style.cursor = "pointer";

      const toggleFullscreen = async () => {
        if (window["fullScreen"] || document.fullscreenElement) {
          await document.exitFullscreen();
          this.tag.innerHTML =
            this.config["go_fullscreen"] || "Go fullscreen";
        } else {
          await document.documentElement.requestFullscreen();
          this.tag.innerHTML =
            this.config["exit_fullscreen"] || "Exit fullscreen";
        }
      };
      this.tag.onclick = toggleFullscreen;
      this.content.appendChild(this.tag);
      this.appendChild(this.content);

      document.body.onkeydown = (event) => {
        if (event.key == "F11") {
          toggleFullscreen();
          event.preventDefault();
        }
      }
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
