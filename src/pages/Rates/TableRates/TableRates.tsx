import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Table, TableBody, TableRow } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

import { CURRENCY_DEFAULT_BASE, STORAGE_KEYS, VALUE_DEFAULT_BASE } from 'consts';
import { Data } from 'types';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(currency: string, rate: number) {
  return { currency, rate };
}

type Props = {
  data: Data;
};

function TableRates({ data }: Props) {
  const [searchParams] = useSearchParams();
  const currencyBase = searchParams.get('currencyBase') || CURRENCY_DEFAULT_BASE;
  const valueBase = Number(localStorage.getItem(STORAGE_KEYS.VALUE_BASE)) || VALUE_DEFAULT_BASE;
  const rates = Object.entries(data.rates);

  const rows = rates.map((rate) => {
    const valueBaseFromStorage = localStorage.getItem(STORAGE_KEYS.VALUE_BASE);
    const valueTargetCorrect =
      valueBaseFromStorage === null || Number(valueBaseFromStorage) > 0
        ? (valueBase / data.rates[currencyBase]) * rate[1]
        : 0;

    return createData(rate[0], valueTargetCorrect);
  });

  return (
    <Table sx={{ mt: 2, width: 380 }}>
      <TableBody>
        {rows.map((row, i) => (
          <StyledTableRow key={i}>
            <TableCell component="th" scope="row">
              {row.currency}
            </TableCell>
            <TableCell align="right">{row.rate}</TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableRates;
