import { useContext} from "react";
import { useTransition, animated } from "react-spring";
import { GlobalContext } from "../../Context/GlobalState";
// styles
import { Wrapper } from "./WeekForcast.style";
// Components
import WeekDay from "./WeekDay";
const WeekList = () => {
  const globalContext = useContext(GlobalContext);
  const { WeekForeCast } =
    globalContext;

  const transitions = useTransition(WeekForeCast?.daily!, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });
 
  return (
    <Wrapper>
      {WeekForeCast &&
        transitions((style, day) => (
          <animated.div style={style}>
            <WeekDay key={day.dt} day={day} />
          </animated.div>
        ))}
    </Wrapper>
  );
};

export default WeekList;
