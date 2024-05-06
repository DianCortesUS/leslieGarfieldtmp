import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {Slider} from '@perchwell/components';

const VIEW_MODES = {
  CARD: 'card',
  SLIDER: 'slider',
};

const mapViewModeToContainer = {
  [VIEW_MODES.CARD]: Grid,
  [VIEW_MODES.SLIDER]: Slider,
};


function List({viewMode, children, containerProps}) {
  const Container = useMemo(() => mapViewModeToContainer[viewMode], [viewMode]);

  return <Container justify="center" {...containerProps}>{children}</Container>;
}

List.propTypes = {
  viewMode: PropTypes.oneOf(Object.values(VIEW_MODES)),
  containerProps: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

List.defaultProps = {
  viewMode: VIEW_MODES.CARD,
  containerProps: {},
};

const Memo = React.memo(List);

export {Memo as List, VIEW_MODES};
