import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

import {useNeighborhoods} from 'api';
import {Spinner} from 'components/spinner';
import {NeighborhoodCards} from 'components/neighborhoods-cards';
import {Container} from './styled-components';

function NeighborhoodsBlock() {
  const {isLoading, data: neighborhoods = []} = useNeighborhoods();

  const slicedNeighborhoods = useMemo(() => neighborhoods.slice(0, 14), [
    neighborhoods,
  ]);
  return (
      <Container container>
        <div className='neighborhoods-title'>
          <span className='neighborhoods-title-text'>FEATURED TOWNHOUSE COLLECTIONS</span>
        </div>
        {isLoading ? (
          <Spinner p={5} />
        ) : (
          <NeighborhoodCards neighborhoods={slicedNeighborhoods} />
        )}
      </Container>
  );
}

NeighborhoodsBlock.propTypes = {
  PropTypes
};

export {NeighborhoodsBlock as default};
