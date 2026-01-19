function sort(sentence){
  //...
  const words = sentence.replace(/[^\w\s]/g, "").split(" ")
  const lowerWords = words.filter(word => word[0] === word[0].toLowerCase())
  const upperWords = words.filter(word => word[0] === word[0].toUpperCase())
  
  lowerWords.sort()
  upperWords.sort((a,b) => b.localeCompare(a))
  
  return lowerWords.concat(upperWords).join(" ")
}