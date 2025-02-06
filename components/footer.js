class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="header">
        <hr>
        CC BY-NC-SA 4.0
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);
