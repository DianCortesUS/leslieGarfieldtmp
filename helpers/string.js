function generateSlugString(string = '', options = {}) {
  const {separator = '-'} = options;

  return string
    .split(' ')
    .map((chunk) => chunk.toLowerCase())
    .join(separator)
    .replace(/[%#?]/g, '')
    .replace('/', '-');
}

function generateTitleString(string = '', options = {}) {
  const {separator = '-'} = options;

  return string
    .split(separator)
    .map(
      (chunk) => chunk.charAt(0).toUpperCase() + chunk.substr(1).toLowerCase(),
    )
    .join(' ');
}

export {generateSlugString, generateTitleString};
