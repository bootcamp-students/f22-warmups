function gameOfFives(bavarianBeerBears,scandinavianSch√∂llers){

  if (
    bavarianBeerBears.filter(x=>x===5).length
    ===
    scandinavianSch√∂llers.filter(x=>x===5).length
  ) {
    return "Drinks All Round! Free Beers on Bjorg!";
  } else {
    return "Uh Oh! Bjorg's a donut! No beer for anyone!";
  }
}
