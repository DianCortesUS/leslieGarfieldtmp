import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {NeighborhoodType} from '@perchwell/domain';
import {getNeighborhoodDetailsLink, getPropertiesByNeighborhoodLink} from 'helpers/detail-links';
import {Grid} from '@material-ui/core';

import {GridContainer, CardContainer} from './styled-components';
import { Button } from 'components/buttons/button';

function NeighborhoodCards({neighborhoods}) {
const firstHalf = neighborhoods.slice(1, 7);
const secondPart = neighborhoods.slice(8, 12);
const finalPart = neighborhoods.slice(12, 14);

  return (
    <GridContainer container justify="center">
      <div className="cont-interno">
        <div className="image-cont">
          <span className="text-above">{neighborhoods[0].name}</span>
          <div className="cont-button">
            <Button>
              <Link href={getPropertiesByNeighborhoodLink(neighborhoods[0])} passHref>
                VIEW TOWNHOUSES
              </Link>
            </Button>
          </div>
          <Link key={neighborhoods[0].id}
                href={getNeighborhoodDetailsLink(neighborhoods[0])}
                passHref>
                  <img src={neighborhoods[0]?.images[0]?.content_url} height={539} width={633} className='image-big-cont'/>
          </Link>
        </div>
        <div className="cards-cont">
          {firstHalf.map((neighborhood) => (
            <div className="card">
              <Link
                key={neighborhood.id}
                href={getNeighborhoodDetailsLink(neighborhood)}
                passHref
              >
                <Grid item container component="a" xs={12} md={6} lg={5}>
                <CardContainer>
                  <img src={neighborhood?.images[0]?.content_url} className='image-n-properties' />
                  <div className="n-title-cont">
                    <span className="n-title-text">{neighborhood.name}</span>
                  </div>
                </CardContainer>
                </Grid>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='lower-container-outside'>
      <div className='lower-container'>
      {secondPart.map((neighborhood) => (
            <div className="card">
              <Link
                key={neighborhood.id}
                href={getNeighborhoodDetailsLink(neighborhood)}
                passHref
              >
                <Grid item container component="a" xs={12} md={6} lg={5}>
                <CardContainer>
                  <img src={neighborhood?.images[0]?.content_url} className='image-n-properties' />
                  <div className="n-title-cont">
                    <span className="n-title-text">{neighborhood.name}</span>
                  </div>
                </CardContainer>
                </Grid>
              </Link>
            </div>
          ))}
      </div>
      <div className='lower-container'>
      {finalPart.map((neighborhood) => (
            <div className="card">
              <Link
                key={neighborhood.id}
                href={getNeighborhoodDetailsLink(neighborhood)}
                passHref
              >
                <Grid item container component="a" xs={12} md={6} lg={5}>
                <CardContainer>
                  <img src={neighborhood?.images[0]?.content_url} className='image-n-properties' />
                  <div className="n-title-cont">
                    <span className="n-title-text">{neighborhood.name}</span>
                  </div>
                </CardContainer>
                </Grid>
              </Link>
            </div>
          ))}
      </div>
      </div>
    </GridContainer>
  );
}

NeighborhoodCards.propTypes = {
  neighborhoods: PropTypes.arrayOf(NeighborhoodType),
};

NeighborhoodCards.defaultProps = {
  neighborhoods: [],
};

const Memo = React.memo(NeighborhoodCards);

export {Memo as NeighborhoodCards};
