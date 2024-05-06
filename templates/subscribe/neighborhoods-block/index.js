import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Typography, Checkbox} from '@material-ui/core';

import {useNeighborhoods} from 'api';
import {Spinner} from 'components/spinner';

import {ControlLabel} from './styled-components.js';

function NeighborhoodsBlock({selected, onSelect}) {
  // State will be implemented later
  // const [state, setState] = useState({});
  const {isLoading, data: neighborhoods = []} = useNeighborhoods();

  if (isLoading) {
    return <Spinner p={4} />;
  }

  return (
    <Box mt={3}>
      <Box textAlign="center" mb={4}>
        <Box mb={5}>
          <Typography variant="subtitle1" style={{fontWeight: 'bold'}}>
            Choose Neighborhood Interest(s)
          </Typography>
        </Box>
        <Grid container>
          {neighborhoods.map((neighborhood) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={neighborhood.id}>
              <ControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={() => onSelect(neighborhood)}
                    checked={selected.includes(neighborhood.name)}
                  />
                }
                label={
                  <Typography variant="subtitle1" align="left">
                    {neighborhood.name}
                  </Typography>
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

NeighborhoodsBlock.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
};

export {NeighborhoodsBlock as default};
