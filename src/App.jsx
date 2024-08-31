import { useEffect, useState } from 'react'
import Select from 'react-select'

import { CurrentWeather } from './components/CurrentWeather'
import { Search } from './components/Search'
import { openWeatherVarUrl } from './api'

export const App = () => {
    const [urlData, setUrlData] = useState({
        latitude: '',
        longitude: '',
        unitType: 'standard',
    })
    const [weatherUrl, setWeatherUrl] = useState('')

    const unitTypes = [
        { value: 'standard', label: 'Standard' },
        { value: 'imperial', label: 'Imperial' },
        { value: 'metric', label: 'Metric' },
    ]

    useEffect(() => {
        setWeatherUrl(openWeatherVarUrl(...Object.values(urlData)))
    }, [urlData])

    // TESTING - REMOVE LATER
    useEffect(() => {
        console.log(weatherUrl)
    }, [weatherUrl])

    const handleUnitSwitch = (e) => {
        setUrlData((prevData) => ({
            ...prevData,
            unitType: e.value,
        }))
    }

    const handleOnSearchChange = async (searchData) => {
        const [latitude, longitude] = searchData.value.split(' ')

        setUrlData((prevData) => ({
            ...prevData,
            latitude,
            longitude,
        }))

        
    }

    return (
        <div className="mx-auto my-5 max-w-5xl">
            <label
                htmlFor="unitTypeSelector"
                className="absolute left-0 top-0 m-2 flex items-center justify-center p-2"
            >
                Unit Measurements:
                <Select
                    className="ml-2"
                    value={urlData.unitType}
                    options={unitTypes}
                    placeholder={
                        urlData.unitType.charAt(0).toUpperCase() +
                        urlData.unitType.slice(1)
                    }
                    onChange={handleUnitSwitch}
                />
            </label>
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    )
}
