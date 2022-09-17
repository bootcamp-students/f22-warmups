// Check the first letter in the name for R or r
// return a string saying yes or no to playing the banjo

function areYouPlayingBanjo(name) {
  if(name[0] === 'R' || name[0] === 'r')
    return name + ' plays banjo';
  else
    return name + ' does not play banjo';
  return name;
}
