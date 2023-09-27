import  {useEffect, useState } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherForecast.css";

interface WeatherForecastProps {
query: string;
}

interface ForecastData {
cod: string;
list: {
dt: number;
main: {
temp: number;
feels_like: number;
};
}[];
}

function WeatherForecast(props: WeatherForecastProps) {
const [forecastData, setForecastData] = useState<ForecastData | null>(null);

useEffect(() => {
  if (props.query !== "") {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.query}&appid=bbd0b562e01a0ef44cef0350bd9ba80d&units=metric&lang=sv`
    )
      .then((response) => response.json())
      .then((result: { cod: string; list: Array<any> }) => {
        if (result.cod === "200") {
          console.log("result: ", result);
          setForecastData(result);
        }
      })
      .catch((error) => console.error(error));
  }
}, [props.query]);


return (
<div
   className="d-flex flex-wrap justify-content-center text-center "
   id="Card"
 >
{forecastData &&
forecastData.list
.filter((item, index) => index % 8 === 0) // Data för varje dag
.slice(1, 5) //Datum 4 kommande dagar
.map((item) => (
<Card
key={item.dt}
style={{
width: "18rem",
margin: "0.5rem",
}}
bg="light"
text="dark"
>
<Card.Body>
<Card.Title>
{new Date(item.dt * 1000).toLocaleDateString()}
</Card.Title>
<Card.Text>
Temperatur:{" "}
{item.main.temp ? Math.floor(item.main.temp) : ""}
°C
</Card.Text>
<Card.Text>
Känns som:{" "}
{item.main.feels_like ? Math.floor(item.main.feels_like) : ""}
°C
</Card.Text>
</Card.Body>
</Card>
))}
</div>
);
}

export default WeatherForecast;
