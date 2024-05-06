import React from 'react';
import PropTypes from 'prop-types';
import { ParsedText } from '@perchwell/components';
import Image from 'next/image';

import {Container} from './styled-components';

function QuoteBlock({title, subtitle}) {
  return (
    <Container
      bgcolor="background.bourbon"
      textAlign="center"
    >
      <div className='inner-container'>
        <div className='quote-text'>
          <ParsedText variant="h6" className="quote">{title}</ParsedText>
          <ParsedText variant="subtitle2" className="quote-person">{subtitle}</ParsedText>
        </div>
        <div>
          <Image
            src="/assets/QuoteSection.png"
            height={795}
            width={631}
            alt="Quote section image"
          />
        </div>
      </div>
    </Container>
  );
}

QuoteBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export {QuoteBlock as default};
