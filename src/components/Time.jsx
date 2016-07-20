import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from  'react-bootstrap/lib/FormControl';

import * as TimeFunctions from './TimeFunctions';

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: "00:00:00"};
    this.timeChange = this.timeChange.bind(this);
  }

  timeChange(e) {
    var time = e.target.value;
    this.setState({time: time});

    var seconds = TimeFunctions.convertTimeToSeconds(time);
    var distance = this.state.distance;

    var pace = TimeFunctions.calculateSpeed (distance, seconds);

    pace = TimeFunctions.formatTime(pace);
    this.setState({pace : pace});
  }

  render() {
    return (
      <FormGroup controlId="formTime">
        <ControlLabel>Time</ControlLabel>
        <FormControl type="time" value={this.state.time} onChange={this.timeChange} step="1" />
      </FormGroup>
    );
  }
}
