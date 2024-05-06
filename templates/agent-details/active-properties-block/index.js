import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {AgentType, ApartmentType} from '@perchwell/domain';

import {BuildingAdornmentIcon} from 'icons';
import {AdornmentBlock} from 'components/adornment-block';
import {ContentBlock} from 'components/content-block';
import {ListingCards} from 'components/listing-cards';

import {isApartmentActive} from '../helpers';
import { Title } from '../styled-components';

function ActivePropertiesBlock({apartments, agent}) {
  const {first_name, last_name} = agent;

  const filteredApartments = useMemo(
    () => apartments.filter((apartment) => isApartmentActive(apartment)),
    [apartments],
  );

  if (filteredApartments.length === 0) {
    return null;
  }

  return (
    <AdornmentBlock
      bgcolor="background.cream"
    >
      <ContentBlock pt={12} pb={10} desktopPadding="0">
        <Title>
          <h6 className='agent-properties-title'>ACTIVE PROPERTIES</h6>
        </Title>
        <ListingCards apartments={filteredApartments} justify="center" />
      </ContentBlock>
    </AdornmentBlock>
  );
}

ActivePropertiesBlock.propTypes = {
  apartments: PropTypes.arrayOf(ApartmentType),
  agent: AgentType,
};

ActivePropertiesBlock.defaultProps = {
  apartments: [],
  agent: {},
};

export {ActivePropertiesBlock as default};
