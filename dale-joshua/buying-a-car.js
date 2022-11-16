function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let loss = percentLossByMonth / 100
  let old = startPriceOld
  let newCar = startPriceNew
  let month = 0
  let savings = 0
  while ((old + savings) < newCar) {
    month++
    if (month % 2 === 0){
      loss += .005
    }
    savings += savingperMonth
    old -= (old * loss)
    newCar -= (newCar * loss)

 
  }

  savings += old
  return [month, Math.round(savings - newCar)]
}
