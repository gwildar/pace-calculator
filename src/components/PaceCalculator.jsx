import React, { PropTypes } from 'react';

import { Panel } from 'react-bootstrap';
import { Distance, Pace, Time } from '../components';

const PaceCalculator = (props) => (
  <Panel header="Pace Calculator">
    <Distance distance={props.data.distance} />
    <Time time={props.data.time} />
    <Pace pace={props.data.pace} />
  </Panel>
);

PaceCalculator.propTypes = {
  data: PropTypes.object,
};

export default PaceCalculator;
