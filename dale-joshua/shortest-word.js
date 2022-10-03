function findShort(s){
  const arr = s.split(' ');
  arr.sort(function (a,b){
    return a.length - b.length;
  })
  let shortest = arr[0];
  return shortest.length
}
