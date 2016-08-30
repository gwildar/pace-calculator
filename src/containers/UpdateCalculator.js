import { connect } from 'react-redux';
import actions from '../actions';

import PaceCalculator from '../components/PaceCalculator';


const mapStateToProps = (state) => {
  return {
    time: "1",
    distance: "2",
    pace: "3",
  }
}

const mapDispatchToProps = (Dispatch) => {
  return {
    distanceChange : (distance) => {
      dispatch(updateDistance(distance))
    }
  }
}

const UpdateCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaceCalculator)

export default UpdateCalculator;