function grabscrab(anagram, dictionary) {
  // Your code here
  const sorted = (str) => str.split("").sort().join("")
  
  return dictionary.filter(item => sorted(item) === sorted(anagram))
}