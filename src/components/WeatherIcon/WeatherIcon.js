const WeatherIcon = ({ value, description,className }) => (
    <img className={className} alt={description} src={`http://openweathermap.org/img/wn/${value}@2x.png`}/>
)

export default WeatherIcon