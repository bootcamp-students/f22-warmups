/*
take both arrays and filter for 5s
and take the length
if team A = team B get hammered
if not contempate your existence and why you're really here.
*/

function gameOfFives(bBBs,sSs){
  let teamA = bBBs.filter(x => x === 5).length
  let teamB = sSs.filter(x => x === 5).length
  
  if (teamA == teamB) {
    return "Drinks All Round! Free Beers on Bjorg!"
  } else {
    return "Uh Oh! Bjorg's a donut! No beer for anyone!"
  }

}
