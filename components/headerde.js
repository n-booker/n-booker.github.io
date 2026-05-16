class HeaderDE extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="header" class="special-link">
        <table style="width:100%">
        <b>
          <tr>
            <td><a href="index.html" class="special-link">Hauptseite</a></td>
            <td>::</td>
            <td><a href="research.html" class="special-link">Forschung</a></td>
            <td>::</td>
            <td><a href="ijcps.html" class="special-link">Journalclub</a></td>
            <td>::</td>
            <td><a href="latex.html" class="special-link">L<span class="tex-a">A</span>T<span class="tex-e">E</span>X</a></td>
            <td>::</td>
            <td><a href="3D.html" class="special-link">3D</a></td>
            <td>::</td>
            <td><a href="misc.html" class="special-link">Allfälliges</a></td>
          </tr>
        <b>
        </table>
      </div>
    `;
  }
}

customElements.define('header-component-de', HeaderDE);
