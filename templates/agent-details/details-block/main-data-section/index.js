import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';

import { AgentName, AgentPhone } from '../styled-components';

function MainDataSection({name, phone, email}) {
  return (
    <Box>
      <AgentName>{name}</AgentName>
      <AgentPhone>
        <a href={`tel:${phone}`}>{phone}</a>
      </AgentPhone>
      <AgentPhone>
        <a href={`mailto:${email}`}>{email}</a>
      </AgentPhone>
    </Box>
  );
}

MainDataSection.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export {MainDataSection as default};
