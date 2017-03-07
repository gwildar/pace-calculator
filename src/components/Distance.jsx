import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Distance = props => (
  <FormGroup controlId="formDistanceSelect">
    <ControlLabel>Distance</ControlLabel>
    <FormControl
      componentClass="select"
      onChange={e => props.onInputChange(e.target.value, 'DISTANCE')}
    >
      <optgroup label="sprints">
        <option value="100m">100m</option>
        <option value="200m">200m</option>
        <option value="400m">400m</option>
      </optgroup>
      <optgroup label="middle distance">
        <option value="800m">800m</option>
        <option value="1000m">1000m</option>
        <option value="1500m">1,500m</option>
        <option value="mile">1 mile</option>
      </optgroup>
      <optgroup label="long distance">
        <option value="3000m">3000m</option>
        <option value="5km">5000m (5km)</option>
        <option value="10km">10,000m (10km)</option>
        <option value="half_marathon">Half Marathon</option>
        <option value="mile">Marathon</option>
      </optgroup>
    </FormControl>
  </FormGroup>
);

Distance.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Distance;
