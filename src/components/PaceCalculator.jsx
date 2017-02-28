import React, { PropTypes } from 'react';

import { Panel } from 'react-bootstrap';
import { Distance, Pace, Time } from '../components';

const PaceCalculator = (props) => (
  <Panel header={<h1>Pace Calculator</h1>} bsStyle="primary">
    <Distance
      onInputChange={props.onInputChange}
      distance={props.data.distance}
      pace={props.data.pace}
      time={props.data.time}
    />
    <Time
      time={props.data.time}
      onInputChange={props.onInputChange}
      validation={props.data.timeValidation}
      distance={props.data.distance}
    />
    <Pace
      pace={props.data.pace}
      onInputChange={props.onInputChange}
      validation={props.data.paceValidation}
      distance={props.data.distance}
    />
  </Panel>
);

PaceCalculator.propTypes = {
  data: PropTypes.object,
  onInputChange: PropTypes.func,
  updateCalulator: PropTypes.string,
  lastChanged: PropTypes.string,
};

export default PaceCalculator;
