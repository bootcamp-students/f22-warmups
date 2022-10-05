function filter_list(l) {
  let arr = l.filter((item) => {
    return typeof(item) == 'number'
  })
  return arr;
}
