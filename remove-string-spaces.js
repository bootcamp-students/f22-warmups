//Codewars doesn't like replaceAll, we can circumvent that with a global flag to find all spaces

function noSpace(x){
 return x.replace(/ /g, "");
}
