import Form from './Form'
import Result from './Result'
import Spinner from './Spinner'
import useWeather from '../hooks/useWeather'

const AppWeather = () => {

  const { result, loading } = useWeather()

  return (
    <>
        <main className="dos-columnas">
            <Form />
            {loading ? <Spinner /> : result?.name && <Result />}
        </main>
    </>
  )
}

export default AppWeather