import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';

import Distance from './Distance';
import Time from './Time';
import Pace from './Pace';

import * as TimeFunctions from './TimeFunctions';

export default class PaceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.distanceChange = this.distanceChange.bind(this);
  }

  distanceChange (e) {
    var distance = e.target.value;
    this.setState({distance: distance});
  }

  render() {
    return (
      <Panel header="Pace Calculator">
          <Distance />
          <Time />
          <Pace />
      </Panel>
    );
  }
}