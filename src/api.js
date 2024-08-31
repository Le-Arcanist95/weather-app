export const geoBaseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
export const geoApiOptions = {
    headers: {
        'x-rapidapi-key': 'd9a3371cd6msh00f8c147e39d8fbp1fa613jsn1e201121579b',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    },
}

const openWeatherAPI_Key = '79dec38c8997bd3da414a2dd79ea4246'

export const openWeatherVarUrl = (lat, lon, units) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${lon}}&appid={${openWeatherAPI_Key}}&units=${units}`
}
