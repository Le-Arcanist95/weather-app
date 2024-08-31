import { useState } from 'react'
import axios from 'axios'
import { geoBaseUrl, geoApiOptions } from '../api'
import { AsyncPaginate } from 'react-select-async-paginate'

export const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null)

    const loadOptions = async (inputValue) => {
        try {
            const response = await axios.get(
                `${geoBaseUrl}/cities?minPopulation=100000&namePrefix=${inputValue}`,
                geoApiOptions
            )
            console.log(response.data)

            return {
                options: response.data.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        // City countryCode replace for country flags
                        label: `[${city.countryCode}] ${city.name}, ${city.region}`,
                    }
                }),
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    )
}
