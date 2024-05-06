import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  FilterValue,
  FilterPlaceholder,
} from './styled-components';
import { BorderRight } from '@material-ui/icons';

function TextValueComponent({isDropdownOpen, value, placeholder, onClick}) {
  const isOpen = isDropdownOpen.toString();

  return (
    <Container
      isopen={isOpen}
      className={isOpen === 'true' ? '-opened' : ''}
      onClick={onClick}
    >
      {value ? (
        <FilterValue color="textPrimary" style={{ fontFamily: "sweet sans", fontSize: "13px" }}>
          {value} 
        </FilterValue>
      ) : (
        <FilterPlaceholder style={{ fontFamily: "sweet sans", fontSize: "13px" }}>{placeholder}</FilterPlaceholder>
      )}
    </Container>
  );
}

TextValueComponent.propTypes = {
  isDropdownOpen: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Memo = React.memo(TextValueComponent);

export {Memo as TextValueComponent};
export * from './styled-components';
