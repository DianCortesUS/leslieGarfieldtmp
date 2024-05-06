import React from 'react';
import PropTypes from 'prop-types';
import {useInfiniteQuery} from 'react-query';
import {Box} from '@material-ui/core';

import {getPublications} from 'rest-api';
import {RESEARCH_REPORT_TAG} from 'constants/reports';
import {Head} from 'components/head';
import {ContentBlock} from 'components/content-block';
import {SubscribeBlock} from 'components/subscribe-block';
import {Spinner} from 'components/spinner';
import {LoadMoreButton} from 'components/load-more-button';

import {TagList} from './tag-list';
import {ReportCards} from './report-cards';
import {RegisterForm} from './register-form';

function ReportsTemplate({tag}) {
  const {
    isLoading,
    isFetchingMore,
    data = [],
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    `reports?tag:${tag}`,
    (_, pageToLoad) => {
      return getPublications({
        page: pageToLoad ?? 1,
        page_size: 10,
        tag,
      }).then((resp) => resp.data);
    },
    {
      getFetchMore: (lastGroup, allGroups) =>
        lastGroup.length === 10 ? allGroups.length + 1 : false,
    },
  );

  const handleLoadMoreClick = React.useCallback(() => {
    fetchMore();
  }, [fetchMore]);

  const reports = React.useMemo(
    () => data.reduce((res, dataChunk) => [...res, ...dataChunk], []),
    [data],
  );

  return (
    <>
      <Head title="Research Reports" description="Research Reports" />
      <ContentBlock pt={8} pb={8} bgcolor="background.lightPrimary">
        <TagList tag={tag} />
        {isLoading ? (
          <Spinner pt={10} pb={10} />
        ) : (
          <>
            <ReportCards reports={reports ?? []} tag={tag} />
            {canFetchMore && (
              <Box align="center">
                <LoadMoreButton
                  onClick={handleLoadMoreClick}
                  isLoading={!!isFetchingMore}
                />
              </Box>
            )}
          </>
        )}
      </ContentBlock>
      <RegisterForm />
      <SubscribeBlock />
    </>
  );
}

ReportsTemplate.propTypes = {
  tag: PropTypes.string,
};

ReportsTemplate.defaultProps = {
  tag: RESEARCH_REPORT_TAG,
};

export {ReportsTemplate as default};
