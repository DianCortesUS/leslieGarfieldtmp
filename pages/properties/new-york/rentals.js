import React from 'react';
import {Head} from 'components/head';
import ListingsTemplate from 'templates/listings';

function RentalsListingsPage() {
  return (
    <>
      <Head
        title="Townhouses for Rent in NYC | Leslie J. Garfield"
        description="137 townhouses for rent in New York, New York. See photos, floorplans and prices for the top real estate listings in Manhattan from Leslie J. Garfield"
      />
      <ListingsTemplate context="listing_search_rentals" />
    </>
  );
}

export default RentalsListingsPage;
