import "./meal-item.js";

class MealList extends HTMLElement {
    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    renderError(message) {
        this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = "";
        this._meals.forEach((meal) => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal;
            this.appendChild(mealItemElement);
        });
    }
}

customElements.define("meal-list", MealList);
