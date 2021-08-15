//
import windSolidDark from "../../assets/windSoliddark.svg";
import dropletDark from "../../assets/dropletdark.svg";
import cloudSolidDark from "../../assets/cloudSoliddark.svg";
import { SearchLocationData } from "../../Context/Interfaces";
// styles
import { Wrapper } from "./WeatherCard.style";
const LocationCard = ({ Weather }: { Weather: SearchLocationData }) => {
  const { name, main, weather, dt, wind, clouds } = Weather;
  const { temp, humidity } = main;
  const { description, icon } = weather[0];
  const date = new Date(dt * 1000);
  return (
    <Wrapper>
      <div className="top-bar">
        <h4>{name}</h4>
        <h4>{date.toLocaleDateString()}</h4>
      </div>
      <div className="temperature">
        <div className="temperature-info">
          <h2 className="temperature-temp">{temp} ° C</h2>
          <h2 className="temperature-temp">{description.toUpperCase()}</h2>
        </div>
        <div className="temperature-icon">
          <div className="weather-img">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="taglist">
        <div className="tags">
          <img src={windSolidDark} alt="" />{" "}
          <div className="tag-text">{wind.speed} m/s</div>
        </div>
        <div className="tags">
          <img src={dropletDark} alt="" />{" "}
          <div className="tag-text">{humidity} %</div>
        </div>
        <div className="tags">
          <img src={cloudSolidDark} alt="" />{" "}
          <div className="tag-text">{clouds.all} %</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LocationCard;
