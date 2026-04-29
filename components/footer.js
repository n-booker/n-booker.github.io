class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="footer">
        <hr>
        <b>
        CC BY-NC-SA 4.0
        <b>
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);
