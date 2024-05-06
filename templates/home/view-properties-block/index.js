import React from 'react';
import PropTypes from 'prop-types';
import { ParsedText } from '@perchwell/components';

import {ROUTES} from 'constants/routes';
import {Container} from './styled-components';
import { Button } from 'components/buttons/button';

function ViewPropertiesBlock() {
  return (
    <Container
      bgcolor="background.header"
      textAlign="center"
    >
      <div className='inner-cont'>
        <div className='p-text-cont'>
            <ParsedText variant="body3" className="p-text">
                We understand the enduring value of New York City Townhomes. Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your area.
            </ParsedText>
        </div>
        <div className='p-button-cont'>
            <Button to={ROUTES.LISTINGS}>
                VIEW PROPERTIES
            </Button>
        </div>
      </div>
    </Container>
  );
}

ViewPropertiesBlock.propTypes = {
  PropTypes
};

export {ViewPropertiesBlock as default};