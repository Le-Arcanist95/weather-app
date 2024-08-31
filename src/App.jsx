import { useState } from 'react'
import Select from 'react-select'

import { CurrentWeather } from './components/CurrentWeather'
import { Search } from './components/Search'
import { openWeatherVarUrl } from './api'

export const App = () => {
    const [unitType, setUnitType] = useState('standard')
    const [weatherUrl, setWeatherUrl] = useState('')

    const unitTypes = [
        { value: 'standard', label: 'Standard' },
        { value: 'imperial', label: 'Imperial' },
        { value: 'metric', label: 'Metric' },
    ]

    const handleUnitSwitch = (e) => {
        const unit = e.value
        switch (unit) {
            case 'imperial':
                setUnitType('imperial')
                break
            case 'metric':
                setUnitType('metric')
                break
            default:
                setUnitType('standard')
                break
        }
    }

    const handleOnSearchChange = (searchData) => {
        const [latitude, longitude] = searchData.value.split(' ')
    }

    // const currentWeather = axios.get(openWeatherVarUrl())

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
    )
}
