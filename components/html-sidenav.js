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
                    <a href="./html-introduction.html">HTML Introduction</a>
                    <a href="./html-editors.html">HTML Editors</a>
                    <a href="./html-basic.html">HTML Basic</a>
                    <a href="./html-elements.html">HTML Elements</a>
                    <a href="./html-attributes.html">HTML Attributes</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Quotation</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Headings</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Paragraphs</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Styles</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Formatting</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Quotations</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Comments</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Colors</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML CSS</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Links</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Images</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Favicon</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Tables</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML List</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Block & Inline</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Classes</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML ID</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Iframes</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML JavaScript</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML File Paths</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Head</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Layout</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Responsive</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Computer Code</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Semantics</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Style Guide</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Entities</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Symbols</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Emojis</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML URL Encode</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML vs XML</a>

                    <br/>
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