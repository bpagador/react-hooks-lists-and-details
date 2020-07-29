import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

import DisplayCharacters from '../../containers/DisplayCharacters';
import RenderDetails from '../../containers/RenderDetails';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayCharacters} />
        <Route path="/:name" component={RenderDetails} />
      </Switch>

    </Router>
  ); 
}
