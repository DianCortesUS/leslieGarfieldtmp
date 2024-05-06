import React from 'react';
import styled from 'styled-components';
import {Box, Typography} from '@material-ui/core';
import {default as NextLink} from 'next/link';

import {ROUTES} from 'constants/routes';
import {linkStyles} from 'helpers/styles';

const Link = styled(Typography)`
  margin-right: 10px;
  ${linkStyles};
`;

function ViewLinksBlock() {
  return (
    <Box fontStyle="italic" mt={4} mb={5}>
      <NextLink href={ROUTES.DISCLAIMER} passHref>
        <Link component="a" variant="subtitle1">
          View Disclaimer
        </Link>
      </NextLink>
      <NextLink href={ROUTES.CLOSING_COSTS} passHref>
        <Link component="a" variant="subtitle1">
          View Closing Costs
        </Link>
      </NextLink>
    </Box>
  );
}

export {ViewLinksBlock as default};
