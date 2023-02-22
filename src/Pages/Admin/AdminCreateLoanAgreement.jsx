import React, { useState, useEffect } from "react";
import { getPendingLoanAgreementForms } from "../../utils/apis/dealer/dealer_api";
import { toast } from "react-toastify";
import CircularIndeterminate from "../../Component/Common/Circular";
import useStore from "../../utils/store.js";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export const AdminCreateLoanAgreement = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loanAgreement, setLoanAgreement] = useState([]);
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);
  const navigate = useNavigate();

  const getPendingLA = async () => {
    setIsLoading(true);
    var response = await getPendingLoanAgreementForms(url , jwt);
    if (response[0]) {
      console.log(response[1]);
      setLoanAgreement(response[1]);
    } else {
      setIsLoading(false);
      toast(`${response[1].response.data.message}`, { type: "error" });
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
    getPendingLA();
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
                    <StyledTableCell align="center">Form Id</StyledTableCell>
                    <StyledTableCell align="center">
                      Customer Name
                    </StyledTableCell>
                    <StyledTableCell align="center">Approved</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loanAgreement.map((la) => (
                    <TableRow
                      key={la}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">{la._id}</TableCell>
                      <TableCell align="center">{la.customerName}</TableCell>
                      <TableCell align="center">
                        {la.isApproved === true ? "Yes" : "No"}
                      </TableCell>
                      <TableCell align="center">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/admin/loanagreement-form", {
                              state: { modelNo: la.vehicle,
                              customerName: la.customerName,
                              customerFatherName: la.customerFatherOrHusbandName,
                              customerMobNo: la.customerMobileNumber,
                              customerLandmark: la.customerAddressLandMark,
                              customerWardNo: la.customerAddressWardNumber,
                              customerVillageName: la.customerAddressVillageName,
                              customerPostalCode: la.customerAddressPostalCode,
                              customerDivision: la.customerAddressDivision,
                              customerDistrict:la.customerAddressDistrict,
                              customerOccupation: la.customerOccupation,
                              monthlyIncome: la.customerMonthlyIncome,
                              farmLandArea: la.customerFarmArea,
                              id:la._id,
                             },
                            });
                          }}
                        >
                          Create Loan Agreement
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
