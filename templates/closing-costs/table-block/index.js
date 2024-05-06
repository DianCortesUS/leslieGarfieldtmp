import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Hidden} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';
import {Divider} from 'components/divider';
import { TableContent, TableTitle, TableSubtitle, BoxTitle } from '../styled-components';

function TableBlock({costs}) {
  return (
    <TableContent component="section" pt={8} pb={8}>
      {Object.keys(costs).map((listId, index) => {
        const costSet = costs[listId].content?.[0];

        return (
          <Box key={index}>
            <BoxTitle pt={index === 0 ? 0 : 5} pb={5}>
              <TableTitle>{costSet?.title}</TableTitle>
            </BoxTitle>
            <Box>
              {costSet?.lists.map((list, blockIndex) => (
                <React.Fragment key={blockIndex}>
                  <Divider
                    size={2}
                    color="#000"
                    mt={blockIndex === 0 ? 0 : 2}
                    dotted={list.isAdditional}
                  />
                  <Box pt={2}>
                    <Grid container>
                      <Grid item xs={12} md={3}>
                        <Box pt={1}>
                          <TableSubtitle>
                            {list.title}
                          </TableSubtitle>
                          <Hidden mdUp>
                            <Divider
                              size={2}
                              color="#000"
                              mt={{xs: 3, md: 0}}
                            />
                          </Hidden>
                        </Box>
                      </Grid>
                      <Grid item container xs={12} md={9}>
                        {list.items.map((blockItem, blockItemIndex) => (
                          <React.Fragment key={blockItemIndex}>
                            <Grid
                              key={blockItemIndex}
                              container
                              component={Box}
                              pt={1}
                              pb={1}
                            >
                              <Grid
                                item
                                xs={12}
                                md={6}
                                component={Box}
                                pr={{xs: 0, md: 2}}
                              >
                                <ParsedText
                                  variant="subtitle1"
                                  style={{fontWeight: 'bold'}}
                                >
                                  {blockItem.label}
                                </ParsedText>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                md={6}
                                component={Box}
                                pl={{xs: 0, md: 2}}
                              >
                                <ParsedText variant="subtitle1">
                                  {blockItem.value}
                                </ParsedText>
                              </Grid>
                            </Grid>
                            {blockItemIndex !== list.items.length - 1 && (
                              <Hidden mdUp>
                                <Divider color="#000" dotted />
                              </Hidden>
                            )}
                          </React.Fragment>
                        ))}
                      </Grid>
                    </Grid>
                  </Box>
                </React.Fragment>
              ))}
            </Box>
            <Divider size={2} color="#000" mt={2} />
          </Box>
        );
      })}
    </TableContent>
  );
}

TableBlock.propTypes = {
  costs: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          items: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              value: PropTypes.string.isRequired,
            }),
          ),
          isAdditional: PropTypes.bool,
        }),
      ),
    }),
  ),
};

export {TableBlock};
