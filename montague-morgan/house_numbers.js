function houseNumbersSum(imp) {
  // nuked cause would just say Test is not defined for everything
  // set a variable as zero to start and find the first instace of zero
  // run a loop and stop at the stop point then add up the numbers
  console.log(imp)
  let final = 0
  let stop = imp.indexOf(0)
  for(let i = 0; i < stop; i++){
    final = final + imp[i]
    console.log(i)
  }
  return final
  //coding and coding..
}
