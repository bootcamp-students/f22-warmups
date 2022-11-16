function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
  let depreciation = percentLossByMonth / 100;
  let oldcar = startPriceOld - (startPriceOld * depreciation);
  let newcar = startPriceNew - (startPriceNew * depreciation);
  let money = oldcar + savingperMonth;
  let monthcount = 0;
  
  console.log(money);
  console.log(newcar);
  
  
  while (money < newcar){
    savingperMonth = savingperMonth + 1000;
    monthcount++;
    
    console.log(monthcount)
    
    if (monthcount % 2 === 1){
      percentLossByMonth = percentLossByMonth + .5
    }else {null}
    
    console.log(money)
    console.log(newcar)
    
    if (money >= newcar){
      return [monthcount, Math.round(money - newcar)]
    }
    
  }
  
  
}
