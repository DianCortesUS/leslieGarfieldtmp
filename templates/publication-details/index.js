import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box, Typography, Grid} from '@material-ui/core';
import {Logo, ParsedText} from '@perchwell/components';
import {PublicationType} from '@perchwell/domain';
import dynamic from 'next/dynamic';

import {getPublicationTags} from 'helpers/blog';
import {Head} from 'components/head';
import {ContentBlock} from 'components/content-block';
import {EmployeesBlock} from 'components/blog';
import {SubscribeBlock} from 'components/subscribe-block';
import {Divider} from 'components/divider';
import {PublicationTags, PublicationReleaseInfo} from 'components/blog';
const SocialIcons = dynamic(() => import('components/social-icons'), {
  ssr: false,
});
import truncateString from 'helpers/truncate-string';

import {DownloadButton, DecoratedContent} from './styled-components';

function PublicationDetailsTemplate({publication, breadcrumb}) {
  const {title, body, images = [], attachment_url = ''} = publication;
  const tags = getPublicationTags(publication);

  const handleDownloadClick = () => {
    if (attachment_url) {
      window.open(attachment_url, '_blank');
    }
  };

  const image_url = useMemo(() => {
    if (!images || images.length === 0) {
      return null;
    }
    const [img] = images;
    if (typeof img === 'string') {
      return img;
    }
    const {content_url = null} = img;
    return content_url;
  }, [images]);

  return (
    <>
      <Head
        title={`${publication?.title}`}
        description={truncateString(publication?.body)}
        breadcrumb={breadcrumb}
      />
      <ContentBlock component="section" pt={6} pb={8}>
        <Grid container justify="space-between">
          <Grid item xs={12} lg={7}>
            <Box>
              <Box color="primary.main">
                <PublicationTags tags={tags} />
              </Box>
              <Divider mt={2} mb={3} />
              <Typography variant="h2">{title}</Typography>
              <Box mt={1} mb={1}>
                <PublicationReleaseInfo
                  date={publication.publication_date}
                  employees={publication.client_website_employees}
                />
              </Box>
              <Box mt={2} mb={2}>
                <SocialIcons name={title} image={image_url} />
              </Box>
              <Logo
                src={image_url}
                width="100%"
                height="auto"
                alt={title}
                mt={4}
              />
              <Box mt={2}>
                {attachment_url ? (
                  <>
                    <Box mb={3}>
                      <DownloadButton
                        variant="body1"
                        onClick={handleDownloadClick}
                      >
                        Download Report
                      </DownloadButton>
                    </Box>
                    <ParsedText component="div">{body}</ParsedText>
                  </>
                ) : (
                  <DecoratedContent component="div">{body}</DecoratedContent>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <EmployeesBlock employees={publication.client_website_employees} />
          </Grid>
        </Grid>
      </ContentBlock>
      <SubscribeBlock />
    </>
  );
}

PublicationDetailsTemplate.propTypes = {
  publication: PublicationType,
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};

export {PublicationDetailsTemplate as default};
