import React, { Component } from 'react';
import MainCalendar from './MainCalendar';
import * as moment from "moment/moment";


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