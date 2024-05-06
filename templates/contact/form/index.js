import React, {useState, useCallback, useEffect} from 'react';
import {Box, Grid, MenuItem, TextField} from '@material-ui/core';
import {Controller} from 'react-hook-form';

import useContactForm from 'hooks/use-contact-form';
import {EMAIL_VALIDATION_PATTERN} from 'constants/common';
import {ContentBlock} from 'components/content-block';
import {Recaptcha} from 'components/recaptcha';
import {Select, SelectPlaceholder, SubmitButton} from 'components/form';

import {
  DEFAULT_REGARDING,
  REGARDING_OPTIONS,
  REGARDING_MENU_PROPS,
} from './constants';

const defaultValues = {
  regarding: DEFAULT_REGARDING,
};

function Form() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const {
    control,
    errors,
    reset,
    setValue,
    register,
    handleSubmit,
  } = useContactForm({
    defaultValues: {
      firstname: '',
      email: '',
      phonenumber: '',
      notes: '',
    },
  });

  useEffect(() => {
    // focus on select input if there is error
    if (Object.keys(errors).length === 1 && errors.regarding) {
      document.getElementById('regarding-select-input').focus();
    }
  }, [errors]);

  const renderRegardingValue = useCallback(
    (value) =>
      value === DEFAULT_REGARDING ? (
        <SelectPlaceholder>{DEFAULT_REGARDING}*</SelectPlaceholder>
      ) : (
        value
      ),
    [],
  );

  const handleReset = useCallback(() => {
    reset(defaultValues);
  }, [reset]);

  return (
    <ContentBlock bgcolor="background.lightPrimary" pt={8} pb={8}>
      <form onSubmit={handleSubmit} onReset={handleReset}>
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
            <Grid item xs={12} sm={6}>
              <Box pr="5px" pl="5px">
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) => value !== DEFAULT_REGARDING,
                  }}
                  defaultValue={DEFAULT_REGARDING}
                  name="regarding"
                  as={
                    <Select
                      variant="outlined"
                      MenuProps={REGARDING_MENU_PROPS}
                      onChange={(event) =>
                        setValue('regarding', event.target.value)
                      }
                      renderValue={renderRegardingValue}
                      id="regarding-select-input"
                      displayEmpty
                    >
                      <MenuItem
                        key="default"
                        value={DEFAULT_REGARDING}
                        disabled
                      >
                        {DEFAULT_REGARDING}
                      </MenuItem>
                      {Object.keys(REGARDING_OPTIONS).map((optionKey) => (
                        <MenuItem
                          key={optionKey}
                          value={REGARDING_OPTIONS[optionKey]}
                        >
                          {REGARDING_OPTIONS[optionKey]}
                        </MenuItem>
                      ))}
                    </Select>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box pr="5px" pl="5px">
                <TextField
                  name="phonenumber"
                  placeholder="Phone*"
                  variant="outlined"
                  inputRef={register({
                    required: true,
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

export {Form as default};
