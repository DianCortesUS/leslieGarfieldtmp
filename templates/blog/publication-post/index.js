import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Box, Grid, Typography} from '@material-ui/core';
import {PublicationType} from '@perchwell/domain';
import {ParsedText} from '@perchwell/components';

import {QUERY_PARAMS} from 'constants/blog';
import {getPublicationTags} from 'helpers/blog';
import {Divider} from 'components/divider';
import {PublicationTags, PublicationReleaseInfo} from 'components/blog';
import {ImageBox} from 'components/image-box';
import {
  getReportDetailsLink,
  getPublicationDetailsLink,
} from 'helpers/detail-links';
import truncateString from 'helpers/truncate-string';

import {ImageBlock, ImageMask} from '../styled-components';
import {isPublicationReport} from '../helpers';

function PublicationPost({publication, queryKey}) {
  const publicationDetailsLink = useMemo(() => {
    const getDetailsLink = isPublicationReport(publication)
      ? getReportDetailsLink
      : getPublicationDetailsLink;

    return getDetailsLink(publication);
  }, [publication]);

  const tags = useMemo(() => getPublicationTags(publication, queryKey), [
    publication,
    queryKey,
  ]);

  return (
    <Grid container>
      <Grid item xs={12} sm={5}>
        <Link href={publicationDetailsLink} passHref>
          <a>
            <ImageBlock>
              <ImageBox
                image={publication.images?.[0]}
                height="100%"
                pt={{xs: '60%', sm: '100%'}}
              />
              <ImageMask />
            </ImageBlock>
          </a>
        </Link>
      </Grid>
      <Grid item container direction="column" xs={12} sm={7}>
        <Box
          height="100%"
          pl={{xs: 0, sm: 4}}
          pr={{xs: 0, sm: 2}}
          mt={{xs: 4, sm: 0}}
        >
          <PublicationTags tags={tags} />
          <Link href={publicationDetailsLink} passHref>
            <Typography component="a" variant="h5" color="primary">
              {publication.title}
            </Typography>
          </Link>
          <Divider width="60px" mt={2} mb={2} />
          <PublicationReleaseInfo
            date={publication.publication_date}
            employees={publication.client_website_employees}
          />
          {publication?.body && (
            <ParsedText display="inline" variant="subtitle1">
              {truncateString(publication.body, {limit: 140})}
            </ParsedText>
          )}
          <Link href={publicationDetailsLink} passHref>
            <Typography
              component="a"
              display="inline"
              color="primary"
              variant="subtitle1"
              style={{fontStyle: 'italic'}}
            >
              Read More
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

PublicationPost.propTypes = {
  publication: PublicationType.isRequired,
  queryKey: PropTypes.oneOf(Object.values(QUERY_PARAMS)),
};

PublicationPost.defaultProps = {
  queryKey: QUERY_PARAMS.TAG,
};

export {PublicationPost};
