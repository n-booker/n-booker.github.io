class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="header">
        <hr>
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);