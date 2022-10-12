function createPhoneNumber(numbers){
  let var1 = numbers;
      var1.splice(0, 0, '(');
      var1.splice(4, 0, ')');
      var1.splice(5, 0, ' ');
      var1.splice(9, 0, '-');
  let answer = '';
  for (let i = 0; i < var1.length; i++){
    answer = answer + var1[i];
    }
  return answer;
}
