function gameOfFives(bBB,sS){
  let x = bBB.filter(num => num === 5).length;
  let y = sS.filter(num => num === 5).length;
  if(x === y) {
    return "Drinks All Round! Free Beers on Bjorg!"
  } else {
    return "Uh Oh! Bjorg's a donut! No beer for anyone!"
  }
}
