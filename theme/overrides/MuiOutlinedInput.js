import palette from '../palette';

export default {
  root: {
    // eslint-disable-next-line
    ['&:hover .MuiOutlinedInput-notchedOutline']: {
      borderColor: palette.primary.main,
    },
  },
  input: {
    padding: '9.5px 14px',
  },
};
