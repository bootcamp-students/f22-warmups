// i = seconds is humanReadable
// return HH:MM:SS
//convert seconds to hours and min
function humanReadable (seconds) {
  console.log(seconds)
 let time = Number(seconds) ;
 var hour = Math.floor(time / 3600);
 var min = Math.floor(time % 3600 / 60);
 var sec = Math.floor(time % 3600 % 60);
  console.log(hour)
  console.log(min)
  console.log(sec)
  if (hour < 10) {
        hour = "0" + hour;
    }
  if (min < 10) {
        min = "0" + min;
    }
  if (sec < 10){
        sec = "0" + sec;
  }
  return hour + ":" + min + ":" + sec;
}
