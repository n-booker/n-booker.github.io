class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="main" style="text-align: center;">
        <a href="pdffiles/Metrics and Cosmos and Trilobites.pdf" target="_blank">GR & Cosmology</a> - 
        <a href="pdffiles/Particles & Wizards.pdf" target="_blank">QFT (in progress)</a> - 
        <a href="pdffiles/Electron's Destiny.pdf" target="_blank">Advanced QM</a> - 
        <a href="pdffiles/Spinors & Symmetries.pdf" target="_blank">Symmetries (in progress)</a>
        <hr>
      </div>
    `;
  }
}

customElements.define('header-component', Header);