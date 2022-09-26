function drawStairs(n) {

let step = "I"
for(let i=1; i<n;  i++) {
 step +="\n" + " ".repeat(i) + 'I' ;
}return step 
}
