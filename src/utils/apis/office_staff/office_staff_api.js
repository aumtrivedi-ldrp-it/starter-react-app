import axios from "axios";


//req-router.get("/listofpendingemi",userAuth ,listOfPendingEMI);

export const officeStaffLogin = async (URL ,data) => {
  try {
    const response = await axios.post(`${URL}/common/office/login`, data);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

export const officeStaffPendingEMI = async (URL ,jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/officestaff/listofpendingemi`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//req-router.put("/markrecovery", markRecovery );
export const officeStaffMarkVehicleForRecovery = async (URL , data) => {
  try {
    // const config = {
    //   headers: {
    //     authorization: `Bearer ${jwt}`,
    //   },
    // };
    var response = await axios.put(
      `${URL}/officestaff/markrecovery`,
      data,
      
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log(error);
    return [false, error];
  }
};

//req-router.put("/reassign/recovery",reAssignRecoveryToAnotherStaff);
export const officeStaffRecoveryReassign = async (URL ,data, jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    var response = await axios.put(
      `${URL}/officestaff/reassign/recovery`,
      data,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//req-router.get("/recoverystafflist", getListOfRecoveryStaff);
export const recoveryStaffList = async (URL , jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/officestaff/recoverystafflist`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//req-router.get("/recovery/all" ,  getAllRecovery);
export const officeStaffAll = async (URL ,jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(`${URL}/officestaff/recovery/all`, config);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//req-router.get("/seizedvehicles", getAllSeizedVehicles);
export const officeStaffSize = async (URL ,jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/officestaff/seizedvehicles`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//req-router.put("/unseizedvehicle" , UnseizedVehicle);
export const officeStaffVehicle = async (URL ,data) => {
  try {
    var response = await axios.put(`${URL}/officestaff/unseizedvehicle`, data);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};
