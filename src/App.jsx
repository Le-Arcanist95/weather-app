import { useState } from 'react';
import Select from 'react-select';

import { CurrentWeather } from './components/CurrentWeather';
import { Search } from './components/Search';
import { openWeatherFetch } from './api';

export const App = () => {
    // Static Data
    const unitTypes = [
        { value: 'standard', label: 'Standard' },
        { value: 'imperial', label: 'Imperial' },
        { value: 'metric', label: 'Metric' },
    ];

    // Controlled State Data
    const [unitType, setUnitType] = useState('standard');
    const [weatherData, setWeatherData] = useState({});

    // Functionality
    const handleUnitSwitch = (e) => {
        setUnitType(e.value);
    };

    const handleOnSearchChange = (searchData) => {
        const [latitude, longitude] = searchData.value.split(' ');

        const currentWeather = openWeatherFetch(
            'weather',
            latitude,
            longitude,
            unitType
        );
        const forecastWeather = openWeatherFetch(
            'forecast',
            latitude,
            longitude,
            unitType
        );

        Promise.all([currentWeather, forecastWeather]).then(async (res) => {
            console.log(res);
        });
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
