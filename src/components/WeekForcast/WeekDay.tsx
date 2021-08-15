import { Daily } from "../../Context/Interfaces";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
const WeekDay = ({ day }: { day: Daily }) => {
  const date = new Date(day.dt * 1000);
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const globalContext = useContext(GlobalContext);
  const { setWeatherDay } = globalContext;
  const onClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setWeatherDay(day);
  };
  return (
    <div className="card" onClick={onClick}>
      <h4 className="day">{weekday[date.getDay()]}</h4>
      <span className="date">{date.toLocaleDateString()}</span>
      <div className="icon">
        <img
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <div className="temprature-maxmin">
        <p>Max</p>
        <p>Min</p>
      </div>
      <div className="temprature-maxmin">
        <p>{day.temp.max}</p>
        <p>{day.temp.min}</p>
      </div>
    </div>
  );
};

export default WeekDay;
