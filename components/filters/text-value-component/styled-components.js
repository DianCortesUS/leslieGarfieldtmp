import {Box, Typography} from '@material-ui/core';
import styled from 'styled-components';
import ExpandIcon from '@material-ui/icons/ExpandMoreOutlined';

export const Container = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 8px;
  &:hover {
    border-color: ${({theme}) => theme.palette.primary.main};
  }
  overflow: hidden;
`;

export const FilterValue = styled(Typography)`
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const FilterPlaceholder = styled(Typography)`
  color: ${({theme}) => theme.palette.border.darkGray};
  user-select: none;
  margin-left: -8px;
  border-left: 1px solid ${({theme}) => theme.palette.border.darkGray};
  padding: 0 20px;
`;

export const StyledExpandIcon = styled(ExpandIcon)`
  color: ${({theme}) => theme.palette.border.darkGray};
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform: ${({isopen}) => (isopen === 'true' ? 'rotateX(180deg)' : '')};
`;
