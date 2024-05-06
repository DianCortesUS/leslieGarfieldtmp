import React from 'react';
import PropTypes from 'prop-types';

import {ActionContainer, IconContainer, Name} from './styled-components';

const iconStyle = {
  display: 'block',
  width: '100%',
  height: '100%',
};

function ActionItem({label, icon: Icon, onClick}) {
  return (
    <ActionContainer
      container
      item
      onClick={onClick}
      xs={6}
    >
      <IconContainer>
        <Icon  style={iconStyle}/>
      </IconContainer>
      <Name variant="overline">{label}</Name>
    </ActionContainer>
  );
}

ActionItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
};

export {ActionItem};
