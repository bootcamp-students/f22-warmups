// Work up from only using seconds to using minutes/seconds to then using minutes/seconds/hours
// Within each of those scenarios, work from biggest variable down to seconds
// Have to update remaining seconds after each formula

function humanReadable (seconds) {
  let hours = 0;
  let minutes = 0;
  let newSec = 0;
  if (seconds === 0) {
    return "00:00:00";
  } else if (seconds < 60) {
    if(seconds < 10) {
      seconds = `0${seconds}`;
    };
    return `00:00:${seconds}`;
  } else if (seconds < 3600) {
    minutes = Math.trunc(seconds / 60);
    if(minutes < 10) {
      minutes = `0${minutes}`;
    };
    newSec = seconds - (minutes * 60);
    if(newSec < 10) {
      newSec = `0${newSec}`;
    };
    return `00:${minutes}:${newSec}`;
  } else {
    hours = Math.trunc(seconds / 3600);
    if(hours < 10) {
      hours = `0${hours}`;
    };
    newSec = seconds - (hours *3600);
    minutes = Math.trunc(newSec / 60);
    if(minutes < 10) {
      minutes = `0${minutes}`;
    };
    newSec = newSec - (minutes * 60);
    if(newSec < 10) {
      newSec = `0${newSec}`;
    };
    return `${hours}:${minutes}:${newSec}`;
  }
}
