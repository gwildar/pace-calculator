import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Time = (props) => (
  <FormGroup controlId="formTime">
    <ControlLabel>Time</ControlLabel>
    <FormControl
      type="time"
      value={props.time}
      step="1"
      onChange={(e) => props.onInputChange(e.target.value, 'TIME')}
    />
  </FormGroup>
);

Time.propTypes = {
  time: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};

export default Time;
