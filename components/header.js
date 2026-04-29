class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="header" class="special-link">
        <table style="width:100%">
        <b>
          <tr>
            <td><a href="index.html" class="special-link">Homepage</a></td>
            <td>::</td>
            <td><a href="research.html" class="special-link">Research</a></td>
            <td>::</td>
            <td><a href="ijcps.html" class="special-link">Journal Club</a></td>
            <td>::</td>
            <td><a href="latex.html" class="special-link">L<span class="tex-a">A</span>T<span class="tex-e">E</span>X</a></td>
            <td>::</td>
            <td><a href="3D.html" class="special-link">3D</a></td>
            <td>::</td>
            <td><a href="trilobites.html" class="special-link">Trilobites</a></td>
          </tr>
        <b>
        </table>
      </div>
    `;
  }
}

customElements.define('header-component', Header);
