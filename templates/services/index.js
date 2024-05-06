import React from 'react';
import {Element} from 'react-scroll';

import {usePageContent} from 'api';
import {Head} from 'components/head';
import {StickyNav} from 'components/sticky-nav';
import {SubscribeBlock} from 'components/subscribe-block';
import {Banner} from 'components/banner';
import {PageSpinner} from 'components/page-spinner';

import {InfoBlock} from './info-block';
import {QuoteBlock} from './quote-block';
import {SubInfoBlock} from './sub-info-block';
import {transformToHash} from './helpers';
import {LeadingServiveContainer, ServiceContainer} from './styled-components';

function ServicesTemplate() {
  const {isLoading, data = {}} = usePageContent('services');

  const {components} = data;
  const {header, ...services} = components ?? {};

  const servicesWithHash = Object.keys(services).map((serviceKey) => ({
    ...services[serviceKey],
    hash: transformToHash(services[serviceKey].id),
  }));

  return (
    <>
      <Head
        title="Real Estate Services | Leslie Garfield"
        description="At Leslie Garfield we offer a variety of services to help our clients make smart real estate decisions, whether buying or selling."
      />
      <PageSpinner visible={isLoading}>
        <Banner
          type={header?.media?.background_image?.type}
          contentURL={header?.media?.background_image?.content_url}
          title={header?.labels?.title?.content}
          subtitle={header?.labels?.subtitle?.content}
          titleProps={{color: 'textSecondary'}}
          subtitleProps={{color: 'textSecondary'}}
        />
        <StickyNav
          links={servicesWithHash.map((service) => ({
            to: service.hash,
            name: service?.labels?.title?.content,
          }))}
        />
        {servicesWithHash.map((service, index) => {
          const ServiceContainerComponent =
            index === 0 ? LeadingServiveContainer : ServiceContainer;

          return (
            <Element key={index} name={service.hash}>
              <ServiceContainerComponent>
                <InfoBlock
                  title={service?.labels?.title?.content}
                  subtitle={service?.labels?.subtitle?.content}
                  description={service?.labels?.description?.content}
                  servicesList={service?.item_lists?.specific_services?.content}
                  image={service?.media?.background_image_1?.content_url}
                  imageSize={service?.media?.background_image_1?.size}
                />
                <QuoteBlock
                  quote={service?.labels?.quote?.content}
                  source={service?.labels?.quote_source?.content}
                />
                {service?.labels?.subdescription?.content && (
                  <SubInfoBlock
                    description={service?.labels?.subdescription?.content}
                    image={service?.media?.background_image_2?.content_url}
                  />
                )}
              </ServiceContainerComponent>
            </Element>
          );
        })}
        <SubscribeBlock />
      </PageSpinner>
    </>
  );
}

export {ServicesTemplate as default};
