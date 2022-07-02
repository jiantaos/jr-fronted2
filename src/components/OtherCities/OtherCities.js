import Section from "../Section";
import CityWeather from "./components/CityWeather";
// import CityWeather from "./components/CityWeather";

const OtherCities = () => (
    <Section title="Other cities">
      <CityWeather name="Melbourne" temperature="21" weather={{icon:'04d', description: 'Clouds'}}/>
      <CityWeather name="Sydney" temperature="24" weather={{icon:'01d', description: 'Rain'}}/>
      <CityWeather name="Perth" temperature="30" weather={{icon:'01d', description: 'Clear'}}/>
    </Section>
)

export default OtherCities;