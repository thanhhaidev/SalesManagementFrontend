import React from "react";
import Login from "../components/pages/login/Login";
import Dashbord from "../components/pages/dashboard/Dashboard";

const routes = [
  {
    path: "/login",
    exact: true,
    main: () => <Login />
  },
  {
    path: "/dashbord",
    exact: false,
    main: () => <Dashbord />
  }
];

export default routes;
