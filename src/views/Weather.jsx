import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import axios from 'axios'

function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.get(url)
        setData(response.data)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
      setLocation('')
    }
  }

  return (
    <Container fluid className="app">
      <Row className="search">
        <Col>
          <Form.Group controlId="locationInput">
            <Form.Control
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder='Enter Location'
              type="text" />
          </Form.Group>
        </Col>
      </Row>
      {data.list && (
        <Row className="container">
          <Col>
            <div className="top">
              <div className="location">
                <p>{data.city.name}, {data.city.country}</p>
              </div>
            </div>
            <Row>
              {data.list.slice(0, 8).map((forecast, index) => (
                <Col key={index}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>{new Date(forecast.dt_txt).toLocaleDateString()}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{new Date(forecast.dt_txt).toLocaleTimeString()}</Card.Subtitle>
                      <Card.Text>
                        <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
                        {forecast.weather[0].description}
                      </Card.Text>
                      <Card.Text>{forecast.main.temp.toFixed()}°F</Card.Text>
                      <Card.Text>Feels Like: {forecast.main.feels_like.toFixed()}°F</Card.Text>
                      <Card.Text>Humidity: {forecast.main.humidity}%</Card.Text>
                      <Card.Text>Wind Speed: {forecast.wind.speed.toFixed()} MPH</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Weather;