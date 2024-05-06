import styled from 'styled-components';
import {ContentBlock} from 'components/content-block';

export const Container = styled(ContentBlock)`
    padding: 100px 0;
    display: flex;
    justify-content: space-between;

  .inner-container {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

      ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
          padding: '0;',
          flexDirection: 'column-reverse'
        },
      })}
  }

  .quote-text {
    max-width: 38%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

      ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
          padding: '60px 25px;',
          maxWidth: '95%',
        },
      })}
  }

  .quote {
    text-align: left;
    color: #fff;

      ${({theme}) => ({
        [theme.breakpoints.down('sm')]: {
          fontSize: '28px;',
        },
      })}
  }

  .quote-person {
    text-align: left;
    color: #fff;
    font-size: 12px;
    margin-top: 40px;
  }

  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  })}

`;
