import React, { Component } from 'react';

const MainCalender = () => {
  return <div class="main-calendar-container">
            <iframe src="https://calendar.google.com/calendar/embed?src=3vslbucv8dovurrkgkssflgjao%40group.calendar.google.com&ctz=America%2FNew_York" 
              style={{border: 0}} 
              width={800} 
              height={600} 
              frameBorder={0} 
              scrolling="no" />
         </div>
  }

export default MainCalendar;