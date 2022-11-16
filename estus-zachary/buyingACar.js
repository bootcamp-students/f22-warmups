function nbMonths(oldPrice, newPrice, savings, percent){
  percent = percent / 100
  let months = 0
  let money = 0
  let count = 0 
  while((money + oldPrice) < newPrice){
    count++
    if(count === 2){
      percent += 0.005
      count = 0
    }
    oldPrice = (oldPrice - (oldPrice * percent))
    newPrice = (newPrice - (newPrice * percent))
    if(oldPrice < newPrice){
      money = money + savings
    }
    months++
  }
  money = money + oldPrice
  money -= newPrice
  money = Math.round(money)
  return [months, money]
}
