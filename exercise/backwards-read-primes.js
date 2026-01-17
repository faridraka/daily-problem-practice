function backwardsPrime(start, stop) {
  const isPrime = n =>
    n > 1 &&
    !Array.from(
      { length: Math.floor(Math.sqrt(n)) - 1 },
      (_, i) => i + 2
    ).some(div => n % div === 0);

  const reverseNumber = n =>
    Number(String(n).split('').reverse().join(''));

  return Array.from(
    { length: stop - start + 1 },
    (_, i) => i + start
  ).filter(n =>
    isPrime(n) &&
    isPrime(reverseNumber(n)) &&
    n !== reverseNumber(n)
  );
}
