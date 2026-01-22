function toUnderscore(string) {
  const castingString = String(string)
    return Array.from(castingString).map((char,index) => {
      if(char !== char.toLowerCase()) {
        return index > 0 ? "_" + char.toLowerCase() : char.toLowerCase()
      } else {
        return char
      }
    }).join("")
}