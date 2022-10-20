function gameOfFives(bavarianBeerBears,scandinavianSchöllers){

  if (
    bavarianBeerBears.filter(x=>x===5).length
    ===
    scandinavianSchöllers.filter(x=>x===5).length
  ) {
    return "Drinks All Round! Free Beers on Bjorg!";
  } else {
    return "Uh Oh! Bjorg's a donut! No beer for anyone!";
  }
}
