import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getAllCustomers } from "../../utils/apis/common/common_api";
import useStore from "../../utils/store.js";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularIndeterminate from "../../Component/Common/Circular";
import "../../CSS/Staff/staffCustomerList.css";

export const StaffAllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);
  const getAllCustomersList = async () => {
    setIsLoading(true);
    var response = await getAllCustomers(url , jwt);
    if (response[0]) {
      console.log(response[1]);
      setCustomers(response[1]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  useEffect(() => {
    getAllCustomersList();
  }, []);

  return (
    <div className="staff_customer_list_container">
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
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">DO Dorm Id</StyledTableCell>
                    <StyledTableCell align="center">Loan Agreement Id</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow
                      key={customer}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        <img
                          src={customer.image}
                          alt=""
                          className="staff_customer_image"
                        />
                      </TableCell>
                      <TableCell align="center">{customer.name}</TableCell>
                      <TableCell align="center">
                        {customer.phoneNumber}
                      </TableCell>
                      <TableCell align="center">{customer.doformId}</TableCell>
                      <TableCell align="center">
                        {customer.loanAgreementId}
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
