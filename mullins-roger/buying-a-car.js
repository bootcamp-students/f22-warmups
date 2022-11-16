function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  //
  // 
  savings = 0;
  month = 1;
  depreciatedOld = startPriceOld;
  depreciatedNew = startPriceNew;
  loss = percentLossByMonth;
  
  while (savings + depreciatedOld < depreciatedNew) {
    if (month%2 == 0) {
      loss = loss + 0.5;
    }
    console.log("Month: ", month);
    
    console.log("Savings: ", savings)
    console.log("Start Value Old: ", depreciatedOld);
    console.log("Start Value New: ", depreciatedNew);
    console.log("Depreciation Rate: ", loss);
//     if (depreciatedNew <= (depreciatedOld + savings)) {
//       return([month, (depreciatedOld+savings)-depreciatedNew]);
//     }
    depreciatedOld = (depreciatedOld-(depreciatedOld*(loss/100)));
    depreciatedNew = (depreciatedNew-(depreciatedNew*(loss/100)));
    console.log("Depreciated Old: ", depreciatedOld);
    console.log("Depreciated New: ", depreciatedNew);
    savings = month * savingperMonth;

    month = month+1;
    }
  
  return([month-1, Math.round((depreciatedOld+savings)-depreciatedNew)])
}
