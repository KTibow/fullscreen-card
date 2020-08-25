class FullscreenCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      this.content = document.createElement("ha-card");
      this.content.style.padding = "15px";
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
      this.atag.onclick = function() {
        document.body.requestFullscreen();
      };
      this.content.appendChild(this.atag);
      this.appendChild(this.content);
    }
  }
  setConfig(config) {
  }
  getCardSize() {
    return 2;
  }
}

customElements.define("fullscreen-card", FullscreenCard);
window.customCards.push({type: "fullscreen-card", name: "Fullscreen card",
                         description: "Card to go fullscreen."});
