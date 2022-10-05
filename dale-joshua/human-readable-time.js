function humanReadable (seconds) {
  // if seconds is > 60;
  // 00:00:${seconds}
  // minutes = seconds / 60;
  // seconds = (Minutes * 60) - seconds;
  // hours = (minutes / 60) 
  
//   if (seconds < 60){ // seconds under 60
//     if (seconds < 10) {
//       seconds = `0${seconds}`
// }
//     return `00:00:${seconds}`
//   } else if (seconds >= 60){
//    let minutes = seconds / 60;
//     if (minutes < 10){
//       minutes = `0${minutes}`;
//     }
// //     return minutes;
// //     console.log(minutes)
//   return `00:${minutes}:${seconds}`
//   }
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let sec = Math.floor(seconds % 60)
    if (seconds < 10) {
      return `00:00:00`
    } else {
      if (hours < 10) {
        hours = `0${hours}`
      }
       if (minutes < 10) {
        minutes = `0${minutes}`
      }
       if (sec < 10) {
        sec = `0${sec}`
      }
      return `${hours}:${minutes}:${sec}`
    }
}
