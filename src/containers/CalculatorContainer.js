import { connect } from 'react-redux';

import {
  convertTimeToSeconds,
  formatTime,
  calculateTime,
  calculateSpeed,
} from '../utilities/TimeFunctions';

import {
  updateCalulator,
  updatePace,
  updateTime,
  updateDistance,
  updateAll,
} from '../actions';

import PaceCalculator from '../components/PaceCalculator.jsx';

const getData = (data) => (data);

const calculatePace = (data) => {
  const seconds = convertTimeToSeconds(data.pace);
  const newTime = formatTime(calculateTime(data.distance, seconds));
  const newData = { time: newTime, pace: data.pace, distance: data.distance };
  return newData;
};

const calculateNewTime = (data) => {
  const seconds = convertTimeToSeconds(data.time);
  const newPace = formatTime(calculateSpeed(data.distance, seconds));
  const newData = { time: data.time, pace: newPace, distance: data.distance };
  return newData;
};


const calculateChange = (data, value) => {
  switch (value) {
    case 'PACE':
      return calculatePace(data);
    case 'TIME':
      return calculateNewTime(data);
    case 'DISTANCE':
      return calculateNewTime(data);
    default:
      return getData(data);
  }
};


const mapStateToProps = (state) => ({
  data: calculateChange(state.data, state.lastChanged),
  lastChanged: state.lastChanged,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (unit, value) => {
    dispatch(updateCalulator(value));
    switch (value) {
      case 'PACE':
        return dispatch(updatePace(unit));
      case 'TIME':
        return dispatch(updateTime(unit));
      case 'DISTANCE':
        return dispatch(updateDistance(unit));
      default:
        return null;
    }
  },
  updateAll: (distance, pace, time) => {
    dispatch(updateAll(distance, pace, time));
  },
});

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaceCalculator);

export default CalculatorContainer;
