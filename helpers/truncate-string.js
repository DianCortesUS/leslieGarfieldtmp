function truncateString(string = '', options = {}) {
  const {limit = 150} = options;

  if (string.trim().length <= limit) {
    return string.trim();
  }

  return `${string.trim().substring(0, limit)}...`;
}

export default truncateString;
