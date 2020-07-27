import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

import DisplayCharacters from '../../containers/DisplayCharacters';
import Character from '../Characters/Character';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DisplayCharacters} />
        <Route exact path=":name" component={Character} />
      </Switch>

    </Router>
  ); 
}
