import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from  'react-bootstrap/lib/FormControl';
import Grid from 'react-bootstrap/lib/Grid';
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
    var pace = e.target.value;
    var distance = this.props.distance;
    var seconds = TimeFunctions.convertTimeToSeconds(pace);
    var time = TimeFunctions.calculateTime(distance,seconds);
    
    time = TimeFunctions.formatTime(time);

    this.props.handleChange (time, pace, distance);
    debugger;
  }

  unitChange(e) {
    var pace = TimeFunctions.convertTimeToSeconds(this.props.pace);
    var unit = e.target.value;
    var distance = this.props.distance;
    var time = this.props.time;
    if (unit === "mpkm") { 
      pace = TimeFunctions.convertKPMtoMPM(pace);
    }
    else if (unit === "mpm") {
      pace = TimeFunctions.convertKPMtoMPM(pace);
    }
    debugger;
  }

  render() {
    return (
     <Row className="show-grid">
        <Col xs={7}> 
          <FormGroup controlId="formPace">
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
