import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Time = (props) => (
  <FormGroup controlId="formTime" validationState={props.validation}>
    <ControlLabel>Time</ControlLabel>
    <FormControl
      type="time"
      value={props.time}
      step="1"
      onChange={(e) => props.onInputChange(e.target.value, 'TIME', props.distance)}
    />
  </FormGroup>
);

Time.propTypes = {
  time: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  validation: PropTypes.string,
  distance: PropTypes.number,
};

export default Time;
