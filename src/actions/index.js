import * as types from "../constants/ActionTypes";
import * as Config from "../constants/Config";
import axios from "axios";

export function signInAction({ username, password }, hashHistory) {
  return async dispatch => {
    try {
      const res = await axios.post(`${Config.API_URL}/user/login`, {
        username,
        password
      });

      dispatch({
        type: types.AUTHENTICATED
      });
      localStorage.setItem("user", res.data.token);
      hashHistory.push("/dashboard");
    } catch (error) {
      dispatch({
        type: types.AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    }
  };
}

export function signOutAction() {
  localStorage.clear();
  return {
    type: types.UNAUTHENTICATED
  };
}
