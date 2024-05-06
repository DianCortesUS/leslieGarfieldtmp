import React, {useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {Box, Grid, Typography, TextField, Fade} from '@material-ui/core';
import {useAsync} from '@perchwell/hooks';
import {sendResume, sendDocument} from 'rest-api';

import {EMAIL_VALIDATION_PATTERN} from 'constants/common';
import {Recaptcha} from 'components/recaptcha';
import {SubmitButton} from 'components/form';
import {Spinner} from 'components/spinner';

import AttachInput from './attach-input';
import {FormTitle, FormInputTitles} from './styled-components';

const defaultValues = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  linkedin: '',
  website: '',
  message: '',
};

function Form({careerId}) {
  const {run: sendFormData, isLoading} = useAsync();
  const {register, reset, handleSubmit, setValue} = useForm({defaultValues});
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const recaptchaRef = useRef();
  const [focusedAttachInput, setFocusedAttachInput] = useState(null);

  // Manually register file inputs because of DropzoneArea needs to use own refs for these inputs
  useEffect(() => {
    register({name: 'cv'}, {required: true});
    register({name: 'resume'}, {required: true});
  }, [register]);

  const clearForm = useCallback(() => {
    // reset input values
    reset(defaultValues);

    // manually reset AttachInput value because Dropzone component doesn't observe external updates
    // in his file input and respectively doesn't update internal state
    Array.from(
      document.getElementsByClassName('MuiDropzonePreviewList-removeButton'),
    ).forEach((button) => button.click());

    // reset state of recaptcha
    if (recaptchaRef && recaptchaRef.current) {
      recaptchaRef.current.reset();
      setRecaptchaValue(null);
    }
  }, [reset]);

  const generateBinaryDocument = useCallback((id, file) => {
    if (file instanceof File) {
      let data = new FormData();
      data.append('client_website_career_application_id', id);
      data.append('doc', file);

      return data;
    } else {
      return null;
    }
  }, []);

  const onSubmit = useCallback(
    (values) => {
      const files = {
        cv: values.cv,
        resume: values.resume,
      };
      const requestBody = {
        client_website_id: parseInt(process.env.CLIENT_WEBSITE_ID),
        client_website_career_id: careerId,
        first_name: values.firstname,
        last_name: values.lastname,
        phone: values.phone,
        email: values.email,
        social_media: {
          LinkedIn: values.linkedin,
          Website: values.website,
        },
        source: values.message,
      };
      sendFormData(
        sendResume(requestBody)
          .then((response) => response.data)
          .then((careerData) => {
            const {id} = careerData;
            const cvData = generateBinaryDocument(id, files.cv);
            const resumeData = generateBinaryDocument(id, files.resume);
            let cvRequest;
            let resumeRequest;
            if (cvData) {
              cvRequest = sendDocument(cvData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
            }
            if (resumeData) {
              resumeRequest = sendDocument(resumeData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
            }
            return Promise.all([cvRequest, resumeRequest]);
          })
          .then(() => {
            clearForm();
          }),
      );
    },
    [careerId, generateBinaryDocument, clearForm, sendFormData],
  );

  const onError = (errors) => {
    const firstErrorKey = Object.keys(errors)[0];
    if (firstErrorKey === 'cv' || firstErrorKey === 'resume') {
      setFocusedAttachInput(firstErrorKey);
    }
  };

  const handleFileAddition = useCallback(
    (name, file) => {
      setValue(name, file);
    },
    [setValue],
  );

  const resetFocusedInput = useCallback(
    (field) => {
      if (focusedAttachInput === field) {
        setFocusedAttachInput(null);
      }
    },
    [focusedAttachInput],
  );

  return (
    <Box bgcolor="background.cream" pt={6} pb={6}>
      <Box
        maxWidth={640}
        textAlign="center"
        pt={8}
        pb={8}
        mr="auto"
        ml="auto"
        pr={{xs: '4%', md: 0}}
        pl={{xs: '4%', md: 0}}
      >
        <FormTitle>How to Apply</FormTitle>
        <Box position="relative" textAlign="left" mt={3} ml="-5px" mr="-5px">
          <Fade in={isLoading}>
            <Spinner position="absolute" width="100%" height="100%" />
          </Fade>
          <Fade in={!isLoading}>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Box pr="5px" pl="5px">
                    <FormInputTitles gutterBottom>
                      First Name*
                    </FormInputTitles>
                    <TextField
                      inputRef={register({
                        required: true,
                      })}
                      name="firstname"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box pr="5px" pl="5px">
                    <FormInputTitles gutterBottom>
                      Last Name*
                    </FormInputTitles>
                    <TextField
                      inputRef={register({
                        required: true,
                      })}
                      name="lastname"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box pr="5px" pl="5px">
                    <FormInputTitles gutterBottom>
                      Email*
                    </FormInputTitles>
                    <TextField
                      inputRef={register({
                        required: true,
                        validate: (value) =>
                          EMAIL_VALIDATION_PATTERN.test(value.toLowerCase()),
                      })}
                      name="email"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box pr="5px" pl="5px">
                    <FormInputTitles gutterBottom>
                      Phone*
                    </FormInputTitles>
                    <TextField
                      inputRef={register({
                        required: true,
                      })}
                      name="phone"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box pr="5px" pl="5px">
                    <FormInputTitles gutterBottom>
                      Resume / CV*
                    </FormInputTitles>
                    <Box onClick={() => resetFocusedInput('cv')}>
                      <AttachInput
                        name="cv"
                        handleChange={(file) => handleFileAddition('cv', file)}
                        isFocused={focusedAttachInput === 'cv'}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box pr="5px" pl="5px">
                    <FormInputTitles gutterBottom>
                      Cover Letter*
                    </FormInputTitles>
                    <Box onClick={() => resetFocusedInput('resume')}>
                      <AttachInput
                        name="resume"
                        handleChange={(file) =>
                          handleFileAddition('resume', file)
                        }
                        isFocused={focusedAttachInput === 'resume'}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box pr="5px" pl="5px">
                    <FormInputTitles gutterBottom>
                      LinkedIn
                    </FormInputTitles>
                    <TextField
                      inputRef={register}
                      name="linkedin"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box pr="5px" pl="5px">
                    <FormInputTitles gutterBottom>
                      Website
                    </FormInputTitles>
                    <TextField
                      inputRef={register}
                      name="website"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box pr="5px" pl="5px">
                    <FormInputTitles gutterBottom>
                      How did you hear about this position?
                    </FormInputTitles>
                    <TextField
                      inputRef={register}
                      name="message"
                      variant="outlined"
                      rows={4}
                      multiline
                      fullWidth
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box textAlign="center" mt={4} pr="5px" pl="5px">
                <SubmitButton type="submit">
                  Submit Application
                </SubmitButton>
              </Box>
            </form>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
}

Form.propTypes = {
  careerId: PropTypes.number,
};

export {Form as default};
