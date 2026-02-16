function incrementString (string) {
  // return incrementedString
  const match = string.match(/\d+/)
  
  if(!match){
    return string + 1
  }
  
  const number = match[0]
  const prefix = string.slice(0, -number.length)
  
  const incremented = String(Number(number) + 1)
  const padded = incremented.padStart(number.length, "0")
  
  return prefix + padded
}