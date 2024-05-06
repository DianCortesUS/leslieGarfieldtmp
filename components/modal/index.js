import React from 'react'
import PropTypes from 'prop-types';
import useContactForm from 'hooks/use-contact-form';
import { cleanAddress } from 'helpers/property';
import {EMAIL_VALIDATION_PATTERN} from 'constants/common';
import { Button } from 'components/buttons/button';
import { Backdrop, ModalContainer, ModalTitle, ModalForm, TextFieldForm, ButtonFormDiv, TextFieldName, CloseIconContainer, ModalPropertyName } from './styled-components';
import { CloseIcon } from 'public/assets/Icons/icons';

const RequestInformationModal = ({setShowModal, property, handleSendButtonClick}) => {
    const {register, handleSubmit, trigger} = useContactForm({
        defaultValues: {firstname: '', lastname: '', email: '', message: ''},
      });

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const validateForm = async () => {
        const isFormValid = await trigger();
        if (isFormValid) {
            handleSendButtonClick();
        }
    }

  return (
    <Backdrop>
      <ModalContainer>
        <CloseIconContainer onClick={handleCloseModal}>
            <CloseIcon/>
        </CloseIconContainer>
        <ModalTitle>REQUEST MORE INFORMATION ABOUT</ModalTitle>
        <ModalPropertyName>{cleanAddress(property?.location?.address_with_unit)}</ModalPropertyName>
        <ModalForm>
          <form onSubmit={handleSubmit}>
            <TextFieldName>
              <TextFieldForm
                name="firstname"
                placeholder="First Name*"
                variant="outlined"
                inputRef={register({
                  required: true,
                })}
                fullWidth
                className="padding-right"
              />
              <TextFieldForm
                name="lastname"
                placeholder="Last Name*"
                variant="outlined"
                inputRef={register({
                  required: true,
                })}
                fullWidth
                className="padding-left"
              />
            </TextFieldName>
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
              name="phone"
              placeholder="Phone Number"
              variant="outlined"
              inputRef={register({
                required: true,
              })}
              fullWidth
            />
            <TextFieldForm
              name="message"
              placeholder="Message"
              variant="outlined"
              inputRef={register({
                required: true,
              })}
              fullWidth
            />
            <ButtonFormDiv>
              <Button type="submit" onClick={validateForm}>SEND</Button>
            </ButtonFormDiv>
          </form>
        </ModalForm>
      </ModalContainer>
    </Backdrop>
  );
}

RequestInformationModal.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
  };

export default RequestInformationModal