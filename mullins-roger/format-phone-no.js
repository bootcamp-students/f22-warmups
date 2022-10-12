function createPhoneNumber(numbers){
  let phoneNumberString = "(";
  for (let i = 0; i <= 2; i++) {
    phoneNumberString = phoneNumberString + numbers[i];
  };
  phoneNumberString = phoneNumberString + ") ";
  for (let i = 3; i <= 5; i++) {
    phoneNumberString = phoneNumberString + numbers[i];
  };
  phoneNumberString = phoneNumberString + "-";
  for (let i = 6; i<=9; i++) {
    phoneNumberString = phoneNumberString + numbers[i];
  };
  console.log(phoneNumberString);
  return phoneNumberString;
}
