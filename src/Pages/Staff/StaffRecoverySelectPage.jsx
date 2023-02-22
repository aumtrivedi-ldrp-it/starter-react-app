import React, { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";
import useStore from "../../utils/store.js";
import { toast } from "react-toastify";
import { recoveryStaffList, officeStaffMarkVehicleForRecovery } from "../../utils/apis/office_staff/office_staff_api.js";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularIndeterminate from "../../Component/Common/Circular";

export const StaffRecoverySelectPage = () => {
    const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [recoveryList, setRecoveryList] = useState([]);
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

  const assignRecovery = async (recoveryStaffId) =>{
      setIsLoading(true);
      var response = await officeStaffMarkVehicleForRecovery( url ,  {
        "loanAgreementId": id,
        "recoveryStaffId": recoveryStaffId,
      });
      if (response[0]) {
        console.log(response[1]);
        toast("Recovery Assigned", {type : "success"});
        setIsLoading(false);
        navigate("/staff/home");
      } else {
        setIsLoading(false);
        toast("Recovery Already Exists", { type: "error" });
      }
      setIsLoading(false);
  }

  const allRecoveryStaffList = async () => {
    setIsLoading(true);
    var response = await recoveryStaffList(url , jwt);
    if (response[0]) {
      console.log(response[1]);
      setRecoveryList(response[1]);
      setIsLoading(false);
    } else {
    console.log(response[1]);
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    allRecoveryStaffList();
  }, []);

  let { id } = useParams();
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
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
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
                      <TableCell align="center">{recovery.email}</TableCell>
                      <TableCell align="center">{recovery.phone}</TableCell>
                      <TableCell component="th" scope="row" align="center">
                        <button onClick={(e) => {
                            e.preventDefault();
                            assignRecovery(recovery._id);
                          }}>Assign</button>
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
