/*
take both arrays and filter for number 5
take the length of the filter
if b = s return everyone gets to party
  else no party );
*/


function gameOfFives(bBB,sSs){
let b = bBB.filter(x => x === 5).length
let s = sSs.filter(x => x ===5).length

if (b === s){
  return "Drinks All Round! Free Beers on Bjorg!"
  }else {
    return "Uh Oh! Bjorg's a donut! No beer for anyone!"
  }
}
