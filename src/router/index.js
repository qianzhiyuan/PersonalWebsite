import React from 'react';
import routeLists from './routerList';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={!route.routes}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
      )}
    />
  );
}

const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        {
          routeLists.map((route, i) => {
            return <RouteWithSubRoutes key={i} {...route} />
          })
        }
        <Redirect to={'/index'} />
      </Switch>
    </Router>
  )
}

export default {RouteWithSubRoutes, RouterConfig};
