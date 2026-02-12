function rotate(data, n) {
  if (!Array.isArray(data) || data.length === 0) return data

  while (n > 0) {
    data.unshift(data.pop())
    n--
  }

  while (n < 0) {
    data.push(data.shift())
    n++
  }

  return data
}
