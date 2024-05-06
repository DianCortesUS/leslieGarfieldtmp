import styled from 'styled-components';
import {Grid, Typography} from '@material-ui/core';
import {Button as DefaultButton} from 'components/buttons/button';
import {ContentBlock} from 'components/content-block';

export const ClearButton = styled(Typography)`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
  ${({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      position: 'static',
    },
  })}
`;

export const HeaderGrid = styled(Grid)`
  padding-top: ${({theme}) => `${theme.spacing(4)}px`};
  padding-left: ${({theme}) => `${theme.spacing(4)}px`};
  margin-top: -60px;
`;

export const MapGrid = styled(Grid)`
  position: relative;
`;

export const MapContainer = styled.div`
  position: sticky;
  top: ${({top}) => `${top}px`};
  bottom: 0;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: ${({theme}) => `${theme.spacing(3)}px`};
  margin-left: ${({theme}) => `${theme.spacing(3)}px`};
`;

export const CloseButton = styled(DefaultButton)`
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background-color: #DEDCDD;
  color: ${({theme}) => theme.palette.text.primary};
  border-radius: 8px;
  &:hover {
    background: ${({theme}) => theme.palette.background.lightGray};
  }
  > span {
    line-height: 1;
  }
`;

export const ActionGrid = styled(Grid)`

.filter-icons {
  display: flex;
  justify-content: center;
  margin-left: 10px;
}

  ${({theme}) => ({
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  })}
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  max-width: 50%;
  margin-top: 25px;
  margin-bottom: 20px;
`
;

export const ContentDiv = styled(ContentBlock)`
  margin-top: -30px;

  @media (max-width: 1280px) {
    margin-top: 30px;
  }
`
;
