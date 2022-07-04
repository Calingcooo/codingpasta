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
        <div class="sideBarToggler">
            <button class="dropbtn" onclick="showSideBar()">Show Sidebar</button>
            <button class="dropbtn" onclick="hideSideBar()">hide Sidebar</button>
        </div>
            <div class="sideBar">
                <div class="sideBarTitle">
                    <h1>HTML Tutorial</h1>
                </div>
                <div class="sideBarContent">
                    <a class="active" href="./html-introduction.html">HTML Introduction</a>
                    <a href="./html-editors.html">HTML Editors</a>
                    <a href="./html-basic.html">HTML Basic</a>
                    <a href="./html-elements.html">HTML Elements</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Attributes</a>
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
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Forms</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Form Attributes</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Form Elements</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Input Types</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Input Attributes</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Input form* Attributes</a>

                    <br/>
                    <!-- HTML Graphics -->
                    <h3 class="title">HTML Graphics</h3>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Canvas</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML SVG</a>

                    <br/>
                    <!-- HTML Media -->
                    <h3 class="title">HTML Media</h3>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Media</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Video</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Audio</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Plug-ins</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Youtube</a>

                    <br/>
                    <!-- HTML API's -->
                    <h3 class="title">HTML API's</h3>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Geolocation</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Drag & Drop</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Web Storage</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML Workers</a>
                    <a class="coming-soon" data-toggle="tooltip"
                    title="Coming Soon!">HTML SSE</a>

        </div>
            </section>`
    }
})