import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';


const Pace = (props) => (
  <Row className="show-grid">
    <Col xs={7}>
      <FormGroup controlId="formPace">
        <ControlLabel>Pace</ControlLabel>
        <FormControl
          type="text"
          defaultValue={props.pace}
          thing="PACE"
        />
      </FormGroup>
      <button onClick={props.onInputChange}>test</button>
    </Col>
  </Row>
);

Pace.propTypes = {
  pace: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Pace;
