import React, { PropTypes } from 'react';

import { Panel, Alert } from 'react-bootstrap';

import Distance from './Distance';
import Time from './Time';
import Pace from './Pace';

const PaceCalculator = props => (
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
  data: PropTypes.shape({
    pace: PropTypes.string,
    time: PropTypes.string,
    distance: PropTypes.string,
    paceValidation: PropTypes.string,
    timeValidation: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  alert: PropTypes.string,
};

export default PaceCalculator;
