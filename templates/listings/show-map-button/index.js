import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {APARTMENT_VIEW_MODES} from '../constants';
import { ButtonMap } from './styled-components';

function ShowMapButton({setViewMode}) {
  const handleMapButtonClick = useCallback(
    () => setViewMode(APARTMENT_VIEW_MODES.MAP),
    [setViewMode],
  );

  return (
    <ButtonMap onClick={handleMapButtonClick}>
      <Box display="flex">
        <Box display="inline-flex" mr={1.5}>
        </Box>
        <span className='show-map-text'>Show Map</span>
      </Box>
    </ButtonMap>
  );
}

ShowMapButton.propTypes = {
  setViewMode: PropTypes.func.isRequired,
};

const Memo = React.memo(ShowMapButton);

export {Memo as ShowMapButton};
