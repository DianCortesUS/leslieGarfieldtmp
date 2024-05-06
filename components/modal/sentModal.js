import { CloseIcon } from 'public/assets/Icons/icons';
import React from 'react'
import { Backdrop, CloseIconContainer, ModalTitle, SentModalContent, SentModalContainer } from './styled-components'

const SentModal = ({setMessageModal}) => {

    const handleCloseMessage = () => {
        setMessageModal(false);
    }

  return (
    <Backdrop>
        <SentModalContainer>
            <CloseIconContainer onClick={handleCloseMessage}>
                <CloseIcon/>
            </CloseIconContainer>
            <ModalTitle>THANK YOU FOR YOUR INQUIRY</ModalTitle>
            <SentModalContent>
                A member of our team will be in touch shortly.
            </SentModalContent>
        </SentModalContainer>
    </Backdrop>
  )
}

export default SentModal;