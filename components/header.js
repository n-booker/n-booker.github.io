class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="header" class="special-link">
      <b>
        <a href="index.html">Home</a> - 
        <a href="notes.html">Lecture Notes</a> - 
        <a href="3D.html">3D Modelling</a>
      <b>
        <hr>
      </div>
    `;
  }
}

customElements.define('header-component', Header);