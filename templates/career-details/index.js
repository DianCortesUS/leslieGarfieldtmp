import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

import {usePageContent} from 'api';
import {Head} from 'components/head';
import {ContentBlock} from 'components/content-block';
import {PageSpinner} from 'components/page-spinner';

import PrimaryInfo from './primary-info';
import Form from './form';
import { PageHeader } from 'components/page-header';
import { CareersDetailsContainer } from './styled-components';

function CareerDetailsTemplate({career, breadcrumb}) {
  const {isLoading: isStaticLoading, data: pageData = {}} = usePageContent(
    'careers',
  );

  return (
    <CareersDetailsContainer>
      <Head
        title={career.position_title}
        description={career.position_title}
        breadcrumb={breadcrumb}
      />
      <PageSpinner visible={isStaticLoading}>
        <PageHeader>
            {pageData?.components?.header?.labels?.title?.content}
        </PageHeader>
        <PrimaryInfo career={career} />
        <Form careerId={career.id} />
      </PageSpinner>
    </CareersDetailsContainer>
  );
}

CareerDetailsTemplate.propTypes = {
  career: PropTypes.shape({
    id: PropTypes.number,
    position_title: PropTypes.string,
    employment_location: PropTypes.string,
    experience_required: PropTypes.string,
    application_deadline: PropTypes.string,
    position_description: PropTypes.string,
    accepting_applications: PropTypes.bool,
  }),
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};

export {CareerDetailsTemplate as default};
