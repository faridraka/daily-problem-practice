function reverseWords(str) {
  // Go for it
  return str
    .split(/(\s+)/)
    .map(token =>
      token.trim()
        ? token.split("").reverse().join("")
        : token
    )
    .join("");

}