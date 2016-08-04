import React, { PropTypes } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import * as TimeFunctions from './TimeFunctions';

export default class Distance extends React.Component {
  constructor(props) {
    super(props);
    this.distanceChange = this.distanceChange.bind(this);
  }

  distanceChange(e) {
    const distance = e.target.value;
    const time = this.props.time;
    let pace = this.props.pace;

    const seconds = TimeFunctions.convertTimeToSeconds(time);
    pace = TimeFunctions.calculateSpeed(distance, seconds);
    pace = TimeFunctions.formatTime(pace);
    this.props.handleChange(time, pace, distance);
  }

  render() {
    return (
      <FormGroup controlId="formDistanceSelect" validationState={this.props.validation}>
        <ControlLabel>Distance</ControlLabel>
        <FormControl
          componentClass="select"
          onChange={this.distanceChange}
          value={this.props.distance}
        >
          <option value="5">5km</option>
          <option value="10">10km</option>
        </FormControl>
      </FormGroup>
    );
  }
}

Distance.propTypes = {
  distance: PropTypes.number,
  time: PropTypes.number,
  handleChange: PropTypes.func,
  pace: PropTypes.number,
  validation: PropTypes.string,
};
