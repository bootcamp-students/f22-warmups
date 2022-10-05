// pseudocode

// declare new variables equal to time, hour, min and sec
// use Math.floor and modulo for each variable
// for each time element you'll need to add an extra '0' placeholder
// concatenate return value of each element


function humanReadable (seconds) {
  let time = Number(seconds);
  let hour = Math.floor(time / 3600);
  let min = Math.floor(time % 3600 / 60);
  let sec = Math.floor(time % 3600 % 60);
  
  if (hour < 10) {
    hour = '0' + hour;
  }
  
  if (min < 10) {
    min = '0' + min;
  }
  
  if (sec < 10) {
    sec = '0' + sec;
  }
  return hour + ':' + min + ':' + sec;
}
