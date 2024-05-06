import React, {useState} from 'react';
import PropTypes from 'prop-types';

import useContactForm from 'hooks/use-contact-form';
import {EMAIL_VALIDATION_PATTERN} from 'constants/common';

import BlockWrapper from '../block-wrapper';

import { ContainerForm, TextFieldForm, ButtonForm } from './styled-components';

function GetValuationBlock({title, subtitle, image}) {
  const [recaptchaValue, setValue] = useState(null);
  const {register, handleSubmit} = useContactForm({
    defaultValues: {firstname: '', lastname: '', email: '', address: ''},
  });

  return (
    <BlockWrapper bgcolor="background.gcColor" id="valuationForm">
      <ContainerForm container>
        <div className="valuation-title">
          <h6 className="valuation-title-text">A GARFIELD VALUATION</h6>
        </div>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="name-lastname">
              <TextFieldForm
                name="firstname"
                placeholder="First Name*"
                variant="outlined"
                inputRef={register({
                  required: true,
                })}
                fullWidth
                className='padding-right'
              />
              <TextFieldForm
                name="lastname"
                placeholder="Last Name*"
                variant="outlined"
                inputRef={register({
                  required: true,
                })}
                fullWidth
                className='padding-left'
              />
            </div>
            <TextFieldForm
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
            <TextFieldForm
                name="address"
                placeholder="Address*"
                variant="outlined"
                inputRef={register({
                    required: true,
                  })}
                fullWidth
            />
            <TextFieldForm
                name="phone"
                placeholder="Phone Number"
                variant="outlined"
                inputRef={register({
                    required: true,
                  })}
                fullWidth
            />
            <TextFieldForm
                name="price"
                placeholder="Do you have an idea of the price you are aiming to achieve?*"
                variant="outlined"
                inputRef={register({
                    required: true,
                  })}
                fullWidth
            />
            <div className='button-form-div'>
            <ButtonForm type="submit">
                SUBMIT REQUEST
            </ButtonForm>
            </div>
          </form>
        </div>
      </ContainerForm>
    </BlockWrapper>
  );
}

GetValuationBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

export {GetValuationBlock as default};