import { connect } from 'react-redux';

// TODO: compose the time functions better
// import { compose } from 'ramda';

import {
  convertTimeToSeconds,
  formatTime,
  calculateTime,
  calculateSpeed,
} from '../utilities/TimeFunctions';

import {
  updatePace,
  updateTime,
  updateDistance,
} from '../actions';

import PaceCalculator from '../components/PaceCalculator.jsx';

function calculateNewPace(unit, dispatch, distance) {
  // TODO: refactor in FP format
  const newTime = formatTime(calculateTime(distance, convertTimeToSeconds(unit)));
  dispatch(updatePace(unit));
  dispatch(updateTime(newTime));
}

function calculateNewTime(unit, dispatch, distance) {
  // TODO: refactor in FP format
  const newPace = formatTime(calculateSpeed(distance, convertTimeToSeconds(unit)));
  dispatch(updatePace(newPace));
  dispatch(updateTime(unit));
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (unit, value, distance) => {
    switch (value) {
      case 'PACE':
        return calculateNewPace(unit, dispatch, distance);
      case 'TIME':
        return calculateNewTime(unit, dispatch, distance);
      case 'DISTANCE':
        return dispatch(updateDistance(parseInt(unit, 10)));
      default:
        return null;
    }
  },
});

const mapStateToProps = (state) => ({
  data: state.data,
});

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaceCalculator);

export default CalculatorContainer;
