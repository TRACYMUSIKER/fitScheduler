import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import CalendarScreen from './CalendarScreen';
import ClassDetailsScreen from './ClassDetailsScreen';
import bootstrapmodal from './bootstrap-modal';
import MainCalendar from './MainCalendar';

let Router = (props) => 
  <HashRouter>
    <div>
      <Switch>
        <Route path='/class/:id' component={ClassDetailsScreen} />
        <Route exact path='/' component={MainCalendar} />
        <Route exact path='/boot/' component={bootstrapmodal} />
      </Switch>
    </div>
  </HashRouter>

export default Router;