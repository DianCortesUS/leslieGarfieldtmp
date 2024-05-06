import React, {useState} from 'react';
import {Box, Grid, TextField, Typography} from '@material-ui/core';

import useContactForm from 'hooks/use-contact-form';
import {EMAIL_VALIDATION_PATTERN} from 'constants/common';
import {ContentBlock} from 'components/content-block';
import {Button} from 'components/buttons/button';
import {Recaptcha} from 'components/recaptcha';

function RegisterForm() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const {register, handleSubmit} = useContactForm({
    defaultValues: {firstname: '', lastname: '', email: ''},
  });

  return (
    <ContentBlock bgcolor="background.lightGray" pt={8} pb={8}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box mb={4} textAlign="center">
          <Typography variant="h4">Register</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container justify="center">
            <Grid item container xs={10} justify="center">
              <Grid item xs={12} md={6} lg={4}>
                <Box pr="5px" pl="5px">
                  <TextField
                    name="firstname"
                    placeholder="First Name*"
                    variant="outlined"
                    inputRef={register({
                      required: true,
                    })}
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Box pr="5px" pl="5px">
                  <TextField
                    name="lastname"
                    placeholder="Last Name*"
                    variant="outlined"
                    inputRef={register({
                      required: true,
                    })}
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={8}>
                <Box pr="5px" pl="5px">
                  <TextField
                    name="email"
                    placeholder="Email*"
                    variant="outlined"
                    inputRef={register({
                      required: true,
                      validate: (value) =>
                        EMAIL_VALIDATION_PATTERN.test(value.toLowerCase()),
                    })}
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item container xs={12} justify="center">
                <Recaptcha onChange={setRecaptchaValue} />
              </Grid>
              <Grid item xs={12}>
                <Box textAlign="center" mt={4} pr="5px" pl="5px">
                  <Button type="submit" disabled={!recaptchaValue}>
                    SUBSCRIBE
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </ContentBlock>
  );
}

export {RegisterForm};
