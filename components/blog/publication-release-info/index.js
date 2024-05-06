import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {format} from 'date-fns';
import {Typography} from '@material-ui/core';

import {getEmployeeBlogLink} from 'helpers/blog';

function PublicationReleaseInfo({date, employees}) {
  if (!date && employees.length === 0) {
    return null;
  }

  return (
    <div>
      {date && (
        <Typography
          display="inline"
          variant="caption"
          style={{fontWeight: 'bold'}}
        >
          Posted {format(new Date(date), 'PPP')}
        </Typography>
      )}
      {employees.length > 0 && (
        <React.Fragment>
          <Typography
            display="inline"
            variant="caption"
            style={{fontWeight: 'bold'}}
          >
            &nbsp;by&nbsp;
          </Typography>
          {employees.map((employee, index) => (
            <React.Fragment key={employee.id}>
              <Link href={getEmployeeBlogLink(employee)} passHref>
                <Typography
                  display="inline"
                  variant="caption"
                  color="primary"
                  style={{fontWeight: 'bold'}}
                  component="a"
                >
                  {employee.first_name} {employee.last_name}
                </Typography>
              </Link>
              {index !== employees.length - 1 && ', '}
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

PublicationReleaseInfo.propTypes = {
  date: PropTypes.string,
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    }),
  ),
};

PublicationReleaseInfo.defaultProps = {
  employees: [],
};

export {PublicationReleaseInfo};
