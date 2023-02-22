import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../CSS/Dealer/doForm.css";
import useStore from "../../utils/store.js";
import { createDoForm } from "../../utils/apis/dealer/dealer_api.js";
import { toast } from "react-toastify";
import CircularIndeterminate from "../../Component/Common/Circular";
import { useNavigate } from "react-router-dom";

export const AdminDOForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerFatherName, setcustomerFatherName] = useState("");
  const [customerMobileNumber, setcustomerMobileNumber] = useState(null);
  const [villageName, setVillageName] = useState("");
  const [landmark, setlandmark] = useState("");
  const [wardNumber, setwardNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [
    differenceBetweenAddressAndShowroom,
    setdifferenceBetweenAddressAndShowroom,
  ] = useState("");
  const [occupation, setOccupation] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [designation, setDesignation] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [farmLandArea, setFarmLandArea] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleExShowroomPrice, setVehicleExShowroomPrice] = useState(null);
  const [vehicleRTOPrice, setVehicleRTOPrice] = useState(null);
  const [vehicleInsurancePrice, setVehicleInsurancePrice] = useState(null);
  const [vehicleOtherPrice, setVehicleOtherPrice] = useState(null);
  const [vehicleOnRoadPrice, setVehicleOnRoadPrice] = useState(null);
  const [vehicleLA, setVehicleLA] = useState(null);
  const [vehicleEMIAmount, setVehicleEMIAmount] = useState(null);
  const [vehicleTotalEMICount, setVehicleTotalEMICount] = useState(null);
  const [vehicleLTV, setVehicleLTV] = useState(null);
  const [vehicleScheme, setVehicleScheme] = useState(null);
  const [reference1Name, setReference1Name] = useState("");
  const [reference1FatherName, setReference1FatherName] = useState("");
  const [reference1Village, setReference1Village] = useState("");
  const [reference1PostalCode, setReference1PostalCode] = useState("");
  const [reference1Division, setReference1Division] = useState("");
  const [reference1District, setReference1District] = useState("");
  const [reference1MobNo, setReference1MobNo] = useState(null);
  const [reference2Name, setReference2Name] = useState("");
  const [reference2FatherName, setReference2FatherName] = useState("");
  const [reference2Village, setReference2Village] = useState("");
  const [reference2PostalCode, setReference2PostalCode] = useState("");
  const [reference2Division, setReference2Division] = useState("");
  const [reference2District, setReference2District] = useState("");
  const [reference2MobNo, setReference2MobNo] = useState(null);
  const [salesExecutiveName, setSalesExecutiveName] = useState("");
  const [branchHeadName, setBranchHeadName] = useState("");
  const [salesExecutiveSignature, setSalesExeciutiveSignature] = useState(null);
  const [isSalesExecutiveSignaturePicked, setIsSalesExecutiveSignaturePicked] =
    useState(false);
  const [branchHeadSignature, setBranchHeadSignature] = useState(null);
  const [isBranchHeadSignaturePicked, setIsBranchHeadSignaturePicked] =
    useState(false);
  const [dealerSiganture, setDealerSignature] = useState(null);
  const [isDealerSignaturePicked, setIsDealerSignaturePicked] = useState(false);

  const salesExecutiveImage = (e) => {
    setSalesExeciutiveSignature(e.target.files[0]);
    setIsSalesExecutiveSignaturePicked(true);
  };

  const branchHeadImage = (e) => {
    setBranchHeadSignature(e.target.files[0]);
    setIsBranchHeadSignaturePicked(true);
  };

  const dealerImage = (e) => {
    setDealerSignature(e.target.files[0]);
    setIsDealerSignaturePicked(true);
  };

  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);
  const dealerEmail = useStore((state) => state.user.email);

  const navigate = useNavigate();

  const createNewDoForm = async () => {
    setIsLoading(true);
    let formData = new FormData();
    formData.append("dealerEmail", dealerEmail);
    formData.append("customerName", customerName);
    formData.append("customerFatherOrHusbandName", customerFatherName);
    formData.append("customerMobileNumber", customerMobileNumber);
    formData.append("customerAddressLandMark", landmark);
    formData.append("customerAddressWardNumber", wardNumber);
    formData.append("customerAddressPostalCode", postalCode);
    formData.append("customerAddressDivision", division);
    formData.append("customerAddressDistrict", district);
    formData.append(
      "differenceBetweenCustomerAddressAndShowroom",
      differenceBetweenAddressAndShowroom
    );
    formData.append("customerOccupation", occupation);
    formData.append("customerMonthlyIncome", monthlyIncome);
    formData.append("customerDesignation", designation);
    formData.append("customerOfficeAddress", officeAddress);
    formData.append("customerFarmArea", farmLandArea);
    formData.append("vehicle", vehicle);
    formData.append("vehicleExShowroomPrice", vehicleExShowroomPrice);
    formData.append("vehicleRtoPrice", vehicleRTOPrice);
    formData.append("vehicleInsurancePrice", vehicleInsurancePrice);
    formData.append("vehicleOtherPrices", vehicleOtherPrice);
    formData.append("vehicleOnRoadPrice", vehicleOnRoadPrice);
    formData.append("vehicleLA", vehicleLA);
    formData.append("vehicleEmiAmount", vehicleEMIAmount);
    formData.append("vehicleTotalEmiCount", vehicleTotalEMICount);
    formData.append("vehicleLTV", vehicleLTV);
    formData.append("vehicleScheme", vehicleScheme);
    formData.append("reference1Name", reference1Name);
    formData.append("reference1FatherOrHusbandName", reference1FatherName);
    formData.append("reference1Village", reference1Village);
    formData.append("reference1PostalCode", reference1PostalCode);
    formData.append("reference1Division", reference1Division);
    formData.append("reference1District", reference1District);
    formData.append("reference1MobileNumber", reference1MobNo);
    formData.append("reference2Name", reference2Name);
    formData.append("reference2FatherOrHusbandName", reference2FatherName);
    formData.append("reference2PostalCode", reference2PostalCode);
    formData.append("reference2Village", reference2Village);
    formData.append("reference2Division", reference2Division);
    formData.append("reference2District", reference2District);
    formData.append("reference2MobileNumber", reference2MobNo);
    formData.append("salesExecutiveName", salesExecutiveName);
    formData.append("branchHeadName", branchHeadName);
    formData.append("customerAddressVillageName", villageName);
    formData.append("salesExecutiveSignature", salesExecutiveSignature);
    formData.append("branchHeadSignature", branchHeadSignature);
    formData.append("dealerSignature", dealerSiganture);
    var response = await createDoForm(url , jwt, formData);
    if (response[0]) {
      setIsLoading(false);
      navigate("/admin/do-form-success", {
        replace: true,
        state: { formId: response[1].form_id },
      });
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <center>
          <CircularIndeterminate />
        </center>
      ) : (
        <div>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Customer Father/Husband Name"
                    value={customerFatherName}
                    onChange={(e) => setcustomerFatherName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Customer Mobile No."
                    type="number"
                    value={customerMobileNumber}
                    onChange={(e) => setcustomerMobileNumber(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Landmark"
                    value={landmark}
                    onChange={(e) => setlandmark(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Village Name"
                    value={villageName}
                    onChange={(e) => setVillageName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Ward Number"
                    value={wardNumber}
                    onChange={(e) => setwardNumber(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Division"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="District"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Diff b/w Address & Showroom"
                    value={differenceBetweenAddressAndShowroom}
                    onChange={(e) =>
                      setdifferenceBetweenAddressAndShowroom(e.target.value)
                    }
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Occupation"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Monthly Income"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Office Address"
                    value={officeAddress}
                    onChange={(e) => setOfficeAddress(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Farm Land Area"
                    value={farmLandArea}
                    onChange={(e) => setFarmLandArea(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Ex-Showroom Price"
                    type="number"
                    value={vehicleExShowroomPrice}
                    onChange={(e) => setVehicleExShowroomPrice(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle RTO Price"
                    type="number"
                    value={vehicleRTOPrice}
                    onChange={(e) => setVehicleRTOPrice(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Insurance Price"
                    type="number"
                    value={vehicleInsurancePrice}
                    onChange={(e) => setVehicleInsurancePrice(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Other Price"
                    type="number"
                    value={vehicleOtherPrice}
                    onChange={(e) => setVehicleOtherPrice(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle On-Road Price"
                    type="number"
                    value={vehicleOnRoadPrice}
                    onChange={(e) => setVehicleOnRoadPrice(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle LA"
                    type="number"
                    value={vehicleLA}
                    onChange={(e) => setVehicleLA(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle LTV"
                    type="number"
                    value={vehicleLTV}
                    onChange={(e) => setVehicleLTV(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle EMI Amount"
                    type="number"
                    value={vehicleEMIAmount}
                    onChange={(e) => setVehicleEMIAmount(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Total EMI Count"
                    type="number"
                    value={vehicleTotalEMICount}
                    onChange={(e) => setVehicleTotalEMICount(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Scheme"
                    type="number"
                    value={vehicleScheme}
                    onChange={(e) => setVehicleScheme(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 1 Name"
                    value={reference1Name}
                    onChange={(e) => setReference1Name(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 1 Father/Husband Name"
                    value={reference1FatherName}
                    onChange={(e) => setReference1FatherName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 1 Village"
                    value={reference1Village}
                    onChange={(e) => setReference1Village(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 1 Postal Code"
                    value={reference1PostalCode}
                    onChange={(e) => setReference1PostalCode(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 1 Division"
                    value={reference1Division}
                    onChange={(e) => setReference1Division(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 1 District"
                    value={reference1District}
                    onChange={(e) => setReference1District(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 1 Mobile No."
                    type="number"
                    value={reference1MobNo}
                    onChange={(e) => setReference1MobNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 2 Name"
                    value={reference2Name}
                    onChange={(e) => setReference2Name(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 2 Father/Husband Name"
                    value={reference2FatherName}
                    onChange={(e) => setReference2FatherName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 2 Village"
                    value={reference2Village}
                    onChange={(e) => setReference2Village(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 2 Postal Code"
                    value={reference2PostalCode}
                    onChange={(e) => setReference2PostalCode(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 2 Division"
                    value={reference2Division}
                    onChange={(e) => setReference2Division(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 2 District"
                    value={reference2District}
                    onChange={(e) => setReference2District(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Refernce 2 Mobile No."
                    type="number"
                    value={reference2MobNo}
                    onChange={(e) => setReference2MobNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Sales Executive Name"
                    value={salesExecutiveName}
                    onChange={(e) => setSalesExecutiveName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Branch Head Name"
                    value={branchHeadName}
                    onChange={(e) => setBranchHeadName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                {isSalesExecutiveSignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(salesExecutiveSignature)}
                    alt="sales_executive_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Sales Executive Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        salesExecutiveImage(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isBranchHeadSignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(branchHeadSignature)}
                    alt="branch_head_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="branch Head Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        branchHeadImage(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isDealerSignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(dealerSiganture)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Dealer Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        dealerImage(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
            </Grid>
          </Box>
          <button
            onClick={(e) => {
              e.preventDefault();
              createNewDoForm();
            }}
          >
            Create DO Form
          </button>
        </div>
      )}
    </div>
  );
};
