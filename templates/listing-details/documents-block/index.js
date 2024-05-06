import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {ApartmentType} from '@perchwell/domain';

import {getBrochureUrl} from './helpers';
import {ActionItem} from './action-item';
import { FloorPlanIcon, VideoIcon, BrochureIcon } from 'public/assets/Icons/icons';
import { ActionItemsContainer } from './styled-components';

function DocumentsBlock({apartment, handleFloorPlanClick}) {
  const floorPlanImage = apartment?.media?.main_floor_plan;
  const videoUrl = apartment?.media?.video_url;
  const brochureUrl = getBrochureUrl(apartment);

  const handleVideoClick = () => {
    window.open(videoUrl, '_blank');
  };

  const handleBrochureClick = () => {
    window.open(brochureUrl, '_blank');
  };

  return (
    <ActionItemsContainer>
      {floorPlanImage && (
        <ActionItem
          label="FLOORPLANS"
          icon={FloorPlanIcon}
          onClick={handleFloorPlanClick}
        />
      )}
      {videoUrl && (
        <ActionItem
          label="VIDEO"
          icon={VideoIcon}
          onClick={handleVideoClick}
        />
      )}
      {brochureUrl && (
        <ActionItem
          label="BROCHURE"
          icon={BrochureIcon}
          onClick={handleBrochureClick}
        />
      )}
    </ActionItemsContainer>
  );
}

DocumentsBlock.propTypes = {
  apartment: ApartmentType,
  handleFloorPlanClick: PropTypes.func.isRequired,
};

export {DocumentsBlock as default};
