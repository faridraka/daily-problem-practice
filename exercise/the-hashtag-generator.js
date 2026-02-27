function generateHashtag(str) {
  if (!str || str.trim().length === 0) return false;

  const hashtag = str
    .trim()
    .split(/\W+/)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join("");

  if (hashtag.length === 0 || hashtag.length + 1 > 140) return false;

  return "#" + hashtag;
}