class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="main">
        <a href="pdffiles/Metrics and Cosmos and Trilobites.pdf">GR & Cosmology</a> - 
        <a href="pdffiles/Particles & Wizards.pdf">QFT (in progress)</a> - 
        <a href="pdffiles/Electron's Destiny.pdf">Advanced QM</a> - 
        <a href="pdffiles/Spinors & Symmetries.pdf">Symmetries (in progress)</a>
        <hr>
      </div>
    `;
  }
}

customElements.define('header-component', Header);
