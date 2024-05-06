import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import {usePageContent} from 'api';
import {Head} from 'components/head';
import {ContentBlock} from 'components/content-block';
import {PageSpinner} from 'components/page-spinner';
import { DisclaimerContent } from './styled-components';
import { PageHeader } from 'components/page-header';

function DisclaimerTemplate() {
  const {isLoading, data = {}} = usePageContent('disclaimer');

  const {components} = data;

  return (
    <DisclaimerContent>
      <Head title="Terms & Conditions" description="Terms & Conditions" />
      <PageSpinner visible={isLoading}>
        <PageHeader>
            {components?.header?.labels?.title?.content}
        </PageHeader>
        <ContentBlock pt={10} pb={10}>
          <Grid container justify='center'>
            <Grid item xs={12} md={8}>
              <Typography variant="subtitle1">
                {components?.body?.labels?.title?.content}
              </Typography>
            </Grid>
          </Grid>
        </ContentBlock>
      </PageSpinner>
    </DisclaimerContent>
  );
}

export {DisclaimerTemplate as default};
