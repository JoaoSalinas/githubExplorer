import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashbord from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashbord} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
