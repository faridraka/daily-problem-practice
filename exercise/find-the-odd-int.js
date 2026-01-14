function findOdd(A) {
  //happy coding!
  const temp = {}
  
  for(let num of A){
    temp[num] = temp[num] + 1 || 1
  }
  
  for(let [key, value] of Object.entries(temp)){
    if(value %  2 != 0){
      return Number(key)
    }
  }
}