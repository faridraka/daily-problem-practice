function solve(a,b){
  return b.map(word => a.filter((selectedWord) => selectedWord == word).length);
}