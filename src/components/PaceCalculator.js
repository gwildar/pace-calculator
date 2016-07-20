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
    this.timeChange = this.timeChange.bind(this);
    this.paceChange = this.paceChange.bind(this);
    this.distanceChange = this.distanceChange.bind(this);
  }

  timeChange(e) {
    var time = e.target.value;
    this.setState({time: time});

    var seconds = this.convertTimeToSeconds(time);
    var distance = this.state.distance;

    var pace = this.calculateSpeed (distance, seconds);

    console.log("pace " + pace);
    pace = this.formatTime(pace);
    this.setState({pace : pace});
  }

  paceChange(e) {
    var pace = e.target.value;
    this.setState({pace: pace});

    var seconds = this.convertTimeToSeconds(pace);
    var distance = this.state.distance;

    var time = this.calculateTime(distance,seconds);
    console.log(time);
    time = this.formatTime(time);
    console.log(time);

    this.setState({time: time});
  }

  distanceChange (e) {
    var distance = e.target.value;
    this.setState({distance: distance});
    
  }

  formatTime (timeValue) {
    // I'm sure a third party library like momentjs could do this way better but I did it anyway for the string manipulation practice

    var time = {
      hours : "00",
      minutes : "00",
      seconds : "00"
    }

    // this is a noddy way of doing it. Will refactor later. Also doesn't deal with days
    var hours = (Math.floor(timeValue / 3600));
    var remainingTime = timeValue - hours * 3600;
    var minutes = (Math.floor(remainingTime / 60)); 
    var remainingSeconds = remainingTime - (minutes * 60);

    time.hours = hours.toString();
    time.minutes = minutes.toString();
    time.seconds = remainingSeconds.toString();

    console.log("remainingTime: " + remainingTime);
    console.log("minutes: " + minutes);
    console.log("remainingSeconds: " + remainingSeconds);

    for (var prop in time) {
      if (time[prop].length === 1) {
         time[prop] = "0" + time[prop].toString();
      } 
    }

    return time.hours + ":" + time.minutes + ":" + time.seconds; 
  }

  calculateTime (distance, speed) {
    // calculate 
    var time = (speed * distance);
    return time; 
  }

  calculateSpeed (distance, time) {
    // calculate km per minute
    var speed = (time / distance);
    return speed;
  }

  convertTimeToSeconds (time) {
    // when only hours and minutes are set input type="time" only returns hours and minutes. This adds missing seconds
    if (time.length === 5) {
      time = time + ":00";
    };
    var a = time.split(':'); 
    return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
  }

  render() {
    return (
      <Panel header="Pace Calculator">
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
            <FormControl type="time" value={this.state.pace} onChange={this.paceChange} step="1" />
          </FormGroup>
      </Panel>
    );
  }
}