export const CurrentWeather = () => {
    return (
        <div className="text-slate-100 bg-gray-800 mx-auto mt-5 w-2/5 rounded-md p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <p className="text-lg font-semibold leading-none tracking-wide">
                        Atlanta
                    </p>
                    <p className="text-sm font-light leading-none">Sunny</p>
                </div>
                <img
                    alt="weather"
                    className="mx-2 h-auto w-12"
                    src="/weather_icons/weather-clear-symbolic-svgrepo-com.svg"
                />
            </div>
            <div className="flex items-center justify-between">
                <p className="mx-0 my-2 w-auto text-6xl font-semibold tracking-tighter">
                    75°F
                </p>
                <div className="w-full pl-5">
                    <div className="flex justify-between">
                        <span className="mb-2 text-left text-xs font-normal underline">
                            Details
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-left text-xs font-normal">
                            Feels like
                        </span>
                        <span className="text-right text-xs font-semibold">
                            81℉
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-left text-xs font-normal">
                            Wind
                        </span>
                        <span className="text-right text-xs font-semibold">
                            2 mph
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-left text-xs font-normal">
                            Humidity
                        </span>
                        <span className="text-right text-xs font-semibold">
                            15%
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-left text-xs font-normal">
                            Pressure
                        </span>
                        <span className="text-right text-xs font-semibold">
                            15 hPa
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
