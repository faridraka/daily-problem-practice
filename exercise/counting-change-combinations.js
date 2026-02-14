function countChange(money, coins) {
  // your implementation here
  const result = []
  
  function backtrack(start, path, remaining){
    if(remaining == 0){
      result.push([...path])
      return
    }
    
    if(remaining < 0) return
    
    for(let i = start; i < coins.length; i++){
      path.push(coins[i])
      backtrack(i, path, remaining - coins[i])
      path.pop()
    }
  }
  
  backtrack(0, [], money)
  
  return result.length
}