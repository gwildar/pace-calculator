import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';

import Distance from './Distance.jsx';
import Time from './Time.jsx';
import Pace from './Pace.jsx';

import * as TimeFunctions from './TimeFunctions';

export default class PaceCalculator extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDistancdChange (distance) {
    console.log(distance);
  }

  handleTimeChange (time) {
    console.log(time);
  }

  handlePaceChange (pace) {
    console.log(pace);
  }

  render() {
    return (
      <Panel header="Pace Calculator">
          <Distance onDistanceChange={this.handleDistanceChange} />
          <Time onTimeChange={this.handleTimeChange} />
          <Pace onPaceChange={this.handlePaceChange} />
      </Panel>
    );
  }
}