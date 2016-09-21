import { connect } from 'react-redux';

import { updateCalulator } from '../actions';
import PaceCalculator from '../components/PaceCalculator.jsx';

const getData = (data) => (data);

const calculateChange = (data, value) => {
  switch (value) {
    case 'PACE':
      return getData(data);
    case 'TIME':
      return getData(data);
    case 'DISTANCE':
      return getData(data);
    default:
      return getData(data);
  }
};


const mapStateToProps = (state) => ({
  data: calculateChange(state.data, state.updateCalulator),
  lastChanged: state.lastChanged,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: () => {
    dispatch(updateCalulator('CHEESE'));
  },
});

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaceCalculator);

export default CalculatorContainer;
