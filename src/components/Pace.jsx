import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from  'react-bootstrap/lib/FormControl';

import * as TimeFunctions from './TimeFunctions';

export default class Pace extends React.Component {
  constructor(props) {
    super(props);
    this.paceChange = this.paceChange.bind(this);
  }

  paceChange(e) {
    var pace = e.target.value;
    var distance = this.props.distance;
    var seconds = TimeFunctions.convertTimeToSeconds(pace);
    var time = TimeFunctions.calculateTime(distance,seconds);
    
    time = TimeFunctions.formatTime(time);

    this.props.handleChange (time, pace, distance);
  }

  render() {
    return (
      <FormGroup controlId="formPace">
        <ControlLabel>Pace</ControlLabel>
        <FormControl type="time" value={this.props.pace} onChange={this.paceChange} step="1" />
      </FormGroup>
    );
  }
}
