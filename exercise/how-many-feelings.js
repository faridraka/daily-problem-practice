function countFeelings(string, array) {
  //good luck
  const arrayInString = array.filter((word) => {
    const isAllInString = word.split("").every((char) => string.includes(char))
    
    return isAllInString
  }).length
  
  const comp = arrayInString !== 1 ? " feelings." : " feeling."
  
  return arrayInString + comp
}