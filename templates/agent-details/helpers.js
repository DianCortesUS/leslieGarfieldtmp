const isApartmentActive = (apartment = {}) => {
  const status = apartment?.listing_details?.status;

  return status === 'Active' || status === 'Under Contract';
};

export {isApartmentActive};
