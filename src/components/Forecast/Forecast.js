import styled from 'styled-components'
import Section from '../Section'
import DailyWeather from './components/DailyWeather'

const Layout = styled.div`
    display:flex;
    margin-top: 1rem;
`

const Forecast = () => (
    <Section title="Forecast">
        <Layout>
            <DailyWeather day="MON" temperature="21" weather={{icon:'04d', description: 'Clouds'}}/>
            <DailyWeather day="TUE" temperature="24" weather={{icon:'01d', description: 'Rain'}}/>
            <DailyWeather day="WES" temperature="30" weather={{icon:'01n', description: 'Clear'}}/>
            <DailyWeather day="thu" temperature="30" weather={{icon:'04d', description: 'Clear'}}/>
        </Layout>
    </Section>
)

export default Forecast