class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="header" class="special-link">
        <hr>
        <b>
        <a href="index.html" class="special-link">Home</a> - 
        <a href="notes.html" class="special-link">Lecture Notes</a> - 
        <a href="3D.html" class="special-link">3D Renders</a>
        <b>
        <hr>
      </div>
    `;
  }
}

customElements.define('header-component', Header);
