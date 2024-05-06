const allowedBrokerLoopFields = [
  'email',
  'firstname',
  'lastname',
  'phonenumber',
  'notes',
  'listkey',
];

function filterBrokerLoopData(data) {
  return Object.keys(data)
    .filter((key) => allowedBrokerLoopFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});
}

export {filterBrokerLoopData};
