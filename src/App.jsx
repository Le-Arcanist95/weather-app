import { CurrentWeather } from './components/CurrentWeather'
import { Search } from './components/Search'

export const App = () => {
    const handleOnSearchChange = (searchData) => {
        const [latitude, longitude] = searchData.value.split(' ')
    }

    return (
        <div className="mx-auto my-5 max-w-5xl">
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    )
}
