import React from 'react';
import PropTypes from 'prop-types';

import BlockWrapper from '../block-wrapper';
import {ROUTES} from 'constants/routes';
import {Container} from './styled-components';
import { Button } from 'components/buttons/button';

function GetValuationBlock() {

  return (
    <BlockWrapper bgcolor="background.header">
      <Container container>
        <div className='evaluation-title-cont'>
          <span className='evaluation-title-text'>A GARFIELD EVALUATION</span>
        </div>
        <div className='evaluation-text-cont'>
          Comparable sales will not tell you the full story. A Garfield Townhouse Valuation incorporates comparables with more than 50 years of experience selling townhomes and small buildings throughout New York City, but more importantly your specific neighborhood and block.
        </div>
        <div className='evaluation-button'>
          <Button to={ROUTES.SELL}>
            HOW MUCH IS MY TOWNHOUSE WORTH?
          </Button>
        </div>
      </Container>
    </BlockWrapper>
  );
}

GetValuationBlock.propTypes = {
  PropTypes
};

export {GetValuationBlock as default};
