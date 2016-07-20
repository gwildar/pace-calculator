import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from  'react-bootstrap/lib/FormControl';
import Panel from 'react-bootstrap/lib/Panel';

export default class PaceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: "", pace: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('ce');
  }
  render() {
    return (
      <Panel header="Pace Calculator">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formDistanceSelect">
            <ControlLabel>Distance</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">5km</option>
              <option value="other">10km</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formTime">
            <ControlLabel>Time</ControlLabel>
            <FormControl type="time" value={this.state.time} />
          </FormGroup>
          <FormGroup controlId="formPace">
            <ControlLabel>Pace</ControlLabel>
            <FormControl type="number" value={this.state.pace} />
          </FormGroup>
          <Button type="submit">
            Convert
          </Button>
        </form>
      </Panel>
    );
  }
}