import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from  'react-bootstrap/lib/FormControl';

import * as TimeFunctions from './TimeFunctions';

export default class Distance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {distance: "10"};
    this.distanceChange = this.distanceChange.bind(this);
  }

  distanceChange (e) {
    var distance = e.target.value;
    this.setState({distance: distance});
    this.props.onDistanceChange(distance);
  }

  render() {
    return (
      <FormGroup controlId="formDistanceSelect">
        <ControlLabel>Distance</ControlLabel>
          <FormControl componentClass="select" onChange={this.distanceChange} value={this.state.distance}>
          <option value="5">5km</option>
          <option value="10">10km</option>
        </FormControl>
      </FormGroup>
      );
  }
}