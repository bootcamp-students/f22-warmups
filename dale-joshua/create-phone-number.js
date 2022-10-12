function createPhoneNumber(numbers){
  let template = '(xxx) xxx-xxxx';
  numbers.forEach((el) => {
    template = template.replace('x', el);
  })
  return template;
}
