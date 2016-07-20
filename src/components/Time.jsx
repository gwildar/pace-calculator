import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from  'react-bootstrap/lib/FormControl';

import * as TimeFunctions from './TimeFunctions';

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.timeChange = this.timeChange.bind(this);
  }

  timeChange(e) {
    var time = e.target.value;
    var distance = this.props.distance;
    var seconds = TimeFunctions.convertTimeToSeconds(time);
    var pace = TimeFunctions.calculateSpeed (distance, seconds);
    pace = TimeFunctions.formatTime(pace);

    this.props.handleChange (time, pace, distance);
  }

  render() {
    return (
      <FormGroup controlId="formTime">
        <ControlLabel>Time</ControlLabel>
        <FormControl type="time" value={this.props.time} onChange={this.timeChange} step="1" />
      </FormGroup>
    );
  }
}
