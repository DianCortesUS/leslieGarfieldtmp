import React from 'react';
import {PropTypes} from 'prop-types';
import Link from 'next/link';
import {EmployeeType} from '@perchwell/domain';
import {Typography} from '@material-ui/core';

import {Avatar} from 'components/avatar';
import {Divider} from 'components/divider';
import {getEmployeeBlogLink} from 'helpers/blog';

import {EmployeeBox, EmployeeName} from './styled-components';

function EmployeesBlock({employees}) {
  if (employees.length === 0) {
    return null;
  }

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        {employees?.length > 1 ? 'AUTHORS' : 'AUTHOR'}
      </Typography>
      <Divider mb={3} />
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link href={getEmployeeBlogLink(employee)} passHref>
              <a>
                <EmployeeBox display="flex" alignItems="center" mb={3}>
                  <Avatar
                    width="60px"
                    height="60px"
                    mr={1}
                    image={employee.images?.[0]}
                  />
                  <EmployeeName
                    display="inline"
                    variant="subtitle1"
                    style={{fontWeight: 'bold'}}
                  >
                    {employee.first_name} {employee.last_name}
                  </EmployeeName>
                </EmployeeBox>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

EmployeesBlock.propTypes = {
  employees: PropTypes.arrayOf(EmployeeType),
};

EmployeesBlock.defaultProps = {
  employees: [],
};

export {EmployeesBlock};
