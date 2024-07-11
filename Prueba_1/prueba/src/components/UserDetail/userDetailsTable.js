import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const UserDetailsTable = ({ user }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='left'>UserName</TableCell>
              <TableCell align='left'>Email</TableCell>
              <TableCell align='left'>Phone</TableCell>
              <TableCell align='left'>Website</TableCell>
              <TableCell align='left'>Address</TableCell>
              <TableCell align='left'>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={user.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {user.name}
              </TableCell>
              <TableCell align='left'>{user.username}</TableCell>
              <TableCell align='left'>{user.email}</TableCell>
              <TableCell align='left'>{user.phone}</TableCell>
              <TableCell align='left'>{user.website}</TableCell>
              <TableCell align='left'>
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </TableCell>
              <TableCell align='left'>
                {user.company.name} - {user.company.catchPhrase}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserDetailsTable;
