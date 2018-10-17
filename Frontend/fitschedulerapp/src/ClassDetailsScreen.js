import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';


// req.params.id
const ClassDetailsScreen = (props) => {
  console.log(props);
    return (
      <div>
        <h1> {props.title} </h1>
        <h4> {props.description} </h4>
        <h4> {props.instructor} </h4>
        <h4> {props.start} </h4>
        <h4> {props.end} </h4>
            <Button onClick={e => props.history.push('/')}>Return home</Button>
      </div>
    );
}

export default withRouter(ClassDetailsScreen);