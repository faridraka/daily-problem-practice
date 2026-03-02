function twistedSum(n) {
    let total = 0;
  let factor = 1;

  while (factor <= n) {
    const lower = n % factor;
    const current = Math.floor(n / factor) % 10;
    const higher = Math.floor(n / (factor * 10));

    total += higher * 45 * factor;
    total += (current * (current - 1) / 2) * factor;
    total += current * (lower + 1);

    factor *= 10;
  }

  return total;
}