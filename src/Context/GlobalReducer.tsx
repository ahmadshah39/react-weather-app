import {
  GET_SEARCHED_LOCATION,
  GET_WEEK_FORECAST,
  SET_CURRENT,
  CLEAR_ALL,
  SET_ERROR,
  ClEAR_ERROR,
  SET_LOADING,
  SET_THEME,
  GET_USER_LOCATION
} from "./ActionTypes";
import { SearchLocationData, LocationWeekForcast, Daily ,UserLocationData} from "./Interfaces";
import { State } from "./GlobalState";

// types
type action =
  | {
      type: typeof GET_USER_LOCATION;
      payload: UserLocationData | null;
    }
  | {
      type: typeof GET_SEARCHED_LOCATION;
      payload: SearchLocationData | null;
    }
  | {
      type: typeof GET_WEEK_FORECAST;
      payload: LocationWeekForcast | null;
    }
  | {
      type: typeof SET_CURRENT;
      payload: Daily;
    }
  | {
      type: typeof SET_ERROR;
      payload: string;
    }
  | {
      type: typeof CLEAR_ALL;
    }
  | {
      type: typeof ClEAR_ERROR;
    }
  | {
      type: typeof SET_LOADING;
    }
  | {
      type: typeof SET_THEME;
    };

const GlobalReducer = (state: State, action: action) => {
  switch (action.type) {
    case GET_USER_LOCATION:
      return {
        ...state,
        UserLocation: action.payload,
        loading: false,
      };
    case GET_SEARCHED_LOCATION:
      return {
        ...state,
        SearchedLocation: action.payload,
        loading: false,
      };
    case GET_WEEK_FORECAST:
      return {
        ...state,
        WeekForeCast: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        Current: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ClEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case CLEAR_ALL:
      return {
        ...state,
        Current: null,
        SearchedLocation: null,
        WeekForeCast: null,
      };

    default:
      throw new Error("Bad action");
  }
};
export default GlobalReducer;
