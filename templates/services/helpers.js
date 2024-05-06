function transformToHash(string = '') {
  return string
    .trim()
    .replace('&', '')
    .replace(/\s{2,}/g, ' ') // skip more than one space
    .replace(' ', '-')
    .toLowerCase();
}

export {transformToHash};
