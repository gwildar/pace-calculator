import {
  convertTimeToSeconds,
  formatTime,
  calculateTime,
  calculateSpeed,
} from '../utilities/TimeFunctions';

import distances from '../distances.json';

//
// actions
//

export const UPDATE_CALCULATOR = 'UPDATE_CALCULATOR';
export const UPDATE_UNIT = 'UPDATE_UNIT';
export const UPDATE_PACE_VALIDATION = 'UPDATE_PACE_VALIDATION';
export const UPDATE_TIME_VALIDATION = 'UPDATE_TIME_VALIDATION';
export const SHOW_ERROR = 'SHOW_ERROR';

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
export function updateUnit(unit) {
  return {
    type: UPDATE_UNIT,
    unit,
  };
}

export function showAlert(alert) {
  return {
    type: SHOW_ERROR,
    alert,
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
    const distance = distances[getState().data.distance][getState().data.unit];
    const time = formatTime(calculateTime(distance, convertTimeToSeconds(pace)));
    if (convertTimeToSeconds(time) >= 86400) {
      dispatch(showAlert('The pace is too damn high. Maximum time is 23:59:59'));
    } else {
      dispatch(showAlert(null));
    }
    dispatch(updateCalulator(getState().data.distance, time, pace));
  };
}

export function calculateNewTime(time) {
  return (dispatch, getState) => {
    // TODO: refactor in FP format
    const distance = distances[getState().data.distance][getState().data.unit];
    const pace = formatTime(calculateSpeed(distance, convertTimeToSeconds(time)));
    if (convertTimeToSeconds(pace) >= 86400) {
      dispatch(showAlert('The time is too damn high. Maximum pace is 23:59:59'));
    } else {
      dispatch(showAlert(null));
    }
    dispatch(updateCalulator(getState().data.distance, time, pace));
  };
}

export function calculateNewDistance(distance) {
  return (dispatch, getState) => {
    // TODO: refactor in FP format
    const newDistance = distances[distance][getState().data.unit];
    const pace = formatTime(
      calculateSpeed(newDistance,
      convertTimeToSeconds(getState().data.time)
    ));
    if (convertTimeToSeconds(pace) >= 86400) {
      dispatch(showAlert('The time is too damn high. Maximum pace is 23:59:59'));
    } else {
      dispatch(showAlert(null));
    }
    dispatch(updateCalulator(distance, getState().data.time, pace));
  };
}


export function calculateNewUnit(unit) {
  return (dispatch, getState) => {
    // TODO: refactor in FP format
    const distance = distances[getState().data.distance][unit];
    const pace = formatTime(calculateSpeed(distance, convertTimeToSeconds(getState().data.time)));
    dispatch(updateUnit(unit));
    dispatch(updateCalulator(getState().data.distance, getState().data.time, pace));
  };
}
