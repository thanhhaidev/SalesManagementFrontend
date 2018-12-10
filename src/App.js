import React, { Component } from "react";
import routes from "./helpers/routes";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Footer from "./components/layout/Footer/commonFooter";
import Dashboard from "./components/pages/dashboard/Dashboard";
import requireAuth from "./components/hoc/RequireAuth";
import noRequireAuth from "./components/hoc/RequireNotAuth";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={noRequireAuth(Login)} />
          <Route path="/header" exact component={requireAuth(Footer)} />
          <Route
            path="/dashboard"
            exact={true}
            component={requireAuth(Dashboard)}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
