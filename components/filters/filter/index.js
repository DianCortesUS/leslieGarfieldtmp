import React, {useMemo, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Box, ClickAwayListener, Fade, Popper, Typography} from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 50px;
  outline: none;
  }
`;

const StyledPopper = styled(Popper)`
  width: 100%;
  min-width: ${({minwidth}) => minwidth};
  z-index: 1;
`;

function Filter({
  children,
  valueComponent: ValueComponent,
  maxHeight,
  onClose,
  popperMinWidth,
  ...restProps
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isDropdownOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const closeDropdown = useCallback(() => {
    if (isDropdownOpen) {
      setAnchorEl(null);
      if (onClose) onClose();
    }
  }, [isDropdownOpen, onClose]);

  const handleBlur = useCallback((e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // setAnchorEl(null);
    }
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        isDropdownOpen ? closeDropdown() : setAnchorEl(event.currentTarget);
      }
    },
    [isDropdownOpen, closeDropdown],
  );

  const handleClick = useCallback(
    (event) => {
      setAnchorEl(isDropdownOpen ? null : event.currentTarget);
    },
    [isDropdownOpen],
  );

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={closeDropdown}
    >
      <Container tabIndex="0" onKeyDown={handleKeyDown} onBlur={handleBlur}>
        { ValueComponent ? (
          <ValueComponent
          onClick={handleClick}
          isDropdownOpen={isDropdownOpen}
          {...restProps}
        />
        ) : (
          <div style={{ width: '120px', height: '50px' }} onClick={handleClick}>      <Typography variant="p">Beds</Typography></div>
        )}
        <StyledPopper
          minwidth={popperMinWidth}
          placement="bottom-end"
          open={isDropdownOpen}
          anchorEl={anchorEl}
          transition
          disablePortal
        >
          {({TransitionProps}) => (
            <Fade {...TransitionProps}>
              <Box
                maxHeight={maxHeight}
                bgcolor="background.default"
                boxShadow={1}
                overflow="auto"
                p="9px"
              >
                {children}
              </Box>
            </Fade>
          )}
        </StyledPopper>
      </Container>
    </ClickAwayListener>
  );
}

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  valueComponent: PropTypes.elementType.isRequired,
  maxHeight: PropTypes.string,
  onClose: PropTypes.func,
  popperMinWidth: PropTypes.string,
};

Filter.defaultProps = {
  maxHeight: '300px',
  popperMinWidth: '100%',
};

const Memo = React.memo(Filter);

export {Memo as Filter};
