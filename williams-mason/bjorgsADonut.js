function gameOfFives(bavarianBeerBears,scandinavianSchöllers){
    let bears=bavarianBeerBears.filter(i=>i===5);
    let nerds=scandinavianSchöllers.filter(i=>i===5);
    if(bears.length === nerds.length){
      return("Drinks All Round! Free Beers on Bjorg!")
    }
    if(bears.length !== nerds.length){
      return("Uh Oh! Bjorg's a donut! No beer for anyone!")
    }
  }