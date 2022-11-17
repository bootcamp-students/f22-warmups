var beeramid = function(bonus, price) {
  let levels = 0;
  let beers = Math.floor(bonus/price);
  let i = 1;
  let bpl = 0;
  let keith = 0;
  if(beers === 0) {
    return 0
  }
  while(beers >= keith) { 
    let bpl = i*i;
    beers = beers - bpl;
    levels++;
    i+=1;
    keith = (i*i);
  }
  return levels;
}
