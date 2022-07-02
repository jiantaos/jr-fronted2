//render forecasts,layout of temperature, main weather,humidity and wind

import styled from "styled-components"
import Temperature from "../../../Temperature"
import WeatherItem from "./components/WeatherItem"

const Wrapper = styled.div`
    text-align: center;
`

const StyledTemperature = styled(Temperature)`
    color: white;
    font-size: 5rem;
`
const MainWeather = styled.div`
    font-size:1.5rem;
    letter-spacing: 5px;
    margin-top: 0.25rem;
    color:rgba(255,255,255,0.7);
`
const VerticalDivider = styled.div`
  margin: 0 2rem;
  width:2px;
  background-color: rgba(255,255,255,0.7);
`
const HumidityAndWind = styled.div`
    display:flex;
    margin-top:3rem;
    color:rgba(255,255,255,0.7);
`
const Weather = () => (
    <Wrapper>
        <StyledTemperature value="11.84"/>
        <MainWeather>Rain</MainWeather>
        <HumidityAndWind>
            <WeatherItem title="HUMIDITY">83%</WeatherItem>
            <VerticalDivider/> 
            <WeatherItem title="WIND">11.83KM/s</WeatherItem>  
        </HumidityAndWind>   
    </Wrapper>
)

export default Weather