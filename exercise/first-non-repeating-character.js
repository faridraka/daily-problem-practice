function firstNonRepeatingLetter(s) {
  // Add your code here
  const noDuplicate = [...new Set(s)]
  
  for(const char of noDuplicate){
    const noRepeat = s.split("").filter(str => str.toLowerCase() === char.toLowerCase()).length
    
    if(noRepeat == 1){
      return char
    }
  }
  
  return ''
}