import { useState, createContext } from 'react'
import axios from 'axios'

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

    const [search, setSearch] = useState({
        city: '',
        country: ''
    })

    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(false)

    const dataSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const getWeather = async datos => {
        setLoading(true)
        try {
            const { city, country } = datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`
            
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            
            const { data: weather } = await axios(urlWeather)
            setResult(weather)

            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <WeatherContext.Provider
            value={{
                search,
                dataSearch,
                getWeather,
                result,
                loading
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}

export default WeatherContext