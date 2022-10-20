// Step through each array, and count the number of fives.
// If they are the same count return a string

function gameOfFives(bavarianBeerBears,scandinavianSchöllers){
    let fiveCount1 = 0, fiveCount2 = 0;
    for(let item of bavarianBeerBears){
      if(item === 5){
        fiveCount1++;
      }
    }
  for(let item of scandinavianSchöllers){
      if(item === 5){
        fiveCount2++;
      }
    }
  if(fiveCount1 === fiveCount2){
    return "Drinks All Round! Free Beers on Bjorg!";
  } else {
    return "Uh Oh! Bjorg's a donut! No beer for anyone!"
  }
}
