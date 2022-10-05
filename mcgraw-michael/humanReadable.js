function humanReadable (seconds) {
    let hours = 0;
    let minutes = 0;
    
    if (seconds >= 3600) {   
      hours = Math.floor(seconds/3600);
      seconds = seconds - (3600 * hours);
    } 
    if (hours < 10) {
      hours = '0'+`${hours}`;
    }
    if (seconds >= 60) {
      minutes = Math.floor(seconds/60);
      seconds = seconds - (60 * minutes);
    }
    if (minutes < 10) {
      minutes = '0'+`${minutes}`;
  }
    if (seconds < 10) {
        seconds = '0'+`${seconds}`;
    }
      return `${hours}:${minutes}:${seconds}`;

    }
