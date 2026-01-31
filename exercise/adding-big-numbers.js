function add(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? a.charCodeAt(i) - 48 : 0;
    const digitB = j >= 0 ? b.charCodeAt(j) - 48 : 0;

    const sum = digitA + digitB + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
}
