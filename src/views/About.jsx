import Accordion from 'react-bootstrap/Accordion';

function About () {
  return (
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
    </Accordion>
    
  )
}

export default About