import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import { ContentBlock } from 'components/content-block';

export const Container = styled(ContentBlock)`
display: flex;
flex-direction: column;
align-items: center;
padding: 90px 0;
background-color: #C1B28A80;

.neighborhoods-title {
    margin-bottom: 50px;
}

.neighborhoods-title-text {
    border-bottom: 1px solid black;
    padding: 6px 0;
    font-size: 12px;
    font-weight: bold;
}
`;