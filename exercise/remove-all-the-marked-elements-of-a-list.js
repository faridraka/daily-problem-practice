Array.prototype.remove_ = function(integer_list, values_list){
  //your code here
  return integer_list.filter((value) => !values_list.includes(value))
}