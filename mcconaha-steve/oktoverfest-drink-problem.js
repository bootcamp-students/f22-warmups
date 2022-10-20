function gameOfFives(bavarianBeerBears,scandinavianSchöllers){
// take in two arrays and compare number of 5s shown
  //if 5s match then return string
  //else return different string
  //filter through array a for includes 5
  //filter through array b for includes 5
  //if both return true then return string
  //else return a different string
  let bavsHaveFive = bavarianBeerBears.filter(beer => beer === 5).length;
  console.log(bavsHaveFive);
  let scansHaveFive = scandinavianSchöllers.filter(beer => beer === 5).length;
  console.log(scansHaveFive);
  if (bavsHaveFive === scansHaveFive) {
    return "Drinks All Round! Free Beers on Bjorg!"; 
  }  else {
    return "Uh Oh! Bjorg's a donut! No beer for anyone!";
  }
}
