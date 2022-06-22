const footer = document.createElement('template');
footer.innerHTML = `

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<style>

.footer {
    color: #fcfcfc;
    background-color: black;
}
</style>
<div class="footer">
    <h6>References:</h6>
        <ul>
        <li><a href="https://www.w3schools.com/html/default.asp">w3schools</a></li>
        <li><a href="https://www.freecodecamp.org/">freecodecamp</a></li>
        </ul>

</div>
`




class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footer.content);
    }
}
customElements.define('footer-component', Footer);