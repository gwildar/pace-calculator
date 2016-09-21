import { combineReducers } from 'redux';

const initialSetup = { time: '0', pace: '0', distance: '0' };

function data(state = initialSetup, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const paceCalculator = combineReducers({
  data,
});

export default paceCalculator;
