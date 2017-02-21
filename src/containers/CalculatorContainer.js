import { connect } from 'react-redux';

// todo: compose the time functions better
// import { compose } from 'ramda';

import {
  updatePace,
  updateTime,
  updateDistance,
} from '../actions';

import PaceCalculator from '../components/PaceCalculator.jsx';

const mapStateToProps = (state) => ({
  data: state.data,
});

function testFunction(unit, dispatch) {
  dispatch(updatePace(unit));
  dispatch(updateTime('02:00'));
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (unit, value) => {
    switch (value) {
      case 'PACE':
        return testFunction(unit, dispatch);
      case 'TIME':
        return dispatch(updateTime(unit));
      case 'DISTANCE':
        return dispatch(updateDistance(unit));
      default:
        return null;
    }
  },
});

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaceCalculator);

export default CalculatorContainer;
