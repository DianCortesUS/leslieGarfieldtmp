import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, TextField} from '@material-ui/core';

import useContactForm from 'hooks/use-contact-form';
import {EMAIL_VALIDATION_PATTERN} from 'constants/common';
import {ContentBlock} from 'components/content-block';
import {Recaptcha} from 'components/recaptcha';
import {SubmitButton} from 'components/form';

const formRef = React.createRef();

function FormBlock({recipient, listingAddress}) {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const {handleSubmit, register, setValue} = useContactForm({
    recipient,
    defaultValues: {firstname: '', email: '', notes: ''},
  });

  useEffect(() => {
    register({name: 'Listing'});
    setValue(
      'Listing',
      `<a href="${window.location.href}">${listingAddress}</a>`,
    );
  }, [register, setValue, listingAddress]);

  return (
    <ContentBlock bgcolor="background.lightPrimary" pt={8} pb={8}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container justify="center">
          <Grid item container xs={10}>
            <Grid item xs={12} sm={6}>
              <Box pr="5px" pl="5px">
                <TextField
                  name="firstname"
                  placeholder="Name*"
                  variant="outlined"
                  inputRef={register({
                    required: true,
                  })}
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box pr="5px" pl="5px">
                <TextField
                  name="email"
                  placeholder="Email Address*"
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
            <Grid item xs={12}>
              <Box pr="5px" pl="5px">
                <TextField
                  name="notes"
                  placeholder="Message*"
                  variant="outlined"
                  inputRef={register({
                    required: true,
                  })}
                  rows={3}
                  multiline
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item container xs={12} justify="center">
              <Recaptcha onChange={setRecaptchaValue} />
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center" mt={4} pr="5px" pl="5px">
                <SubmitButton type="submit" disabled={!recaptchaValue}>
                  SEND
                </SubmitButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </ContentBlock>
  );
}

FormBlock.propTypes = {
  recipient: PropTypes.arrayOf(PropTypes.string),
  listingAddress: PropTypes.string.isRequired,
};

const Memo = React.memo(FormBlock);

export {Memo as default, formRef};
