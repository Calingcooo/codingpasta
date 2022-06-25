const navBarTemplate = document.createElement('template');
navBarTemplate.innerHTML = `

<link href="css/navBar.css" rel="stylesheet"></link>

<div class="nav-container">
  <img src="#">
    <ul class="navBar">
      <li><a href="./html.html">Html</a></li>
      <li><a href="#">Css</a></li>
      <li><a href="#">JavaScript</a></li>
      <li><a href="#">Frameworks</a></li>
    </ul>
    <input type="text" id="search" placeholder="Search...">
</div>
`




class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(navBarTemplate.content);
  }
}
customElements.define('header-component', Header);