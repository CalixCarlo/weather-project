import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import axios from 'axios';
import sunrise from "../assets/sunrise.png"
import sunset from "../assets/sunset.png"

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [sunriseSunset, setSunriseSunset] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
  const sunriseSunsetUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
      setLocation('');
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(sunriseSunsetUrl);
        setSunriseSunset(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (location) {
      fetchData();
    }
  }, [location]);

  const getFiveDayForecast = () => {
    if (!data.list) return [];
    const forecasts = data.list.filter(forecast => {
      const date = new Date(forecast.dt_txt);
      return date.getHours() === 12 && date.getDate() > new Date().getDate();
    });
    
    return forecasts.slice(0, 5).map(forecast => {
      const { main, weather } = forecast;
      let comment;
  
      if (weather[0].main === 'Clear') {
        comment = weather[0].description.includes('few clouds') ? 'Mostly sunny today!' : "It's going to be a hot one today!";
      } else if (weather[0].main === 'Clouds') {
        comment = "Expect some clouds today.";
      } else if (weather[0].main === 'Rain') {
        comment = "Don't forget your umbrella today!";
      } else if (weather[0].main === 'Snow') {
        comment = "Bundle up! It's going to be a cold one.";
      } else if (main.humidity >= 80) {
        comment = "It's going to be humid today.";
      } else if (main.temp < 50) {
        comment = "It's going to be chilly today.";
      } else {
        comment = 'Enjoy your day!';
      }
  
      return { ...forecast, comment };
    });
  };

  return (
    <Container className="app">
      <Row className="search">
        <Col>
          <Form.Group controlId="locationInput">
            <Form.Control className="seacrh"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder="Enter Location"
              type="text"
            />
          </Form.Group>
        </Col>
        <Col>
        </Col>
      </Row>
      {data.list && (
        <Row className="container">
          <Col>
            <div className="top">
              <div className="location">
                <p>
                  {data.city.name}, {data.city.country}
                </p>
              </div>
              {sunriseSunset.sys && (
                <div className="sunrise-sunset">
                  <Row md={6}>
                    <Col >
                    <img src= {sunrise} className="me-3"/>
                    Sunrise: {new Date(sunriseSunset.sys.sunrise * 1000).toLocaleTimeString()}
                    </Col>
                    <Col>
                    <img src= {sunset} className="me-3"/>
                    Sunset: {new Date(sunriseSunset.sys.sunset * 1000).toLocaleTimeString()}
                    </Col>
                  </Row>
                </div>
              )}
            </div>
            
            <Row>
              {getFiveDayForecast().map((forecast, index) => (
                <Col key={index}>
                  <Card className="forecast text-center">
                    <Card.Body>
                      <Card.Title>
                        {new Date(forecast.dt_txt).toLocaleDateString()}
                      </Card.Title>
                      <Card.Subtitle className="time m-2">
                        {new Date(forecast.dt_txt).toLocaleTimeString()}
                      </Card.Subtitle>
                      <Card.Text>
                        <img
                          src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                          alt={forecast.weather[0].description}
                        />
                        {forecast.weather[0].description}
                      </Card.Text>
                      <Card.Text>{forecast.main.temp.toFixed()}°F</Card.Text>
                      <Card.Text>
                        Feels Like: {forecast.main.feels_like.toFixed()}°F
                      </Card.Text>
                      <Card.Text>
                        Humidity: {forecast.main.humidity}%
                      </Card.Text>
                      <Card.Text>
                        Wind Speed: {forecast.wind.speed.toFixed()} MPH
                      </Card.Text>
                      <Card.Text>{forecast.comment}</Card.Text>
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