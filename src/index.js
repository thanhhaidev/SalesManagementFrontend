import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store/index";
import * as types from "./constants/ActionTypes";

const user = localStorage.getItem("user");

if (user) {
  store.dispatch({
    type: types.AUTHENTICATED
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
