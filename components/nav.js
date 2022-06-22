const navBarTemplate = document.createElement('template');
navBarTemplate.innerHTML = `

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link href="css/navbar.css" rel="stylesheet"></link>

<div class="container-fluid">
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
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