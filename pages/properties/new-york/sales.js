import React from 'react';
import {Head} from 'components/head';
import ListingsTemplate from 'templates/listings';

function SalesListingsPage() {
  return (
    <>
      <Head
        title="Townhouses for Sale in NYC | Leslie J. Garfield"
        description="137 townhouses for sale in New York, New York. See photos, floorplans and prices for the top real estate listings in Manhattan from Leslie J. Garfield"
      />
      <ListingsTemplate context="listing_search_sales" />
    </>
  );
}

export default SalesListingsPage;
