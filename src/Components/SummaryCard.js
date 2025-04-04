

import moment from "moment";
import "../css/SummaryCard.css";
import React from "react";

// https://openweathermap.org/weather-conditions#Icon-list
function SummaryCard({ day, degreeSymbol }) {
  const day_icon = `${
    "https://openweathermap.org/img/wn/" + day.weather[0]["icon"]
  }@2x.png`;

  const formattedTemp = Math.round(day.main.temp);

  return (
    <li className="summary-items">
      <div>
        <p className="">
          {formattedTemp}
          {degreeSymbol}
        </p>
        <p className="">
          {day.weather[0].main}
          <img src={day_icon} alt="" />
        </p>
        <p className="">{day.weather[0].description}</p>
        <p className="">{moment(day.dt_txt).format("hh:mm a")}</p>
      </div>
    </li>
  );
}

export default SummaryCard;