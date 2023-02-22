import React, { useState } from "react";
import useStore from "../../utils/store";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { adminCreateNewStaff } from "../../utils/apis/admin/admin_api";
import { useNavigate } from "react-router-dom";
import CircularIndeterminate from "../../Component/Common/Circular";
import { ThemeProvider } from "@mui/system";
import { customTheme } from "../../utils/customTheme";

function convertDate(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

const AdminAddMember = () => {
  const navigate = useNavigate();
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(false);
  const [isImageSelected, setImageSelected] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isAadharPicked, setIsAadharPicked] = useState(false);
  const [aadhar, setAadhar] = useState(null);
  const [name, setName] = useState("");
  const [dob, setDob] = useState(null);
  const [joinDob, setJoinDob] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userType, setUserType] = useState("dealer");

  const captureImage = (e) => {
    setProfileImage(e.target.files[0]);
    setImageSelected(true);
  };

  const captureAadhar = (e) => {
    setAadhar(e.target.files[0]);
    setIsAadharPicked(true);
  };

  const saveuser = async () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("type", userType);
    formData.append("dob", convertDate(dob));
    formData.append("join_date", convertDate(joinDob));
    formData.append("image", profileImage);
    formData.append("aadhar", aadhar);

    const response = await adminCreateNewStaff(url , jwt, formData);
    if (response[0]) {
      toast(`New User Added`, { type: "success" });
      navigate(-1);
    } else {
      toast(`${response[1]}`, { type: "error" });
    }
  };

  return (
    <div>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <form>
          {isImageSelected && (
            <img
              src={URL.createObjectURL(profileImage)}
              alt="profileimage"
              className="member_image"
            />
          )}
          <br />
          <TextField
            variant="outlined"
            type="file"
            accept="image/*"
            onChange={(e) => {
              captureImage(e);
            }}
            fullWidth
          />

          <br />
            <ThemeProvider theme={customTheme}>
          <TextField
            label="Name"
            variant="outlined"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            sx={{color:"white"}}
            color="textfield"
          />
          </ThemeProvider>
          <br />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Join Date"
              value={joinDob}
              onChange={(newValue) => {
                setJoinDob(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              color="textfield"
            />
          </LocalizationProvider>
      
          <br />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              value={dob}
              onChange={(newValue) => {
                setDob(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Work As</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <FormControlLabel
                value="dealer"
                control={<Radio />}
                label="Dealer"
              />
              <FormControlLabel
                value="officeStaff"
                control={<Radio />}
                label="Office Staff"
              />
              <FormControlLabel
                value="recovery"
                control={<Radio />}
                label="Recovery"
              />
            </RadioGroup>
          </FormControl>
          <br />
          <TextField
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            required
          />
          <br />
          <TextField
            label="Email"
            variant="outlined"
            placeholder="Enter Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <br />
          <TextField
            label="Password"
            variant="outlined"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <br />
          {isAadharPicked && (
            <img
              src={URL.createObjectURL(aadhar)}
              alt="profileimage"
              className="member_image"
            />
          )}
          <br />
          <TextField
            variant="outlined"
            type="file"
            accept="image/*"
            onChange={(e) => {
              captureAadhar(e);
            }}
            fullWidth
          />
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              saveuser();
            }}
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminAddMember;
