import {PROPERTY_BROCHURE_ASSETS_BY_LISTING_ID} from 'constants/properties';

const getBrochureUrl = (property) => {
  const documents = property.public_documents ?? [];
  const brochure = documents.find((document) => document.type === 'brochure');

  return (
    brochure?.url ??
    PROPERTY_BROCHURE_ASSETS_BY_LISTING_ID[property.id]?.legacyLink
  );
};

export {getBrochureUrl};
