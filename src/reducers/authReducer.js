import * as types from "../constants/ActionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.AUTHENTICATED:
      return { ...state, authenticated: true };
    case types.UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case types.AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}
