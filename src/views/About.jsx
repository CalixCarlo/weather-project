import {Accordion, Container, Row, Col} from 'react-bootstrap';
import bk1 from "./assets/bk1.png"


function About () {
  return (
    <Container >
      <Row className='about-container p-5'>
      <Col md={6}>
     <div className='article'>
     <article>Welcome to the About page for the 5days Weather App - the ultimate tool for staying on top of weather forecasts!

Are you tired of constantly checking your local weather channel or website to plan your day? Look no further than the 5days Weather App, which offers reliable and accurate weather forecasts for the next five days, all in one convenient place.

Our user-friendly interface makes it easy to navigate and understand weather data, including temperature, wind speed, humidity, and more. Plus, we provide real-time updates to ensure that you always have the latest information at your fingertips.

But what sets the 5days Weather App apart from other weather apps is our commitment to personalized weather alerts. Simply set your preferences and we will send you notifications for severe weather conditions, such as thunderstorms, blizzards, or heat waves, so that you can stay safe and prepared.

Don't let the weather catch you off guard - download the 5days Weather App today and stay one step ahead of the forecast!</article>
     </div>
      </Col>
      <Col md={6}>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1" className=''>
        <Accordion.Header>What is My Weather App about?</Accordion.Header>
        <Accordion.Body>
          My Weather App is a weather forecast that tell what is happening in the atmosphere at any time
          or short  period of time. Weather conditions can change suddenly. Today  
          may be warm and sunny, tomorrow may be cool and cloudy. Weather conditions 
          include clouds, rain, snow, sleet, hail, fog, mist, sunshine, wind, 
          temperature and thunderstorms.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does this My Weather App help?</Accordion.Header>
        <Accordion.Body>
          It help by letting people know what is the weather today, Tommorrow and 
          in the next day, so you will be prepare to bring umbrella when you go outside.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are the 5 descriptions of weather?</Accordion.Header>
        <Accordion.Body>
          The five main types of weather are: sunny, cloudy, windy, rainy, and stormy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What causes weather?</Accordion.Header>
        <Accordion.Body>
          The local weather that impacts our daily lives results from large global 
          patterns in the atmosphere caused by the interactions of solar radiation, 
          Earth's large ocean, diverse landscapes, and motion in space.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Can I search the weather from another country?</Accordion.Header>
        <Accordion.Body>
          Yes,  you can search the weather from another country even if it's Local or International.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Does this My Weather App is Accurate?</Accordion.Header>
        <Accordion.Body>
          Not Really, but a seven-day forecast can accurately predict the weather 
          about 80 percent of the time and a five-day forecast can accurately predict 
          the weather approximately 90 percent of the time. However, a 10-day—or 
          longer—forecast is only right about half the time.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion></Col>
    </Row>
    </Container>
    
  )
}

export default About