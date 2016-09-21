import React, { PropTypes } from 'react';

import { Panel } from 'react-bootstrap';
import { Pace, Time } from '../components';

const PaceCalculator = (props) => (
  <Panel header="Pace Calculator">
    {props.lastChanged}
    <Time time={props.data.time} onInputChange={props.onInputChange} />
    <Pace pace={props.data.pace} onInputChange={props.onInputChange} />
  </Panel>
);

PaceCalculator.propTypes = {
  data: PropTypes.object,
  onInputChange: PropTypes.func,
  updateCalulator: PropTypes.string,
  lastChanged: PropTypes.string,
};

export default PaceCalculator;
