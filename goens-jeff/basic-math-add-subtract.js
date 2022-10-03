// pseudocode 

// Use split method to remove plus word and join + to add string values
// Use split method to remove minus word and join - to substract string values



function calculate(str) {
  str = str.split("plus");
  str = str.join("+");
  str = str.split("minus");
  str = str.join("-");
  
return eval(str) + "";
}
