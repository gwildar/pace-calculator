import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';

import Distance from './Distance.jsx';
import Time from './Time.jsx';
import Pace from './Pace.jsx';

import * as TimeFunctions from './TimeFunctions';

export default class PaceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: "00:00:00", pace: "00:00:00", distance: "10"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (time, pace, distance) {
    this.setState({time: time});
    this.setState({distance: distance});
    this.setState({pace: pace});
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