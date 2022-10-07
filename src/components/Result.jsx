import useWeather from '../hooks/useWeather'

const Result = () => {
    const { result } = useWeather()

    const { name } = result

    return (
        <div className="container">
            <h2>The weather in {name} is:</h2>
        </div>
    )
}

export default Result