import React from 'react';
import {Box, Typography} from '@material-ui/core';

import {ROUTES} from 'constants/routes';
import {Button} from 'components/buttons/button';

function SubscribeBlock() {
  return (
    <Box p="60px 15px" bgcolor="background.darkGray" component="section">
      <Box maxWidth={600} textAlign="center" margin="0 auto">
        <Typography variant="h4" weight="bold" gutterBottom>
          Sign Up for Our Mailing List
        </Typography>
        <Typography gutterBottom>
          Subscribe to receive regular townhouse and small building news and
          updates straight to your inbox
        </Typography>
        <Box mt="20px">
          <Button to={ROUTES.SUBSCRIBE}>Subscribe</Button>
        </Box>
      </Box>
    </Box>
  );
}

export {SubscribeBlock};
