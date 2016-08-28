import React, { PropTypes } from 'react';

import { Panel } from 'react-bootstrap';


const PaceCalculator = (props) => (
    <Panel header="Pace Calculator">
      <Distance {...props} distanceChange={this.props.distanceChange} />
      <Time {...props}timeChange={this.props.timeChange} />
      <Pace {...props} paceChange={this.props.paceChange} />
    </Panel>
);

Pace.propTypes = {
  distanceChange: PropTypes.function;
  TimeChange: PropTypes.function;
  paceChange: PropTypes.function;
};

export default PaceCalculator;
