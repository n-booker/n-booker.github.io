class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="header" class="special-link">
        <hr>
        <b>
        <a href="index.html" class="special-link">Main Page</a> - 
        <a href="physics.html" class="special-link">Physics</a> - 
        <a href="latex.html" class="special-link">\(\mathrm{\LaTeX\})</a> - 
        <a href="3D.html" class="special-link">3D Modelling</a>
        <b>
        <hr>
      </div>
    `;
    
    // Re-render MathJax after content injection
    if (window.MathJax) {
      window.MathJax.typesetPromise([this]);
    }
  }
}

customElements.define('header-component', Header);
