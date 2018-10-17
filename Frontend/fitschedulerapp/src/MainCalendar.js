import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import './big-calendar.css';
import moment from 'moment';
import { Modal, Button, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';


const localizer = BigCalendar.momentLocalizer(moment);
class MainCalendar extends React.Component {
  constructor(props) {
    super(props);

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
    };
  }
  render() {
  return (
  <div className ="main">
    <div className="main-calendar-container">
      <BigCalendar
        defaultDate={new Date()}
        defaultView="week"
        events={this.state.events}
        style={{ height: "100vh" }}
        localizer={localizer}
        onSelectEvent={e => this.props.history.push('/class/' + e.eventid)}
        selectable={true}
        onSelectSlot={e => console.log(e)}
      />
    </div>
      </div>
    );
  }
}

export default withRouter(MainCalendar);