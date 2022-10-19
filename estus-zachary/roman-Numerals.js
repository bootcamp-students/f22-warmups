// I cheated

function solution(number){
  if(typeof number !== 'number'){
    return false;
  }
  let romanNumerals = '';
  let digits = String(+number).split('');
  // create all the combinations for the roman numbers
  let key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"]
  // Beecause there are 3 roman numbers in each "section"
  let i = 3;
  //Stops when i is 0;
  console.log(number);
  while(i--){
    romanNumerals = (key[+digits.pop() + (i * 10)] || '') + romanNumerals;
    console.log('Roman ' + romanNumerals);
    console.log('Digits ' + digits)
    }
  console.log(Array(+digits.join('') + 1).join('M') + romanNumerals);
  return Array(+digits.join('') + 1).join('M') + romanNumerals;
}
