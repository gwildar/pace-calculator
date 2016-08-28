import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Time = (props) => (
  <FormGroup controlId="formTime">
    <ControlLabel>Time</ControlLabel>
    <FormControl type="time" value={props.time} onChange={props.timeChange} step="1" />
  </FormGroup>
);

Time.propTypes = {
  time: PropTypes.string,
  timeChange: PropTypes.func,
};

export default Time;
