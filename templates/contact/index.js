import React from 'react';

import {usePageContent} from 'api';
import {Head} from 'components/head';
import {Banner} from 'components/banner';
import {SubscribeBlock} from 'components/subscribe-block';
import {PageSpinner} from 'components/page-spinner';

import Form from './form';

function ContactTemplate() {
  const {isLoading, data = {}} = usePageContent('contact');

  const {components} = data;

  return (
    <>
      <Head title="Contact" description="Contact" />
      <PageSpinner visible={isLoading}>
        <Banner
          contentURL=""
          title={components?.header?.labels?.title?.content}
          subtitle={components?.header?.labels?.subtitle?.content}
          subtitleProps={{variant: 'body1'}}
        />
        <Form />
        <SubscribeBlock />
      </PageSpinner>
    </>
  );
}

export {ContactTemplate as default};
