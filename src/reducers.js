import { combineReducers } from 'redux';

const initialSetup = { time: '0', pace: '0', distance: '0' };

const data = (state = initialSetup, action) => {
  switch (action.type) {
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
