import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';


const Pace = (props) => (
  <Row className="show-grid">
    <Col xs={7}>
      <FormGroup controlId="formPace">
        <ControlLabel>Pace</ControlLabel>
        <FormControl type="text" value={props.pace} />
      </FormGroup>
    </Col>
    <Col xs={5}>
      <FormGroup controlId="formUnitSelect">
        <ControlLabel>Units</ControlLabel>
        <FormControl componentClass="select">
          <option value="mpkm">km / minute</option>
          <option value="mpm">mile / minute</option>
        </FormControl>
      </FormGroup>
    </Col>
  </Row>
);

Pace.propTypes = {
  pace: PropTypes.string,
};

export default Pace;
