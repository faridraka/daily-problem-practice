function chooseBestSum(t, k, ls) {
  if (ls.length < k) return null

  let best = null

  function backtrack(start, count, sum) {
    if (count === k) {
      if (sum <= t && (best === null || sum > best)) {
        best = sum
      }
      return
    }

    for (let i = start; i < ls.length; i++) {
      backtrack(i + 1, count + 1, sum + ls[i])
    }
  }

  backtrack(0, 0, 0)
  return best
}
