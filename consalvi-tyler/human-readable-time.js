/*
HH:MM:SS
cap of 60 for min and sec
hours = 00
minutes = 00

if seconds % 60 > 59 
  minutes = (seconds / 60)
  seconds = (seconds % 60)
    if minutes / 60 > 59
      hours = minutes / 60
      minutes = minutes % 60
      seconds = seconds % 60
*/
function humanReadable (seconds) {
    let hours = 00;
    let minutes = 00;
    let sec = seconds % 60;
    
    if ((seconds / 60) >= 1) {
      minutes = Math.floor(seconds / 60)
      console.log(minutes)
        if (minutes > 59) {
          hours = Math.floor(minutes / 60)
          minutes = minutes % 60
          console.log(minutes)
        }
    }
    
    if (hours < 10) {
      hours = `0${hours}`
    }
      if (minutes < 10) {
      minutes = `0${minutes}`
    }
      if (sec < 10) {
      sec = `0${sec}`
    }
  
    return `${hours}:${minutes}:${sec}`;
  }