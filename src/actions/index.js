import {
  convertTimeToSeconds,
  formatTime,
  calculateTime,
  calculateSpeed,
} from '../utilities/TimeFunctions';

//
// actions
//

export const UPDATE_PACE = 'UPDATE_PACE';
export const UPDATE_TIME = 'UPDATE_TIME';
export const UPDATE_DISTANCE = 'UPDATE_DISTANCE';
export const UPDATE_CALCULATOR = 'UPDATE_CALCULATOR';
export const UPDATE_PACE_VALIDATION = 'UPDATE_PACE_VALIDATION';
export const UPDATE_TIME_VALIDATION = 'UPDATE_TIME_VALIDATION';

//
// action creators
//

export function updateCalulator(distance, time, pace) {
  return {
    type: UPDATE_CALCULATOR,
    distance,
    time,
    pace,
  };
}

export function updatePaceValidation(value) {
  return {
    type: UPDATE_PACE_VALIDATION,
    value,
  };
}

export function updateTimeValidation(value) {
  return {
    type: UPDATE_TIME_VALIDATION,
    value,
  };
}

export function calculateNewPace(pace) {
  return (dispatch, getState) => {
    // calculate new time based on pace
    // TODO: refactor in FP format
    const time = formatTime(calculateTime(getState().data.distance, convertTimeToSeconds(pace)));
    dispatch(updateCalulator(getState().data.distance, time, pace));
  };
}

export function calculateNewTime(time) {
  return (dispatch, getState) => {
    // TODO: refactor in FP format
    const pace = formatTime(calculateSpeed(getState().data.distance, convertTimeToSeconds(time)));
    dispatch(updateCalulator(getState().data.distance, time, pace));
  };
}

export function calculateNewDistance(distance) {
  return (dispatch, getState) => {
    // TODO: refactor in FP format
    const pace = formatTime(calculateSpeed(distance, convertTimeToSeconds(getState().data.time)));
    dispatch(updateCalulator(parseInt(distance, 10), getState().data.time, pace));
  };
}
