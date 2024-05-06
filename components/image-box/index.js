import React from 'react';
import {ImageBox as PerchwellImageBox} from '@perchwell/components';

const viewConfig = {
  threshold: 0,
  triggerOnce: true,
};

function ImageBox(props) {
  return (
    <PerchwellImageBox
      bgcolor="common.white"
      viewConfig={viewConfig}
      withFallback
      {...props}
    />
  );
}

const Memo = React.memo(ImageBox);

export {Memo as ImageBox};
