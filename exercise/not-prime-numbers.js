function notPrimes(a, b) {
  const primeDigits = new Set(['2', '3', '5', '7']);

  function hasOnlyPrimeDigits(n) {
    return String(n).split('').every(d => primeDigits.has(d));
  }

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const result = [];

  for (let n = a; n < b; n++) {
    if (!hasOnlyPrimeDigits(n)) continue;
    if (!isPrime(n)) result.push(n);
  }

  return result;
}
