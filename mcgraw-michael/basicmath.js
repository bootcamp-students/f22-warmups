function calculate(str) {
 str = str.replace(/plus/g , '+')
  str = str.replace(/minus/g, '-')
  console.log(str)
  str = eval(str)
  
  
  return String(str);
}
