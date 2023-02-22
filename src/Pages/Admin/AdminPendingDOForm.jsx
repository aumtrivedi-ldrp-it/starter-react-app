import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getPendingApproveDoForm, approveDoForm, cancelDoForm} from "../../utils/apis/common/common_api";
import useStore from "../../utils/store.js";
import CircularIndeterminate from "../../Component/Common/Circular";
import "../../CSS/Staff/staffPendingDO.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const AdminPendingDoForm = () => {
  const [pendingDoForm, setPendingDoForm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [newDoFormid, setNewDoFormId] = useState("");
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const handleClose = () => {
    setIsOpen(false);
  };

  const pendingApproveDoForm = async () => {
    setIsLoading(true);
    var response = await getPendingApproveDoForm(url , jwt);
    if (response[0]) {
      console.log(response[1]);
      setPendingDoForm(response[1]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  const approvedDoForm = async (id) => {
    setIsLoading(true);
    var response = await approveDoForm(url , jwt, {
      "id":id
    });
    if (response[0]) {
      console.log(response[1]);
      setPendingDoForm(response[1]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  }

  const cancellingDoForm = async (id) => {
    setIsLoading(true);
    var response = await cancelDoForm(url , jwt, {
      "doformid":id,
      "message": message
    });
    if (response[0]) {
      console.log(response[1]);
      setPendingDoForm(response[1]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  }

  useEffect(() => {
    pendingApproveDoForm();
  }, []);

  return (
    <div>
      <div className="staff_customer_list_container">
        {isLoading ? (
          <center>
            <CircularIndeterminate />
          </center>
        ) : (
          <div>
            <div className="category__container_gridcontainer">
              <Box sx={{ flexGrow: 1 }} className="category__container_gridbox">
                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={{ xs: 2, md: 3 }}
                  columns={{
                    xs: 4,
                    sm: 8,
                    md: 12,
                  }} /**multiple of 4 {item size is 4} */
                >
                  {pendingDoForm.map((pendingDo, index) => (
                    <Grid item xs={4}>
                      <div className="staff__container_grid_content_container">
                        <div className="staff__container_grid_content_container_title">
                          Customer Name :{pendingDo.customerName}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Mobile No: {pendingDo.customerMobileNumber}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Father/Husband Name:{" "}
                          {pendingDo.customerFatherOrHusbandName}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Address: {pendingDo.customerAddressVillageName}
                          {pendingDo.customerAddressWardNumber}
                          {pendingDo.customerAddressDivision}
                          {pendingDo.customerAddressDistrict}
                          {pendingDo.customerAddressLandMark}
                          {pendingDo.customerAddressPostalCode}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Designation: {pendingDo.customerDesignation}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Occupation: {pendingDo.customerOccupation}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Farm Land Area: {pendingDo.customerFarmArea}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Office Address:{pendingDo.customerOfficeAddress}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Monthly Income: {pendingDo.customerMonthlyIncome}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Reference 1
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Name: {pendingDo.reference1Name}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Mob No: {pendingDo.reference1MobileNumber}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Father/ Husband Name:{" "}
                          {pendingDo.reference1FatherOrHusbandName}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Address: {pendingDo.reference1Village}
                          {pendingDo.reference1Division}
                          {pendingDo.reference1District}
                          {pendingDo.reference1PostalCode}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Reference 2
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Name: {pendingDo.reference1Name}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Mob No: {pendingDo.reference2MobileNumber}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Father/ Husband Name:{" "}
                          {pendingDo.reference2FatherOrHusbandName}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Address: {pendingDo.reference2Village}
                          {pendingDo.reference2Division}
                          {pendingDo.reference2District}
                          {pendingDo.reference2PostalCode}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle: {pendingDo.vehicle}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle EMI Amount: {pendingDo.vehicleEmiAmount}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle Ex-Sowroom Price:{" "}
                          {pendingDo.vehicleExShowroomPrice}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle Insurance Price:{" "}
                          {pendingDo.vehicleInsurancePrice}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle LA: {pendingDo.vehicleLA}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle LTV: {pendingDo.vehicleLTV}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle RTO Price: {pendingDo.vehicleRtoPrice}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle Other Prices: {pendingDo.vehicleOtherPrices}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle Scheme: {pendingDo.vehicleScheme}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle TOtal EMI Count:{" "}
                          {pendingDo.vehicleTotalEmiCount}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Vehicle On-Road Price: {pendingDo.vehicleOnRoadPrice}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Sales Executive Name: {pendingDo.salesExecutiveName}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          Branch Head Name: {pendingDo.branchHeadName}
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          <img
                            src={pendingDo.branchHeadSignature}
                            alt=""
                            className="staff__container_grid_content_container_image"
                          />
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          <img
                            src={pendingDo.dealerSignature}
                            alt=""
                            className="staff__container_grid_content_container_image"
                          />
                        </div>
                        <div className="staff__container_grid_content_container_title">
                          <img
                            src={pendingDo.salesExecutiveSignature}
                            alt=""
                            className="staff__container_grid_content_container_image"
                          />
                        </div>
                        <button>
                          <a href={pendingDo.formLink}>Download</a>
                        </button>
                        <button onClick={(e) => {
                          e.preventDefault();
                          approvedDoForm(pendingDo._id);
                        }} className="staff_approve_do_button">
                          Approve
                        </button>
                        <button onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(true);
                          setNewDoFormId(pendingDo._id);
                        }} className="staff_cancel_do_button">
                          Cancel
                        </button>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update Category</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                cancellingDoForm(newDoFormid);
                setIsOpen(false);
              }}
            >
              Update
            </Button>
            </DialogActions>
            </Dialog>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
