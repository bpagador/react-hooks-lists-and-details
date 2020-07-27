import React from 'react';

import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Router exact path="/" component={} />
        <Router exact path=":name" component={Detail} />
      </Switch>

    </Router>
  ); 
}
