String.prototype.camelCase = function () {
  return this
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
    )
    .join("");
};
