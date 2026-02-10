function digitalRoot(n) {
  // ...
  const sum = [...n.toString()].map(Number).reduce((a,b) => a + b)
  
  if(sum < 10) return sum
  
  return digitalRoot(sum)
}