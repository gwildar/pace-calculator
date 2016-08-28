import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';


const Pace = (props) => (
  <Row className="show-grid">
    <Col xs={7}>
      <FormGroup controlId="formPace">
        <ControlLabel>Pace</ControlLabel>
        <FormControl type="time" value={props.pace} onChange={props.paceChange} step="1" />
      </FormGroup>
    </Col>
    <Col xs={5}>
      <FormGroup controlId="formUnitSelect">
        <ControlLabel>Units</ControlLabel>
        <FormControl componentClass="select" onChange={props.unitChange} value={props.mpkm}>
          <option value="mpkm">km / minute</option>
          <option value="mpm">mile / minute</option>
        </FormControl>
      </FormGroup>
    </Col>
  </Row>
);

Pace.propTypes = {
  pace: PropTypes.string,
  mpkm: PropTypes.string, // should be oneOf
  paceChange: PropTypes.function,
  unitChange: PropTypes.unitChange,
};

export default Pace;
