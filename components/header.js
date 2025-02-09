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
        <a href="research.html" class="special-link">Research</a> - 
        <a href="courses.html" class="special-link">List of Courses</a> - 
        <a href="latex.html" class="special-link">LaTeX</a> - 
        <a href="3D.html" class="special-link">3D Modelling</a>
        <b>
        <hr>
      </div>
    `;
  }
}

customElements.define('header-component', Header);
