var countSheep = function (num){
  //your code here
  //given non-neg integer
  //return string with murmur
  //repeating number starting with 1 thru n + ' sheep...'
  let murmur ='';
  for (let i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
    console.log(murmur);
  } return murmur;
}

