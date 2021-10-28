import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";

export default function Cards() {
    const phones = useSelector((state) => state.phones );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {
                phones.length &&
                phones.map((phone) =>{
                     return(
                        <>
                            <TableCell>{phone.brand_name}</TableCell>
                        </>
                    )
                })
            }
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
