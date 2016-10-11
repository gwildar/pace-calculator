import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Distance = (props) => (
  <FormGroup controlId="formDistanceSelect">
    <ControlLabel>Distance</ControlLabel>
    <FormControl
      componentClass="select"
      onChange={(e) => props.onInputChange(e.target.value, 'DISTANCE')}
    >
      <optgroup label="sprints">
        <option value="0.1">100m</option>
        <option value="0.2">200m</option>
        <option value="0.4">400m</option>
      </optgroup>
      <optgroup label="middle distance">
        <option value="0.8">800m</option>
        <option value="1">1000m</option>
        <option value="1.5">1,500m</option>
        <option value="1.60934">1 mile</option>
      </optgroup>
      <optgroup label="long distance">
        <option value="3">3000m</option>
        <option value="5">5000m (5km)</option>
        <option value="10">10,000m (10km)</option>
        <option value="21.0975">Half Marathon</option>
        <option value="42.195">Marathon</option>
      </optgroup>
    </FormControl>
  </FormGroup>
);

Distance.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Distance;
