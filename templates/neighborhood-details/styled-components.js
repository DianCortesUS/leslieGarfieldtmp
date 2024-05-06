import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import { ContentBlock } from 'components/content-block';

export const NeighborhoodsDetailContent = styled.div`
  margin-top: 90px;

    @media (max-width: 1280px) {
        margin-top: 0;
    }
`;

export const Title = styled(Typography)`
  font-weight: 700;
  font-family: Sweet sans pro;
  font-size: 14px;
  line-height: 18px;
`;

export const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const Title2 = styled(Typography)`
  font-weight: 700;
  font-family: Sweet sans pro;
  font-size: 14px;
  line-height: 18px;
  border-bottom: 1.5px solid black;
  padding: 6px 0;
`;

export const LinkText = styled(Typography)`
`;

export const DescriptionBlockContent = styled(ContentBlock)`
    display: flex;
    justify-content: center;
    align-items: center;
`;
