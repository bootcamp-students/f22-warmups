var beeramid = function(bonus, price) {


  let num = 1,
      sum = 0;
  while (sum <= (bonus - (bonus % price)) / price) {
    sum += num ** 2;
    num++;
  }
  return num - 2;
};
