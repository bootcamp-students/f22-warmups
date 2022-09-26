function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0;
  for (var i = 0; i < spl.length; i++) {
    console.log(i)
    if (spl[i].length > longest) {
      longest = spl[i].length;
      console.log(longest);
    }
  }
    return longest;
}

// func perim var str
// var spl set to str.split
