import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import CalendarScreen from './CalendarScreen';
import ClassDetailsModal from './ClassDetailsModal';

let Router = () => 
  <HashRouter>
    <div>
      <Switch>
        <Route path='/class-details' component={ClassDetailsModal} />
        <Route exact path='/' component={CalendarScreen} />
      </Switch>
    </div>
  </HashRouter>

export default Router;