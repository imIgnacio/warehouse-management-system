import React from 'react';
import { TableRow, Skeleton } from '@mui/material';

function ListLoading(props) {
  return (
    <>
      <TableRow>
        <td colSpan={props.colSpan}>
          <Skeleton height={44} />
        </td>
      </TableRow>
      <TableRow>
        <td colSpan={props.colSpan}>
          <Skeleton height={44} />
        </td>
      </TableRow>
      <TableRow>
        <td colSpan={props.colSpan}>
          <Skeleton height={44} />
        </td>
      </TableRow>
    </>
  );
}

export default ListLoading;
