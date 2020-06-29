import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/homepage.container";
import LazyLoad from "react-lazyload";

class AllRoute extends Component {
  render() {
    return (
      <Switch>
        <LazyLoad placeholder={<div>Loading...</div>}>
          <Route exact strict path="/" component={Home} />
        </LazyLoad>
      </Switch>
    );
  }
}

export default AllRoute;
