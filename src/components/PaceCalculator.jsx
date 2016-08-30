import React, { PropTypes } from 'react';

import { Panel } from 'react-bootstrap';
import { Distance, Pace, Time } from '../components';

const PaceCalculator = (props) => (
  <Panel header="Pace Calculator">
    <Distance distance="0" time="0" distanceChange={props.distanceChange} />
    <Time pace="0" timeChange={props.timeChange} />
    <Pace pace="0" paceChange={props.paceChange} />
  </Panel>
);

PaceCalculator.propTypes = {
  distanceChange: PropTypes.function,
  timeChange: PropTypes.function,
  paceChange: PropTypes.function,
};

export default PaceCalculator;
