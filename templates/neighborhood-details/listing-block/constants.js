import {VIEW_MODES} from 'components/list';

export const listResponsiveConfig = {
  xs: {
    viewMode: VIEW_MODES.SLIDER,
    containerProps: {
      arrows: false,
      slidesToShow: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
      scrollable: false,
      autoplaySpeed: 3000,
      autoplay: true,
    },
  },
  md: {
    viewMode: VIEW_MODES.SLIDER,
    containerProps: {
      slidesToShow: 2,
      spacing: '10px',
    },
  },
  lg: {
    viewMode: VIEW_MODES.CARD,
    containerProps: {container: true, spacing: 6},
    itemProps: {lg: 4},
  },
};
