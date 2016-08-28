import React, { PropTypes } from 'react';

import { Panel } from 'react-bootstrap';

import { Distance, Time, Pace } from '../components';

import * as TimeFunctions from '../utilities/TimeFunctions';


class PaceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.paceChange = this.paceChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.distanceChange = this.distanceChange.bind(this);
  }

  handleChange() {
  }

  paceChange(e) {
    const pace = e.target.value;
    const distance = this.props.distance;
    const seconds = TimeFunctions.convertTimeToSeconds(pace);
    let time = TimeFunctions.calculateTime(distance, seconds);

    time = TimeFunctions.formatTime(time);
    // this.props.handleChange(time, pace, distance, 'success');
  }

  timeChange(e) {
    const time = e.target.value;
    const distance = this.props.distance;
    const seconds = TimeFunctions.convertTimeToSeconds(time);
    let pace = TimeFunctions.calculateSpeed(distance, seconds);
    pace = TimeFunctions.formatTime(pace);

    // this.props.handleChange(time, pace, distance);
  }

  distanceChange(e) {
    const distance = e.target.value;
    const time = this.props.time;
    let pace = this.props.pace;

    const seconds = TimeFunctions.convertTimeToSeconds(time);
    pace = TimeFunctions.calculateSpeed(distance, seconds);
    pace = TimeFunctions.formatTime(pace);
    // this.props.handleChange(time, pace, distance);
  }

  unitChange(e) {
    let pace = TimeFunctions.convertTimeToSeconds(this.props.pace);
    const unit = e.target.value;
    if (unit === 'mpkm') {
      pace = TimeFunctions.convertKPMtoMPM(pace);
    } else if (unit === 'mpm') {
      pace = TimeFunctions.convertKPMtoMPM(pace);
    }
  }

  render() {
    return (
      <Panel header="Pace Calculator">
        <Distance {...this.state} distanceChange={this.distanceChange} />
        <Time {...this.state} timeChange={this.timeChange} />
        <Pace {...this.state} paceChange={this.paceChange} />
      </Panel>
    );
  }
}

PaceCalculator.propTypes = {
  time: PropTypes.string,
  pace: PropTypes.string,
  distance: PropTypes.number,
  units: PropTypes.string,
};
