import React from 'react';
import { Grid, Box } from '@material-ui/core';
import {ParsedText} from '@perchwell/components';

import {usePageContent} from 'api';
import {EmailIcon, PhoneIcon} from 'icons';
import {Head} from 'components/head';
import {ContentBlock} from 'components/content-block';
import {PageSpinner} from 'components/page-spinner';
import { FaqContent, FloatingBoxTitle, QuestionsTitle, QuestionsContent } from './styled-components';
import { PageHeader } from 'components/page-header';

function FaqTemplate() {
  const {isLoading, data = {}} = usePageContent('faq');

  const {components} = data;
  const list = components?.content?.item_lists?.questions?.content ?? [];

  return (
    <FaqContent>
      <Head
        title="Frequently Asked Questions"
        description="Frequently Asked Questions"
      />
      <PageSpinner visible={isLoading}>
        <PageHeader>
            {components?.header?.labels?.title?.content}
        </PageHeader>
        <ContentBlock pt={8} pb={8}>
          <Grid container justify="space-between">
            <Grid item xs={12} md={7}>
              <Box pb={2}>
                {list.map(({title, subtitle}, index) => (
                  <Box key={index} mb={2}>
                    <QuestionsTitle>{title}</QuestionsTitle>
                    <QuestionsContent>{subtitle}</QuestionsContent>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box bgcolor="background.cream" position="sticky" top={80} p={3}>
                <Box mb={1}>
                  <FloatingBoxTitle>
                    HAVE A QUESTION?
                  </FloatingBoxTitle>
                </Box>
                <Box mb={1}>
                  <ParsedText variant="caption">
                    {components?.banner?.labels?.subtitle?.content}
                  </ParsedText>
                </Box>
                <Box mb={1}>
                  <a
                    href={`mailto:${components?.banner?.labels?.email?.content}`}
                  >
                    <Box
                      color="primary.main"
                      display="flex"
                      alignItems="center"
                    >
                      <Box display="inline-flex" mr={1}>
                        <EmailIcon />
                      </Box>
                      <ParsedText
                        variant="caption"
                        style={{fontWeight: 'bold'}}
                      >
                        {components?.banner?.labels?.email?.content}
                      </ParsedText>
                    </Box>
                  </a>
                </Box>
                <Box>
                  <Box color="primary.main" display="flex" alignItems="center">
                    <Box display="inline-flex" mr={1}>
                      <PhoneIcon />
                    </Box>
                    <ParsedText variant="caption" style={{fontWeight: 'bold'}}>
                      {components?.banner?.labels?.phone?.content}
                    </ParsedText>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ContentBlock>
      </PageSpinner>
    </FaqContent>
  );
}

export {FaqTemplate as default};
