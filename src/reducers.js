import { combineReducers } from 'redux';

import {
  UPDATE_PACE,
  UPDATE_TIME,
  UPDATE_DISTANCE,
  UPDATE_PACE_VALIDATION,
  UPDATE_TIME_VALIDATION,
} from './actions';

const initialSetup = {
  time: '00:00:00',
  pace: '00:00:00',
  distance: 0.1,
};

const initialValidation = {
  paceValidation: null,
  timeValidation: null,
};

function data(state = initialSetup, action) {
  switch (action.type) {
    case UPDATE_PACE:
      return Object.assign({}, state, {
        pace: action.value,
      });
    case UPDATE_TIME:
      return Object.assign({}, state, {
        time: action.value,
      });
    case UPDATE_DISTANCE:
      return Object.assign({}, state, {
        distance: action.value,
      });
    default:
      return state;
  }
}

function validation(state = initialValidation, action) {
  switch (action.type) {
    case UPDATE_PACE_VALIDATION:
      return action.value;
    case UPDATE_TIME_VALIDATION:
      return action.value;
    default:
      return state;
  }
}

const paceCalculator = combineReducers({
  data,
  validation,
});

export default paceCalculator;
