function combos(n){
  const result = []
  
  function backtrack(path, start, remaining){
    if(remaining == 0){
      result.push([...path])
      return
    }
    
    if(remaining < 0) return
    
    for(let i = start; i <= remaining; i++){
      path.push(i)
      backtrack(path, i, remaining - i)
      path.pop()
    }
  }
  
  backtrack([], 1, n)
  
  return result
}