import "../components/mealFinder/meal-list.js";
import "../components/mealFinder/search-bar.js";
import DataSource from "../data/source.js";

const mealFind = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    const onButtonSearchClicked = () => {
        DataSource.searchMeal(searchElement.value).then(renderResult).catch(fallbackResult);
    };

    const renderResult = (results) => {
        mealListElement.meals = results;
    };

    const fallbackResult = (message) => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default mealFind;
