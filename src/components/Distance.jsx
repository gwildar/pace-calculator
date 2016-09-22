import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Distance = (props) => (
  <FormGroup controlId="formDistanceSelect">
    <ControlLabel>Distance</ControlLabel>
    <FormControl
      componentClass="select"
      onChange={(e) => props.onInputChange(e.target.value, 'DISTANCE')}
    >
      <option value="5">5km</option>
      <option value="10">10km</option>
    </FormControl>
  </FormGroup>
);

Distance.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Distance;
