import React from 'react';
import Link from 'next/link';
import {Box} from '@material-ui/core';
import {NeighborhoodType} from '@perchwell/domain';

import {usePublications} from 'api';
import {ContentBlock} from 'components/content-block';
import {Spinner} from 'components/spinner';
import {PublicationCards} from 'components/publication-cards';
import {getNeighborhoodBlogLink} from 'helpers/blog';

import {Title2, TitleBox, LinkText} from '../styled-components';
import { Button } from 'components/buttons/button';

function PublicationBlock({neighborhood}) {
  const {isLoading, data = []} = usePublications({
    client_website_neighborhood_id: neighborhood.id,
  });

  if (data.length === 0) {
    return null;
  }

  return (
    <ContentBlock pt={16} pb={12} bgcolor="background.ggColor">
      <Box>
        <TitleBox>
          <Title2 align="center">
            NEIGHBORHOOD NEWS
          </Title2>
        </TitleBox>
        <Box mt={{xs: 0, md: 8}}>
          {isLoading ? (
            <Spinner />
          ) : (
            <PublicationCards publications={data.slice(0, 3)} />
          )}
        </Box>
        <Box mt={4} textAlign="center">
          <Link href={getNeighborhoodBlogLink(neighborhood)} passHref>
            <LinkText component="a">
              <Button>{`VIEW ALL ${neighborhood.name.toUpperCase()} NEWS`}</Button>
            </LinkText>
          </Link>
        </Box>
      </Box>
    </ContentBlock>
  );
}

PublicationBlock.propTypes = {
  neighborhood: NeighborhoodType.isRequired,
};

export {PublicationBlock};
