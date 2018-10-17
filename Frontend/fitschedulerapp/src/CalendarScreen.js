import React, { Component } from 'react';
import MainCalendar from './MainCalendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';



export default class CalendarScreen extends Component {
  constructor(props){
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "Yoga class",
          instructor: "Stein",
          description: 'do work',
          eventid: 2
        }
      ],
      show: false
    };
  }
  handleClose() { 
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render(){
    return <MainCalendar {...this.state} />
  }
}