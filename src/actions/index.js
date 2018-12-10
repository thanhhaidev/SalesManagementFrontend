import * as types from "../constants/ActionTypes";
import * as Config from "../constants/Config";
import axios from "axios";

export const signInAction = ({ username, password }, history) => {
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
      history.push("/dashboard");
    } catch (error) {
      dispatch({
        type: types.AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    }
  };
};

export const signOutAction = () => {
  localStorage.clear();
  return {
    type: types.UNAUTHENTICATED
  };
};
