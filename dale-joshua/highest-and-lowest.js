function highAndLow(numbers){
let arr = numbers.split(' ');
  const arrNum = arr.map(str => {
    return Number(str);
  });
  const sortArr = arrNum.sort((a,b) => {
    return b - a;
  })

  return `${sortArr[0]} ${sortArr[sortArr.length - 1]}`;
}
