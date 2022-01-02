class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.temp = '<div class="card mb-3">';
        this.temp += `
                        <div class="meal-info">
                            <h2>${this._meal.strMeal}</h2>
                        </div>
                        <img class="meal-thumb" src="${this._meal.strMealThumb}" alt="Meal Thumbnail">
                        <div class="meal-info">
                            <div id="mainLayout" class="d-flex bd-highlight">`;
        this.temp += `
                                <div class="p-2 flex-fill bd-highlight">
                                    <div class="table-responsive">
                                        <table class="table table-sm table-striped w-auto">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Inggredient</th>
                                                    <th scope="col">Measure</th>
                                                </tr>
                                            </thead>
                                            <tbody>`;
        for (let x = 1; x <= 20; x++) {
            let inggredient = this._meal["strIngredient" + x];
            let measure = this._meal["strMeasure" + x];
            if (inggredient !== "" && inggredient !== " ") {
                this.temp += `
                                                <tr>
                                                    <th scope="row">${x}</th>
                                                    <td>${inggredient}</td>`;
            }
            if (measure !== "" && measure !== " ") {
                this.temp += `
                                                    <td>${measure}</td>
                                                </tr>`;
            }
        }
        this.temp += `
                                            </tbody>
                                        </table>
                                    </div>
                                </div>`;
        this.temp += `
                                <div id="layoutCooking" class="p-2 card bd-highlight ml-4">
                                    <h4>How to cook</h4>
                                    <p>${this._meal.strInstructions}</p>
                                    <div class="video-container">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this._meal.strYoutube.replace(
                                            "https://www.youtube.com/watch?v=",
                                            ""
                                        )}?controls=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        this.render();
    }

    render() {
        this.innerHTML = this.temp;
    }
}

customElements.define("meal-item", MealItem);
