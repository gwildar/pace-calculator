import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';


const Pace = (props) => (
  <Row className="show-grid" thing="PACE">
    <Col xs={7}>
      <FormGroup controlId="formPace">
        <ControlLabel>Pace</ControlLabel>
        <FormControl
          type="text"
          defaultValue={props.pace}
          onChange={() => props.onInputChange('PACE')}
        />
      </FormGroup>
    </Col>
  </Row>
);

Pace.propTypes = {
  pace: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Pace;
