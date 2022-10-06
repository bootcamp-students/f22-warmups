function humanReadable (seconds){
    let hours = Math.floor(seconds/3600);
    let min = Math.floor(((seconds-(hours*3600)))/60);
    let sec = seconds-((hours*3600)+(min*60));
    if (hours<10){
      hours = '0'+hours;
    }
    if (min<10){
      min = '0'+min;
    }
    if (sec<10){
      sec = '0'+sec;
    }
    return hours + ':' + min +':' + sec
  }