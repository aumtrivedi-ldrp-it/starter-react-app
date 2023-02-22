import { useEffect, useState } from "react";
import CircularIndeterminate from "../../Component/Common/Circular";
import { toast } from "react-toastify";
import "../../CSS/Admin/admin_attendance.css";
import {
  getAttendanceAccordingToDate,
  adminUsersByCategory,
  adminMarkAttendance,
} from "../../utils/apis/admin/admin_api";
import useStore from "../../utils/store";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}
function convertDate(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

const AdminAttendance = () => {
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(true);
  const [isAttendanceMarked, setIsAttendanceMarked] = useState(false);
  const [attendance, setAttendace] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [attendanceList, setAttendanceList] = useState([]);

  const getData = async () => {
    const response = await getAttendanceAccordingToDate(
      url,
      jwt,
      convertDate(Date())
      
    );
    if (
      response[0] &&
      response[1].employees !== undefined &&
      response[1].employees.length > 0
    ) {
      setIsAttendanceMarked(true);
      setAttendace(response[1].employees);
      setIsLoading(false);
    } else {
      let userResponse = await adminUsersByCategory(url , jwt);

      userResponse = userResponse[1];
     
      let users;
      if (
        userResponse.dealers !== undefined &&
        userResponse.dealers.length > 0
      ) {
        users = userResponse.dealers;
      }
      if (
        userResponse.office_staffs !== undefined &&
        userResponse.office_staffs.length > 0
      ) {
        users = [...users, ...userResponse.office_staffs];
      }

      if (
        userResponse.recovery_staffs !== undefined &&
        userResponse.recovery_staffs.length > 0
      ) {
        users = [...users, ...userResponse.recovery_staffs];
      }
        
      users && setAttendanceList(Array(users.length).fill(0));

      setEmployees(users);
      setIsAttendanceMarked(false);
      setIsLoading(false);
    }
  };

  const saveAttendance = async () => {
    setIsLoading(true);

    const newAttendance = [];

    for (let index = 0; index < employees.length; index++) {
      const user = {
        userId: employees._id,
        userType: employees.type,
        attendance: attendanceList[index],
        userEmail: employees.email,
        userPhoto: employees.image,
        userName: employees.name,
      };
      attendance.push(user);
    }

    const response = await adminMarkAttendance(url , jwt, newAttendance);
    if (response[0]) {
      toast(`Attendance Marked`, { type: "success" });
      getData();
    } else {
      toast(`${response[1]}`, { type: "error" });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="admin_attendance__container">
      <h1>Attendance</h1>
      {isLoading ? (
        <div>
          <CircularIndeterminate />
        </div>
      ) : (
        <div>
          {isAttendanceMarked ? ( 
            <div className="admin_view__attendance_wrapper">
            {
            attendance.map((employee, index) => {
              return (
                
                  <div
                    key={index}
                    className="admin_view__attendance_container"
                  >
                    <img
                      src={employee.userPhoto}
                      alt="userimage"
                      height={100}
                      width={100}
                    />
                    <h4>{employee.userName}</h4>
                    <h4>Attendance: {employee.attendance}</h4>
                  </div>
              );
            }) }
            </div>
          ) : (
            <div className="admin_mark__attendance_wrapper">
              <div className="admin_mark__attendance_container">
                {employees.map((employee, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="admin_mark_attendance_slider_container"
                      >
                        <img
                          src={employee.image}
                          alt="userimage"
                          height={100}
                          width={100}
                        />
                        <br />
                        <div>{employee.name}</div>
                        <br />

                        <Box sx={{ width: 300 }}>
                          <Slider
                            aria-label="Small steps"
                            defaultValue={0.3}
                            getAriaValueText={valuetext}
                            step={0.34}
                            marks
                            min={0.0}
                            max={1.0}
                            valueLabelDisplay="auto"
                            onChange={(e) => {
                              const newList = attendanceList;
                              newList[index] = e.target.value;
                              setAttendace(newList);
                            }}
                          />
                        </Box>
                      </div>
                    </>
                  );
                })}
              </div>
              <br />
              <button onClick={saveAttendance} className="square_blue__button">
                Save Attendance
              </button>

              <br />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminAttendance;
