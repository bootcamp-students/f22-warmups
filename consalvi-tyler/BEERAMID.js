var beeramid = function(bonus, price) {
  let beers = Math.floor(bonus/price)
  let i = 1
  let BPL = 1
  let count = 0
  while (beers >= BPL) {
    BPL = i*i
    beers = beers - BPL
    count++
    i++
    BPL = i*i
  }
  return count
}
