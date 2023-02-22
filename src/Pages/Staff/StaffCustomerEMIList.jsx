import React, { useState, useEffect } from "react";
import { getChequeListByCustomerId } from "../../utils/apis/customer/customer_api";
import useStore from "../../utils/store.js";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularIndeterminate from "../../Component/Common/Circular";

export const StaffCustomerEMIList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [customerEMIList, setCustomerEMIList] = useState([]);
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);
  const location = useLocation();
  var id = location.state.id;
  const getCustomerEMIById = async () => {
    setIsLoading(true);
    var response = await getChequeListByCustomerId(url , jwt, id);
    if (response[0]) {
      console.log(response[1]);
      setCustomerEMIList(response[1]);
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
    getCustomerEMIById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">DO Dorm Id</StyledTableCell>
                    <StyledTableCell align="center">EMI Amount</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customerEMIList.map((customer) => (
                    <TableRow
                      key={customer}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">
                        {location.state.name}
                      </TableCell>
                      <TableCell align="center">
                        {customer.chequeDate}
                      </TableCell>
                      <TableCell align="center">
                        {customer.chequeNumber}
                      </TableCell>
                      <TableCell align="center">{customer.emi}</TableCell>
                      <TableCell align="center">
                        {customer.isPaid === true ? (
                          <div>Already Paid</div>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            Pay EMI"
                          </button>
                        )}
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
