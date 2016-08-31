import React from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Distance = () => (
  <FormGroup controlId="formDistanceSelect">
    <ControlLabel>Distance</ControlLabel>
    <FormControl componentClass="select">
      <option value="5">5km</option>
      <option value="10">10km</option>
    </FormControl>
  </FormGroup>
);

export default Distance;
