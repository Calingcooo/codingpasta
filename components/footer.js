customElements.define( 'my-footer', class extends HTMLElement {
    constructor() {
        super()
        this.attachShadow( { mode: 'open' } )
            .innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <slot name="footer"></slot>`
    }
    connectedCallback() {
        this.innerHTML = `<section slot="footer">        
        <div class="footer">
            <div class="row g-3 p-3 w-100 d-flex">
                <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center">
                    <h6><u>References:</u></h6>
                    <a href="#">HTML Reference</a></li>
                    <a href="#">CSS Reference</a></li>
                    <a href="#">JavaScipt Reference</a></li>
                    <a href="#">Bootstrap Reference</a></li>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center">
                    <h6><u>Join our community:</u></h6>
                    <i class="fa-brands fa-facebook"><a href="#"> Facebook</a></i>
                    <i class="fa-brands fa-linkedin"><a href="#"> LinkedIn</a></i>
                    <i class="fa-brands fa-twitter"><a href="#"> Twitter</a></i>
                    <i class="fa-brands fa-instagram"><a href="#"> Instagram</a></i>
                    <i class="fa-brands fa-discord"><a href="#"> Discord</a></i>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-12 text-center">
                        <span class="footer-mission">Coding Pasta was made to help career shifters and
                            those who has no programming backgrounds but passionate
                            about learning web development.</span>
                    </div>
                </div>
            </div>
        </div>
            </section>`
    }
} )