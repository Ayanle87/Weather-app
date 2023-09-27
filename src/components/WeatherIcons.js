import React from "react";

function WeatherIcons({ url, description }) {
  return (
    <div className="icon">
      <img src={url} alt={description} />
    </div>
  );
}

export default WeatherIcons;
