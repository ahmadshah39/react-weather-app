//
import windSolid from "../../assets/windSolid.svg";
import droplet from "../../assets/droplet.svg";
import cloudSolid from "../../assets/cloudSolid.svg";
import { Daily, SearchLocationData } from "../../Context/Interfaces";
// styles
import { Wrapper } from "./WeatherCard.style";
const WeekDayCard = ({
  Weather,
  Searched,
}: {
  Weather: Daily;
  Searched: SearchLocationData | null;
}) => {
  const { temp, weather, wind_speed, dt, humidity, clouds } = Weather;
  
  const  name  = Searched !== null ? Searched.name : "Your Location Data";
  

  const date = new Date(dt * 1000);
  return (
    <Wrapper>
      <div className="top-bar">
        <h4>{name}</h4>
        <h4>{date.toLocaleDateString()}</h4>
      </div>
      <div className="temperature">
        <div className="temperature-info">
          <h2 className="temperature-temp">{temp.max} ° C</h2>
          <h2 className="temperature-temp">
            {weather[0].description.toUpperCase()}
          </h2>
        </div>
        <div className="temperature-icon">
          <div className="weather-img">
            <img
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="taglist">
        <div className="tags">
          <img src={windSolid} alt="" />{" "}
          <div className="tag-text">{wind_speed} m/s</div>
        </div>
        <div className="tags">
          <img src={droplet} alt="" />{" "}
          <div className="tag-text">{humidity} %</div>
        </div>
        <div className="tags">
          <img src={cloudSolid} alt="" />{" "}
          <div className="tag-text">{clouds} %</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WeekDayCard;
