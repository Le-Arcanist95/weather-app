import { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

import { CurrentWeather } from './components/CurrentWeather';
import { Search } from './components/Search';
import { openWeatherAPI_BaseUrl, openWeatherAPI_Key } from './api';

export const App = () => {
    // Static Data
    const unitTypes = [
        { value: 'standard', label: 'Standard' },
        { value: 'imperial', label: 'Imperial' },
        { value: 'metric', label: 'Metric' },
    ];

    // Controlled State Data
    const [unitType, setUnitType] = useState('standard');
    const [weatherData, setWeatherData] = useState(null);

    // Functionality
    const handleUnitSwitch = (e) => {
        setUnitType(e.value);
    };

    useEffect(() => {
        console.log(weatherData);
    }, [weatherData]);

    const handleOnSearchChange = (searchData) => {
        const [latitude, longitude] = searchData.value.split(' ');

        const currentWeather = axios.get(
            `${openWeatherAPI_BaseUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherAPI_Key}&units=${unitType}`
        );
        const forecastWeather = axios.get(
            `${openWeatherAPI_BaseUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherAPI_Key}&units=${unitType}`
        );

        Promise.all([currentWeather, forecastWeather])
            .then(async (res) => {
                const currentRes = res[0].data;
                const forecastRes = res[1].data;

                setWeatherData({
                    location: searchData.label,
                    current: currentRes,
                    forecast: forecastRes,
                });
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="mx-auto my-5 max-w-5xl">
            <label
                htmlFor="unitTypeSelector"
                className="absolute left-0 top-0 m-2 flex items-center justify-center p-2"
            >
                Unit Measurements:
                <Select
                    className="ml-2"
                    value={unitType}
                    options={unitTypes}
                    placeholder={
                        unitType.charAt(0).toUpperCase() + unitType.slice(1)
                    }
                    onChange={handleUnitSwitch}
                />
            </label>
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    );
};
