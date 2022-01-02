class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        if (this.querySelector("#mealName").value) {
            return this.querySelector("#mealName").value;
        } else {
            return alert("Fill the name!");
        }
    }

    render() {
        this.innerHTML = `
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Find Meal</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="mealName">Meal Name</label>
                            <input id="mealName" type="text" class="form-control" placeholder="Meal Name" />
                        </div>
                        <div class="form-group">
                            <button id="buttonSearch" class="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.querySelector("#buttonSearch").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
