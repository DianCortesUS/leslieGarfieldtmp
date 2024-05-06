import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import { ContentBlock } from 'components/content-block';

const PageHeaderContainer = styled(ContentBlock)`
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #DEDCDD;
    border-bottom: 1px solid #DEDCDD;
    background-color: #FFF9F0;
`;

const HeaderTitle = styled(Typography)`
    font-family: Copernicus;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    color: black;
`;

function PageHeader({children}) {
  return (
    <PageHeaderContainer>
      <HeaderTitle>{children}</HeaderTitle>
    </PageHeaderContainer>
  );
}

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  variant: PropTypes.string,
};

PageHeader.defaultProps = {
  variant: 'overline',
};

export {PageHeader};