function isPangram(string){
  //...
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const lower = string.toLowerCase()
  
  return [...alphabet].every(letter => lower.includes(letter))
}