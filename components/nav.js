customElements.define('nav-bar', class extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
                mode: 'open'
            })
            .innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <slot name="navBar"></slot>`
    }
    connectedCallback() {
        this.innerHTML = `<section slot="navBar">        
        <div class="container-fluid p-0">
            <div class="login-div">
                <a class="login" href="login.html">Login</a>
                <a class="register" href="#">Sign Up</a>
            </div>

        <!-- START OF HEADER / NAVBAR -->
         <nav class="navbar navbar-expand-lg navbar-light" style="padding-left: 20px; padding-right: 20px;">
                <div class="container-fluid nav">

        <!-- LOGO -->
        <a class="navbar-brand" href="./index.html"><img src="./images/codingpasta.png" style="width: 80px; height: 80px;"></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">

        <!-- BURGER MENU -->
        <span><i class="fa-solid fa-bars" style="color: white;"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="./html.html">Html</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" style="color: #888!important;" href="./css.html" data-toggle="tooltip"
                                title="Coming Soon!">CSS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" style="color: #888!important;" href="./js.html" data-toggle="tooltip"
                                title="Coming Soon!">JavaScript</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Frameworks
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item disabled" href="./bootstrap.html">Bootstrap</a></li>
                                    <li>
                                        <span class="d-inline-block" tabindex="0" data-toggle="tooltip"
                                            title="Coming Soon!">
                                            <a class="dropdown-item disabled" href="#"
                                                style="pointer-events: none;">Node.js</a></li>
                                    </span>
                                    <li>
                                        <span class="d-inline-block" tabindex="0" data-toggle="tooltip"
                                            title="Coming Soon!">
                                            <a class="dropdown-item disabled" href="#"
                                                style="pointer-events: none;">Laravel</a></li>
                                    </span>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
            </section>`
    }
})