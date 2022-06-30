customElements.define('side-nav', class extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
                mode: 'open'
            })
            .innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <slot name="sideNav"></slot>`
    }
    connectedCallback() {
        this.innerHTML = `<section slot="sideNav">        
        
            </section>`
    }
})