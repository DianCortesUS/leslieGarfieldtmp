import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {useHeaderHeight} from '@perchwell/hooks';
import {
  Banner as PerchwellBanner,
  ParsedText,
  MEDIA_TYPES,
} from '@perchwell/components';

import {Subtitle} from './styled-components';

function Banner({
  type,
  title,
  subtitle,
  titleProps,
  subtitleProps,
  ...restProps
}) {
  const height = useHeaderHeight();

  const videoConfigProps = useMemo(
    () =>
      type === MEDIA_TYPES.VIDEO
        ? {
            file: {
              attributes: {
                type: 'video/mp4',
              },
            },
          }
        : {},
    [type],
  );

  return (
    <PerchwellBanner
      bgcolor="common.white"
      videoConfigProps={videoConfigProps}
      type={type}
      height={`calc(100vh - ${height}px)`}
      {...restProps}
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        pr={{xs: 2, sm: 0}}
        pl={{xs: 2, sm: 0}}
      >
        {title && (
          <ParsedText variant="h1" gutterBottom {...titleProps}>
            {title}
          </ParsedText>
        )}
        {subtitle && (
          <Subtitle variant="h5" gutterBottom {...subtitleProps}>
            {subtitle}
          </Subtitle>
        )}
      </Box>
    </PerchwellBanner>
  );
}

Banner.propTypes = {
  type: PropTypes.oneOf(Object.values(MEDIA_TYPES)),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleProps: PropTypes.object,
  subtitleProps: PropTypes.object,
};

Banner.defaultProps = {
  titleProps: {},
  subtitleProps: {},
};

const Memo = React.memo(Banner);

export {Memo as Banner};