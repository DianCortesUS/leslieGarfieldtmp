import React from 'react';
import PropTypes from 'prop-types';
import {NeighborhoodType} from '@perchwell/domain';

import {Checkbox} from '../checkbox';
import {TreeItem, FormControlLabel, NeighborhoodFilterList } from '../styled-components';

function ListItem({ item, checkedIds, handleCheck}) {
  return (
    <TreeItem
      nodeId={item.id.toString()}
      label={
        <FormControlLabel
          key={item.id}
          value={item}
          control={
            <Checkbox
              checked={checkedIds.includes(item.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.stopPropagation();
                  handleCheck(item);
                }
              }}
            />
          }
          label={
            <NeighborhoodFilterList>{item.name}</NeighborhoodFilterList>
          }
          labelPlacement="end"
        />
      }
      onLabelClick={(event) => {
        event.preventDefault();
        handleCheck(item);
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
