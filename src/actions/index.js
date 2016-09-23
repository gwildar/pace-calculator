export const updateCalulator = (value) => ({
  type: 'UPDATE_CALCULATOR',
  value,
});

export const updatePace = (value) => ({
  type: 'PACE',
  value,
});

export const updateTime = (value) => ({
  type: 'TIME',
  value,
});

export const updateDistance = (value) => ({
  type: 'DISTANCE',
  value,
});

export const updateAll = (distance, pace, time) => ({
	type: 'UPDATE_ALL',
	distance,
	pace,
	time,
})