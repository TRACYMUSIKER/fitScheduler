import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import * as moment from "moment/moment";
import 'moment/locale/nb';


Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const MainCalendar = (props) => {
  return (
    <div class="main-calendar-container">
      <Calendar
        defaultDate={new Date()}
        defaultView="month"
        events={props.events}
        style={{ height: "100vh" }}
      />
    </div>
    )
  }

export default MainCalendar;