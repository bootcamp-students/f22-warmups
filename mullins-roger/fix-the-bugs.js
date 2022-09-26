function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0;
  console.log(spl);
  console.log(longest);
  
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
      console.log(longest);
    };
    
};
  return longest;
}
