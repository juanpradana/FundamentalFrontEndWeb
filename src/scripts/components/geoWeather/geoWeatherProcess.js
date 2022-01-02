import $ from "jquery";

function gWProcess() {
    let lat = -5.3567976;
    let lon = 105.2533431;

    const getPlace = () => {
        $.getJSON("https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json", (data) => {
            const items = [];
            const jml = data.length;

            for (let n = 0; n < jml; n++) {
                data[n].jarak = distance(lat, lon, data[n].lat, data[n].lon, "K");
            }

            data.sort(sortDistance);

            for (let n = 0; n < jml; n++) {
                items.push(
                    '<li class="list-group-item d-flex justify-content-between align-items-center">' +
                        data[n].propinsi +
                        ", " +
                        data[n].kota +
                        ", " +
                        data[n].kecamatan +
                        '<span class="badge badge-primary badge-pill">' +
                        data[n].jarak.toFixed(2) +
                        " km</span></li>"
                );
                if (n > 4) break;
            }
            $("#nearTitle").html("Near place from " + lat + "," + lon);
            $("#nearPlace").html(items.join(""));
            $("#weatherTitle").html(data[0].propinsi + ", " + data[0].kota + ", " + data[0].kecamatan + " " + data[0].jarak.toFixed(2) + " km");
            getWeather(data[0].id);
        });
    };

    const getWeather = (idWilayah) => {
        $.getJSON("https://ibnux.github.io/BMKG-importer/cuaca/" + idWilayah + ".json", (data) => {
            const items = [];
            const jml = data.length;

            for (let n = 0; n < jml; n++) {
                items.push(
                    '<div id="weatherAlone" class="card ml-3 text-center">' +
                        '<img src="https://ibnux.github.io/BMKG-importer/icon/' +
                        data[n].kodeCuaca +
                        '.png" class="card-img-top">' +
                        '<div class="card-body"><h5 class="card-title">' +
                        data[n].cuaca +
                        '</h5><p class="card-text">' +
                        data[n].jamCuaca +
                        "</p></div></div>"
                );
                if (n > 4) break;
            }
            $("#weather").html(items.join(""));
        });
    };

    const distance = (lat1, lon1, lat2, lon2) => {
        const radlat1 = (Math.PI * lat1) / 180;
        const radlat2 = (Math.PI * lat2) / 180;
        const theta = lon1 - lon2;
        const radtheta = (Math.PI * theta) / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        return Math.round(dist * 1.609344 * 1000) / 1000;
    };

    const sortDistance = (a, b) => {
        if (a["jarak"] === b["jarak"]) {
            return 0;
        } else {
            return a["jarak"] < b["jarak"] ? -1 : 1;
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, onErrorGPS);
        } else {
            getPlace();
        }
    };

    const showPosition = (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        getPlace();
    };

    const onErrorGPS = (error) => {
        //ake default aja
        getPlace();
    };

    getLocation();
}

export default gWProcess;
