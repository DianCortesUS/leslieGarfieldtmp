import React, {useMemo} from 'react';
import Link from 'next/link';
import {Box, Grid } from '@material-ui/core';
import {PublicationType} from '@perchwell/domain';

import {ImageBox} from 'components/image-box';
import {getPublicationDetailsLink} from 'helpers/detail-links';

import {ImageBlock, ImageMask, Title} from '../styled-components';
import { Button } from 'components/buttons/button';

function FeaturedPost({publication}) {
  const publicationDetailsLink = useMemo(
    () => getPublicationDetailsLink(publication),
    [publication],  
  );

  return (
    <Grid container direction='column'>
      <Grid item xs={12} md={11}>
        <Link href={publicationDetailsLink} passHref>
          <a>
            <ImageBlock>
              <ImageBox
                image={publication.images?.[0]}
                minHeight={{xs: '200px', md: '400px'}}
                height="100%"
              />
              <ImageMask />
            </ImageBlock>
          </a>
        </Link>
      </Grid>
      <Grid item container direction="column" xs={12} md={11}>
        <Box height="100%" pt={4}  bgcolor="transparent">
          <Link href={publicationDetailsLink} passHref>
            <Title component="a"   gutterBottom>
              {publication.title}
            </Title>
          </Link>
          <Box display={{xs: 'none', md: 'block'}} mt={3}>
            <Link href={publicationDetailsLink} passHref>
              <Button>
                Read More
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  publication: PublicationType,
};

FeaturedPost.defaultProps = {
  publication: {},
};

export {FeaturedPost};
