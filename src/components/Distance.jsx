import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Distance = (props) => (
  <FormGroup controlId="formDistanceSelect">
    <ControlLabel>Distance</ControlLabel>
    <FormControl
      componentClass="select"
      onChange={props.distanceChange}
      value={props.distance}
    >
      <option value="5">5km</option>
      <option value="10">10km</option>
    </FormControl>
  </FormGroup>
);

Distance.propTypes = {
  distance: PropTypes.string,
  distanceChange: PropTypes.func,
};

export default Distance;
