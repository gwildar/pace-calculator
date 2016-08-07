import React, { PropTypes } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import * as TimeFunctions from './TimeFunctions';

export default class Pace extends React.Component {
  constructor(props) {
    super(props);
    this.paceChange = this.paceChange.bind(this);
    this.unitChange = this.unitChange.bind(this);
  }

  paceChange(e) {
    const pace = e.target.value;
    const distance = this.props.distance;
    const seconds = TimeFunctions.convertTimeToSeconds(pace);
    let time = TimeFunctions.calculateTime(distance, seconds);

    time = TimeFunctions.formatTime(time);
    this.props.handleChange(time, pace, distance, 'success');
  }

  unitChange(e) {
    let pace = TimeFunctions.convertTimeToSeconds(this.props.pace);
    const unit = e.target.value;
    if (unit === 'mpkm') {
      pace = TimeFunctions.convertKPMtoMPM(pace);
    } else if (unit === 'mpm') {
      pace = TimeFunctions.convertKPMtoMPM(pace);
    }
  }

  render() {
    return (
      <Row className="show-grid">
        <Col xs={7}>
          <FormGroup controlId="formPace" validationState={this.props.validation}>
            <ControlLabel>Pace</ControlLabel>
            <FormControl type="time" value={this.props.pace} onChange={this.paceChange} step="1" />
          </FormGroup>
        </Col>
        <Col xs={5}>
          <FormGroup controlId="formUnitSelect">
            <ControlLabel>Units</ControlLabel>
            <FormControl componentClass="select" onChange={this.unitChange} value={this.props.mpkm}>
              <option value="mpkm">km / minute</option>
              <option value="mpm">mile / minute</option>
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

Pace.propTypes = {
  distance: PropTypes.string,
  time: PropTypes.string,
  handleChange: PropTypes.func,
  pace: PropTypes.string,
  validation: PropTypes.string,
  mpkm: PropTypes.string,
};
