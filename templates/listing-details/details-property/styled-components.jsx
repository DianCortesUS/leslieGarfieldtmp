import { ParsedText } from '@perchwell/components';
import styled from 'styled-components';

export const PropertyDetailsCont = styled.div`
  font-family: sweet sans;
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;

  @media (max-width: 959px) {
    font-size: 14px;
    max-width: 50%;
  }

  .property-details-list {
    display: flex;
    flex-direction: column;
    line-height: 30px;

    @media (max-width: 959px) {
      line-height: 20px;
    }
  }

  .property-type-detail {
    text-transform: uppercase;
    max-width: 80%;
  }
`;

export const SqftText = styled(ParsedText)`
font-family: sweet sans;
font-size: 20px;
`