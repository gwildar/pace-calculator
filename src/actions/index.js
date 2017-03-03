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
    dispatch(updateCalulator(getState().data.distance, time, pace));
  };
}

export function calculateNewTime(time) {
  return (dispatch, getState) => {
    // TODO: refactor in FP format
    const distance = distances[getState().data.distance][getState().data.unit];
    const pace = formatTime(calculateSpeed(distance, convertTimeToSeconds(time)));
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
    dispatch(updateCalulator(distance, getState().data.time, pace));
  };
}


export function calculateNewUnit(unit) {
  return (dispatch, getState) => {
    console.log(getState().data.distance);
    console.log(unit);
    const distance = distances[getState().data.distance][unit];
    const pace = formatTime(calculateSpeed(distance, convertTimeToSeconds(getState().data.time)));
    dispatch(updateUnit(unit));
    dispatch(updateCalulator(getState().data.distance, getState().data.time, pace));
  };
}
