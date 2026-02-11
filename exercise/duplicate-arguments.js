function solution(...arr){
  // return true if this method is called with duplicate argument values
  const set = new Set(arr)
  
  return arr.length == set.size ? false : true
}