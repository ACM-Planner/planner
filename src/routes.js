import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import NotFound from './components/NotFound';
import About from './components/About';
import Collaborators from './components/Collaborators';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/collaborators" component={Collaborators} />
    <Route path='*' component={NotFound} />
  </Router>
);

export default Routes;
