import React, { PropTypes } from 'react';

import { Panel } from 'react-bootstrap';
import { Distance, Pace, Time } from '../components';

const PaceCalculator = (props) => (
  <Panel header="Pace Calculator">
    <Distance />
    <Time {...props} />
    <Pace {...props} paceChange={props.paceChange} />
  </Panel>
);

PaceCalculator.propTypes = {
  paceChange: PropTypes.func.isRequired,
};

export default PaceCalculator;
