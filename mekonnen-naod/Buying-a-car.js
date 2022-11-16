function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){

let savings = 0
let months = 0

while((savings + startPriceOld) < startPriceNew){
  startPriceOld -= (startPriceOld * (percentLossByMonth/100))
  startPriceNew -= (startPriceNew * (percentLossByMonth/100))
  months++
  savings += savingperMonth
  console.log(savings)
  if (months % 2 === 1) {
	percentLossByMonth += .5
  } 
  else 
  {
	null
  }
  }
  
return[months, Math.round((startPriceOld + savings) - startPriceNew)]
 

}
