import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {ApartmentType, AgentType} from '@perchwell/domain';

import {BuildingAdornmentIcon} from 'icons';
import {AdornmentBlock} from 'components/adornment-block';
import {ContentBlock} from 'components/content-block';

import Table from './table';
import {getAgentDeals} from './helpers';

function TransactionsBlock({apartments, agent}) {
  const {first_name, last_name} = agent;

  const {soldDeals, rentalDeals} = useMemo(
    () => getAgentDeals(agent, apartments),
    [agent, apartments],
  );

  if (soldDeals.length === 0 && rentalDeals.length === 0) {
    return null;
  }

  return (
    <AdornmentBlock bgcolor="transparent"
    >
      <ContentBlock pt={12} pb={10}>
        {soldDeals.length > 0 && <Table title="Sales" deals={soldDeals} />}
        {rentalDeals.length > 0 && (
          <Table title="Rentals" deals={rentalDeals} />
        )}
      </ContentBlock>
    </AdornmentBlock>
  );
}

TransactionsBlock.propTypes = {
  apartments: PropTypes.arrayOf(ApartmentType),
  agent: AgentType,
};

TransactionsBlock.defaultProps = {
  apartments: [],
  agent: {},
};

const Memo = React.memo(TransactionsBlock);

export {Memo as default};
