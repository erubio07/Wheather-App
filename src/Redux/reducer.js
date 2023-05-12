import { GET_CITY, CLOSE_CARD } from "./types";

const initialState = {
  cities: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        cities: action.payload,
      };

    case CLOSE_CARD:
      const updatedCities = state.cities.filter(
        (c) => c.location.name !== action.payload
      );
      return {
        ...state,
        cities: updatedCities,
      };

    default: {
      return {
        ...state,
      };
    }
  }
}
