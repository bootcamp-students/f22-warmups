function calculate(str) {

return (eval(str.replace(/(plus)/gi,'+').replace(/(minus)/gi,'-'))).toString()

  return str;
}
