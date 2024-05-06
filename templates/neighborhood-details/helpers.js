function getNumbersImage(neighborhood) {
  return neighborhood?.images?.[1];
}

function getNavLinks(neighborhood) {
  if (getNumbersImage(neighborhood)) {
    return [
      {to: 'location', name: 'Location'},
      {to: 'numbers', name: 'By the Numbers'},
      {to: 'properties', name: 'Properties'},
      {to: 'news', name: 'News'},
    ];
  }

  return [
    {to: 'location', name: 'Location'},
    {to: 'properties', name: 'Properties'},
    {to: 'news', name: 'News'},
  ];
}

export {getNumbersImage, getNavLinks};
