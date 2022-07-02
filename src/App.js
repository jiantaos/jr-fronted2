// render layout of local weather and background image, other cities and forecasts
import styled from 'styled-components';
import BackgroundImage from './components/BackgroundImage';
import Forecast from './components/Forecast';
import LocalWeather from './components/LocalWeather';
import OtherCities from './components/OtherCities';

const Wrapper = styled(BackgroundImage)`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  `
//HTML 渲染原理：从左到右，自上到下，下一层会把上一层的属性盖住
const Container = styled.div`
  border-radius: 32px;
  overflow:hidden;//让里面的内容不溢出容器
  box-shadow: 0 0 16px rgb(0 0 0/50%);
  background-color:white;
  /* width: 800px; */
`
const Layout = styled.div`
  display:flex;
  padding:36px 0;`

const VerticalDivider = styled.div`
  width:3px;
  background-color: rgba(0,0,0,0.1);
  `
const App = () => (
  <Wrapper src="https://wallpaperaccess.com/full/2629319.png">
    <Container>
      <LocalWeather/>
      <Layout>
        <OtherCities/>
        <VerticalDivider/>
        <Forecast/>
      </Layout>
    </Container>
  </Wrapper>
  
)
export default App
