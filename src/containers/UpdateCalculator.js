import { connect } from 'react-redux';
import { updateTime } from '../actions';

import PaceCalculator from '../components/PaceCalculator.jsx';

const mapStateToProps = (state) => ({
  time: state.time,
  distance: state.distance,
  pace: state.pace,
});

const mapDispatchToProps = (dispatch) => ({
  paceChange: () => {
    dispatch(updateTime(10));
  },
});

const UpdateCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaceCalculator);

export default UpdateCalculator;
