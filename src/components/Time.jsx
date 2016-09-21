import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Time = (props) => (
  <FormGroup controlId="formTime">
    <ControlLabel>Time</ControlLabel>
    <FormControl type="text" value={props.time} />
  </FormGroup>
);

Time.propTypes = {
  time: PropTypes.string,
};

export default Time;
