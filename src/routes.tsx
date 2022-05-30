import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import * as P from "./components/pages";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user" element={<P.User />} />
        <Route path="/" element={<P.Home />} />
        <Route path="*" element={<P.Page404 />} />
      </Switch>
    </Router>
  );
};
