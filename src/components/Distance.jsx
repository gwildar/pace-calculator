import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from  'react-bootstrap/lib/FormControl';

import * as TimeFunctions from './TimeFunctions';

export default class Distance extends React.Component {
  constructor(props) {
    super(props);
    this.distanceChange = this.distanceChange.bind(this);
  }

  distanceChange (e) {
    var distance = e.target.value;
    var time = this.props.time;
    var pace = this.props.pace;

    var seconds = TimeFunctions.convertTimeToSeconds(time);
    var pace = TimeFunctions.calculateSpeed (distance, seconds);
    pace = TimeFunctions.formatTime(pace)

    this.props.handleChange (time, pace, distance);
  }

  render() {
    return (
      <FormGroup controlId="formDistanceSelect">
        <ControlLabel>Distance</ControlLabel>
          <FormControl componentClass="select" onChange={this.distanceChange} value={this.props.distance}>
          <option value="5">5km</option>
          <option value="10">10km</option>
        </FormControl>
      </FormGroup>
      );
  }
}