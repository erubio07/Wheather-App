import { GET_CITY } from "./types";

const initialState = {
  cities: [],
  favorites: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        cities: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
}
