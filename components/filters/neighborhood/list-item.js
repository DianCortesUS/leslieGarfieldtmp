import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';
import {NeighborhoodType} from '@perchwell/domain';

import {Checkbox} from '../checkbox';
import {TreeItem, FormControlLabel, NeighborhoodFilterList } from '../styled-components';

function ListItem({neighborhood, checkedIds, handleCheck}) {
  return (
    <TreeItem
      nodeId={neighborhood.id.toString()}
      label={
        <FormControlLabel
          key={neighborhood.id}
          value={neighborhood}
          control={
            <Checkbox
              checked={checkedIds.includes(neighborhood.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.stopPropagation();
                  handleCheck(neighborhood);
                }
              }}
            />
          }
          label={
            <NeighborhoodFilterList>{neighborhood.name}</NeighborhoodFilterList>
          }
          labelPlacement="end"
        />
      }
      onLabelClick={(event) => {
        event.preventDefault();
        handleCheck(neighborhood);
      }}
    />
  );
}

ListItem.propTypes = {
  neighborhood: NeighborhoodType.isRequired,
  checkedIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleCheck: PropTypes.func.isRequired,
};

const Memo = React.memo(ListItem);

export {Memo as ListItem};
