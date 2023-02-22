import React, { useState, useEffect } from "react";
import { recoveryStaffList } from "../../utils/apis/office_staff/office_staff_api.js";
import useStore from "../../utils/store.js";
import { toast } from "react-toastify";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularIndeterminate from "../../Component/Common/Circular";
import "../../CSS/Staff/staffRecoveryList.css";

export const AdminGetAllRecovery = () => {
  const [recoveryList, setrecoveryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const allRecoveryStaffList = async () => {
    setIsLoading(true);
    var response = await recoveryStaffList(url , jwt);
    if (response[0]) {
      console.log(response[1]);
      setrecoveryList(response[1]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    allRecoveryStaffList();
  }, []);
  return (
      
    <div className="staff_recovery_list_container">
      {isLoading ? (
          <center>
              <CircularIndeterminate />
          </center>
      ) : (
        <div>
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Photo</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Address</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">DOB</StyledTableCell>
                    <StyledTableCell align="center">Aadhar</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recoveryList.map((recovery) => (
                    <TableRow
                      key={recovery}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        <img
                          src={recovery.image}
                          alt=""
                          className="staff_recovery_image"
                        />
                      </TableCell>
                      <TableCell align="center">{recovery.name}</TableCell>
                      <TableCell align="center">{recovery.address}</TableCell>
                      <TableCell align="center">{recovery.email}</TableCell>
                      <TableCell align="center">{recovery.phone}</TableCell>
                      <TableCell align="center">{recovery.dob}</TableCell>
                      <TableCell component="th" scope="row" align="center">
                        <img
                          src={recovery.aadhar}
                          alt=""
                          className="staff_recovery_aadhar"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        </div>
      )}
    </div>
  );
};
