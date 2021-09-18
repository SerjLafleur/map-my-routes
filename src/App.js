import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SelectRoutes from './components/SelectRoutes';
import ListRoutes from './components/ListRoutes';
import DetailsRoute from './components/DetailsRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <SelectRoutes />
          </Route>
          <Route path='/list-routes'>
            <ListRoutes />
          </Route>
          <Route path='/details-route'>
            <DetailsRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
