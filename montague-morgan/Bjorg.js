function gameOfFives(bes,ses){
 let bahh =bes.filter(be => be ==5)
 let sahh = ses.filter(se => se == 5)
  if (bahh.length === sahh.length){
    return 'Drinks All Round! Free Beers on Bjorg!'
  } else return "Uh Oh! Bjorg's a donut! No beer for anyone!"
}
