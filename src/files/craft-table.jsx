import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, count) {
  return { name, count };
}

export default function BasicTable(craftCountTree) {
    const [rows, setRows] = useState([])
    
    useEffect(() => {
        var temp = []
        Object.entries(craftCountTree["totalCount"]).forEach(function([key, value]){
            temp.push(createData(key, value))
        })
        setRows(temp)
    },[craftCountTree])
    
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Item</TableCell>
                <TableCell align="left">Count&nbsp;(s)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left" scope="row">{row.name}</TableCell>
                <TableCell align="left">{row.count}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
