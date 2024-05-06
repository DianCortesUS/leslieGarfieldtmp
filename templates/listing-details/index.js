import React, {useReducer, useCallback, useState} from 'react';
import {ApartmentType} from '@perchwell/domain';
import {Box, Grid, Hidden} from '@material-ui/core';
import dynamic from 'next/dynamic';

import {useEmployees} from 'api';

import PropertySeo from './property-seo';
import Sidebar from './sidebar';
import TopPanelBlock from './top-panel-block';
const CarouselBlock = dynamic(() => import('./carousel-block'), {ssr: false});
import DescriptionBlock from './description-block';
import ViewLinksBlock from './view-links-block';
import AgentsBlock from './agents-block';
import RequestButton from './request-button';
import DocumentsBlock from './documents-block';
import {CarouselContainer, ContentListingDetail} from './styled-components';
import { DetailsProperty } from './details-property';
import RequestInformationModal from 'components/modal';
import SentModal from 'components/modal/sentModal';

function ListingDetailsTemplate({property}) {
  const [showModal, setShowModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [carouselState, setCarouselState] = useReducer(
    (s, a) => ({...s, ...a}),
    {open: false, slide: 0},
  );
  const {data: agents = []} = useEmployees({listing_id: property.id});

  const handleFloorPlanClick = useCallback(
    () =>
      setCarouselState({
        open: true,
        slide: property?.media?.original_image_list?.length - 1,
      }),
    [property],
  );

  const handleRequestButtonClick = useCallback(() => setShowModal(true), []);

  const handleSendButtonClick = () => {
    setMessageModal(true);
    setShowModal(false);
}

  const {custom_attributes = {}} = property;
  const {image_alt_text = ''} = custom_attributes;

  return (
    <>
      <Hidden mdUp>
        <CarouselContainer>
          <CarouselBlock
            carouselState={carouselState}
            images={property?.media?.original_image_list.slice(1).map((image, index) => {
              if (index === 0) {
                return {
                  content_url: image,
                  alt_text: image_alt_text,
                };
              }
              return image;
            })}
            setCarouselState={setCarouselState}
          />
        </CarouselContainer>
      </Hidden>
      {messageModal && (
        <SentModal handleSendButtonClick={handleSendButtonClick} setMessageModal={setMessageModal}/>
      )}
      { showModal &&  (
        <RequestInformationModal setShowModal={setShowModal} property={property} handleSendButtonClick={handleSendButtonClick}/>
      )}
      <PropertySeo property={property} />
      <ContentListingDetail position="relative" pt={{ xs: 2, md: 12}} pb={8}>
        <Grid container>
          <Hidden smDown>
            <Grid item xs={3}>
              <TopPanelBlock apartment={property} />
              <DetailsProperty apartment={property} />
              <Sidebar
                apartment={property}
                agents={agents}
                handleFloorPlanClick={handleFloorPlanClick}
                handleRequestButtonClick={handleRequestButtonClick}
              />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={9}>
            <Box position="relative" bgcolor="transparent" p={{xs: 3, sm: 4}}>
            <Hidden smDown>
              <CarouselContainer>
                <CarouselBlock
                  carouselState={carouselState}
                  images={property?.media?.original_image_list.slice(1).map(
                    (image, index) => {
                      if (index === 0) {
                        return {
                          content_url: image,
                          alt_text: image_alt_text,
                        };
                      }
                      return image;
                    },
                  )}
                  setCarouselState={setCarouselState}
                />
              </CarouselContainer> 
            </Hidden>
              <Hidden mdUp>
                <Box mb={2}>
                </Box>
                <TopPanelBlock apartment={property} />
                <DetailsProperty apartment={property} />
                <Box textAlign="left">
                  <RequestButton onClick={handleRequestButtonClick} />
                </Box>
                <DocumentsBlock
                  apartment={property}
                  handleFloorPlanClick={handleFloorPlanClick}
                />
              </Hidden>
              <Hidden mdUp>
                <AgentsBlock agents={agents} />
              </Hidden>
              <DescriptionBlock apartment={property} />
              <ViewLinksBlock />
              <Hidden mdUp>
                <Box textAlign="center">
                  <RequestButton onClick={handleRequestButtonClick} />
                </Box>
              </Hidden>
            </Box>
          </Grid>
        </Grid>
      </ContentListingDetail>
    </>
  );
}

ListingDetailsTemplate.propTypes = {
  property: ApartmentType,
};

export {ListingDetailsTemplate as default};
