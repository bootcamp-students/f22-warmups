//given integer > 0
//return time
function humanReadable (seconds) {
  //define sec variable, separate from seconds input
  //define minutes variable, 60 seconds per minute
  //define hours variable, 3,600 seconds per hour
  let hours = 0;
  let minutes = 0;
  //hours = seconds / 3600
  //seconds remainder = seconds - (hours * 3600)
  hours = Math.floor(seconds/3600).toString().padStart(2, '0');
  console.log(typeof(hours);
  //minutes = seconds / 60
  //seconds remainder = seconds - (minutes * 60)
  seconds = seconds - (hours * 3600);
  minutes = Math.floor(seconds/60).toString().padStart(2, '0');
  //sec = remainder from seconds
  seconds = (seconds - (minutes * 60)).toString().padStart(2, '0');
  //return the string, had to go back and convert variables to string in order to use padStart
  return hours + ':' + minutes + ':' + seconds;
}
