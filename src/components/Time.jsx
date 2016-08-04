import React, { PropTypes } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import * as TimeFunctions from './TimeFunctions';

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.timeChange = this.timeChange.bind(this);
  }

  timeChange(e) {
    const time = e.target.value;
    const distance = this.props.distance;
    const seconds = TimeFunctions.convertTimeToSeconds(time);
    let pace = TimeFunctions.calculateSpeed(distance, seconds);
    pace = TimeFunctions.formatTime(pace);

    this.props.handleChange(time, pace, distance);
  }

  render() {
    return (
      <FormGroup controlId="formTime" validationState={this.props.validation}>
        <ControlLabel>Time</ControlLabel>
        <FormControl type="time" value={this.props.time} onChange={this.timeChange} step="1" />
      </FormGroup>
    );
  }
}

Time.propTypes = {
  distance: PropTypes.number,
  time: PropTypes.number,
  handleChange: PropTypes.func,
  pace: PropTypes.number,
  validation: PropTypes.string,
};
