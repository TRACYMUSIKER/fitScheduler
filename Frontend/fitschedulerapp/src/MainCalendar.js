import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import './big-calendar.css';
import moment from 'moment';
import ClassDetailsModal from './ClassDetailsModal';
import { withRouter } from 'react-router-dom';


const localizer = BigCalendar.momentLocalizer(moment);

const MainCalendar = (props, context) => {
  let openClassDetailModal = event => props.handleShow;
  return (
  <div className ="main">
    <div className="main-calendar-container">
      <BigCalendar
        defaultDate={new Date()}
        defaultView="week"
        events={props.events}
        style={{ height: "100vh" }}
        localizer={localizer}
        onSelectEvent={(context)=> context.routes.location('/classes/3')}
        selectable={true}
        onSelectSlot={e => console.log(e)}
      />
    </div>
    <ClassDetailsModal {...props} />
  </div>  
    )
  }

export default withRouter(MainCalendar);