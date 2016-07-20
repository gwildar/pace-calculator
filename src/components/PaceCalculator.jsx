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