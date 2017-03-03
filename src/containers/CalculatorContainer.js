import { connect } from 'react-redux';

import {
  calculateNewPace,
  calculateNewTime,
  calculateNewDistance,
  calculateNewUnit,
} from '../actions';

import PaceCalculator from '../components/PaceCalculator.jsx';

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (unit, value) => {
    switch (value) {
      case 'PACE':
        return dispatch(calculateNewPace(unit));
      case 'TIME':
        return dispatch(calculateNewTime(unit));
      case 'DISTANCE':
        return dispatch(calculateNewDistance(unit));
      case 'UNIT':
        return dispatch(calculateNewUnit(unit));
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
