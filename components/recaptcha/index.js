import React, {forwardRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = forwardRef((props, ref) => (
  <ReCAPTCHA ref={ref} sitekey={process.env.CAPTCHA_TOKEN} {...props} />
));

Recaptcha.displayName = 'ReCAPTCHA';

export {Recaptcha};
