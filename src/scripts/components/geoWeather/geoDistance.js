class geoDistance extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <h1>GeoWeather</h1>
            <div class="card">
                <div class="card-header" id="nearTitle">Jarak terdekat dari ?</div>
                <ul class="list-group" id="nearPlace"></ul>
            </div>
        `;
    }
}

customElements.define("geo-distance", geoDistance);
