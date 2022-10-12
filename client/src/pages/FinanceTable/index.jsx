import React from 'react';
// import moment from 'moment';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Input,
} from '@mui/material';
import Navbar from '../../layouts/Navbar';

function FinanceTable() {
  const [inputValue, setInputValue] = React.useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <Navbar title='Finance Table' />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Input
                  value={inputValue}
                  onChange={() => handleInputChange(event)}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{Number(inputValue) + 100}</TableCell>
              <TableCell>{Number(inputValue) + 200}</TableCell>
              <TableCell>{Number(inputValue) + 300}</TableCell>
              {/* <TableCell>{moment().week()}</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default FinanceTable;
