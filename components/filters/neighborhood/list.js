import React from 'react';
import PropTypes from 'prop-types';
import {NeighborhoodType} from '@perchwell/domain';

import {TreeView} from '../styled-components';
import {ListItem} from './list-item';

function List({neighborhoods, hiddenNodes, ...ListItemProps}) {
  return (
    <TreeView>
      {neighborhoods.map((neighborhood) => {
        if (hiddenNodes.includes(neighborhood.id)) {
          return null;
        }

        return (
          <ListItem
            key={neighborhood.id}
            neighborhood={neighborhood}
            {...ListItemProps}
          />
        );
      })}
    </TreeView>
  );
}

List.propTypes = {
  neighborhoods: PropTypes.arrayOf(NeighborhoodType),
  hiddenNodes: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
  neighborhoods: [],
  hiddenNodes: [],
};

const Memo = React.memo(List);

export {Memo as List};
