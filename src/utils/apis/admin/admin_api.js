import axios from "axios";


//! admin-login
export const adminLogin = async (URL , data) => {
  try {
    var response = await axios.post(`${URL}/admin/login`, data);
    console.log("response",response)
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//! user by category
export const adminUsersByCategory = async (URL , jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(`${URL}/admin/users/all/category`, config);
    console.log("response.....",response.data)
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//! create new user
export const adminCreateNewStaff = async (URL , jwt, data) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.post(`${URL}/admin/create`, data, config);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//! admin-reset-password-request
export const adminGetAllForgotPasswordRequest = async (URL , jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(`${URL}/admin/reset/requests`, config);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error.message];
  }
};

//! admin reset password
export const adminResetNewPassword = async (URL , jwt, email, newPassword, type) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.put(
      `${URL}/admin/reset/password`,
      { email: email, password: newPassword, type: type },
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error.message];
  }
};

//! get all showroom
export const adminGetAllShowrooms = async (URL , jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(`${URL}/admin/showroom/all`, config);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error.message];
  }
};

//! add new showroom
export const adminAddNewShowroom = async (URL , 
  jwt,
  showRoomName,
  showRoomLocation,
  showRoomOwnerName
) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.post(
      `${URL}/admin/showroom/create`,
      {
        showroom_name: showRoomName,
        showroom_location: showRoomLocation,
        showroom_owner: showRoomOwnerName,
      },
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error.message);
    return [false, error.message];
  }
};

//! get all subadmin
export const adminGetAllSubAdmin = async (URL , jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/admin/get/subadmin`,
       config
    );
    console.log("response..",response)
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error.message);
    return [false, error.message];
  }
};

export const getAttendanceAccordingToDate = async (URL , jwt, date) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/admin/attendance/accordingto/date/${date}`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error.message);
    return [false, error.message];
  }
};
export const getAttendanceAccordingToMonth = async (URL , jwt, date) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/admin/attendance/accordingto/month/${date}`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error.message);
    return [false, error.message];
  }
};

export const downloadDailyAttendance = async (URL , jwt, date) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/attendance/excel/accordingto/date/${date}`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error.message);
    return [false, error.message];
  }
};
export const downloadMonthlyAttendance = async (URL , jwt, date) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/admin/attendance/accordingto/month/${date}`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error.message);
    return [false, error.message];
  }
};

export const getAllSchemes = async (URL , jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(`${URL}/common/all/schemes`, config);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error.message);
    return [false, error.message];
  }
};

export const addNewScheme = async (URL , jwt, schemeName, schemePercentage) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.post(
      `${URL}/admin/addnew/scheme`,
      {
        schemename: schemeName,
        schemepercentage: schemePercentage,
      },
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error.message);
    return [false, error.message];
  }
};


export const adminMarkAttendance = async (URL , 
  jwt,attendance
) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.post(
      `${URL}/admin/mark/attendance`,
      {"employees": attendance},
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error.message);
    return [false, error.message];
  }
};
