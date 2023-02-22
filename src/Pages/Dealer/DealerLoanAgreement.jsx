import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CircularIndeterminate from "../../Component/Common/Circular";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../CSS/Dealer/doForm.css";
import { getAllSchemes } from "../../utils/apis/common/common_api";
import { createLoanAgreement } from "../../utils/apis/dealer/dealer_api";
import useStore from "../../utils/store.js";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import { AddCircleSharp } from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const DealerLoanAgreement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mfNo, setMfNo] = useState("");
  const [partyName, setPartyName] = useState("");
  const [showroomAccountNo, setShowroomAccountNo] = useState("");
  const [keyNo, setKeyNo] = useState("");
  const [branchName, setBranchName] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [vehicleCompanyName, setVehicleCompanyName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [engineNumber, setEngineNumber] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleValue, setVehicleValue] = useState("");
  const [chassisNo, setChassisNo] = useState("");
  const [vehiclePeriodOfStay, setVehiclePeriodOfStay] = useState(null);
  const [guranteerName, setGuranteerName] = useState("");
  const [guranteerFatherName, setGuranteerFatherName] = useState("");
  const [guranteerResidenceMobNo, setGuranteerResidenceMobNo] = useState(null);
  const [guranteerOfficeMobNo, setGuranteeerOfficeMobNo] = useState(null);
  const [guranteerLandmark, setGuranteerLandmark] = useState("");
  const [guranteerWardNo, setGuranteerWardNo] = useState("");
  const [guranteerVillage, setGuranteerVillage] = useState("");
  const [guranteerPostalCode, setGuranteerPostalCode] = useState("");
  const [guranteerDivision, setGuranteerDivision] = useState("");
  const [guranteerDistrict, setGuranteerDistrict] = useState("");
  const [guranteerCity, setGuranteerCity] = useState("");
  const [guranteerState, setGuranteerState] = useState("");
  const [schemes, setSchemes] = useState([]);
  const [drop, setDrop] = useState("");
  const [vehicleAmount, setVehicleAmount] = useState(null);
  const [loanAmount, setLoanAmount] = useState(null);
  const [loanAmountInWords, setLoanAmountInWords] = useState("");
  const [interest, setInterest] = useState(null);
  const [documentCharges, setDocumentCharges] = useState(null);
  const [tenureInMonths, setTenureInMonths] = useState(null);
  const [bankAccountNo, setBankAccountNo] = useState(null);
  const [bankName, setBankName] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [bankAccountType, setBankAccountType] = useState("");
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), chequeNumber: "", chequeDate: null },
  ]);
  const [lenderName, setLenderName] = useState("");
  const [coBorrowerName, setCoBorrowerName] = useState("");
  const [salesExecutive, setSalesExecutive] = useState("");
  const [dealership, setDealership] = useState("");
  const [guranteer2Name, setGuranteer2Name] = useState("");
  const [guranteer2ResidenceMobNo, setGuranteer2ResidenceMobNo] =
    useState(null);
  const [guranteer2OfficeMobNo, setGuranteeer2OfficeMobNo] = useState(null);
  const [guranteer2Landmark, setGuranteer2Landmark] = useState("");
  const [guranteer2WardNo, setGuranteer2WardNo] = useState("");
  const [guranteer2Village, setGuranteer2Village] = useState("");
  const [guranteer2PostalCode, setGuranteer2PostalCode] = useState("");
  const [guranteer2Division, setGuranteer2Division] = useState("");
  const [guranteer2District, setGuranteer2District] = useState("");
  const [guranteer2City, setGuranteer2City] = useState("");
  const [guranteer2State, setGuranteer2State] = useState("");
  const [reference1Name, setReference1Name] = useState("");
  const [reference1ResidenceMobNo, setReference1ResidenceMobNo] =
    useState(null);
  const [reference1OfficeMobNo, setReference1OfficeMobNo] = useState(null);
  const [reference1Landmark, setReference1Landmark] = useState("");
  const [reference1WardNo, setReference1WardNo] = useState("");
  const [reference1Village, setReference1Village] = useState("");
  const [reference1PostalCode, setReference1PostalCode] = useState("");
  const [reference1Division, setReference1Division] = useState("");
  const [reference1District, setReference1District] = useState("");
  const [reference1City, setReference1City] = useState("");
  const [reference1State, setReference1State] = useState("");
  const [reference2Name, setReference2Name] = useState("");
  const [reference2ResidenceMobNo, setReference2ResidenceMobNo] =
    useState(null);
  const [reference2OfficeMobNo, setReference2OfficeMobNo] = useState(null);
  const [reference2Landmark, setReference2Landmark] = useState("");
  const [reference2WardNo, setReference2WardNo] = useState("");
  const [reference2Village, setReference2Village] = useState("");
  const [reference2PostalCode, setReference2PostalCode] = useState("");
  const [reference2Division, setReference2Division] = useState("");
  const [reference2District, setReference2District] = useState("");
  const [reference2City, setReference2City] = useState("");
  const [reference2State, setReference2State] = useState("");
  const [witness1Name, setWitness1Name] = useState("");
  const [witness1MobNo, setWitness1MobNo] = useState(null);
  const [witness1Landmark, setWitness1Landmark] = useState("");
  const [witness1WardNo, setWitness1WardNo] = useState("");
  const [witness1Village, setWitness1Village] = useState("");
  const [witness1PostalCode, setWitness1PostalCode] = useState("");
  const [witness1Division, setWitness1Division] = useState("");
  const [witness1District, setWitness1District] = useState("");
  const [witness1City, setWitness1City] = useState("");
  const [witness1State, setWitness1State] = useState("");
  const [witness1Occupation, setWitness1Occupation] = useState("");
  const [witness2Name, setWitness2Name] = useState("");
  const [witness2MobNo, setWitness2MobNo] = useState(null);
  const [witness2Landmark, setWitness2Landmark] = useState("");
  const [witness2WardNo, setWitness2WardNo] = useState("");
  const [witness2Village, setWitness2Village] = useState("");
  const [witness2PostalCode, setWitness2PostalCode] = useState("");
  const [witness2Division, setWitness2Division] = useState("");
  const [witness2District, setWitness2District] = useState("");
  const [witness2City, setWitness2City] = useState("");
  const [witness2State, setWitness2State] = useState("");
  const [witness2Occupation, setWitness2Occupation] = useState("");
  const [jurisdictionName, setJurisdictionName] = useState("");
  const [language, setLanguage] = useState("");
  const [courtLocation, setCourtLocation] = useState("");
  const [motorVehicleDepartment, setMotorVehicleDepartment] = useState("");
  const [customerImage, setCustomerImage] = useState(null);
  const [isCustomerImagePicked, setIsCustomerImagePicked] = useState(false);
  const [customerSignature, setCustomerSignature] = useState(null);
  const [isCustomerSignaturePicked, setIsCustomerSignaturePicked] =
    useState(false);
  const [guranteerImage, setGuranteerImage] = useState(null);
  const [isGuranteerImagePicked, setIsGuranteerImagePicked] = useState(false);
  const [guranteerSignature, setGuranteerSignature] = useState(null);
  const [isGuranteerSignaturePicked, setIsGuranteerSignaturePicked] =
    useState(false);
  const [lenderSignature, setLenderSignature] = useState(null);
  const [isLenderSignaturePicked, setIsLenderSignaturePicked] = useState(false);
  const [coBorrowerSignature, setCoBorrowerSignature] = useState(null);
  const [isCoBorrowerSignaturePicked, setIsCoBorrowerSignaturePicked] =
    useState(false);
  const [coBorrowerSignatureWithSeal, setCoBorrowerSignatureWithSeal] =
    useState(null);
  const [
    isCoBorrowerSignatureWithSealPicked,
    setIsCoBorrowerSignaturewithSealPicked,
  ] = useState(false);
  const [guranteer2Signature, setGuranteer2Siganture] = useState(null);
  const [isGuranteer2SignaturePicked, setIsGuranteer2SignaturePicked] =
    useState(false);
  const [reference1Signature, setReference1Signature] = useState(null);
  const [isReference1SignaturePicked, setIsReference1SignaturePicked] =
    useState(false);
  const [reference2Signature, setReference2Signature] = useState(null);
  const [isReference2SignaturePicked, setIsReference2SignaturePicked] =
    useState(false);
  const [witness1Signature, setWitness1Signature] = useState(null);
  const [isWitness1SignaturePicked, setIsWitness1SignaturePicked] =
    useState(false);
  const [witness2Signature, setWitness2Signature] = useState(null);
  const [isWitness2SignaturePicked, setIsWitness2SignaturePicked] =
    useState(false);
  const [branchHeadSignatureWithSeal, setBranchHeadSignatureWithSeal] =
    useState(null);
  const [
    isBranchHeadSignatureWithSealPicked,
    setIsBranchHeadSignatureWithSealPicked,
  ] = useState(false);

  function convertDate(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const customerImageFunction = (e) => {
    setCustomerImage(e.target.files[0]);
    setIsCustomerImagePicked(true);
  };

  const customerSignatureFunction = (e) => {
    setCustomerSignature(e.target.files[0]);
    setIsCustomerSignaturePicked(true);
  };

  const guranteerImageFunction = (e) => {
    setGuranteerImage(e.target.files[0]);
    setIsGuranteerImagePicked(true);
  };

  const guranteerSignatureFunction = (e) => {
    setGuranteerSignature(e.target.files[0]);
    setIsGuranteerSignaturePicked(true);
  };

  const lenderSignatureFunction = (e) => {
    setLenderSignature(e.target.files[0]);
    setIsLenderSignaturePicked(true);
  };

  const coBorrowerSignatureFunction = (e) => {
    setCoBorrowerSignature(e.target.files[0]);
    setIsCoBorrowerSignaturePicked(true);
  };

  const coBorrowerSignatureWithSealFunction = (e) => {
    setCoBorrowerSignatureWithSeal(e.target.files[0]);
    setIsCoBorrowerSignaturewithSealPicked(true);
  };

  const guranteer2SignatureFunction = (e) => {
    setGuranteer2Siganture(e.target.files[0]);
    setIsGuranteer2SignaturePicked(true);
  };

  const reference1SignatureFunction = (e) => {
    setReference1Signature(e.target.files[0]);
    setIsReference1SignaturePicked(true);
  };

  const reference2SignatureFunction = (e) => {
    setReference2Signature(e.target.files[0]);
    setIsReference2SignaturePicked(true);
  };

  const witness1SignatureFunction = (e) => {
    setWitness1Signature(e.target.files[0]);
    setIsWitness1SignaturePicked(true);
  };

  const witness2SignatureFunction = (e) => {
    setWitness2Signature(e.target.files[0]);
    setIsWitness2SignaturePicked(true);
  };

  const branchHeadSignatureWithSealFunction = (e) => {
    setBranchHeadSignatureWithSeal(e.target.files[0]);
    setIsBranchHeadSignatureWithSealPicked(true);
  };

  const location = useLocation();
  const handleSubmitForm = async () => {
    setIsLoading(true);
    let formData = new FormData();
    // formData.append("cheques");
    formData.append("mf_no", mfNo);
    formData.append("showroom_acc_no", showroomAccountNo);
    formData.append("key_no", keyNo);
    formData.append("branch_name", branchName);
    formData.append("party_name", partyName);
    formData.append("vehicle_company_name", vehicleCompanyName);
    formData.append("model_no", location.state.modelNo);
    formData.append("engine_no", engineNumber);
    formData.append("vehicle_color", vehicleColor);
    formData.append("vehicle_value", vehicleValue);
    formData.append("chassis_no", chassisNo);
    formData.append("vehicle_period_of_stay", vehiclePeriodOfStay);
    formData.append("customer_name", location.state.customerName);
    formData.append(
      "father_or_husband_name",
      location.state.customerFatherName
    );
    formData.append("mobile_no", location.state.customerMobNo);
    formData.append("landmark", location.state.customerLandmark);
    formData.append("ward_no", location.state.customerWardNo);
    formData.append("village_name", location.state.customerVillageName);
    formData.append("postal_code", location.state.customerPostalCode);
    formData.append("division", location.state.customerDivision);
    formData.append("district_name", location.state.customerDistrict);
    formData.append("vehicle_number", vehicleNumber);
    formData.append("city", customerCity);
    formData.append("state", customerState);
    formData.append("occupation", location.state.customerOccupation);
    formData.append("monthly_income", location.state.monthlyIncome);
    formData.append("farm_land_area", location.state.farmLandArea);
    formData.append("guarnteer_name", guranteerName);
    formData.append("guarnteer_father_or_husband_name", guranteerFatherName);
    formData.append("guarnteer_residence_mobile", guranteerResidenceMobNo);
    formData.append("guarnteer_office_mobile", guranteerOfficeMobNo);
    formData.append("guarnteer_landmark", guranteerLandmark);
    formData.append("guarnteer_ward_no", guranteerWardNo);
    formData.append("guarnteer_village", guranteerVillage);
    formData.append("guarnteer_postal_code", guranteerPostalCode);
    formData.append("document_charges", documentCharges);
    formData.append("vehicle_amount", vehicleAmount);
    formData.append("guarnteer_division", guranteerDivision);
    formData.append("guarnteer_district_name", guranteerDistrict);
    formData.append("guarnteer_city", guranteerCity);
    formData.append("guarnteer_state", guranteerState);
    formData.append("loan_amount", loanAmount);
    formData.append("loan_amount_in_words", loanAmountInWords);
    formData.append("interest", interest);
    formData.append("tenure_in_months", tenureInMonths);
    formData.append("emi", emi);
    formData.append("final_amount", finalAmount);
    formData.append("interest_amount", finalInterest);
    formData.append("bank_acc_no", bankAccountNo);
    formData.append("bank_name", bankName);
    formData.append("bank_branch", bankBranch);
    formData.append("bank_address", bankAddress);
    formData.append("bank_acc_type", bankAccountType);
    formData.append("lender_name", lenderName);
    formData.append("guarnator_2_name", guranteer2Name);
    formData.append("co_borrower_name", coBorrowerName);
    formData.append("sales_executive", salesExecutive);
    formData.append("dealership", dealership);
    formData.append("guarnteer_2_residence_mobile", guranteer2ResidenceMobNo);
    formData.append("guarnteer_2_office_mobile", guranteer2OfficeMobNo);
    formData.append("guarnteer_2_landmark", guranteer2Landmark);
    formData.append("guarnteer_2_ward_no", guranteer2WardNo);
    formData.append("guarnteer_2_village", guranteer2Village);
    formData.append("guarnteer_2_postal_code", guranteer2PostalCode);
    formData.append("guarnteer_2_division", guranteer2Division);
    formData.append("guarnteer_2_district_name", guranteer2District);
    formData.append("guarnteer_2_city", guranteer2City);
    formData.append("guarnteer_2_state", guranteer2State);
    formData.append("reference_1_name", reference1Name);
    formData.append("reference_1_residence_mobile", reference1ResidenceMobNo);
    formData.append("reference_1_office_mobile", reference1OfficeMobNo);
    formData.append("reference_1_landmark", reference1Landmark);
    formData.append("reference_1_ward_no", reference1WardNo);
    formData.append("reference_1_village", reference1Village);
    formData.append("reference_1_postal_code", reference1PostalCode);
    formData.append("reference_1_division", reference1Division);
    formData.append("reference_1_district_name", reference1District);
    formData.append("reference_1_city", reference1City);
    formData.append("reference_1_state", reference1State);
    formData.append("reference_2_name", reference2Name);
    formData.append("reference_2_residence_mobile", reference2ResidenceMobNo);
    formData.append("reference_2_office_mobile", reference2OfficeMobNo);
    formData.append("reference_2_landmark", reference2Landmark);
    formData.append("reference_2_ward_no", reference2WardNo);
    formData.append("reference_2_village", reference2Village);
    formData.append("reference_2_postal_code", reference2PostalCode);
    formData.append("reference_2_division", reference2Division);
    formData.append("reference_2_district_name", reference2District);
    formData.append("reference_2_city", reference2City);
    formData.append("reference_2_state", reference2State);
    formData.append("witness_1_name", witness1Name);
    formData.append("witness_1_mobile", witness1MobNo);
    formData.append("witness_1_landmark", witness1Landmark);
    formData.append("witness_1_ward_no", witness1WardNo);
    formData.append("witness_1_village", witness1Village);
    formData.append("witness_1_postal_code", witness1PostalCode);
    formData.append("witness_1_division", witness1Division);
    formData.append("witness_1_district_name", witness1District);
    formData.append("witness_1_occupation", witness1Occupation);
    formData.append("witness_1_city", witness1City);
    formData.append("witness_1_state", witness1State);
    formData.append("witness_2_name", witness2Name);
    formData.append("witness_2_mobile", witness2MobNo);
    formData.append("witness_2_landmark", witness2Landmark);
    formData.append("witness_2_ward_no", witness2WardNo);
    formData.append("witness_2_village", witness2Village);
    formData.append("witness_2_postal_code", witness2PostalCode);
    formData.append("witness_2_division", witness2Division);
    formData.append("witness_2_district_name", witness2District);
    formData.append("witness_2_city", witness2City);
    formData.append("witness_2_state", witness2State);
    formData.append("witness_2_occupation", witness2Occupation);
    formData.append("jurisdiction", jurisdictionName);
    formData.append("language", language);
    formData.append("court", courtLocation);
    formData.append("motor_vehicle_department", motorVehicleDepartment);
    formData.append("doformId", location.state.id);
    formData.append("customer_image", customerImage);
    formData.append("customer_signature", customerSignature);
    formData.append("guarnteer_image", guranteerImage);
    formData.append("guarnteer_signature", guranteerSignature);
    formData.append("lender_signature", lenderSignature);
    formData.append("co_borrower_signature", coBorrowerSignature);
    formData.append(
      "co_borrower_signature_with_seal",
      coBorrowerSignatureWithSeal
    );
    formData.append("guarnator_2_signature", guranteer2Signature);
    formData.append("reference_1_signature", reference1Signature);
    formData.append("reference_2_signature", reference2Signature);
    formData.append("witness_1_signature", witness1Signature);
    formData.append("witness_2_signature", witness2Signature);
    formData.append(
      "branch_head_signature_with_seal",
      branchHeadSignatureWithSeal
    );

    var response = await createLoanAgreement(url , jwt, formData);
    if (response[0]) {
      toast(`${response[1]}`, { type: "success" });
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), chequeNumber: "", chequeDate: null },
    ]);
  };

  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  var monthlyInterest;
  var emi;
  var finalAmount;
  var finalInterest;
  const computeEMI = () => {
    monthlyInterest = interest / (12 * 100);
    emi =
      (loanAmount *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, tenureInMonths)) /
      (Math.pow(1 + monthlyInterest, tenureInMonths) - 1);
    finalAmount = emi * tenureInMonths;
    finalInterest = finalAmount - loanAmount;
    if (drop > 0.0) {
      finalInterest = (finalInterest * drop) / 100;
    }
  };

  const allSchemes = async () => {
    setIsLoading(true);
    var response = await getAllSchemes(url , jwt);
    if (response[0]) {
      console.log(response[1]);
      setSchemes(response[1]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  const selectHandleChange = (e) => {
    e.preventDefault();
    setDrop(e.target.value);
  };

  useEffect(() => {
    allSchemes();
  }, []);

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
                    placeholder="MF No"
                    value={mfNo}
                    onChange={(e) => setMfNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Party Name"
                    value={partyName}
                    onChange={(e) => setPartyName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Showroom Account No."
                    value={showroomAccountNo}
                    onChange={(e) => setShowroomAccountNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Key No"
                    value={keyNo}
                    onChange={(e) => setKeyNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Branch Name"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Company Name"
                    value={vehicleCompanyName}
                    onChange={(e) => setVehicleCompanyName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Number"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Engine Number"
                    value={engineNumber}
                    onChange={(e) => setEngineNumber(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Color"
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Value"
                    value={vehicleValue}
                    onChange={(e) => setVehicleValue(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Chassis No"
                    value={chassisNo}
                    onChange={(e) => setChassisNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Period of Stay"
                    value={vehiclePeriodOfStay}
                    onChange={(e) => setVehiclePeriodOfStay(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Customer City"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Customer State"
                    value={customerState}
                    onChange={(e) => setCustomerState(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guarnteer Name"
                    value={guranteerName}
                    onChange={(e) => setGuranteerName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guarnteer Father/Husband Name"
                    value={guranteerFatherName}
                    onChange={(e) => setGuranteerFatherName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer Residence Phone No."
                    value={guranteerResidenceMobNo}
                    onChange={(e) => setGuranteerResidenceMobNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer Office Mob No."
                    value={guranteerOfficeMobNo}
                    onChange={(e) => setGuranteeerOfficeMobNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer Landmark"
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer Ward No"
                    value={guranteerWardNo}
                    onChange={(e) => setGuranteerWardNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer Landmark"
                    value={guranteerLandmark}
                    onChange={(e) => setGuranteerLandmark(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer Village"
                    value={guranteerVillage}
                    onChange={(e) => setGuranteerVillage(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer Postal Code"
                    value={guranteerPostalCode}
                    onChange={(e) => setGuranteerPostalCode(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer Division"
                    value={guranteerDivision}
                    onChange={(e) => setGuranteerDivision(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer District"
                    value={guranteerDistrict}
                    onChange={(e) => setGuranteerDistrict(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer City"
                    value={guranteerCity}
                    onChange={(e) => setGuranteerCity(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer State"
                    value={guranteerState}
                    onChange={(e) => setGuranteerState(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Vehicle Amount"
                    type="number"
                    value={vehicleAmount}
                    onChange={(e) => setVehicleAmount(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Loan Amount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Loan Amount in Words"
                    value={loanAmountInWords}
                    onChange={(e) => setLoanAmountInWords(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Interest"
                    type="number"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Document Charges"
                    type="number"
                    value={documentCharges}
                    onChange={(e) => setDocumentCharges(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Document Charges"
                    type="number"
                    value={tenureInMonths}
                    onChange={(e) => setTenureInMonths(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" fullWidth>
                      Schemes
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      placeholder="Schemes"
                      defaultValue={""}
                      value={
                        schemes.filter((cat) => cat._id === drop)
                          .schemePercentage
                      }
                      fullWidth
                      onChange={selectHandleChange}
                    >
                      {schemes.map((categoryitem) => (
                        <MenuItem
                          value={categoryitem.schemePercentage}
                          key={categoryitem._id}
                        >
                          {categoryitem.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              {inputFields.map((inputField) => (
                <Grid item xs={4}>
                  <div key={inputField.id} className="do_text_field_dynamic">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        // name="chequeDate"
                        // label="chequeDate"
                        value={inputField.chequeDate}
                        onChange={(event) => {
                          handleChangeInput(inputField.id, event);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        color="textfield"
                      />
                    </LocalizationProvider>
                    {/* <TextField
                      name="chequeDate"
                      className="do_text_field"
                      placeholder="Cheque Date"
                      type="name"
                      value={inputField.chequeDate}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    /> */}
                    <TextField
                      name="chequeNumber"
                      className="do_text_field"
                      // label="chequeNumber"
                      placeholder="Cheque Number"
                      value={inputField.chequeNumber}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    />
                    <AddCircleSharp onClick={handleAddFields} />
                  </div>
                </Grid>
              ))}
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Bank Account Number"
                    type="number"
                    value={bankAccountNo}
                    onChange={(e) => setBankAccountNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Bank Name"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Bank Branch"
                    value={bankBranch}
                    onChange={(e) => setBankBranch(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Bank Address"
                    value={bankAddress}
                    onChange={(e) => setBankAddress(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Bank Account Type"
                    value={bankAccountType}
                    onChange={(e) => setBankAccountType(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guarnteer 2 Name"
                    value={guranteer2Name}
                    onChange={(e) => setGuranteer2Name(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 Residence Phone No."
                    value={guranteer2ResidenceMobNo}
                    onChange={(e) =>
                      setGuranteer2ResidenceMobNo(e.target.value)
                    }
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 Office Mob No."
                    value={guranteer2OfficeMobNo}
                    onChange={(e) => setGuranteeer2OfficeMobNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 Landmark"
                    value={guranteer2Landmark}
                    onChange={(e) => setGuranteer2Landmark(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 Ward No"
                    value={guranteer2WardNo}
                    onChange={(e) => setGuranteer2WardNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 Village"
                    value={guranteer2Village}
                    onChange={(e) => setGuranteer2Village(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 Postal Code"
                    value={guranteer2PostalCode}
                    onChange={(e) => setGuranteer2PostalCode(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 Division"
                    value={guranteer2Division}
                    onChange={(e) => setGuranteer2Division(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 District"
                    value={guranteer2District}
                    onChange={(e) => setGuranteer2District(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 City"
                    value={guranteer2City}
                    onChange={(e) => setGuranteer2City(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Guranteer 2 State"
                    value={guranteer2State}
                    onChange={(e) => setGuranteer2State(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 1 Name"
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
                    placeholder="Reference 1 Residence Phone No."
                    value={reference1ResidenceMobNo}
                    onChange={(e) =>
                      setReference1ResidenceMobNo(e.target.value)
                    }
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 1 Office Mob No."
                    value={reference1OfficeMobNo}
                    onChange={(e) => setReference1OfficeMobNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 1 Landmark"
                    value={reference1Landmark}
                    onChange={(e) => setReference1Landmark(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 1 Ward No"
                    value={reference1WardNo}
                    onChange={(e) => setReference1WardNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 1 Village"
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
                    placeholder="Reference 1 Postal Code"
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
                    placeholder="Reference 1 Division"
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
                    placeholder="Reference 1 District"
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
                    placeholder="Reference 1 City"
                    value={reference1City}
                    onChange={(e) => setReference1City(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 1 State"
                    value={reference1State}
                    onChange={(e) => setReference1State(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 2 Name"
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
                    placeholder="Reference 2 Residence Phone No."
                    value={reference2ResidenceMobNo}
                    onChange={(e) =>
                      setReference2ResidenceMobNo(e.target.value)
                    }
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 2 Office Mob No."
                    value={reference2OfficeMobNo}
                    onChange={(e) => setReference2OfficeMobNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 2 Landmark"
                    value={reference2Landmark}
                    onChange={(e) => setReference2Landmark(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 2 Ward No"
                    value={reference2WardNo}
                    onChange={(e) => setReference2WardNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 2 Village"
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
                    placeholder="Reference 2 Postal Code"
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
                    placeholder="Reference 2 Division"
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
                    placeholder="Reference 2 District"
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
                    placeholder="Reference 2 City"
                    value={reference2City}
                    onChange={(e) => setReference2City(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Reference 2 State"
                    value={reference2State}
                    onChange={(e) => setReference2State(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Lender Name"
                    value={lenderName}
                    onChange={(e) => setLenderName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Co-Borrower Name"
                    value={coBorrowerName}
                    onChange={(e) => setCoBorrowerName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Sales Executive"
                    value={salesExecutive}
                    onChange={(e) => setSalesExecutive(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Dealership"
                    value={dealership}
                    onChange={(e) => setDealership(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 Name"
                    value={witness1Name}
                    onChange={(e) => setWitness1Name(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 Mob No."
                    value={witness1MobNo}
                    onChange={(e) => setWitness1MobNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 Landmark"
                    value={witness1Landmark}
                    onChange={(e) => setWitness1Landmark(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 Ward No"
                    value={witness1WardNo}
                    onChange={(e) => setWitness1WardNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 Village"
                    value={witness1Village}
                    onChange={(e) => setWitness1Village(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 Postal Code"
                    value={witness1PostalCode}
                    onChange={(e) => setWitness1PostalCode(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 Division"
                    value={witness1Division}
                    onChange={(e) => setWitness1Division(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 District"
                    value={witness1District}
                    onChange={(e) => setWitness1District(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 City"
                    value={witness1City}
                    onChange={(e) => setWitness1City(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 State"
                    value={witness1State}
                    onChange={(e) => setWitness1State(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 1 Occupation"
                    value={witness1Occupation}
                    onChange={(e) => setWitness1Occupation(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 Name"
                    value={witness2Name}
                    onChange={(e) => setWitness2Name(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 Mob No."
                    value={witness2MobNo}
                    onChange={(e) => setWitness2MobNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 Landmark"
                    value={witness2Landmark}
                    onChange={(e) => setWitness2Landmark(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 Ward No"
                    value={witness2WardNo}
                    onChange={(e) => setWitness2WardNo(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 Village"
                    value={witness2Village}
                    onChange={(e) => setWitness2Village(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 Postal Code"
                    value={witness2PostalCode}
                    onChange={(e) => setWitness2PostalCode(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 Division"
                    value={witness2Division}
                    onChange={(e) => setWitness2Division(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 District"
                    value={witness2District}
                    onChange={(e) => setWitness2District(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 City"
                    value={witness2City}
                    onChange={(e) => setWitness2City(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 State"
                    value={witness2State}
                    onChange={(e) => setWitness2State(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Witness 2 Occupation"
                    value={witness2Occupation}
                    onChange={(e) => setWitness2Occupation(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Jurisdiction Name"
                    value={jurisdictionName}
                    onChange={(e) => setJurisdictionName(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Court Location"
                    value={courtLocation}
                    onChange={(e) => setCourtLocation(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="do_text_field">
                  <TextField
                    placeholder="Motor Vehicle Department"
                    value={motorVehicleDepartment}
                    onChange={(e) => setMotorVehicleDepartment(e.target.value)}
                    fullWidth
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                {isCustomerImagePicked === true ? (
                  <img
                    src={URL.createObjectURL(customerImage)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Customer Image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        customerImageFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isCustomerSignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(customerSignature)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Customer Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        customerSignatureFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isGuranteerImagePicked === true ? (
                  <img
                    src={URL.createObjectURL(guranteerImage)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Gurantor Image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        guranteerImageFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isGuranteerSignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(guranteerSignature)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Gurantor Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        guranteerSignatureFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isLenderSignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(lenderSignature)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Lender Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        lenderSignatureFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isCoBorrowerSignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(coBorrowerSignature)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Co Borrower Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        coBorrowerSignatureFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isCoBorrowerSignatureWithSealPicked === true ? (
                  <img
                    src={URL.createObjectURL(coBorrowerSignatureWithSeal)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Co Borrower Signature With Seal"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        coBorrowerSignatureWithSealFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isGuranteer2SignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(guranteer2Signature)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Gurantor 2 Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        guranteer2SignatureFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isReference1SignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(reference1Signature)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Reference 1 Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        reference1SignatureFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isReference2SignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(reference2Signature)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Reference 2 Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        reference2SignatureFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isWitness1SignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(witness1Signature)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Witness 1 Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        witness1SignatureFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isWitness2SignaturePicked === true ? (
                  <img
                    src={URL.createObjectURL(witness2Signature)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Witness 2 Signature"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        witness2SignatureFunction(e);
                      }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={4}>
                {isBranchHeadSignatureWithSealPicked === true ? (
                  <img
                    src={URL.createObjectURL(branchHeadSignatureWithSeal)}
                    alt="dealer_signature"
                    className="do_signature"
                  />
                ) : (
                  <div className="do_text_field">
                    <TextField
                      variant="outlined"
                      placeholder="Branch Head Signature With Seal"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        branchHeadSignatureWithSealFunction(e);
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
              computeEMI();
              handleSubmitForm();
            }}
          >
            Create DO Form
          </button>
        </div>
      )}
    </div>
  );
};
