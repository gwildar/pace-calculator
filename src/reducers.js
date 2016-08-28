import { combineReducers } from 'redux';

const initialState = {
  time: '00:00:00',
  pace: '00:00:00',
  distance: '10',
  units: 'mpkm',
};

function updateCalculator(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return Object.assign({}, state, {
        time: action.value,
      });
    case 'UPDATE_PACE':
      return Object.assign({}, state, {
        pace: action.value,
      });
    case 'UPDATE_DISTANCE':
      return Object.assign({}, state, {
        distance: action.value,
      });
    case 'UPDATE_UNITS':
      return Object.assign({}, state, {
        units: action.value,
      });
    default:
      return state;
  }
}

export default combineReducers({
  updateCalculator,
});
