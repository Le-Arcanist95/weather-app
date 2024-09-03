import axios from 'axios';

export const geoBaseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
    headers: {
        'x-rapidapi-key': 'd9a3371cd6msh00f8c147e39d8fbp1fa613jsn1e201121579b',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    },
};

const openWeatherAPI_BaseUrl = 'https://api.openweathermap.org/data/2.5';
const openWeatherAPI_Key = 'db90de68357d1859ccd2b0aefc07ab38';

// export const openWeatherVarUrl = (endpoint, lat, lon, units) => {
//     return `${openWeatherAPI_BaseUrl}/${endpoint}?lat={${lat}}&lon={${lon}}&appid={${openWeatherAPI_Key}}&units=${units}`;
// };

export const openWeatherFetch = async (endpoint, lat, lon, units) => {
    axios
        .get(
            `${openWeatherAPI_BaseUrl}/${endpoint}?lat=${lat}&lon=${lon}&appid=${openWeatherAPI_Key}&units=${units}`
        )
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};
