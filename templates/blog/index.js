import React from 'react';
import PropTypes from 'prop-types';
import {useInfiniteQuery} from 'react-query';
import {Box, Typography} from '@material-ui/core';

import {getPublications} from 'rest-api';
import {Head} from 'components/head';
import {ContentBlock} from 'components/content-block';
import {Divider} from 'components/divider';
import {SubscribeBlock} from 'components/subscribe-block';
import {PageSpinner} from 'components/page-spinner';
import {LoadMoreButton} from 'components/load-more-button';

import {FeaturedPost} from './featured-post';
import {PublicationList} from './publication-list';
import {getPublicationsTitle} from './helpers';
import { BlogContainer, BlogNavBar } from './styled-components';
import { PageHeader } from 'components/page-header';

function BlogTemplate({query, breadcrumb}) {
  const {
    isLoading,
    isFetchingMore,
    data = [],
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    `publications?query=${JSON.stringify(query)}`,
    (_, page) =>
      getPublications({
        page: page ?? 1,
        page_size: 10,
        include_employees: true,
        include_neighborhoods: true,
        ...query,
      }).then((resp) => resp.data),
    {
      getFetchMore: (lastGroup, allGroups) =>
        lastGroup.length === 10 ? allGroups.length + 1 : false,
    },
  );

  const handleLoadMoreClick = React.useCallback(() => {
    fetchMore();
  }, [fetchMore]);

  const publications = React.useMemo(
    () => data.reduce((res, dataChunk) => [...res, ...dataChunk], []),
    [data],
  );

  const queryKeys = Object.keys(query);
  if (queryKeys.length > 0) {
    const title = getPublicationsTitle(publications[0], query) ?? '';

    return (
      <>
        <Head
          title={title ? `${title} | Leslie J. Garfield` : 'Leslie J. Garfield'}
          breadcrumb={breadcrumb}
        />
        <PageSpinner visible={isLoading}>
          <ContentBlock pt={8} mb={8}>
            <div>
              <Typography gutterBottom>
                Posts featuring {title.toUpperCase()}
              </Typography>
              <Divider mb={3} />
              <PublicationList
                publications={publications}
                queryKey={queryKeys[0]}
              />
              {canFetchMore && (
                <Box align="center">
                  <LoadMoreButton
                    onClick={handleLoadMoreClick}
                    isLoading={!!isFetchingMore}
                  />
                </Box>
              )}
            </div>
          </ContentBlock>
        </PageSpinner>
        <SubscribeBlock />
      </>
    );
  }

  return (
    <BlogContainer>
      <PageHeader>
        Journal
      </PageHeader>
      <Head title="The blog of Leslie J. Garfield" />
      <PageSpinner visible={isLoading}>
        <ContentBlock pt={8} mb={8}>
          <div className="links-bar">
            <div className="journal-links">
              <ul className="journal-links-list">
                <li className="journal-link-text">Latest</li>
                <li className="journal-link-text">Homes</li>
                <li className="journal-link-text">Lifestyle</li>
                <li className="journal-link-text">News</li>
                <li className="journal-link-text">Films</li>
                <li className="journal-link-text">Press</li>
                <li className="journal-link-text">All</li>
              </ul>
            </div>
            <div></div>
          </div>
        </ContentBlock>
        <ContentBlock component="section" pb={8}>
          <div className="posts-container">
            <div className="featured-post">
              <FeaturedPost publication={publications[0]} />
            </div>
            <div className="posts-list">
            <PublicationList publications={publications.slice(1)} />
                  {canFetchMore && (
                    <Box>
                      <LoadMoreButton
                        onClick={handleLoadMoreClick}
                        isLoading={!!isFetchingMore}
                      />
                    </Box>
                  )}
            </div>
          </div>
        </ContentBlock>
      </PageSpinner>
    </BlogContainer>
  );
}

BlogTemplate.propTypes = {
  query: PropTypes.object,
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};

export {BlogTemplate as default};
