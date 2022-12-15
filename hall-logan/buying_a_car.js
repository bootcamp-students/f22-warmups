function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    if(startPriceOld >= startPriceNew) {return [0, Math.round(startPriceOld - startPriceNew)];}
    while(total < startPriceNew) {
        total += savingperMonth
        total -= startPriceOld * percentLossByMonth / 100
        startPriceNew -= startPriceNew * percentLossByMonth / 100
        startPriceOld -= startPriceOld * percentLossByMonth / 100
        months ++;
        months % 2 !== 0 ? percentLossByMonth += 0.5 : percentLossByMonth
  }
  return [months, Math.round(total - startPriceNew)]
}
