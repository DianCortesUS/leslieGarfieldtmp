import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import {FacebookIcon, TwitterIcon, EnvelopeIcon} from 'icons';

import {Container, IconContainer} from './styled-components';

const SocialIcons = ({name, description, image}) => {
  const currentUrl = window.location.href;

  const handleFacebookClick = useCallback(
    (event) => {
      event.preventDefault();

      const params = {
        method: 'share',
        redirect_uri: currentUrl,
        href: currentUrl,
        link: currentUrl,
        picture: image,
        description,
        name,
      };

      window.FB.ui(params);
    },
    [name, description, image, currentUrl],
  );

  const handleTwitterClick = useCallback(
    (event) => {
      event.preventDefault();

      window.open(
        `https://twitter.com/intent/tweet?url=${currentUrl}`,
        '_blank',
      );
    },
    [currentUrl],
  );

  return (
    <Container>
      <IconContainer onClick={handleFacebookClick}>
        <FacebookIcon />
      </IconContainer>
      <IconContainer onClick={handleTwitterClick}>
        <TwitterIcon />
      </IconContainer>
      <IconContainer href={`mailto:?body=${currentUrl}`}>
        <EnvelopeIcon />
      </IconContainer>
    </Container>
  );
};

SocialIcons.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SocialIcons.defaultProps = {
  name: '',
  description: '',
  image: '',
};

const Memo = React.memo(SocialIcons);

export {Memo as default};
