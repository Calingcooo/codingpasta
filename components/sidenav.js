const sideNavTemplate = document.createElement('template');
sideNavTemplate.innerHTML = `

<link href="css/navbar.css" rel="stylesheet"></link>

<div class="container-fluid w-20 border border-black">





</div>
`




class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(sideNavTemplate.content);
    }
}
customElements.define('sideNav-component', Header);