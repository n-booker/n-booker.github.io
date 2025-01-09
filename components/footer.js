class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="main">
        <hr>
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);