import styled from 'styled-components';
import {Grid} from '@material-ui/core';

export const Container = styled(Grid)`
display: flex;
flex-direction: column;
align-items: center;

.properties-title {
    font-size: 14px;
}

.properties-title-text {
    border-bottom: 1px solid black;
    padding: 6px 0;
    font-weight: bold;
}
`;