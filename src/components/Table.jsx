import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const TablePage = (props) => {
    const {data,rowsPerPage,page,
        handleChangePage,
        handleChangeRowsPerPage}=props
 
  return (
    <div>
        TableList
        <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell align="right">name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">UserName</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>

        {data?.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((row) => (
         
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
               
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.username}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
        rowsPerPageOptions={[5,10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
  </div>
  )
}

export default TablePage