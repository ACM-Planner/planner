import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path='*' component={NotFound} />
  </Router>
);

export default Routes;
