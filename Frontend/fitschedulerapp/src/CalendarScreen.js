import React, { Component } from 'react';
import MainCalendar from './MainCalendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';



export default class CalendarScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "Some title"
        }
      ]
    };
  }
  render(){
    return <MainCalendar {...this.state} />
  }
}