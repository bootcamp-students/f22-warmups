//given string
let words = ('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');
//split the string into an array
words = words.split('WUB');
console.log(words);
//loop thru the array and if the array does not contain an empty string then
//return the value and join the string together
let result = words.filter(word => word !== "").join(' ');

console.log(result);
return result;
