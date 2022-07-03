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
        <div class="sideBarToggler sticky-top">
            <button class="dropbtn" onclick="showSideBar()">Show Sidebar</button>
            <button class="dropbtn" onclick="hideSideBar()">hide Sidebar</button>
        </div>
            <div class="sideBar">
                <div class="sideBarTitle">
                    <h1>HTML Tutorial</h1>
                </div>
                <div class="sideBarContent">
                    <a href="#">HTML Introduction</a>
                    <a href="#">HTML Editors</a>
                    <a href="#">HTML Basic</a>
                    <a href="#">HTML Elements</a>
                    <a href="#">HTML Attributes</a>
                    <a href="#">HTML Headings</a>
                    <a href="#">HTML Paragraphs</a>
                    <a href="#">HTML Styles</a>
                    <a href="#">HTML Formatting</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Comments</a>
                    <a href="#">HTML Colors</a>
                    <ul>
                        <li>RGB</li>
                        <li>HEX</li>
                        <li>HSL</li>
                    </ul>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>
                    <a href="#">HTML Quotation</a>


                    <!-- HTML FORMS -->
                    <h3 class="title">HTML Forms</h3>
                    <a href="#">HTML Forms</a>
                    <a href="#">HTML Form Attributes</a>
                    <a href="#">HTML Form Elements</a>
                    <a href="#">HTML Input Types</a>
                    <a href="#">HTML Input Attributes</a>
                    <a href="#">HTML Input form* Attributes</a>
        </div>
            </section>`
    }
})