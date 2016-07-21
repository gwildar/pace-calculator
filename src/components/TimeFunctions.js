export function formatTime (timeValue) {
  // I'm sure a third party library like momentjs could do this way better but I did it anyway for the string manipulation practice
  var time = {
    hours : "00",
    minutes : "00",
    seconds : "00"
  };

  // this is a noddy way of doing it. Will refactor later. Also doesn't deal with days
  var hours = (Math.floor(timeValue / 3600));
  var remainingTime = timeValue - hours * 3600;
  var minutes = (Math.floor(remainingTime / 60)); 
  var seconds = remainingTime - (minutes * 60);

  time.hours = hours.toString();
  time.minutes = minutes.toString();
  time.seconds = seconds.toString();

  for (var prop in time) {
    if (time[prop].length === 1) {
       time[prop] = "0" + time[prop].toString();
    } 
  }

  return time.hours + ":" + time.minutes + ":" + time.seconds; 
}

export function calculateTime (distance, speed) {
  // calculate 
  var time = (speed * distance);
  return time; 
}

export function calculateSpeed (distance, time) {
  // calculate km per minute
  var speed = (time / distance);
  return speed;
}

export function convertTimeToSeconds (time) {
  // when only hours and minutes are set input type="time" only returns hours and minutes. This adds missing seconds
  if (time.length === 5) {
    time = time + ":00";
  }
  
  var a = time.split(':'); 
  return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
}

export function convertKPMtoMPM (value) {
  return value * 0.62137119223733;
}

export function convertMPMtoKPM (value) {
  return value * 1.609344;
}

