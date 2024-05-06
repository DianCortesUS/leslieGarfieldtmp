import React from 'react';
import {SvgIcon} from '@material-ui/core';

function CheckboxIcon(props) {
  return (
    <SvgIcon width="13" height="13" viewBox="0 0 13 13" {...props}>
      <rect
        x="0.5"
        y="0.5"
        width="10"
        height="10"
        fill="white"
        stroke="#B8B8B8"
      />
    </SvgIcon>
  );
}

function CheckedCheckboxIcon(props) {
  return (
    <SvgIcon width="13" height="13" viewBox="0 0 13 13" {...props}>
      <rect
        x="0.5"
        y="0.5"
        width="10"
        height="10"
        fill="none"
        stroke="#B8B8B8"
        strokeWidth={1}
      />
      <rect
        x="1.5"
        y="1.5"
        width="10"
        height="10"
        fill="#B8B8B8"
        stroke="white"
        strokeWidth={1}
      />
    </SvgIcon>
  );
}

export {CheckboxIcon, CheckedCheckboxIcon};
