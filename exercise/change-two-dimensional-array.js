function matrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] !== undefined) {
      arr[i][i] = arr[i][i] < 0 ? 0 : 1
    }
  }
  return arr
}