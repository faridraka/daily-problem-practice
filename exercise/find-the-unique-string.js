function findUniq(arr) {
  const normalize = str =>
    [...new Set(str.toLowerCase())].sort().join("")

  const map = {}

  for (const str of arr) {
    const key = normalize(str)
    if (!map[key]) map[key] = []
    map[key].push(str)
  }

  for (const key in map) {
    if (map[key].length === 1) {
      return map[key][0]
    }
  }
}
