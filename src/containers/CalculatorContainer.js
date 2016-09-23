import { connect } from 'react-redux';

import * as TimeFunctions from './TimeFunctions';

import {
  updateCalulator,
  updatePace,
  updateTime,
  updateDistance,
  updateAll,
} from '../actions';

import PaceCalculator from '../components/PaceCalculator.jsx';

const getData = (data) => (data);

const calculatePace = (data) => ({
    const time = TimeFunctions.formatTime(TimeFunctions.calculateTime(data.distance, seconds));
    const newData = {time, pace: data.pace, distance: data.distance };
    return newData;
});

const calculateChange = (data, value) => {
  // eslint-disable-next-line
  console.log(`lastChanged: ${value}`);
  switch (value) {
    case 'PACE':
      return calculatePace(data);
    case 'TIME':
      return getData(data);
    case 'DISTANCE':
      return getData(data);
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
