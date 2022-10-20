// create a function that takes the two teams' arrays, compares the number of 5's shown and 
// if they match return "Drinks All Round! Free Beers on Bjorg!"
// if they don't match return "Uh Oh! Bjorg's a donut! No beer for anyone!"
//  it's guaranteed that both arrays will only contain integers from 0-9
// use filter method 
// check the length of the arrays
// use ternairy operator to compare the two



function gameOfFives(bavarianBeerBears,scandinavianSchöllers){

let b= bavarianBeerBears;
let s = scandinavianSchöllers;
  
    return b.filter(v=>v===5).length===s.filter(v=>v===5).length?'Drinks All Round! Free Beers on Bjorg!':'Uh Oh! Bjorg\'s a donut! No beer for anyone!'
}
  
  
  
  
  
