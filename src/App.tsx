import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// styles
import "./App.css";
//styled-containers
import {
  Container,
  Title,
  BodyWrapper,
} from "./components/styled-components/Container";
//components
import SearchFrom from "./components/SearchForm/SearchFrom";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeekList from "./components/WeekForcast/WeekList";
import Alert from "./components/Alert/Alert";
// Providers
import { GlobalContext } from "./Context/GlobalState";
import LoadingBar from "./components/LoadingBar/LoadingBar";
import ThemeToggleBtn from "./components/ThemeToggleBtn/ThemeToggleBtn";

function App() {
  const globalContext = useContext(GlobalContext);
  const { error, loading, theme, getUserLocationWeather } = globalContext;
  useEffect(() => {
    getUserLocationWeather();
    // eslint-disable-next-line
  }, []);
  const dark = {
    text: "#fff",
    cardBG: "#8744ff2b",
    bodyBg: "#15003a",
  };
  const light = {
    text: "#5d5d5d",
    cardBG: "#ffffff94",
    bodyBg: "#a4fff8ad",
  };
  return (
    <ThemeProvider theme={theme === true ? light : dark}>
      <BodyWrapper>
        {loading && <LoadingBar />}
        <ThemeToggleBtn />
        <Container>
          {error && <Alert error={error} />}
          <Title>Weather Today</Title>
          <SearchFrom />
          <WeatherCard />
          <WeekList />
        </Container>
      </BodyWrapper>
    </ThemeProvider>
  );
}

export default App;
