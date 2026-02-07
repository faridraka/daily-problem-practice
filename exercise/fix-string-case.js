function solve(s){
    //..
  const upperWord = s.match(/[A-Z]/g) || []
  const lowerWord = s.match(/[a-z]/g) || []
  
  if(upperWord.length > lowerWord.length) return s.toUpperCase()
  
  return s.toLowerCase()
}