import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {useHeaderHeight} from '@perchwell/hooks';
import {
  MEDIA_TYPES,
} from '@perchwell/components';

import { PerchwellBanner, SellHeader, ButtonCompany } from './styled-components';
import { Link as ScrollLink } from "react-scroll/modules";

function SellBanner({
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
        <SellHeader>
          <div className="sell-header-title">
            <h1 className="sell-header-title-text">Sell With Us</h1>
          </div>
          <div className="sell-header-text-content">
            <p className="sell-header-text">
              We understand the enduring value of New York City Townhouses. If
              you have somewhere to sell, we’d love to help.
            </p>
          </div>
          <ButtonCompany><ScrollLink to='valuationForm' smooth={true} offset={-130}>GET STARTED</ScrollLink></ButtonCompany>
        </SellHeader>
      </Box>
    </PerchwellBanner>
  );
}

SellBanner.propTypes = {
  type: PropTypes.oneOf(Object.values(MEDIA_TYPES)),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleProps: PropTypes.object,
  subtitleProps: PropTypes.object,
};

SellBanner.defaultProps = {
  titleProps: {},
  subtitleProps: {},
};

const Memo = React.memo(SellBanner);

export {Memo as SellBanner};