var encryptThis = function(text) {
  // Implement me! :)
  return text.split(" ").map((char) => {
    const firstWord = char.charCodeAt(0)
    
    if(char.length == 1) return firstWord.toString()
    
    if(char.length == 2) return firstWord + char[1]
    
    return firstWord + char[char.length - 1] + char.slice(2, - 1) + char[1]
  }).join(" ")
}