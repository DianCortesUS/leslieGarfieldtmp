import React from 'react'
import {usePageContent} from 'api';
import { PageHeader } from 'components/page-header';
import {PageSpinner} from 'components/page-spinner';
import { SopContainter, SopContentHeader, SopContentHeaderText, SopTextContent, SopParagraph, SopListContainer, SopListItem } from './styled-components';

const SopTemplate = () => {
  const {isLoading, data = {}} = usePageContent('sop');
  const {components} = data;

  return (
    <SopContainter>
      <PageSpinner visible={isLoading}>
        <PageHeader>{components?.header?.labels?.title?.content}</PageHeader>
        <SopContentHeader>
          <SopContentHeaderText>
            {components?.content?.labels?.header?.content}
          </SopContentHeaderText>
        </SopContentHeader>
        <SopTextContent>
          <SopParagraph>
            {components?.content?.labels?.text?.content}
          </SopParagraph>
          <SopListContainer>
            <SopListItem>
              {components?.content?.labels?.item_1?.content}
            </SopListItem>
            <SopListItem>
              {components?.content?.labels?.item_2?.content}
            </SopListItem>
            <SopListItem>
              {components?.content?.labels?.item_3?.content}
            </SopListItem>
          </SopListContainer>
          <SopParagraph>
            {components?.content?.labels?.footer?.content}
          </SopParagraph>
        </SopTextContent>
      </PageSpinner>
    </SopContainter>
  );
}

export default SopTemplate