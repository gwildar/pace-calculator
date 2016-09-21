import { connect } from 'react-redux';

import PaceCalculator from '../components/PaceCalculator.jsx';


const getData = (data) => (data);

const mapStateToProps = (state) => ({
  data: getData(state.data),
});


const CalculatorContainer = connect(
  mapStateToProps
)(PaceCalculator);

export default CalculatorContainer;
