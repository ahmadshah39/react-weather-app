import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import {
  SearchLocationData,
  LocationWeekForcast,
  Daily,
  UserLocationData,
} from "./Interfaces";
import {
  GET_SEARCHED_LOCATION,
  GET_WEEK_FORECAST,
  SET_CURRENT,
  CLEAR_ALL,
  SET_ERROR,
  ClEAR_ERROR,
  SET_LOADING,
  GET_USER_LOCATION,
  SET_THEME,
} from "./ActionTypes";
// Types
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export type State = {
  UserLocation: UserLocationData | null;
  SearchedLocation: SearchLocationData | null;
  WeekForeCast: LocationWeekForcast | null;
  Current: Daily | null;
  error: string | null;
  loading: boolean;
  theme: boolean;
};

export interface IGlobalContextPorps {
  getSerachedLocationData: (text: string) => void;
  getUserLocationWeather: () => void;
  getSerachedLocationWeekForecast: (lat: number | "", lon: number | "") => void;
  setWeatherDay: (daily: Daily) => void;
  setLoading: () => void;
  switchTheme: () => void;
  clearAll: () => void;
  UserLocation: UserLocationData | null;
  SearchedLocation: SearchLocationData | null;
  WeekForeCast: LocationWeekForcast | null;
  Current: Daily | null;
  error: string | null;
  loading: boolean;
  theme: boolean;
}

const initialState: State = {
  UserLocation: null,
  SearchedLocation: null,
  WeekForeCast: null,
  Current: null,
  error: null,
  loading: false,
  theme: false,
};

export const GlobalContext = createContext<IGlobalContextPorps>({
  UserLocation: initialState.UserLocation,
  SearchedLocation: initialState.SearchedLocation,
  WeekForeCast: initialState.WeekForeCast,
  Current: initialState.Current,
  error: initialState.error,
  loading: initialState.loading,
  theme: initialState.theme,
  getUserLocationWeather: () => {},
  getSerachedLocationData: () => {},
  getSerachedLocationWeekForecast: () => {},
  setWeatherDay: () => {},
  setLoading: () => {},
  switchTheme: () => {},
  clearAll: () => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //   Actions

  //   getUserLocation Weather data
  const getUserLocationWeather = async () => {
    navigator.geolocation.getCurrentPosition(fetchUserLocationWeather);
  };
  const fetchUserLocationWeather = async (success: any) => {
    let { latitude, longitude } = success.coords;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,daily&units=metric&appid=${API_KEY}`;
    try {
      const res = await (await fetch(url)).json();
      getSerachedLocationWeekForecast(res.lat, res.lon);
      dispatch({
        type: GET_USER_LOCATION,
        payload: res,
      });
      setTimeout(() => dispatch({ type: ClEAR_ERROR }), 5000);
    } catch (err) {
      console.log(err);
      dispatch({
        type: CLEAR_ALL,
      });
    }
  };

  // Get Weather Data of Searched Loacation
  const getSerachedLocationData = async (text: string) => {
    const location = text === "" ? "London" : text;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

    try {
      const res = await (await fetch(url)).json();
      if (res.cod === 200) {
        getSerachedLocationWeekForecast(res.coord.lat, res.coord.lon);
        dispatch({
          type: GET_SEARCHED_LOCATION,
          payload: res,
        });
        return;
      }
      dispatch({
        type: SET_ERROR,
        payload: res.message,
      });
      setTimeout(() => dispatch({ type: ClEAR_ERROR }), 5000);
    } catch (err) {
      console.log(err);
      dispatch({
        type: CLEAR_ALL,
      });
    }
  };

  // Get 7 Days Weather Forecast of Searched Loacation
  const getSerachedLocationWeekForecast = async (
    lat: number | "",
    lon: number | ""
  ) => {
    if (lat !== "" && lon !== "") {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,&units=metric&appid=${API_KEY}`;
      try {
        const res = await (await fetch(url)).json();
        dispatch({
          type: GET_WEEK_FORECAST,
          payload: res,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  // Set Weather Day
  const setWeatherDay = async (daily: Daily) => {
    dispatch({
      type: SET_CURRENT,
      payload: daily,
    });
  };
  // Set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };
  // Switch Theme
  const switchTheme = () => {
    dispatch({
      type: SET_THEME,
    });
  };
  // Clear All
  const clearAll = () => {
    dispatch({
      type: CLEAR_ALL,
    });
  };

  // return Provider
  return (
    <GlobalContext.Provider
      value={{
        UserLocation: state.UserLocation,
        SearchedLocation: state.SearchedLocation,
        WeekForeCast: state.WeekForeCast,
        Current: state.Current,
        error: state.error,
        loading: state.loading,
        theme: state.theme,
        getUserLocationWeather,
        getSerachedLocationData,
        getSerachedLocationWeekForecast,
        setWeatherDay,
        setLoading,
        switchTheme,
        clearAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
