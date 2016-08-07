import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';

import Distance from './Distance.jsx';
import Time from './Time.jsx';
import Pace from './Pace.jsx';

export default class PaceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '00:00:00',
      pace: '00:00:00',
      distance: '10',
      units: 'mpkm',
      validation: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(time, pace, distance, validation) {
    this.setState({ time });
    this.setState({ distance });
    this.setState({ pace });
    this.setState({ validation });
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
