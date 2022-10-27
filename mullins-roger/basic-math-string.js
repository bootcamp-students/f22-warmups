function calculate(str) {
  let x = str.replace(/plus/gi, "+");
  let y = x.replace(/minus/gi, "-");
  console.log(y);
  return(String(eval(y)));
}
  
