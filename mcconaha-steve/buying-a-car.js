function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
//   let depreciatedOldCar = startPriceOld;//2000
//   let depreciatedNewCar = startPriceNew;//8000
//   let totalSavings = 0;
//   let months = 0;
//   while((depreciatedOldCar - depreciatedNewCar) < 0) {
//     depreciatedOldCar -= (depreciatedOldCar * percentLossByMonth);
//     console.log(`This is the dep old value ${depreciatedOldCar}`);
//     depreciatedNewCar -= (depreciatedNewCar * percentLossByMonth);
//     console.log(`This is the dep new value ${depreciatedNewCar}`);
//     totalSavings += savingperMonth;
//     months += 1;
//   }
//   let remainFunds = ((depreciatedOldCar - depreciatedNewCar) + totalSavings);
//   return [Math.ceil(months), remainFunds]
// unable to find solution, found solution below
  
  //if the old car is worth more than the new one then no months should lapse
  if(startPriceOld >= startPriceNew) {return [0, Math.round(startPriceOld - startPriceNew)];}
  let months = 0; //starting at 0 months, similar to my code
  let total = startPriceOld; //creating a total which will be adjusted each month with depreciation and savings
  while(total < startPriceNew) {
    total += savingperMonth;
    total -= startPriceOld * percentLossByMonth / 100; //the % loss is adjusted in the if statement below
    startPriceNew -= startPriceNew * percentLossByMonth / 100;
    startPriceOld -= startPriceOld * percentLossByMonth / 100;
    months ++;
    if (months % 2 !== 0) { //when the month divided by 2 has no remainder we will increase the percent loss by 0.5, otherwise it does not adjust
      percentLossByMonth += 0.5;
    } else {
       percentLossByMonth;
    }
  }
    return [months, Math.round(total - startPriceNew)];
