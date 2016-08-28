// as an exercise I made a padLeft function. I'm aware how noddy this is.
function padLeft(str, length, char) {
  let pad = '';
  const cLength = char.length;
  const sLength = str.length;
  if ((length - cLength) < 0) {
    pad = pad.substring(0, cLength - sLength);
  } else if (length >= sLength) {
    pad = char.repeat(cLength * length);
  }
  return `${pad + str}`;
}

export function formatTime(timeValue) {
  // I'm sure a third party library like momentjs could do this way better
  // but I did it anyway for the string manipulation practice
  const time = [];

  // this is a noddy way of doing it. Will refactor later.
  // Also doesn't deal with days

  const hours = (Math.floor(timeValue / 3600));
  const remainingTime = timeValue - hours * 3600;
  const minutes = (Math.floor(remainingTime / 60));
  const seconds = remainingTime - (minutes * 60);

  time.push(hours.toString());
  time.push(minutes.toString());
  time.push(seconds.toString());

  let newTime = [];

  newTime = time.map(unit => padLeft(unit, 1, '0'))
                .reduce((previousValue, currentValue) => `${previousValue}:${currentValue}`);

  return newTime;
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
  }

  const a = newTime.split(':');
  return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
}

export function convertKPMtoMPM(value) {
  return value * 0.62137119223733;
}

export function convertMPMtoKPM(value) {
  return value * 1.609344;
}
