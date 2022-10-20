function gameOfFives(bavarianBeerBears,scandinavianSchöllers){
    let bavar = bavarianBeerBears.filter((e) => e === 5).length;
    let scand = scandinavianSchöllers.filter((e) => e === 5).length;
    if (bavar === scand){
     return "Drinks All Round! Free Beers on Bjorg!";
    } else {
      return "Uh Oh! Bjorg's a donut! No beer for anyone!";
    }
}
