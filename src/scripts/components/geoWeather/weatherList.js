class weatherList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <hr />
            <h4 id="weatherTitle"></h4>
            <div class="d-flex" id="weather"></div>
        `;
    }
}

customElements.define("weather-list", weatherList);
