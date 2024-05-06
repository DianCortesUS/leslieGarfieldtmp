import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useAsync} from '@perchwell/hooks';

import {sendEmail, sendBrokerLoopEmail} from 'rest-api';

function useContactForm(options = {}) {
  const {recipient = null, defaultValues = {}} = options; // use null as default recipient

  const defaultValuesRef = React.useRef(defaultValues);
  const {reset, handleSubmit, ...otherFunctions} = useForm({defaultValues});
  const {run, isSuccess} = useAsync();

  useEffect(() => {
    if (isSuccess) {
      reset(defaultValuesRef.current);
    }
  }, [isSuccess, reset]);

  const sendData = (data) => {
    run(Promise.all([sendEmail({data, recipient}), sendBrokerLoopEmail(data)]));
  };

  return {
    handleSubmit: handleSubmit(sendData),
    sendData,
    isSuccess,
    reset,
    ...otherFunctions,
  };
}

export default useContactForm;
