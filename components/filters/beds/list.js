import React from 'react';
import PropTypes from 'prop-types';

import {TreeView} from '../styled-components';
import {ListItem} from './list-item';

function List({items, hiddenNodes, ...ListItemProps}) {
  return (
    <TreeView>
      {items.map((item) => {
        if (hiddenNodes && hiddenNodes.includes(item.id)) {
          return null;
        }

        return (
          <ListItem
            key={item.id}
            item={item}
            {...ListItemProps}
          />
        );
      })}
    </TreeView>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  hiddenNodes: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
  items: [],
  hiddenNodes: [],
};

const Memo = React.memo(List);

export {Memo as List};
