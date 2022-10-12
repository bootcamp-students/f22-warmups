function createPhoneNumber(numbers){
    let area = numbers.slice(0, 3).join('');
    console.log(area);
    let first = numbers.slice(3, 6).join('');
    console.log(first);
    let second = numbers.slice(6).join('');
    console.log(second);
   let phoneNumber = '('+area+') '+first+'-'+second;
    console.log(phoneNumber)
    return phoneNumber
  }