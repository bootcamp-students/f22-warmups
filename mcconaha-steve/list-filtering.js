function filter_list(l) {
  //loop through array with a filter
  return l.filter((item) => {
  // looks at list as we loop through and if it passes condition type of === number then return that number    
    if (typeof(item) === 'number') {
  //this returns the item TO THE NEW LIST
  // when zero is evaluated as false, so it is not included
      return typeof(item);
    }
  });
}
