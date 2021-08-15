//
import { Fragment, useContext } from "react";
import { useTransition, animated } from "react-spring";
import { GlobalContext } from "../../Context/GlobalState";
import LocationCard from "./LocationCard";
import UserLocCard from "./UserLocCard";
import WeekDayCard from "./WeakDayCard";
// styles
import { Wrapper } from "./WeatherCard.style";
const WeatherCard: React.FC = () => {
  const globalContext = useContext(GlobalContext);
  const { SearchedLocation, Current, UserLocation } = globalContext;

  const transitionUser = useTransition(UserLocation, {
    from: { opacity: 0, height: 0, width: 0 },
    enter: { opacity: 1, height: "auto", width: "auto" },
  });
  const transitionCurr = useTransition(Current, {
    from: { opacity: 0, height: 0, width: 0 },
    enter: { opacity: 1, height: "auto", width: "auto" },
  });
  const transitionLoc = useTransition(SearchedLocation, {
    from: { opacity: 0, height: 0, width: 0 },
    enter: { opacity: 1, height: "auto", width: "auto" },
  });
  if (UserLocation === null) {
    return (
      <Wrapper>
        <h1 className="enter-loc">Enter Location....</h1>
      </Wrapper>
    );
  }

  return (
    <Fragment>
      {Current !== null
        ? transitionCurr(
            (style, item) =>
              item && (
                <animated.div style={style}>
                  <WeekDayCard Weather={Current} Searched={SearchedLocation} />
                </animated.div>
              )
          )
        : ( SearchedLocation !== null ?
           transitionLoc(
            (style, item) =>
              item && (
                <animated.div style={style}>
                  <LocationCard Weather={SearchedLocation} />
                </animated.div>
              )
          )
          :
          transitionUser(
            (style, item) =>
              item && (
                <animated.div style={style}>
                  <UserLocCard Weather={UserLocation} />
                </animated.div>
              )
          )
        )
        }
    </Fragment>
  );
};

export default WeatherCard;
