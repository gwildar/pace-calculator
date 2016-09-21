import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Time = (props) => (
  <FormGroup controlId="formTime">
    <ControlLabel>Time</ControlLabel>
    <FormControl
      type="text"
      defaultValue={props.time}
      onChange={props.onInputChange}
      thing="TIME"
    />
  </FormGroup>
);

Time.propTypes = {
  time: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Time;
