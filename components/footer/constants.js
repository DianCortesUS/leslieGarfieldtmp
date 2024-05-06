import {ROUTES} from 'constants/routes';

import {FacebookIcon, FacebookIconDark, InstagramIcon, InstagramIconDark, LinkedInIcon, LinkedInIconDark, YoutubeIcon, YoutubeIconDark} from 'icons';

export const GENERAL_LINKS = [
  {label: 'Frequently Asked Questions', to: ROUTES.FAQ},
  {label: 'Careers', to: ROUTES.CAREERS},
  {label: 'Closing Cost Info', to: ROUTES.CLOSING_COSTS},
  {label: 'Sitemap', to: ROUTES.SITEMAP}
];

export const DISCLAIMER_LINKS = [
  {
    label: 'Standard Operating Procedures',
    to: '/StandardOperatingProcedures-4.19.22.pdf',
  },
  {
    label: 'NY Fair Housing Notice',
    to: 'https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf',
  },
  {
    label: 'Reasonable Accommodations Notice for Prospective Tenants',
    to: '/Reasonable Accommodations Notice.pdf',
  },
];

export const MANHATTAN_OFFICE_LINK =
  'https://www.google.com/maps/place/Leslie+J+Garfield+%26+Co+Inc/@40.762887,-73.97141,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258e5624321d1:0x85a98881e26d3228!8m2!3d40.762887!4d-73.969216';
export const BROOKLYN_OFFICE_LINK =
  'https://www.google.com/maps/place/122+Montague+St+2nd+Floor,+Brooklyn,+NY+11201,+USA/@40.6945995,-73.9968307,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a48823bbca9:0xb09847f450012f5b!8m2!3d40.6945995!4d-73.994642';
export const BEAUCHAMP_LINK = 'https://www.beauchamp.com/about-us';

export const MEDIA_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/leslie-j-garfield-&-co-/',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Leslie-J-Garfield-Co-111074898918906',
  },
  {
    name: 'Twitter', 
    href: 'https://twitter.com/LeslieJGarfield'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/lesliejgarfield',
  },
];

export const MEDIA_ICONS = [
  {
    icon: FacebookIcon,
    href: 'https://www.facebook.com/Leslie-J-Garfield-Co-111074898918906',
  },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/company/leslie-j-garfield-&-co-/',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/lesliejgarfield',
  },
  { icon: YoutubeIcon, 
    href: 'https://www.youtube.com/@lesliegarfieldrealestate'
  },
];

export const MEDIA_ICONS_DARK = [
  {
    icon: FacebookIconDark,
    href: 'https://www.facebook.com/Leslie-J-Garfield-Co-111074898918906',
  },
  {
    icon: LinkedInIconDark,
    href: 'https://www.linkedin.com/company/leslie-j-garfield-&-co-/',
  },
  {
    icon: InstagramIconDark,
    href: 'https://www.instagram.com/lesliejgarfield',
  },
  { icon: YoutubeIconDark, 
    href: 'https://www.youtube.com/@lesliegarfieldrealestate'
  },
];

export const NEIGHBORHOOD_LINKS = [
  {label: 'Upper East Side', link: '/properties/new-york/upper-east-side'},
  {label: 'Upper West Side', link: '/properties/new-york/upper-west-side'},
  {label: 'Midtown', link: '/properties/new-york/midtown-east'},
  {label: 'Gramercy', link: '/properties/new-york/gramercy'},
  {label: 'Chelsea', link: '/properties/new-york/chelsea'},
  {label: 'West Village', link: '/properties/new-york/west-village'},
  {label: 'Greenwich Village', link: '/properties/new-york/greenwich-village'},
  {label: 'East Village', link: '/properties/new-york/east-village'},
  {label: 'Tribeca & SoHo', link: '/properties/new-york/soho'},
  {label: 'Harlem', link: '/properties/new-york/harlem'},
  {label: 'Brooklyn Heights', link: '/properties/new-york/brooklyn-heights'},
  {label: 'Park Slope', link: '/properties/new-york/park-slope'},
  {label: 'Cobble Hill', link: '/properties/new-york/cobble-hill'},
  {label: 'Fort Greene', link: '/properties/new-york/fort-greene'},
  {label: 'Clinton Hill', link: '/properties/new-york/clinton-hill'},
  {label: 'Prospect Heights', link: '/properties/new-york/prospect-heights'},
  {label: 'Carroll Gardens', link: '/properties/new-york/carroll-gardens'},
];
