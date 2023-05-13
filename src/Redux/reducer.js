import { GET_CITY, CLOSE_CARD, ORDER_CARD } from "./types";

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

    case ORDER_CARD:
      const sortedCities =
        action.payload === "A-Z"
          ? state.cities.sort((a, b) =>
              a.location.name.localeCompare(b.location.name, "fr", {
                ignorePunctuation: true,
              })
            )
          : state.cities.sort((a, b) =>
              b.location.name.localeCompare(a.location.name, "fr", {
                ignorePunctuation: true,
              })
            );

      return {
        ...state,
        cities: sortedCities,
      };

    default: {
      return {
        ...state,
      };
    }
  }
}
