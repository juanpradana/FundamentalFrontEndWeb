import $ from "jquery";
import mealFind from "./mealFinder.js";
import geoWeather from "./geoWeather.js";

function main() {
    $(document).ready(() => {
        $(window).resize(() => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                $("div#mainLayout").addClass("flex-column");
                $("div#layoutCooking").removeClass("ml-4");
                $("#weather").addClass("flex-column");
                $("div#weatherAlone").addClass("mb-4");
                $("div#weatherAlone").attr("style", "max-width: 18rem;");
                $("div#weatherAlone").removeClass("ml-3");
            } else {
                $("div#mainLayout").removeClass("flex-column");
                $("div#layoutCooking").addClass("ml-4");
                $("#weather").removeClass("flex-column");
                $("div#weatherAlone").removeClass("mb-4");
                $("div#weatherAlone").removeAttr("style", '"max-width: 18rem;"');
                $("div#weatherAlone").addClass("ml-3");
            }
        });
        $(".mealFinder").click(() => {
            $(".geoWeather").removeClass("active");
            $(".mealFinder").addClass("active");
            $("search-bar").show();
            $("meal-list").show();
            $("geo-distance").hide();
            $("weather-list").hide();
            $("main-window").hide();
            mealFind();
        });
        $(".geoWeather").click(() => {
            $(".mealFinder").removeClass("active");
            $(".geoWeather").addClass("active");
            $("search-bar").hide();
            $("meal-list").hide();
            $("geo-distance").show();
            $("weather-list").show();
            $("main-window").hide();
            geoWeather();
        });
        $(".navbar-brand").click(() => {
            $(".mealFinder").addClass("active");
            $(".geoWeather").addClass("active");
            $("search-bar").hide();
            $("meal-list").hide();
            $("geo-distance").hide();
            $("weather-list").hide();
            $("main-window").show();
            location.reload();
        });
    });
}

export default main;
