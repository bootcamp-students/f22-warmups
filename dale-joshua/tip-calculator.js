function calculateTip(amount, rating) {
  
var tip = rating.toLowerCase();

if(tip === "excellent"){
  return Math.ceil(amount*20/100);
}
else if(tip === "great"){
  return Math.ceil(amount*15/100);
}

else if(tip === "good"){
  return Math.ceil(amount*10/100);
}

else if(tip === "poor"){
  return Math.ceil(amount*5/100);
}

else if(tip === "terrible"){
  return Math.ceil(amount*0/100);
}

else{
return("Rating not recognised");
}
}
