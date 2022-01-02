class mainWindow extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title text-center">Zan Application</h5>
                    </div>
                    <div class="card-body">
                        <p>You can use my application.</p>
                        <div>
                        <p>I have 2 application:</p>
                        <ul class="ml-3">
                            <li>Meal Finder</li>
                            <li>Geo Weather</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("main-window", mainWindow);
