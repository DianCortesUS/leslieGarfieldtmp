import React from 'react';
import {useResponsive} from '@perchwell/hooks';

import {MobileView} from './mobile-view';
import {DesktopView} from './desktop-view';

function AgentsBlock(props) {
  const Component = useResponsive({
    md: DesktopView,
    xs: MobileView,
  });

  return <Component {...props} />;
}

export {AgentsBlock as default};
