import { ContentBlock } from 'components/content-block';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
margin-top: -30px;
  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      minHeight: '247px',
      marginTop: '0'
    },
    
  })}
`;

export const ContentListingDetail = styled(ContentBlock)`
  background: linear-gradient(#EBE9DD, #FFFFFF);
  margin-top: 90px;

  ${({theme}) => ({
    [theme.breakpoints.down('md')]: {
      marginTop: '0'
    },
  })}
`