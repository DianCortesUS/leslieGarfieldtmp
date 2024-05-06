import React, {useState, useEffect} from 'react';
import {Box, Grid, TextField, Typography} from '@material-ui/core';

import useContactForm from 'hooks/use-contact-form';
import {EMAIL_VALIDATION_PATTERN} from 'constants/common';
import {Head} from 'components/head';
import {ContentBlock} from 'components/content-block';
import {Button} from 'components/buttons/button';
import {Recaptcha} from 'components/recaptcha';

import NeighborhoodsBlock from './neighborhoods-block';

function SubscribeTemplate() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const {register, handleSubmit, isSuccess, setValue} = useContactForm({
    defaultValues: {firstname: '', lastname: '', email: ''},
  });
  const [neighborhoods, setNeighborhoods] = useState([]);

  useEffect(() => {
    register({name: 'neighborhoods', defaultValue: []});
  }, [register]);

  useEffect(() => {
    setValue('neighborhoods', neighborhoods);
  }, [neighborhoods, setValue]);

  useEffect(() => {
    if (isSuccess) {
      setNeighborhoods([]);
    }
  }, [isSuccess]);

  const handleSelectNeighborhood = React.useCallback(
    (neighborhood) => {
      const newNeighborhoods = neighborhoods.includes(neighborhood.name)
        ? neighborhoods.filter((item) => item !== neighborhood.name)
        : [...neighborhoods, neighborhood.name];

      setNeighborhoods(newNeighborhoods);
    },
    [neighborhoods],
  );

  return (
    <>
      <Head title="Email Alerts" description="Email Alerts" />
      <ContentBlock bgcolor="background.lightGray" pt={8} pb={8}>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box mb={4} textAlign="center">
            <Typography variant="h4">Email Alerts</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container justify="center">
              <Grid item container xs={10} justify="center">
                <Grid item xs={12} md={6} lg={4}>
                  <Box pr="5px" pl="5px">
                    <TextField
                      inputRef={register({
                        required: true,
                      })}
                      name="firstname"
                      placeholder="First Name*"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Box pr="5px" pl="5px">
                    <TextField
                      inputRef={register({
                        required: true,
                      })}
                      name="lastname"
                      placeholder="Last Name*"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={8}>
                  <Box pr="5px" pl="5px">
                    <TextField
                      inputRef={register({
                        required: true,
                        validate: (value) =>
                          EMAIL_VALIDATION_PATTERN.test(value.toLowerCase()),
                      })}
                      name="email"
                      placeholder="Email*"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <NeighborhoodsBlock
                    selected={neighborhoods}
                    onSelect={handleSelectNeighborhood}
                  />
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
    </>
  );
}

export {SubscribeTemplate as default};
