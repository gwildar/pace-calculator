import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';


const Pace = (props) => (
  <Row>
    <Col xs={7}>
      <FormGroup controlId="formPace" validationState={props.validation}>
        <ControlLabel>Pace {props.validation}</ControlLabel>
        <FormControl
          type="time"
          step="1"
          value={props.pace}
          onChange={(e) => props.onInputChange(e.target.value, 'PACE', props.distance)}
        />
      </FormGroup>
    </Col>
    <Col xs={5}>
      <FormGroup controlId="formUnitSelect">
        <ControlLabel>Units</ControlLabel>
        <FormControl
          componentClass="select"
          onChange={(e) => props.onInputChange(e.target.value, 'UNIT')}
        >
          <option value="mpkm">km / minute</option>
          <option value="mpm">mile / minute</option>
        </FormControl>
      </FormGroup>
    </Col>
  </Row>
);

Pace.propTypes = {
  pace: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  validation: PropTypes.string,
  distance: PropTypes.number,
};

export default Pace;
