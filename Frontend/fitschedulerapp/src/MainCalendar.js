import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import './big-calendar.css';
import moment from 'moment';



const localizer = BigCalendar.momentLocalizer(moment);

const MainCalendar = (props) => {
  return (
    <div class="main-calendar-container">
      <BigCalendar
        defaultDate={new Date()}
        defaultView="week"
        events={props.events}
        style={{ height: "100vh" }}
        localizer={localizer}
        onSelectEvent={event => console.log(event)}
        selectable={true}
        onSelectSlot={e => console.log(e)}
      />
    </div>
    )
  }

export default MainCalendar;