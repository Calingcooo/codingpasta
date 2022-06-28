customElements.define( 'nav-bar', class extends HTMLElement {
    constructor() {
        super()
        this.attachShadow( { mode: 'open' } )
            .innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="./css/navbar.css">    
                <slot name="dropdown"></slot>`
    }
    connectedCallback() {
        this.innerHTML = `<section slot="dropdown">        
        <div class="container-fluid p-0">
            <div class="login-div">
                <a class="login" href="#">Login</a>
                <a class="register" href="#">Sign Up</a>
            </div>
        <!-- HEADER / NAVBAR -->
         <nav class="navbar navbar-expand-lg navbar-light p-2 sticky-top">
                <div class="container-fluid nav">
        <!-- LOGO -->
        <a class="navbar-brand" href="#"><img src="#"></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
        <!-- BURGER MENU -->
        <span><i class="fa-solid fa-bars" style="color: white;"></i></span>
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
} )