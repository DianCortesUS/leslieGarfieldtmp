import styled from 'styled-components';
import {ContentBlock} from 'components/content-block';

export const Container = styled(ContentBlock)`

.inner-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0;
}

.p-text-cont {
    max-width: 50%;

    @media (max-width: 760px) {
        max-width: 90%;
      }
}
  
.p-text {
    font-family: Copernicus;
    font-size: 22px;
    text-align: justify;
    text-justify: inter-word;
}

.p-button-cont {
    margin-top: 30px;
    font-weight: bold;
}

`;