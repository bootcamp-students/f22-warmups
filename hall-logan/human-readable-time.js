// cap of 60 for min and sec
// hours don't have a max
// return a string!!
// hours = seconds % 60
// 



function humanReadable (seconds) {
  console.log(seconds)
  let hours = 0
  let minutes = 0
  let sec = seconds % 60
  
  
  
  if((seconds / 60) >= 1){
    minutes = Math.floor(seconds / 60)
    
    if(minutes > 59) {
      hours = Math.floor(minutes / 60)
      minutes = minutes % 60
    
    }
  }
  if (hours < 10){ 
        hours = `0${hours}`
    }
    if (minutes < 10){ 
        minutes = `0${minutes}`
    }
    if (sec < 10){
        sec = `0${sec}`
    }
  
  
  return `${hours}:${minutes}:${sec}`
}
