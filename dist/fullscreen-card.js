class FullscreenCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      this.content = document.createElement('ha-card');
      this.content.header = "Go fullscreen";
      this.content.style.padding = "1.5em";
      this.atag = document.createElement('a');
      this.atag.innerHTML = "Go";
      this.atag.style.border = "2px solid grey";
      this.atag.style.fontSize = "2em";
      this.atag.style.padding = "0.5em";
      this.atag.style.display = "block";
      this.atag.style.margin = "15px 15px 30px 15px";
      this.atag.style.background = "#8888";
      this.atag.style.textAlign = "center";
      this.atag.style.borderRadius = "5px";
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

customElements.define('fullscreen-card', FullscreenCard);
window.customCards.push({type: "fullscreen-card", name: "Fullscreen card",
                         description: "Card to go fullscreen."});
