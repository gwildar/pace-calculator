import { combineReducers } from 'redux';

function calculator(state = {}, action) {
  switch (action.type) {
    case 'CALCULATE_PACE':
      return Object.assign({}, state, {
      });
    case 'CALULATE_TIME':
      return Object.assign({}, state, {
      });
    case 'CALCULATE_DISTANCE':
      return Object.assign({}, state, {
      });
    default:
      return state;
  }
}

export default combineReducers({
  calculator,
});
