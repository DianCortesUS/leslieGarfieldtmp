import React, {
  useEffect,
  useReducer,
  useState,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import {FILTER_TYPES, isNil} from '@perchwell/utils';

import {useFilters} from 'context/filters';

import {TextValueComponent} from '../text-value-component';

import {MobileView} from './mobile-view';
import {DesktopView} from './desktop-view';
import {formatRangeValue, getRangeValue, hasRangeError} from './helpers';

function RangeFilter({
  title,
  filterKey,
  minLabel,
  maxLabel,
  errorMessage,
  startAdornment,
  inputValueViewConfig,
  placeholder,
  pattern,
  viewMode,
}) {
  const {filters, setFilter} = useFilters();
  const initialState = useMemo(
    () => ({
      min: filters?.[filterKey]?.value?.min,
      max: filters?.[filterKey]?.value?.max,
    }),
    [filters, filterKey],
  );
  const [{min, max}, setState] = useReducer(
    (s, a) => ({...s, ...a}),
    initialState,
  );
  const [showError, setShowError] = useState(false);
  const regex = useMemo(() => new RegExp(pattern), [pattern]);

  useEffect(() => {
    const hasError = hasRangeError({min, max});
    setShowError(hasError);
  }, [min, max]);

  const handleChange = useCallback(
    (event) => {
      const {name, value} = event.target;
      const valueWithoutComma = value.replace(/,/g, '');

      if (valueWithoutComma === '') {
        setState({
          [name]: null,
        });
        setShowError(false);
        return;
      }

      if (regex.test(valueWithoutComma)) {
        setState({
          [name]: valueWithoutComma,
        });
        setShowError(false);
      }
    },
    [regex],
  );

  const updateFilterValue = useCallback(() => {
    setFilter({
      type: FILTER_TYPES.RANGE,
      key: filterKey,
      value: {
        min: isNil(min) ? null : Number(min),
        max: isNil(max) ? null : Number(max),
      },
    });
  }, [min, max, filterKey, setFilter]);

  const handleClose = useCallback(() => {
    hasRangeError({min, max}) ? setState(initialState) : updateFilterValue();
  }, [min, max, initialState, updateFilterValue]);

  const handleBlur = useCallback(() => {
    if (viewMode === 'mobile' && !hasRangeError({min, max})) {
      updateFilterValue();
    }
  }, [min, max, viewMode, updateFilterValue]);

  const value = useMemo(
    () =>
      getRangeValue({
        min: filters?.[filterKey]?.value?.min,
        max: filters?.[filterKey]?.value?.max,
        config: inputValueViewConfig,
      }),
    [filters, filterKey, inputValueViewConfig],
  );

  const minProps = useMemo(
    () => ({
      label: minLabel,
      placeholder: '-',
      value: formatRangeValue(min),
      startAdornment: min ? startAdornment : null,
      onChange: handleChange,
      onBlur: handleBlur,
    }),
    [minLabel, min, startAdornment, handleChange, handleBlur],
  );
  const maxProps = useMemo(
    () => ({
      label: maxLabel,
      placeholder: '-',
      value: formatRangeValue(max),
      startAdornment: max ? startAdornment : null,
      onChange: handleChange,
      onBlur: handleBlur,
    }),
    [maxLabel, max, startAdornment, handleChange, handleBlur],
  );

  if (viewMode === 'mobile') {
    return (
      <MobileView
        title={title}
        minProps={minProps}
        maxProps={maxProps}
        errorMessage={showError ? errorMessage : null}
      />
    );
  }

  return (
    <DesktopView
      valueComponent={TextValueComponent}
      value={value}
      placeholder={placeholder}
      maxHeight="400px"
      onClose={handleClose}
      minProps={minProps}
      maxProps={maxProps}
      errorMessage={showError ? errorMessage : null}
    />
  );
}

RangeFilter.propTypes = {
  title: PropTypes.string.isRequired,
  filterKey: PropTypes.string.isRequired,
  minLabel: PropTypes.string.isRequired,
  maxLabel: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  startAdornment: PropTypes.string,
  inputValueViewConfig: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  viewMode: PropTypes.oneOf(['mobile', 'desktop']),
};

RangeFilter.defaultProps = {
  startAdornment: null,
  inputValueViewConfig: {},
  pattern: '^[0-9]+$',
  viewMode: 'desktop',
};

const Memo = React.memo(RangeFilter);

export {Memo as RangeFilter};
