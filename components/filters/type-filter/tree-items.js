import React from 'react';
import PropTypes from 'prop-types';
import {hasChildren} from '@perchwell/utils';

import {TreeItem} from '../styled-components';
import {TreeItemLabel} from './tree-item-label';
import {isOptionChecked} from './helpers';

function TreeItems({options, filters, handleCheck}) {
  return options.map((option) => (
    <TreeItem
      key={option.id}
      nodeId={option.id}
      data-tree-label-type={hasChildren(option) ? 'group-label' : 'label'}
      label={
        <TreeItemLabel
          option={option}
          checked={isOptionChecked(option, filters)}
          onCheck={handleCheck}
        />
      }
      onLabelClick={(event) => {
        event.preventDefault();
        handleCheck(option);
      }}
    >
      {hasChildren(option)
        ? TreeItems({
            options: option.children,
            filters,
            handleCheck,
          })
        : null}
    </TreeItem>
  ));
}

TreeItems.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.object),
    }),
  ).isRequired,
  filters: PropTypes.object.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

const Memo = React.memo(TreeItems);

export {Memo as TreeItems};
