import React, { useState, useEffect } from "react";
import { officeStaffPendingEMI } from "../../utils/apis/office_staff/office_staff_api.js";
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
import { useNavigate } from "react-router-dom";

export const AdminDefaulterPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [defaulterList, setdefaulterList] = useState([]);
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

  const getOfficeStaffPendingEMI = async () => {
    setIsLoading(true);
    var response = await officeStaffPendingEMI(url , jwt);
    if (response[0]) {
      console.log(response[1]);
      setdefaulterList(response[1]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast(`${response[1].response.data.message}`, { type: "error" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getOfficeStaffPendingEMI();
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
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Address</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">EMI</StyledTableCell>
                    <StyledTableCell align="center">
                      Loan Amount
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Loan Amount In Words
                    </StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {defaulterList.map((recovery) => (
                    <TableRow
                      key={recovery}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">
                        {recovery.customer_name}
                      </TableCell>
                      <TableCell align="center">
                        {recovery.village_name}
                        {recovery.ward_no}
                        {recovery.division}
                        {recovery.district_name}
                        {recovery.city}
                        {recovery.state}
                        {recovery.postal_code}
                      </TableCell>
                      <TableCell align="center">{recovery.mobile_no}</TableCell>
                      <TableCell align="center">{recovery.emi}</TableCell>
                      <TableCell align="center">
                        {recovery.loan_amount}
                      </TableCell>
                      <TableCell align="center">
                        {recovery.loan_amount_in_words}
                      </TableCell>
                      <TableCell align="center">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/admin/defaulter/assign-recovery/${recovery._id}`);
                          }}
                        >
                          Assign
                        </button>
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
