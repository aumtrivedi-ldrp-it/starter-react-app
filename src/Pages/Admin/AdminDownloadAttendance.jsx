import { useState } from "react";
import useStore from "../../utils/store";
import { saveAs } from "file-saver";
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
import {
  getAttendanceAccordingToDate,
  getAttendanceAccordingToMonth,
  downloadDailyAttendance,
  downloadMonthlyAttendance,
} from "../../utils/apis/admin/admin_api";
import CircularIndeterminate from "../../Component/Common/Circular";

function convertDate(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

const AdminDownloadAttendance = () => {
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(null);
  const [type, setType] = useState("daily");
  const [attendance, setAttendance] = useState([]);
  const [monthlyAttendance, setMonthlyAttendance] = useState([]);

  const downloadDaily = async () => {
    toast(`File downloading started`, { type: "info" });
    const response = await downloadDailyAttendance(url, jwt, convertDate(date));
    if (response[0]) {
      saveAs(response[1].url);
      toast(`File Downloaded`, { type: "success" });
    } else {
      toast(`${response[1]}`, { type: "error" });
    }
  };

  const downloadMonthly = async () => {
    toast(`File downloading started`, { type: "info" });
    const response = await downloadMonthlyAttendance(url, jwt, convertDate(date));
    if (response[0]) {
      saveAs(response[1].url);
      toast(`File Downloaded`, { type: "success" });
    } else {
      toast(`${response[1]}`, { type: "error" });
    }
  };

  const getAttendance = async () => {
    setIsLoading(true);
    setAttendance([]);
    setMonthlyAttendance([]);
    let response;
    if (type === "daily") {
      response = await getAttendanceAccordingToDate(url , jwt, convertDate(date));
      if (response[0]) {
        if (
          response[1].employees !== undefined &&
          response[1].employees.length > 0
        ) {
          setAttendance(response[1].employees);
        } else {
          toast(`No Attendance Found`, { type: "info" });
        }
      } else {
        toast(`${response[1]}`, { type: "error" });
      }
    } else {
      response = await getAttendanceAccordingToMonth(url, jwt, convertDate(date));
      if (response[0]) {
        if (response[1].length > 0) {
          setAttendance(response[1]);
        } else {
          toast(`No Attendance Found`, { type: "info" });
        }
      } else {
        toast(`${response[1]}`, { type: "error" });
      }
    }

    setIsLoading(false);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Join Date"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="daily" control={<Radio />} label="Daily" />
          <FormControlLabel
            value="monthly"
            control={<Radio />}
            label="Monthly"
          />
        </RadioGroup>
      </FormControl>
      <button className="square_blue__button" onClick={() => getAttendance()}>
        Get
      </button>

      <div>
        {isLoading ? (
          <CircularIndeterminate />
        ) : (
          <div>
            {attendance.map((member, index) => (
              <div key={index}>{member.userName}</div>
            ))}
            {attendance.length > 0 && (
              <button onClick={() => downloadDaily()}>Download</button>
            )}
            {monthlyAttendance.map((member, index) => (
              <div key={index}>month</div>
            ))}
            {monthlyAttendance.length > 0 && (
              <button onClick={() => downloadMonthly()}>Download</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDownloadAttendance;
