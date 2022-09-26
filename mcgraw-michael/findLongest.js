function findLongest(str) {
  
  let spl = str.split(" ");
  let longest = 0;
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
    }
    return longest
}
