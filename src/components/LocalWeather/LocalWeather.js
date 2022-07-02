import styled from 'styled-components';
import BackgroundImage from '../BackgroundImage';
import CityName from './components/CityName';
import Weather from './components/Weather';

const Layout = styled.div`
    display:flex;
    justify-content: space-between;
    color:white;
    padding: 64px 96px;
`

const LocalWeather = () => (
    <BackgroundImage src="https://w0.peakpx.com/wallpaper/1003/620/HD-wallpaper-abstract-summer-landscape-forest-sunset-mountains-abstract-nature-backgrounds-artwork-abstract-landscapes.jpg">
        <Layout>
            <Weather/>
            <CityName name="Melbourne"/>
        </Layout>
    </BackgroundImage>
)

export default LocalWeather;