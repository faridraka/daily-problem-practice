function isDivisible(...numbers) {
  const [first, ...divisors] = numbers;

  return divisors.every(divisor => first % divisor === 0);
}
