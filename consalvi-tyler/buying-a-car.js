function nbMonths(sPO, sPN, sM, pLBM){
  
  let old_man = sPO
  
  let months = 0
  
  function new_price(car, added_percent) {
    let percent = (pLBM + added_percent) * .01
    car = (car - (car * percent))
    return car
  }
  
  while (old_man < sPN) {
    months++
    console.log(old_man)
    let added_percent = .5 * (Math.floor(months / 2))
    sPN = new_price(sPN, added_percent)
    sPO = new_price(sPO, added_percent)
    old_man = (months * sM) + sPO
    console.log(old_man)
  }
  
  return [months, Math.round(old_man - sPN)]
