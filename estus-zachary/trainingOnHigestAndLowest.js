function highAndLow(numbers){
  let min = Infinity;
  let max = -Infinity;
  array = numbers.split(' ');
  array.forEach((num) => {
    if(max < Number(num)){
      max = num;
    }
    if(min > Number(num)){
      min = num;
    }
  });
  return max + ' ' + min;
}
