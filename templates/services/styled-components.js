import styled from 'styled-components';
import {ImageBox as DefaultImageBox} from 'components/image-box';

import {ContentBlock} from 'components/content-block';

export const ServiceContainer = styled(ContentBlock)`
  padding-top: 60px;
  padding-bottom: 120px;
  ${({theme}) => ({
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
      paddingBottom: '60px',
    },
  })};
`;

export const LeadingServiveContainer = styled(ServiceContainer)`
  padding-top: 120px;
  ${({theme}) => ({
    [theme.breakpoints.down('xs')]: {
      paddingTop: '60px',
    },
  })};
`;

export const ServiceBlock = styled.section`
  margin-bottom: 120px;
  ${({theme}) => ({
    [theme.breakpoints.down('md')]: {
      marginBottom: '60px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '20px',
    },
  })};
`;

export const ImageBox = styled(DefaultImageBox)`
  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      marginBottom: '48px',
    },
  })};
`;
