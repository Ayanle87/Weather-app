import { React, useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import WeatherIcons from "../components/WeatherIcons";
import WeatherForecast from "./WeatherForecast";
import { InputContext } from "../App";

function Home() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=bbd0b562e01a0ef44cef0350bd9ba80d`
  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=bbd0b562e01a0ef44cef0350bd9ba80d`

  const [data, setData] = useState(null);
  const [time, setTime] = useState(moment().format("HH:mm"));
  const [query, setQuery] = useContext(InputContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().format("HH:mm"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=bbd0b562e01a0ef44cef0350bd9ba80d&units=metric&lang=sv`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.error(error));
  }, [query]);

  return (
    <>
      <main>
        <div className="container">
          <Card
            border="dark"
            className="mb-3 text-center"
            style={{ width: "100%", height: "280px" }}
            bg="light"
          >
            <Card.Body>
              <Card.Header>Vädret idag</Card.Header>
              <div className="location">
                <Card.Title>
                  <p>{data && data.name}</p>
                  {data && data.weather && (
                    <WeatherIcons
                      url={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                      description={data.weather[0].description}
                    />
                  )}
                </Card.Title>
                <p>Svensk tid: {time}</p>
              </div>
              <div className="temp">
                {data && data.main ? (
                  <h1>{Math.floor(data.main.temp)}°C</h1>
                ) : null}
              </div>
              <div className="description">
                <p>
                  {data &&
                    data.weather &&
                    data.weather[0].description.charAt(0).toUpperCase() +
                      data.weather[0].description.slice(1)}
                </p>
              </div>
            </Card.Body>
          </Card>

          <div className="bottom">
            <div className="feels">
              <p className="bold">
                {" "}
                {data && data.main && data.main.feels_like
                  ? Math.floor(data.main.feels_like)
                  : ""}
                °C
              </p>
              <p> Känns som </p>
            </div>
            <div className="humidity">
              <p className="bold">
                {" "}
                {data && data.main && data.main.humidity
                  ? Math.floor(data.main.humidity)
                  : ""}
                {""}%
              </p>
              <p>Luftfuktighet</p>
            </div>

            <div className="wind">
              <p className="bold">
                {data && data.wind && data.wind.speed
                  ? Math.floor(data.wind.speed)
                  : ""}
                m/s
              </p>
              <p>Vindhastighet</p>
            </div>
          </div>
        </div>
        <WeatherForecast query={query} />
      </main>
    </>
  );
}

export default Home;
