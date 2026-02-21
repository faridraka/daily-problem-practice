function partsSums(ls) {
  const result = new Array(ls.length + 1).fill(0);

  for (let i = ls.length - 1; i >= 0; i--) {
    result[i] = result[i + 1] + ls[i];
  }

  return result;
}