import React from 'react';

import { Panel } from 'react-bootstrap';

import Distance from './Distance.jsx';
import Time from './Time.jsx';
import Pace from './Pace.jsx';

import { updateCalculator } from '../actions/update.js';

import * as TimeFunctions from './TimeFunctions';


class PaceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '00:00:00',
      pace: '00:00:00',
      distance: '10',
      units: 'mpkm',
      validation: null,
    };
  }

  paceChange(e) {
    const pace = e.target.value;
    const distance = this.props.distance;
    const seconds = TimeFunctions.convertTimeToSeconds(pace);
    let time = TimeFunctions.calculateTime(distance, seconds);

    time = TimeFunctions.formatTime(time);
    this.props.handleChange(time, pace, distance, 'success');
  }

  timeChange(e) {
    const time = e.target.value;
    const distance = this.props.distance;
    const seconds = TimeFunctions.convertTimeToSeconds(time);
    let pace = TimeFunctions.calculateSpeed(distance, seconds);
    pace = TimeFunctions.formatTime(pace);

    this.props.handleChange(time, pace, distance);
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
        <Distance {...this.state} handleChange={this.handleChange} />
        <Time {...this.state} handleChange={this.handleChange} />
        <Pace {...this.state} handleChange={this.handleChange} />
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

const mapStateToProps = (state) => ({
  time: '00:00:00',
  pace: '00:00:00',
  distance: '10',
  units: 'mpkm',
});

export default connect(mapStateToProps, { update })(PaceCalculator);
