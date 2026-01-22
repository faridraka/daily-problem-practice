function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const convertArr = Array.from(text.toLowerCase())
  
  return convertArr
    .map(char => alphabet.indexOf(char) + 1)
    .filter(pos => pos > 0)
    .join(" ")
}