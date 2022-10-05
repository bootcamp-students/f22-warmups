// Change the seconds down based on hours(3600) and seconds (60)
// Change the numbers  to strings and pad them to two digits 

function humanReadable (seconds) {
  // Declaring the variables and setting to zero 
  let hours, minutes, sec = 0;
  hours = Math.floor(seconds/3600);
  seconds = seconds - (hours * 3600);
  minutes = Math.floor(seconds/60);
  seconds = seconds - (minutes * 60);
  sec = seconds;
  // Padding the numbers to be the correct format
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  sec = seconds.toString().padStart(2, '0');
  // Return the formatted clock
  return `${hours}:${minutes}:${sec}`
}
