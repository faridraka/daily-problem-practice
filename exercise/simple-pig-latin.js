function pigIt(str){
  //Code here
  return str
    .split(" ")
    .map(w => /^[a-zA-Z]+$/.test(w) ? w.slice(1) + w[0] + "ay" : w)
    .join(" ")
}