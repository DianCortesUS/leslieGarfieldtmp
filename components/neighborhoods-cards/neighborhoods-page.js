import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {NeighborhoodType} from '@perchwell/domain';
import {getNeighborhoodDetailsLink} from 'helpers/detail-links';
import {Grid} from '@material-ui/core';
import {GridContainer, CardContainer, NeighborhoodName, NeighborhoodNameText} from './styled-components';

function NeighborhoodPage({neighborhoods}) {

  return (
    <GridContainer container justify="center">
        {neighborhoods.map((neighborhood) => (
            <div className="card">
              <Link
                key={neighborhood.id}
                href={getNeighborhoodDetailsLink(neighborhood)}
                passHref
              >
                <Grid item container component="a" xs={12} md={6} lg={5}>
                <CardContainer>
                  <img src={neighborhood?.images[0]?.content_url} className='image-n-properties' />
                  <NeighborhoodName>
                    <NeighborhoodNameText>{neighborhood.name}</NeighborhoodNameText>
                  </NeighborhoodName>
                </CardContainer>
                </Grid>
              </Link>
            </div>
        ))}
    </GridContainer>
  );
}

NeighborhoodPage.propTypes = {
  neighborhoods: PropTypes.arrayOf(NeighborhoodType),
};

NeighborhoodPage.defaultProps = {
  neighborhoods: [],
};

const Memo = React.memo(NeighborhoodPage);

export {Memo as NeighborhoodPage};