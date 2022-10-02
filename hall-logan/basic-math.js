// have plus = '+'
// have minus = '-'
// . split the string and


function calculate(str) {
//your code here...
var a = str;
var replaceMe = true;
var b = "";
// let stop = 0;
let plusInt = 0;
let minusInt = 0; 

while(replaceMe){
    b = a.replace("plus", "+");
    plusInt = b.indexOf("plus");
    
    console.log(replaceMe)
    b = b.replace("minus", "-");
    minusInt = b.indexOf("minus");

    a = b;   
    
    if(plusInt < 0 && minusInt < 0){
        replaceMe = false;
        console.log(replaceMe)
    }
}

console.log(a);
  
return eval(a).toString();
}
