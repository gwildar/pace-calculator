import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from  'react-bootstrap/lib/FormControl';
import Panel from 'react-bootstrap/lib/Panel';

export default class PaceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: "00:00:00", pace: "00:00:00", distance: "10"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.paceChange = this.paceChange.bind(this);
    this.distanceChange = this.distanceChange.bind(this);
  }

  calculateTime (distance, speed) {
    var time = distance / speed;
    return time; 
  }

  calculateSpeed (distance, time) {

    // calculate km per minute
    var speed = (time / distance) / 60;

    return speed;
  }

  timeChange(e) {
    var time = e.target.value;
    this.setState({time: time});
    var seconds = this.convertTimeToSeconds(time);
    var distance = this.state.distance;
    var speed = this.calculateSpeed (distance, seconds);
    var pace = this.formatPace(speed);
    console.log("pace: " + pace);
    this.setState({pace : pace});
  }

  formatPace (speed) {
    // I'm sure a third party library like momentjs could do this way better but I did it anyway

    var time = {
      hours : "00",
      minutes : "00",
      seconds : "00"
    }

    var pace = speed.toString().split('.');

    if (pace[0].length > 2) {
      time.hours = pace[0].substr(0, - 2);
    }

    time.minutes = pace[0].substr(-2);

    if (pace[1]) {
      time.seconds = pace[1].substr(0,2);
    }

    for (var prop in time) {
       console.log("obj." + prop + " = " + time[prop]);
      if (time[prop].length === 1) {
         time[prop] = "0" + time[prop];
         console.log("new time: " + time[prop]);
      } 
    }

    return time.hours + ":" + time.minutes + ":" + time.seconds; 
  }

  paceChange(e) {
    console.log(this.state.pace);
  }

  convertTimeToSeconds (time) {
    // when only hours and minutes are set input type="time" only returns hours and minutes. This adds missing seconds
    if (time.length === 5) {
      time = time + ":00";
    };
    var a = time.split(':'); 
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
    return seconds;
  }

  distanceChange (e) {
    var distance = e.target.value;
    this.setState({distance: distance});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Panel header="Pace Calculator">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formDistanceSelect">
            <ControlLabel>Distance</ControlLabel>
            <FormControl componentClass="select" onChange={this.distanceChange} value={this.state.distance}>
              <option value="5">5km</option>
              <option value="10">10km</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formTime">
            <ControlLabel>Time</ControlLabel>
            <FormControl type="time" value={this.state.time} onChange={this.timeChange} step="1" />
          </FormGroup>
          <FormGroup controlId="formPace">
            <ControlLabel>Pace</ControlLabel>
            <FormControl time="time" value={this.state.pace} onChange={this.paceChange} step="1" />
          </FormGroup>
          <Button type="submit">
            Convert
          </Button>
        </form>
      </Panel>
    );
  }
}