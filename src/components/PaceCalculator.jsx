import React, { PropTypes } from 'react';

import { Panel, Alert } from 'react-bootstrap';
import { Distance, Pace, Time } from '../components';

const PaceCalculator = (props) => (
  <Panel header={<h1>Pace Calculator</h1>} bsStyle="primary">
    {props.alert &&
      <Alert bsStyle="danger">
        {props.alert}
      </Alert>
    }
    <Distance
      onInputChange={props.onInputChange}
      distance={props.data.distance}
    />
    <Time
      time={props.data.time}
      onInputChange={props.onInputChange}
      validation={props.data.timeValidation}
    />
    <Pace
      pace={props.data.pace}
      onInputChange={props.onInputChange}
      validation={props.data.paceValidation}
    />
  </Panel>
);

PaceCalculator.propTypes = {
  data: PropTypes.object,
  onInputChange: PropTypes.func,
  updateCalulator: PropTypes.string,
  lastChanged: PropTypes.string,
  alert: PropTypes.string,
};

export default PaceCalculator;
