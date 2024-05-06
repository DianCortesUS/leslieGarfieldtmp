import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {useHeaderHeight} from '@perchwell/hooks';
import {
  MEDIA_TYPES,
} from '@perchwell/components';

import {ButtonCompany, OurCompanyBanner, PerchwellBanner} from './styled-components';
import Link from 'next/link';

function CompanyBanner({
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
        <OurCompanyBanner>
          <div className='company-title-container'>
            <h1 className='company-title'>Our Company</h1>
          </div>
          <ButtonCompany>
            <Link href="https://player.vimeo.com/video/927196354">
              Watch our history
            </Link>
          </ButtonCompany>
        </OurCompanyBanner>
      </Box>
    </PerchwellBanner>
  );
}

CompanyBanner.propTypes = {
  type: PropTypes.oneOf(Object.values(MEDIA_TYPES)),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleProps: PropTypes.object,
  subtitleProps: PropTypes.object,
};

CompanyBanner.defaultProps = {
  titleProps: {},
  subtitleProps: {},
};

const Memo = React.memo(CompanyBanner);

export {Memo as CompanyBanner};