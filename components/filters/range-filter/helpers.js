import {getFormattedNumber, isNil} from '@perchwell/utils';

function formatRangeValue(value = '') {
  if (isNil(value) || value === '') {
    return '';
  }

  if (String(value).includes('.')) {
    const [beforeDot, afterDot] = String(value).split('.');

    return `${getFormattedNumber(Number(beforeDot))}.${afterDot}`;
  }

  return getFormattedNumber(Number(value));
}

function getRangeValue({min, max, config}) {
  if (!isNil(min) && !isNil(max)) {
    const formattedMin = getFormattedNumber(min, config?.both?.min);
    const formattedMax = getFormattedNumber(max, config?.both?.max);
    const endAdornment = config?.both?.endAdornment ?? '';

    return min === max
      ? `${formattedMin}${endAdornment}`
      : `${formattedMin} - ${formattedMax}${endAdornment}`;
  }

  if (!isNil(min)) {
    const {startAdornment = '', endAdornment = ''} = config?.min ?? {};
    return getFormattedNumber(min, {startAdornment, endAdornment});
  }

  if (!isNil(max)) {
    const {startAdornment = '', endAdornment = ''} = config?.max ?? {};
    return getFormattedNumber(max, {startAdornment, endAdornment});
  }

  return '';
}

function hasRangeError({min, max}) {
  return (
    (!isNil(min) && !isNil(max) && Number(min) > Number(max)) ||
    (!isNil(max) && max > 500000000)
  );
}

export {formatRangeValue, getRangeValue, hasRangeError};
