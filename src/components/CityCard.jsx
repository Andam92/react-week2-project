import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Clouds from "../assets/img/Rain-clouds.jpg";
import Clear from "../assets/img/Clear-Sky.jpg";
import Rainy from "../assets/img/Rain.jpg";

function City() {
  const [weatherData, setWeatherData] = useState(null);
  const tempConverter = (temperature) => Math.trunc(temperature) - 273;

  function imgSwitch() {
    switch (weatherData.weather[0].main) {
      case "Clear":
        return Clear + " ☀️";
      case "Clouds":
        return Clouds + " ⛅";
      case "Rain":
        return Rainy + " ☔";
      default:
        return Clouds;
    }
  }

  const fetchCityWeather = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.69&lon=10.62&appid=8b3ec13c6eee81663290b559dd321c73"
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.log("Errore in response", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCityWeather();
    console.log(weatherData);
  }, []);

  useEffect(() => {
    if (weatherData !== weatherData) {
      fetchCityWeather();
      console.log(weatherData);
    }
  }, [weatherData]);

  return (
    <Container style={{ fontFamily: "Montserrat, sans-serif" }}>
      <Row className="align-items-center">
        <Col xs={6} className="offset-1">
          <div
            className="text-light p-3"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              width: "70%",

              borderRadius: "20px",
            }}
          >
            <h1 className="text-center mb-5">Today's Weather</h1>
            <h2>
              <span style={{ fontWeight: "200" }}>City: </span>
              {weatherData && weatherData.name}
            </h2>
            <hr />
            <h3>
              <span style={{ fontWeight: "200" }}>Weather: </span>
              {weatherData &&
                weatherData.weather[0].main === "Clear" &&
                weatherData.weather[0].main}
            </h3>
            <h3>
              <span style={{ fontWeight: "200" }}>Temperature: </span>
              {weatherData && tempConverter(weatherData.main.temp) + "C°"}
            </h3>
            <h3>
              <span style={{ fontWeight: "200" }}>Humidity: </span>
              {weatherData && weatherData.main.humidity + "%"}
            </h3>
          </div>
        </Col>
        <Col xs={4}>
          <Card
            className="my-5 boxShadow boxRotate"
            style={{
              width: "26rem",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <Card.Img
              className="p-4"
              variant="top"
              src={weatherData && imgSwitch()}
              style={{ height: "25rem" }}
            />
            {
              <Card.Body>
                <Card.Title>
                  A picture of{" "}
                  <b>
                    {weatherData &&
                      weatherData.weather[0].main === "Clear" &&
                      weatherData.name}
                  </b>{" "}
                  sky ☀️
                </Card.Title>
              </Card.Body>
            }
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default City;
