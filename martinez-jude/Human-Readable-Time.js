function humanReadable (seconds) {
  

  console.log(seconds.toString().padStart(2,'0'))
  
  let hours = Math.floor(seconds / 3600)
  hours = hours.toString().padStart(2,'0')
  console.log(hours)
  let min = Math.floor((seconds - (hours * 3600)) / 60)
  min = min.toString().padStart(2,'0')
  console.log(min)
  let sec = seconds - (hours * 3600) - (min * 60)
  sec = sec.toString().padStart(2,'0')
  console.log(`${hours}:${min}:${sec}` ,`humanReadable(${seconds})`)
  return `${hours}:${min}:${sec}`
  
//   var date = new Date(null);
//   date.setSeconds(seconds); // specify value for SECONDS here
//   console.log(date.toISOString()ubstr(11, 8))
//   return date.toISOString().substr(11, 8);
  
//   let secNum = parseInt(seconds, 10);
//   console.log(secNum)
//   let hours = Math.floor(seconds / 3600)
//   hours.padStart(2,'00')
//   console.log('hours',hours)
//   let min = Math.floor((seconds - (hours * 3600)) / 60)
//   console.log(min)
//   let sec = seconds - (hours * 3600) - (min * 60)
//   console.log(sec)
  
  
  
//   console.log(`${hours}:${min}:${sec}`)
}

//Func param seconds
// can seconds be divided by 3600
//  divide seconds by 3600

// if not
//can seconds be divided by 60
