// index 0 is people getting on, index 1 is people getting out. 
// Create a for loop that steps through the bus stops
// Add (index 0 minues index 1) to people

var number = function(busStops){
  let people = 0;
  for(let index of busStops){
    people += index[0] - index[1];
  }
  return people;
}
