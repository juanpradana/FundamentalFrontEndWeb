class ApplicationBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#home">Zan App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link">Choose =></a>
                            <a class="nav-link bg-warning text-white mealFinder" aria-current="page" href="#mealFinder">Meal Finder</a>
                            <a class="nav-link bg-info text-white geoWeather ml-2" href="#geoWeather">Geo Weather</a>
                        </div>
                    </div>
                </div>
            </nav>`;
    }
}

customElements.define("application-bar", ApplicationBar);
