import { FETCH_MUSEUMS_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSEUMS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
