import routes, { RouteType } from 'pages/routes';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Scene: React.FC = () => {
  return (
    <Switch>
      {routes.map(({ path, component: Component } : RouteType, i) => (
        <Route path={path} exact key={`route-${i}`}>
          <Component key={i} />
        </Route>
      ))}
    </Switch>
  )
}

export default Scene
