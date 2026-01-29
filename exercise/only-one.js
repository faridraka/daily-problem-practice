function onlyOne(...arr) {
  return arr.filter(a => a == true).length == 1 ? true : false
}