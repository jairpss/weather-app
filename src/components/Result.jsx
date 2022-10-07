import useWeather from '../hooks/useWeather'

const Result = () => {
    const { result } = useWeather()

    const { name, main } = result

    const kelvin = 273.15

    return (
        <div className="container">
            <h2 className="weather-title">The weather in <span>{name}</span> is:</h2>

            <p className="weather-current">
                {parseInt(main.temp - kelvin)}°
            </p>
            <div className="weather_min-max">
                <p>
                    Min: <span>{parseInt(main.temp_min - kelvin)}°</span>
                </p>
                <p>
                    Max: <span>{parseInt(main.temp_max - kelvin)}°</span>
                </p>
            </div>
           
        </div>
    )
}

export default Result