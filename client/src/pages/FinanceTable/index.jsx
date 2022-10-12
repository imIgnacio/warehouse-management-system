import React from 'react';
import moment from 'moment';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Input,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Navbar from '../../layouts/Navbar';

function FinanceTable() {
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState(moment());

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <Navbar title='Finance Table' />
      <DatePicker
        label='Basic example'
        views={['month', 'year']}
        minDate={moment().subtract(2, 'year')}
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={params => <TextField {...params} />}
      />
      <div>{value.format('MMM YYYY')}</div>
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
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default FinanceTable;
