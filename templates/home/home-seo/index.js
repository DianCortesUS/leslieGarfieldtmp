import React from 'react';
import {Head} from 'components/head';

import {OrganizationJsonLd} from 'jsonld';

function HomeSeo() {
  return (
    <>
      <Head
        title="New York City Townhouse Real Estate | Leslie Garfield"
        description="Leslie Garfield is a full-service real estate firm that’s dedicated
          over 40 years to the sale and purchase of luxury townhouses in New
          York City."
      />
      <OrganizationJsonLd
        name="Leslie J. Garfield & Co., Inc."
        logo="https://perchwell-static-assets.s3.amazonaws.com/lesliegarfield/placeholder1x.png"
        url="https://lesliegarfield.com"
      />
    </>
  );
}

const Memo = React.memo(HomeSeo);

export default Memo;
