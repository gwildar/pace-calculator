/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { padStart, round } from 'lodash';


export function formatTime(timeValue) {
  const time = [];

  const hours = (Math.floor(timeValue / 3600));
  const remainingTime = (timeValue - hours) * 3600;
  const minutes = (Math.floor(remainingTime / 60));
  let seconds = round(remainingTime - (minutes * 60), 3);
  seconds = seconds.toString().split('.');

  time.push(padStart(hours.toString(), 2, '0'));
  time.push(padStart(minutes.toString(), 2, '0'));
  time.push(`${padStart(seconds[0], 2, '0')}.${padStart(seconds[1], 3, '0')}`);

  return time.reduce((previousValue, currentValue) => `${previousValue}:${currentValue}`);
}

export function calculateTime(distance, speed) {
  const time = (speed * distance);
  return time;
}

export function calculateSpeed(distance, time) {
  const speed = (time / distance);
  return speed;
}

export function convertTimeToSeconds(time) {
  // when only hours and minutes are set input type="time" only returns hours and minutes.
  // This adds missing seconds

  let newTime;

  if (time.length === 5) {
    newTime = `${time}:00`;
  } else {
    newTime = time;
  }

  const a = newTime.split(':');
  return ((+a[0]) * 60 * 60) + ((+a[1]) * 60) + (+a[2]);
}

export function convertKPMtoMPM(value) {
  return value * 0.62137119223733;
}

export function convertMPMtoKPM(value) {
  return value * 1.609344;
}
