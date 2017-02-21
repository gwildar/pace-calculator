//
// actions
//

export const UPDATE_PACE = 'UPDATE_PACE';
export const UPDATE_TIME = 'UPDATE_TIME';
export const UPDATE_DISTANCE = 'UPDATE_DISTANCE';
export const UPDATE_PACE_VALIDATION = 'UPDATE_PACE_VALIDATION';
export const UPDATE_TIME_VALIDATION = 'UPDATE_TIME_VALIDATION';

//
// action creators
//

export function updatePace(value) {
  return {
    type: UPDATE_PACE,
    value,
  };
}

export function updateTime(value) {
  return {
    type: UPDATE_TIME,
    value,
  };
}

export function updateDistance(value) {
  return {
    type: UPDATE_DISTANCE,
    value,
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
