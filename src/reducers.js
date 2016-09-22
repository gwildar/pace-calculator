import { combineReducers } from 'redux';

const initialSetup = { time: '00:00:00', pace: '00:00:00', distance: '5' };

const data = (state = initialSetup, action) => {
  switch (action.type) {
    case 'PACE':
      return Object.assign({}, state, {
        pace: action.value,
      });
    case 'TIME':
      return Object.assign({}, state, {
        time: action.value,
      });
    case 'DISTANCE':
      return Object.assign({}, state, {
        distance: action.value,
      });
    default:
      return state;
  }
};

const lastChanged = (state = 'TEST', action) => {
  switch (action.type) {
    case 'UPDATE_CALCULATOR':
      return action.value;
    default:
      return state;
  }
};

const paceCalculator = combineReducers({
  lastChanged,
  data,
});

export default paceCalculator;
