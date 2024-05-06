import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';
import {AgentType, ApartmentType} from '@perchwell/domain';

import AgentsBlock from '../agents-block';
import DocumentsBlock from '../documents-block';
import RequestButton from '../request-button';

function Sidebar({
  apartment,
  agents,
  handleFloorPlanClick,
  handleRequestButtonClick,
}) {

  return (
    <Box position="sticky" top={100} pr={3}>
      <RequestButton onClick={handleRequestButtonClick}/>
      <DocumentsBlock
        apartment={apartment}
        handleFloorPlanClick={handleFloorPlanClick}
      />
      <AgentsBlock agents={agents}/>
    </Box>
  );
}

Sidebar.propTypes = {
  apartment: ApartmentType,
  agents: PropTypes.arrayOf(AgentType),
  handleFloorPlanClick: PropTypes.func.isRequired,
  handleRequestButtonClick: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  apartment: {},
  agents: [],
};

export {Sidebar as default};
