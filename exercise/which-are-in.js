function inArray(array1,array2){
  //...
  return array1.filter((member) => array2.join(" ").includes(member)).sort()
}