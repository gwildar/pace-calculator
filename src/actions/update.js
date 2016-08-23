export const UPDATE_TIME = 'UPDATE_TIME'
export const UPDATE_PACE = 'UPDATE_PACE'
export const UPDATE_DISTANCE = 'UPDATE_PACE'
export const UPDATE_UNITS = 'UPDATE_UNITS'

export function updateTime(value) {
  return { type: UPDATE_TIME, value }
}

export function updatePace(value) {
  return { type: UPDATE_PACE, value }
}

export function updateDistance(value) {
  return { type: UPDATE_DISTANCE, value }
}

export function updateUnits(value) {
  return { type: UPDATE_UNITS, value }
}

