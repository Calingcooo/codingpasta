const navBarTemplate = document.createElement('template');
navBarTemplate.innerHTML = `

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link href="css/navBar.css" rel="stylesheet"></link>


<!-- HEADER / NAVBAR -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid nav">
                <!-- LOGO -->
                <a class="navbar-brand" href="#"><img src="#"></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Html</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CSS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">JavaScript</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Frameworks
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Bootstrap</a></li>
                                <li><a class="dropdown-item disabled" href="#">Node.js</a></li>
                                <li><a class="dropdown-item disabled" href="#">Laravel</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
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