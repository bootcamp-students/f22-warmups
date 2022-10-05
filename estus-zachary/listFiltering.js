// Filter the list based on number and return the new array.
function filter_list(l) {
  return l.filter((index) => { return typeof( index) === 'number'});
}
