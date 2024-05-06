import React, {useState, useEffect, useCallback} from 'react';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import {useInView} from 'react-intersection-observer';
import Slide from '@material-ui/core/Slide';

import {ROUTES} from 'constants/routes';

import {Container, Content, Title, Body, Button} from './styled-components';

const closeIconStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  color: 'white',
  alignSelf: 'flex-end',
  cursor: 'pointer',
};

const storageKey = '_leslie_garfield_sign_up_popup';

function SignupPopup() {
  const {ref, inView} = useInView({triggerOnce: true});
  const [open, setOpen] = useState(false);
  const [closeClicked, setClosedClicked] = useState(() => {
    const sessionValue = window.sessionStorage.getItem(storageKey);

    if (sessionValue) {
      return JSON.parse(sessionValue);
    }

    return false;
  });

  useEffect(() => {
    window.sessionStorage.setItem(storageKey, closeClicked);
  }, [closeClicked]);

  useEffect(() => {
    if (inView && !closeClicked) {
      setOpen(true);
    }
  }, [inView, closeClicked]);

  const handleCloseClick = useCallback(() => {
    setOpen(false);
    setClosedClicked(true);
  }, []);

  return (
    <>
      <div ref={ref} />
      <Slide direction="up" in={open} timeout={500}>
        <Container>
          <Content>
            <CloseIcon style={closeIconStyles} onClick={handleCloseClick} />
            <Title variant="h5" color="textSecondary">
              Sign Up
            </Title>
            <Body variant="body1" color="textSecondary" align="center">
              Subscribe to receive regular townhouse and small building news
              straight to your inbox
            </Body>
            <Button to={ROUTES.SUBSCRIBE} variant="subtitle2">
              Subscribe
            </Button>
          </Content>
        </Container>
      </Slide>
    </>
  );
}

const Memo = React.memo(SignupPopup);

export {Memo as default};
