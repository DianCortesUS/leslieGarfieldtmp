import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  useMediaQuery,
} from '@material-ui/core';
import {ParsedText} from '@perchwell/components';

import {DESKTOP_COLUMNS, MOBILE_COLUMNS} from './constants';
import { HeadCell, TableTitle, TableContent } from '../styled-components';


function Table({title, deals}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const columns = useMemo(() => (isMobile ? MOBILE_COLUMNS : DESKTOP_COLUMNS), [
    isMobile,
  ]);

  return (
    <Box pb={5}>
      <Box mb={3}>
        <TableTitle>{title}</TableTitle>
      </Box>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>
                <HeadCell>{column}</HeadCell>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {deals.map((deal, index) => {
            return (
              <TableRow key={deal?.id ?? index}>
                <TableCell>
                  <TableContent>{deal.propertyName}</TableContent>
                </TableCell>
                {isMobile ? null : (
                  <>
                    <TableCell>
                      <TableContent>
                        {deal.propertyType}
                      </TableContent>
                    </TableCell>
                    <TableCell>
                      <TableContent>
                        {deal.neighborhood}
                      </TableContent>
                    </TableCell>
                  </>
                )}
                <TableCell>
                  <TableContent>{deal.price}</TableContent>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </Box>
  );
}

Table.propTypes = {
  title: PropTypes.string.isRequired,
  deals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      propertyName: PropTypes.string.isRequired,
      propertyType: PropTypes.string.isRequired,
      neighborhood: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ),
};

Table.defaultProps = {
  deals: [],
};

export {Table as default};
