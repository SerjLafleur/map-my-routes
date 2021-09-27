import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SelectRoutes from './components/SelectRoutes';
import ListRoutes from './components/ListRoutes';
import DetailsRoute from './components/DetailsRoute';
import './App.css';

function App() {

  const [dateIn, setDateIn] = useState()
  const [dateOut, setDateOut] = useState()
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <SelectRoutes dateIn={dateIn} dateOut={dateOut} setDateIn={setDateIn} setDateOut={setDateOut} />
          </Route>
          <Route path='/list-routes'>
            <ListRoutes dateIn={dateIn} dateOut={dateOut} />
          </Route>
          <Route path='/details-route/:id'>
            <DetailsRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
